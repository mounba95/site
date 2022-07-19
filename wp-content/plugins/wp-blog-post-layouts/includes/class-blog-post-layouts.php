<?php
/**
 * Defines the core plugin class
 * 
 * Handles the internationalization, admin-specific hooks, and
 * public-facing site hooks.
 * 
* @since 1.0.0
 * @package WP Blog Post Layouts
 */
if( !class_exists( 'Wpblog_Post_Layouts' ) ):
    class Wpblog_Post_Layouts {
        /**
         * The unique identifier of this plugin.
         * @access   protected
         */
        protected $plugin_name;

        /**
         * The current version of the plugin.
         * @access   protected
         */
        protected $version;

        /**
         * Instance
         *
         * @access private
         * @static
         *
         * @var Wpblog_Post_Layouts The single instance of the class.
         */
        private static $_instance = null;

        /**
         * Ensures only one instance of the class is loaded or can be loaded.
         *
         * @access public
         * @static
         *
         * @return Wpblog_Post_Layouts An instance of the class.
         */
        public static function instance() {
            if ( is_null( self::$_instance ) ) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        /**
         * Set the plugin name and the plugin version that can be used throughout the plugin.
         * Load the dependencies, define the locale, and set the hooks for the admin area and
         * the public-facing side of the site.
         */
        public function __construct() {
            if ( defined( 'WPBLOG_POST_LAYOUTS_VERSION' ) ) {
                $this->version = WPBLOG_POST_LAYOUTS_VERSION;
            } else {
                $this->version = '1.1.1';
            }

            $this->plugin_name = 'wp-blog-post-layouts';
            define( 'WPBLOG_POST_LAYOUTS_IMAGE', plugins_url( '/assets/images/image.jpg', __FILE__ ) );

            $this->load_dependencies();
            $this->set_locale();
            add_action( 'wp_enqueue_scripts', array( $this, 'cv_enqueue_scripts' ) );
        }

        /**
         * Define the locale for this plugin for internationalization.
         *
         * Uses the Wpblog_Post_Layouts_i18n class in order to set the domain and to register the hook
         * with WordPress.
         *
         * @since    1.0.0
         * @access   private
         */
        private function set_locale() {

            $i18n = new Wpblog_Post_Layouts_i18n();
            add_action( 'plugins_loaded', array( $i18n, 'load_plugin_textdomain' ) );
        }
    
        /**
         * Load dependencies
         */
        public function load_dependencies() {
            require_once plugin_dir_path( __FILE__ ) . 'i18n.php';
            require_once plugin_dir_path( __FILE__ ) . 'gutenberg.php';
            require_once plugin_dir_path( __FILE__ ) . 'elementor.php';
        }

        /**
         * load scripts.
         */
        public function cv_enqueue_scripts() {
            $cv_fonts_url = $this->cv_fonts_url();
            wp_enqueue_style( 'wpblog-post-layouts-google-fonts', esc_url( $cv_fonts_url ), array(), null );
            wp_enqueue_style( 'fontawesome',
                plugins_url( 'assets/fontawesome/css/all.min.css', __FILE__ ),
                array(),
                '5.12.1',
                'all'
            );
            wp_enqueue_script( 'imagesloaded',
                plugins_url( 'assets/imagesloaded/imagesloaded.pkgd.min.js', __FILE__ ),
                array(),
                '4.1.4',
                'all'
            );
            wp_enqueue_script( 'masonry',
                plugins_url( '/assets/masonry/masonry.pkgd.min.js', __FILE__ ),
                array( 'jquery' ),
                WPBLOG_POST_LAYOUTS_VERSION,
                true
            );
            wp_enqueue_script( 'wpblog-post-layouts-public-script',
                plugins_url( '/assets/js/frontend.js', __FILE__ ),
                array( 'jquery' ),
                WPBLOG_POST_LAYOUTS_VERSION,
                true
            );
        }

        /**
         * Register google fonts for frontend
         */
        public function cv_fonts_url() {
            $fonts_url = '';
            $font_families = array();

            /**
             * Roboto
             */
            if ( 'off' !== _x( 'on', 'Roboto font: on or off', 'wp-blog-post-layouts' ) ) {
                $font_families[] = 'Roboto:400,100,300,400,500,700,900';
            }

            /**
             * Yanone Kaffeesatz
             */
            if ( 'off' !== _x( 'on', 'Yanone Kaffeesatz font: on or off', 'wp-blog-post-layouts' ) ) {
                $font_families[] = 'Yanone Kaffeesatz:200,300,400,500,600,700';
            }

            /**
             * Open Sans
             */
            if ( 'off' !== _x( 'on', 'Open Sans font: on or off', 'wp-blog-post-layouts' ) ) {
                $font_families[] = 'Open Sans:300,400,600,700,800';
            }

            /**
             * Roboto Slab
             */
            if ( 'off' !== _x( 'on', 'Roboto Slab font: on or off', 'wp-blog-post-layouts' ) ) {
                $font_families[] = 'Roboto Slab:100,200,300,400,500,600,700,800,900';
            }

            /**
             * Poppins
             */
            if ( 'off' !== _x( 'on', 'Poppins font: on or off', 'wp-blog-post-layouts' ) ) {
                $font_families[] = 'Poppins:100,200,300,400,500,600,700,800,900';
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
    }
endif;