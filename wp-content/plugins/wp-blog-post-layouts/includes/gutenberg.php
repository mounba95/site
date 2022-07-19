<?php
/**
 * Handles the internationalization, admin-specific hooks, and
 * public-facing site hooks.
 * 
 * @since 1.0.0
 * @package WP Blog Post Layouts
 * 
 */
if ( !class_exists( 'Wpblog_Post_Layouts_Blocks' ) ):
    class Wpblog_Post_Layouts_Blocks {
        /**
         * Instance
         *
         * @access private
         * @static
         *
         * @var Wpblog_Post_Layouts_Blocks The single instance of the class.
         */
        private static $_instance = null;

        /**
         * Ensures only one instance of the class is loaded or can be loaded.
         *
         * @access public
         * @static
         *
         * @return Wpblog_Post_Layouts_Blocks An instance of the class.
         */
        public static function instance() {
            if ( is_null( self::$_instance ) ) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        /**
         * Load the dependencies, define the locale, and set the hooks for the admin area and
         * the public-facing side of the block.
         */
        public function __construct() {
            add_action( 'plugins_loaded', array( $this, 'init' ), 99 );
        }

        /**
         * Load the dependencies, define the locale, and set the hooks for the admin area and
         * the public-facing side of the block.
         */
        public function init() {
            if ( !WPBLOG_POST_LAYOUTS_GUTENBERG ) {
                return;
            }

            if ( version_compare( $GLOBALS['wp_version'], '5.8-alpha-1', '<' ) ) {
                add_filter( 'block_categories', array( $this, 'register_gutenberg_block_category' ) );
            } else {
                add_filter( 'block_categories_all', array( $this, 'register_gutenberg_block_category' ) );
            }
            
            add_action( 'enqueue_block_editor_assets', array( $this, 'block_editor_enqueue_scripts' ) );
            add_action( 'enqueue_block_assets', array( $this, 'block_enqueue_scripts' ), 10 );
            add_action( 'init', array( $this, 'register_gutenberg_blocks' ), 999 );
            add_action( 'rest_api_init', array( $this, 'blog_post_layout_register_rest_fields' ) );
            add_action( 'rest_api_init', array( $this, 'blog_post_layout_register_categories_ids_rest_field' ) );
            add_action( 'rest_api_init', array( $this, 'blog_post_layout_register_categories_names_rest_field' ) );
            add_action( 'rest_api_init', array( $this, 'blog_post_layout_register_tags_names_rest_field' ) );
            add_action( 'rest_api_init', array( $this, 'blog_post_layout_register_comments_num_rest_field' ) );
            $this->load_dependencies();
            $wpblog_post_layouts_premium_prefix = get_option( 'wpblog_post_layouts_premium_prefix' );
            if ( !$wpblog_post_layouts_premium_prefix ) {
                update_option( 'wpblog_post_layouts_premium_prefix', 'wp' );
            }
        }
        
        /**
         * Load dependencies
         */
        public function load_dependencies() {
            require plugin_dir_path( __FILE__ ) . 'dynamic-css.php';
        }

        /**
         * Enqueue editor scripts 
         */
        public function block_editor_enqueue_scripts() {

            global $pagenow;

            $cv_fonts_url = $this->cv_fonts_url();

            $wpblog_dependencies = array( 'wp-element', 'wp-blocks', 'wp-components', 'wp-i18n' );

            if ( in_array( $pagenow, array( 'post.php', 'post-new.php' ) ) ) {
                array_push( $wpblog_dependencies, 'wp-editor', 'wp-edit-post' );
            } elseif ( $pagenow === 'widgets.php' ) {
                array_push( $wpblog_dependencies, 'wp-edit-widgets' );
            }

            wp_enqueue_style( 'wpblog-post-layouts-editor-fonts', esc_url( $cv_fonts_url ), array(), null );
            wp_enqueue_style( 'fontawesome',
                plugins_url( 'assets/fontawesome/css/all.min.css', __FILE__ ),
                array(),
                WPBLOG_POST_LAYOUTS_VERSION,
                'all'
            );

            wp_enqueue_style( 'wpblog-post-layouts-blocks-editor-style',
                plugins_url( 'assets/css/block-editor.css', __FILE__ ),
                array(),
                WPBLOG_POST_LAYOUTS_VERSION,
                'all'
            );

            wp_enqueue_script( 'wpblog-post-layouts-block-build-script',
                plugins_url( 'build/index.js', __FILE__ ),
                $wpblog_dependencies,
                WPBLOG_POST_LAYOUTS_VERSION,
                true
            );
            wp_set_script_translations( 'wpblog-post-layouts-block-build-script', 'wp-blog-post-layouts' );

            wp_localize_script( 'wpblog-post-layouts-block-build-script', 'BlocksBuildObject', array(
                    'siteUrl'       => get_site_url(),
                    'defaultImage'  => esc_url( WPBLOG_POST_LAYOUTS_IMAGE ),
                    'gridLayoutOne' => plugins_url( '/assets/images/grid-layout-one.png', __FILE__ ),
                    'gridLayoutTwo' => plugins_url( '/assets/images/grid-layout-two.png', __FILE__ ),
                    'gridLayoutThree' => plugins_url( '/assets/images/grid-layout-three.png', __FILE__ ),
                    'listLayoutOne' => plugins_url( '/assets/images/list-layout-one.png', __FILE__ ),
                    'listLayoutTwo' => plugins_url( '/assets/images/list-layout-two.png', __FILE__ ),
                    'listLayoutThree' => plugins_url( '/assets/images/list-layout-three.png', __FILE__ )
                )
            );

        }

        /**
         * Register google fonts for frontend
         */
        public function cv_fonts_url() {
            $fonts_url = '';
            $font_families = array();

            /**
             * Translators: If there are characters in your language that are not supported
             * by Muli font, translate this to 'off'. Do not translate into your own language.
             */
            if ( 'off' !== _x( 'on', 'Roboto font: on or off', 'wp-blog-post-layouts' ) ) {
                $font_families[] = 'Roboto:400';
            }

            /**
             * Translators: If there are characters in your language that are not supported
             * by Rubik font, translate this to 'off'. Do not translate into your own language.
             */
            if ( 'off' !== _x( 'on', 'Yanone Kaffeesatz font: on or off', 'wp-blog-post-layouts' ) ) {
                $font_families[] = 'Yanone Kaffeesatz:700';
            }

            if ( $font_families ) {
                $query_args = array(
                    'family' => urlencode( implode( '|', $font_families ) ),
                    'subset' => urlencode( 'latin,latin-ext' ),
                );

                $fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );
            }

            return $fonts_url;
        }
        
        /**
         * Enqueue block scripts
         */
        public function block_enqueue_scripts() {

            wp_enqueue_style( 'wpblog-post-layouts-block-style',
                plugins_url( 'assets/css/build.css', __FILE__ ),
                array(),
                WPBLOG_POST_LAYOUTS_VERSION,
                'all'
            );

        }

        /**
         * Register custom block collection category
         */
        public function register_gutenberg_block_category( $categories ) {

            return array_merge(
                array(
                    array(
                        'slug'  => 'wpblog-post-layouts-blocks',
                        'title' => esc_html__( 'WP Blog Post Layouts Blocks', 'wp-blog-post-layouts' ),
                    ),
                ),
                $categories
            );
            
        }

        /**
         *  Register the blog post layouts blocks in gutenberg editor.
         */
        public function register_gutenberg_blocks() {
            register_block_type( 'wpblog-post-layouts/cv-grid-blog-post-layout', array(
                'attributes' => $this->get_common_attributes(),
                'render_callback' => array( $this, 'cv_post_grid_blocks_layout_callback' )
            ) );

            register_block_type( 'wpblog-post-layouts/cv-list-blog-post-layout', array(
                'attributes' => array(
                    'blockID'=> array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'blockTitle' => array(
                        'type' => 'string',
                        'default' =>  ''
                    ),
                    'blockTitleLayout' => array(
                        'type' => 'string',
                        'default' => 'one'
                    ),
                    'blockTitleAlign' => array(
                        'type' => 'string',
                        'default' => 'left'
                    ),
                    'posttype' => array(
                        'type' => 'string',
                        'default' => 'post'
                    ),
                    'postCategory' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'postCount' => array(
                        'type' => 'integer',
                        'default' => 4
                    ),
                    'contentOption' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'contentType' => array(
                        'type' => 'string',
                        'default' => 'excerpt'
                    ),
                    'wordCount' => array(
                        'type' => 'integer',
                        'default' => 15
                    ),
                    'buttonLabel' => array(
                        'type' => 'string',
                        'default' => esc_html__( 'Read more', 'wp-blog-post-layouts' )
                    ),
                    'orderBy' => array(
                        'type' => 'string',
                        'default' => 'date'
                    ),
                    'order' => array(
                        'type' => 'string',
                        'default' => 'desc'
                    ),
                    'dateOption' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'authorOption' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'categoryOption' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'tagsOption' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'commentOption' =>  array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'layoutOption' => array(
                        'type' => 'string',
                        'default' => 'layout-one'
                    ),
                    'postFormatIcon' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'postButtonIcon' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'blockColumn' => array(
                        'type' => 'string',
                        'default' => 'two'
                    ),
                    'postMargin' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'typographyOption' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'blockTitleAlign' => array(
                        'type' => 'string',
                        'default' => 'left'
                    ),
                    'blockTitleFontFamily' => array(
                        'type' => 'string',
                        'default' => 'Yanone Kaffeesatz'
                    ),
                    'blockTitleFontWeight' => array(
                        'type' => 'string',
                        'default' => '700'
                    ),
                    'blockTitleFontSize' => array(
                        'type' => 'number',
                        'default' => 32
                    ),
                    'blockTitleFontStyle' => array(
                        'type' => 'string',
                        'default' => 'normal'
                    ),
                    'blockTitleTextTransform' => array(
                        'type' => 'string',
                        'default' => 'Uppercase'
                    ),
                    'blockTitleTextDecoration' => array(
                        'type' => 'string',
                        'default' => 'none'
                    ),
                    'blockTitleColor' => array(
                        'type' => 'string',
                        'default' => '#3b3b3b'
                    ),
                    'blockTitleLineHeight' => array(
                        'type' => 'number',
                        'default' => 1.5
                    ),
                    'blockTitleBorderColor' => array(
                        'type' => 'string',
                        'default' => '#f47e00'
                    ),
                    'titleTextAlign' => array(
                        'type' => 'string',
                        'default' => 'left'
                    ),
                    'titleFontFamily' => array(
                        'type' => 'string',
                        'default' => 'Yanone Kaffeesatz'
                    ),
                    'titleFontWeight' => array(
                        'type' => 'string',
                        'default' => '700'
                    ),
                    'titleFontSize' => array(
                        'type' => 'number',
                        'default' => '28'
                    ),
                    'titleFontStyle' => array(
                        'type' => 'string',
                        'default' => 'normal'
                    ),
                    'titleTextTransform' => array(
                        'type' => 'string',
                        'default' => 'capitalize'
                    ),
                    'titleTextDecoration' => array(
                        'type' => 'string',
                        'default' => 'none'
                    ),
                    'titleFontColor' => array(
                        'type' => 'string',
                        'default' => '#333333'
                    ),
                    'titleHoverColor' => array(
                        'type' => 'string',
                        'default' => '#f47e00'
                    ),
                    'titlelineHeight' => array(
                        'type' => 'number',
                        'default' => '1.5'
                    ),
                    'metaTextAlign' => array(
                        'type' => 'string',
                        'default' => 'left'
                    ),
                    'metaFontFamily' => array(
                        'type' => 'string',
                        'default' => 'Roboto'
                    ),
                    'metaFontWeight' => array(
                        'type' => 'string',
                        'default' => '400'
                    ),
                    'metaFontSize' => array(
                        'type' => 'number',
                        'default' => 14
                    ),
                    'metaFontStyle' => array(
                        'type' => 'string',
                        'default' => 'normal'
                    ),
                    'metaTextTransform' => array(
                        'type' => 'string',
                        'default' => 'capitalize'
                    ),
                    'metaTextDecoration' => array(
                        'type' => 'string',
                        'default' => 'none'
                    ),
                    'metaFontColor' => array(
                        'type' => 'string',
                        'default' => '#434343'
                    ),
                    'metaHoverColor' => array(
                        'type' => 'string',
                        'default' => '#f47e00'
                    ),
                    'metalineHeight' => array(
                        'type' => 'number',
                        'default' => 1.8
                    ),
                    'descTextAlign' => array(
                        'type' => 'string',
                        'default' => 'left'
                    ),
                    'descFontFamily' => array(
                        'type' => 'string',
                        'default' => 'Roboto'
                    ),
                    'descFontWeight' => array(
                        'type' => 'string',
                        'default' => '400'
                    ),
                    'descFontSize' => array(
                        'type' => 'number',
                        'default' => 15
                    ),
                    'descFontStyle' => array(
                        'type' => 'string',
                        'default' => 'normal'
                    ),
                    'descTextTransform' => array(
                        'type' => 'string',
                        'default' => 'none'
                    ),
                    'descTextDecoration' => array(
                        'type' => 'string',
                        'default' => 'none'
                    ),
                    'descFontColor' => array(
                        'type' => 'string',
                        'default' => '#3b3b3b'
                    ),
                    'desclineHeight' => array(
                        'type' => 'number',
                        'default' => 2
                    ),
                    'buttonTextAlign' => array(
                        'type' => 'string',
                        'default' => 'left'
                    ),
                    'buttonFontFamily' => array(
                        'type' => 'string',
                        'default' => 'Roboto'
                    ),
                    'buttonFontWeight' => array(
                        'type' => 'string',
                        'default' => '400'
                    ),
                    'buttonFontSize' => array(
                        'type' => 'number',
                        'default' => 15
                    ),
                    'buttonTextTransform' => array(
                        'type' => 'string',
                        'default' => 'none'
                    ),
                    'buttonFontColor' => array(
                        'type' => 'string',
                        'default' => '#3b3b3b'
                    ),
                    'buttonHoverColor' => array(
                        'type' => 'string',
                        'default' => '#3b3b3b'
                    ),
                    'buttonBackgroundColor' => array(
                        'type' => 'string',
                        'default' => 'transparent'
                    ),
                    'buttonBackgroundHoverColor' => array(
                        'type' => 'string',
                        'default' => '#f47e00'
                    ),
                    'buttonPaddingTop' => array(
                        'type' => 'string',
                        'default' => '2'
                    ),
                    'buttonPaddingRight' => array(
                        'type' => 'string',
                        'default' => '10'
                    ),
                    'buttonPaddingBottom' => array(
                        'type' => 'string',
                        'default' => '2'
                    ),
                    'buttonPaddingLeft' => array(
                        'type' => 'string',
                        'default' => '10'
                    ),
                    'buttonBorderType' => array(
                        'type' => 'string',
                        'default' => 'solid'
                    ),
                    'buttonBorderWeight' => array(
                        'type' => 'string',
                        'default' => '1'
                    ),
                    'buttonBorderColor' => array(
                        'type' => 'string',
                        'default' => 'transparent'
                    ),
                    'buttonBorderHoverColor' => array(
                        'type' => 'string',
                        'default' => '#f47e00'
                    )
                ),
                'render_callback'   => array( $this, 'cv_post_list_blocks_layout_callback' )
            ) );

            register_block_type( 'wpblog-post-layouts/cv-masonry-blog-post-layout', array(
                'attributes' => $this->get_common_attributes(),
                'render_callback'   => array( $this, 'cv_post_masonry_blocks_layout_callback' )
            ) );
        }

        /**
         * Common attributes for gutenberg blocks
         * 
         * @since 1.0.5
         */
        public function get_common_attributes() {
            return array(
                'blockID'=> array(
                    'type' => 'string',
                    'default' => ''
                ),
                'blockTitle' => array(
                    'type' => 'string',
                    'default' =>  ''
                ),
                'blockTitleLayout' => array(
                    'type' => 'string',
                    'default' => 'one'
                ),
                'blockTitleAlign' => array(
                    'type' => 'string',
                    'default' => 'left'
                ),
                'posttype' => array(
                    'type' => 'string',
                    'default' => 'post'
                ),
                'postCategory' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'postCount' => array(
                    'type' => 'integer',
                    'default' => 4
                ),
                'contentOption' => array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'contentType' => array(
                    'type' => 'string',
                    'default' => 'excerpt'
                ),
                'wordCount' => array(
                    'type' => 'integer',
                    'default' => 15
                ),
                'buttonLabel' => array(
                    'type' => 'string',
                    'default' => esc_html__( 'Read more', 'wp-blog-post-layouts' )
                ),
                'orderBy' => array(
                    'type' => 'string',
                    'default' => 'date'
                ),
                'order' => array(
                    'type' => 'string',
                    'default' => 'desc'
                ),
                'dateOption' => array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'authorOption' => array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'categoryOption' => array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'tagsOption' => array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'commentOption' =>  array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'layoutOption' => array(
                    'type' => 'string',
                    'default' => 'layout-one'
                ),
                'postFormatIcon' => array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'postButtonIcon' => array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'blockColumn' => array(
                    'type' => 'string',
                    'default' => 'two'
                ),
                'postMargin' => array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'typographyOption' => array(
                    'type' => 'boolean',
                    'default' => true
                ),
                'blockTitleAlign' => array(
                    'type' => 'string',
                    'default' => 'left'
                ),
                'blockTitleFontFamily' => array(
                    'type' => 'string',
                    'default' => 'Yanone Kaffeesatz'
                ),
                'blockTitleFontWeight' => array(
                    'type' => 'string',
                    'default' => '700'
                ),
                'blockTitleFontSize' => array(
                    'type' => 'number',
                    'default' => 32
                ),
                'blockTitleFontStyle' => array(
                    'type' => 'string',
                    'default' => 'normal'
                ),
                'blockTitleTextTransform' => array(
                    'type' => 'string',
                    'default' => 'Uppercase'
                ),
                'blockTitleTextDecoration' => array(
                    'type' => 'string',
                    'default' => 'none'
                ),
                'blockTitleColor' => array(
                    'type' => 'string',
                    'default' => '#3b3b3b'
                ),
                'blockTitleLineHeight' => array(
                    'type' => 'number',
                    'default' => 1.5
                ),
                'blockTitleBorderColor' => array(
                    'type' => 'string',
                    'default' => '#f47e00'
                ),
                'titleTextAlign' => array(
                    'type' => 'string',
                    'default' => 'left'
                ),
                'titleFontFamily' => array(
                    'type' => 'string',
                    'default' => 'Yanone Kaffeesatz'
                ),
                'titleFontWeight' => array(
                    'type' => 'string',
                    'default' => '700'
                ),
                'titleFontSize' => array(
                    'type' => 'number',
                    'default' => '28'
                ),
                'titleFontStyle' => array(
                    'type' => 'string',
                    'default' => 'normal'
                ),
                'titleTextTransform' => array(
                    'type' => 'string',
                    'default' => 'capitalize'
                ),
                'titleTextDecoration' => array(
                    'type' => 'string',
                    'default' => 'none'
                ),
                'titleFontColor' => array(
                    'type' => 'string',
                    'default' => '#333333'
                ),
                'titleHoverColor' => array(
                    'type' => 'string',
                    'default' => '#f47e00'
                ),
                'titlelineHeight' => array(
                    'type' => 'number',
                    'default' => '1.5'
                ),
                'metaTextAlign' => array(
                    'type' => 'string',
                    'default' => 'left'
                ),
                'metaFontFamily' => array(
                    'type' => 'string',
                    'default' => 'Roboto'
                ),
                'metaFontWeight' => array(
                    'type' => 'string',
                    'default' => '400'
                ),
                'metaFontSize' => array(
                    'type' => 'number',
                    'default' => 14
                ),
                'metaFontStyle' => array(
                    'type' => 'string',
                    'default' => 'normal'
                ),
                'metaTextTransform' => array(
                    'type' => 'string',
                    'default' => 'capitalize'
                ),
                'metaTextDecoration' => array(
                    'type' => 'string',
                    'default' => 'none'
                ),
                'metaFontColor' => array(
                    'type' => 'string',
                    'default' => '#434343'
                ),
                'metaHoverColor' => array(
                    'type' => 'string',
                    'default' => '#f47e00'
                ),
                'metalineHeight' => array(
                    'type' => 'number',
                    'default' => 1.8
                ),
                'descTextAlign' => array(
                    'type' => 'string',
                    'default' => 'left'
                ),
                'descFontFamily' => array(
                    'type' => 'string',
                    'default' => 'Roboto'
                ),
                'descFontWeight' => array(
                    'type' => 'string',
                    'default' => '400'
                ),
                'descFontSize' => array(
                    'type' => 'number',
                    'default' => 15
                ),
                'descFontStyle' => array(
                    'type' => 'string',
                    'default' => 'normal'
                ),
                'descTextTransform' => array(
                    'type' => 'string',
                    'default' => 'none'
                ),
                'descTextDecoration' => array(
                    'type' => 'string',
                    'default' => 'none'
                ),
                'descFontColor' => array(
                    'type' => 'string',
                    'default' => '#3b3b3b'
                ),
                'desclineHeight' => array(
                    'type' => 'number',
                    'default' => 2
                ),
                'buttonTextAlign' => array(
                    'type' => 'string',
                    'default' => 'left'
                ),
                'buttonFontFamily' => array(
                    'type' => 'string',
                    'default' => 'Roboto'
                ),
                'buttonFontWeight' => array(
                    'type' => 'string',
                    'default' => '400'
                ),
                'buttonFontSize' => array(
                    'type' => 'number',
                    'default' => 15
                ),
                'buttonTextTransform' => array(
                    'type' => 'string',
                    'default' => 'none'
                ),
                'buttonFontColor' => array(
                    'type' => 'string',
                    'default' => '#3b3b3b'
                ),
                'buttonHoverColor' => array(
                    'type' => 'string',
                    'default' => '#3b3b3b'
                ),
                'buttonBackgroundColor' => array(
                    'type' => 'string',
                    'default' => 'transparent'
                ),
                'buttonBackgroundHoverColor' => array(
                    'type' => 'string',
                    'default' => '#f47e00'
                ),
                'buttonPaddingTop' => array(
                    'type' => 'string',
                    'default' => '2'
                ),
                'buttonPaddingRight' => array(
                    'type' => 'string',
                    'default' => '10'
                ),
                'buttonPaddingBottom' => array(
                    'type' => 'string',
                    'default' => '2'
                ),
                'buttonPaddingLeft' => array(
                    'type' => 'string',
                    'default' => '10'
                ),
                'buttonBorderType' => array(
                    'type' => 'string',
                    'default' => 'solid'
                ),
                'buttonBorderWeight' => array(
                    'type' => 'string',
                    'default' => '1'
                ),
                'buttonBorderColor' => array(
                    'type' => 'string',
                    'default' => 'transparent'
                ),
                'buttonBorderHoverColor' => array(
                    'type' => 'string',
                    'default' => '#f47e00'
                )
            );
        }

        /**
         * Callback function for various grid post layouts.
         */
        public function cv_post_grid_blocks_layout_callback( $attributes ) {
            ob_start();
                extract( $attributes );
                echo '<div id="cv-grid-post-layout" class="block-'.esc_html( $blockID ).' cv-block cv-block-grid--'.esc_html( $layoutOption ).'">';
                    if ( !empty( $blockTitle ) ) {
                        echo '<h2 class="cv-block-title align--' .esc_html( $blockTitleAlign ). ' layout--'.esc_html( $blockTitleLayout ).'"><span>'.esc_html( $blockTitle ).'</span></h2>';
                    }
                    include( plugin_dir_path( __FILE__ ) .'src/grid/'.$layoutOption.'/'.$layoutOption.'.php' );
                echo '</div>';
                $block_content = ob_get_contents();
            ob_end_clean();
            return $block_content;
        }

        /**
         * Callback function for various list post layouts.
         */
        public function cv_post_list_blocks_layout_callback( $attributes ) {
            ob_start();
                extract( $attributes );
                echo '<div id="cv-list-post-layout" class="block-'.esc_html( $blockID ).' cv-block cv-block-list--'.esc_html( $layoutOption ).'">';
                    if ( !empty( $blockTitle ) ) {
                        echo '<h2 class="cv-block-title align--' .esc_html( $blockTitleAlign ). ' layout--'.esc_html( $blockTitleLayout ).'"><span>'.esc_html( $blockTitle ).'</span></h2>';
                    }
                    include( plugin_dir_path( __FILE__ ) .'src/list/'.$layoutOption.'/'.$layoutOption.'.php' );
                echo '</div>';
                $block_content = ob_get_contents();
            ob_end_clean();
            return $block_content;
        }

        /**
         * Callback function for various masonry post layouts.
         */
        public function cv_post_masonry_blocks_layout_callback( $attributes ) {
            ob_start();
                extract( $attributes );
                echo '<div id="cv-masonry-post-layout" class="block-'.esc_html( $blockID ).' cv-block cv-masonry-post-layout cv-block-masonry--'.esc_html( $layoutOption ).' cv-block-grid--'.esc_html( $layoutOption ).'">';
                    if ( !empty( $blockTitle ) ) {
                        echo '<h2 class="cv-block-title align--' .esc_html( $blockTitleAlign ). ' layout--'.esc_html( $blockTitleLayout ).'"><span>'.esc_html( $blockTitle ).'</span></h2>';
                    }
                    include( plugin_dir_path( __FILE__ ) .'src/masonry/'.$layoutOption.'/'.$layoutOption.'.php' );
                echo '</div>';
                $block_content = ob_get_contents();
            ob_end_clean();
            return $block_content;
        }

        /**
         * Create API fields for additional info
         */

        public function blog_post_layout_register_rest_fields() {
            $post_types = get_post_types();
            register_rest_field(
                $post_types,
                'blog_post_layout_featured_media_urls',
                array(
                    'get_callback' => array( $this, 'get_blog_post_layout_featured_media' ),
                    'update_callback' => null,
                    'schema' => array(
                        'description' => esc_html__( 'Different Sized Featured Images', 'wp-blog-post-layouts'),
                        'type' => 'array'
                    )
                )
            );
        }

        public function get_blog_post_layout_featured_media($object) {
            if ( !isset( $object['featured_media'] ) ){ return; }
            $featured_media = wp_get_attachment_image_src( $object['featured_media'], 'full', false );
            return array(
                'thumbnail' => is_array($featured_media) ? wp_get_attachment_image_src(
                    $object['featured_media'],
                    'thumbnail',
                    false
                ) : '',
                'full' => is_array($featured_media) ? $featured_media : '',
            );  
        }

        /**
         * add categories_id field to rest api for custom post type
         * callback function 'blog_post_layout_get_taxanomy_ids'
         */
        public function blog_post_layout_register_categories_ids_rest_field() {
            $posttypes = get_post_types( array( '_builtin' => false ) );
            if ( empty( $posttypes ) ){ return; }
            register_rest_field(
                $posttypes,
                'categories',
                array(
                    'get_callback'    => array( $this, 'blog_post_layout_get_taxanomy_ids' ),
                    'update_callback' => null,
                    'schema'          => null,
                )
            );
        }

        /**
         * called by 'blog_post_layout_register_categories_ids_rest_field' function
         */
        public function blog_post_layout_get_taxanomy_ids( $object, $field_name, $request ) {
            $formatted_categories_ids = array();
            if ( $object['type'] == 'post' ) {
                return;
            } else {
                $taxonomies = get_taxonomies( array( 'object_type' => array( $object['type'] ) ) );
                if ( empty( $taxonomies ) ) {  return; }
                foreach( $taxonomies as $taxonomy ) {
                    $categories = get_the_terms( $object['id'], $taxonomy );
                    break;
                }
            }
            if ( empty( $categories ) ) { return; }
            foreach ( $categories as $category ) {
                $formatted_categories_ids[] .= $category->term_id;
            }

            return $formatted_categories_ids;
        }


        /**
         * add categories_name field to rest api
         * callback function 'blog_post_layout_get_categories_names'
         */
        public function blog_post_layout_register_categories_names_rest_field() {
            $posttypes = get_post_types();
            register_rest_field(
                $posttypes,
                'categories_names',
                array(
                    'get_callback'    => array( $this, 'blog_post_layout_get_categories_names' ),
                    'update_callback' => null,
                    'schema'          => null,
                )
            );
        }

        /**
         * called by 'blog_post_layout_register_categories_names_rest_field' function
         */
        public function blog_post_layout_get_categories_names( $object, $field_name, $request ) {
            $formatted_categories = array();
            if ( $object['type'] == 'post' ) {
                $categories = get_the_category($object['id']);
            } else {
                $taxonomies = get_taxonomies( array( 'object_type' => array( $object['type'] ) ) );
                if ( empty( $taxonomies ) ) {  return; }
                foreach( $taxonomies as $taxonomy ) {
                    $categories = get_the_terms( $object['id'], $taxonomy );
                    break;
                }
            }
            if ( empty( $categories ) ) { return; }
            foreach ( $categories as $category ) {
                $formatted_categories[ $category->term_id ] = array(
                    'name' => $category->name,
                    'link' => get_category_link( $category->term_id )
                );
            }

            return $formatted_categories;
        }

        /**
         * add categories_name field to rest api
         * callback function 'blog_post_layout_get_tags_names'
         */
        public function blog_post_layout_register_tags_names_rest_field() {
            register_rest_field(
                array( 'post' ),
                'tags_names',
                array(
                    'get_callback'    => array( $this, 'blog_post_layout_get_tags_names' ),
                    'update_callback' => null,
                    'schema'          => null,
                )
            );
        }

        /**
         * called by 'blog_post_layout_register_tags_names_rest_field' function
         */
        public function blog_post_layout_get_tags_names( $object, $field_name, $request ) {
            $formatted_tags = array();
            $tags = wp_get_post_tags( $object['id'] );
            foreach ( $tags as $tag ) {
                $formatted_tags[ $tag->term_id ] = array(
                    'name' => $tag->name,
                    'link' => get_tag_link( $tag->term_id )
                );
            }

            return $formatted_tags;
        }

        /**
         * add categories_name field to rest api
         * callback function 'blog_post_layout_get_comments_num'
         */
        public function blog_post_layout_register_comments_num_rest_field() {
            $posttypes = get_post_types();
            register_rest_field(
                $posttypes,
                'comments_number',
                array(
                    'get_callback'    => array( $this, 'blog_post_layout_get_comments_num' ),
                    'update_callback' => null,
                    'schema'          => null,
                )
            );
        }

        /**
         * called by 'blog_post_layout_register_comments_num_rest_field' function
         */
        public function blog_post_layout_get_comments_num( $object, $field_name, $request ) {
            $comment_num = get_comments_number( $object['id'] );
            return $comment_num;
        }
    }
    Wpblog_Post_Layouts_Blocks::instance();    
endif;