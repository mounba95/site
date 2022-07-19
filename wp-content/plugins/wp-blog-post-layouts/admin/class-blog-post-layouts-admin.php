<?php
/**
 * Defines the admin core plugin class.
 * 
 * Handles the admin-specific hooks and functions.
 * 
 * @since 1.0.0
 * @package WP Blog Post Layouts
 */
if( !class_exists( 'Wpblog_Post_Layouts_Admin' ) ) :
    class Wpblog_Post_Layouts_Admin {
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
         * @var Wpblog_Post_Layouts_Admin The single instance of the class.
         */
        private static $_instance = null;

        /**
         * Ensures only one instance of the class is loaded or can be loaded.
         *
         * @access public
         * @static
         *
         * @return Wpblog_Post_Layouts_Admin An instance of the class.
         */
        public static function instance() {
            if ( is_null( self::$_instance ) ) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        /**
         * Set the plugin name and the plugin version that can be used throughout the plugin.
         * Load the dependencies, define the locale, and set the hooks for the admin area of the site.
         */
        public function __construct() {
            if( !is_admin() ) {
                return;
            }

            if ( defined( 'WPBLOG_POST_LAYOUTS_VERSION' ) ) {
                $this->version = WPBLOG_POST_LAYOUTS_VERSION;
            } else {
                $this->version = '1.1.1';
            }
            $this->plugin_name = 'wp-blog-post-layouts';

            add_action( 'admin_menu', array( $this, 'add_admin_menu_register' ) );
            add_action( 'admin_enqueue_scripts', array( $this, 'cv_enqueue_scripts' ) );
            add_action( 'admin_init', array( $this, 'review_notice_set_option' ) );
            add_action( 'admin_notices', array( $this, 'review_admin_notice' ) );
            add_action( 'admin_notices', array( $this, 'upgrade_admin_notice' ) );
        }

        /**
         * load scripts.
         */
        public function cv_enqueue_scripts( $hook ) {
            wp_enqueue_style( 'wpblog-post-layouts-admin-notice-style',
                plugins_url( 'css/admin-notice.css', __FILE__ ),
                array(),
                WPBLOG_POST_LAYOUTS_VERSION,
                'all'
            );

            if( $hook !== 'toplevel_page_wp-blog-post-layouts' ) {
                return;
            }
            wp_enqueue_style( 'wpblog-post-layouts-icon-style',
                plugins_url( 'includes/assets/cv-icons/style.css', __DIR__ ),
                array(),
                WPBLOG_POST_LAYOUTS_VERSION,
                'all'
            );

            wp_enqueue_style( 'wpblog-post-layouts-admin-style',
                plugins_url( 'css/admin.css', __FILE__ ),
                array(),
                WPBLOG_POST_LAYOUTS_VERSION,
                'all'
            );

            wp_enqueue_script( 'wpblog-post-layouts-admin-script',
                plugins_url( 'js/admin.js', __FILE__ ),
                array( 'jquery' ),
                WPBLOG_POST_LAYOUTS_VERSION,
                true
            );
            
        }

        /**
         * Add admin page for the blog-post-layouts.
         */
        public function add_admin_menu_register() {

            $admin_icon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>letter-b</title><path fill="#0073aa" d="M30.442 20.238v-20.238c0 0-19.259 0-21.209 0-1.955 0-2.138 1.89-2.138 1.89l-5.546 30.11c0 0 26.029-9.020 27.553-9.632 1.523-0.609 1.339-2.13 1.339-2.13zM18.801 20.54c0 0-2.68 0.367-5.060-1.463v-15.176h3.296v5.426c0 0-0.247 0.489 0.485 0 0 0 0.974-1.279 2.745-1.097 0 0 3.656 0 3.594 5.304 0-0.002 0.912 6.643-5.060 7.007zM17.668 11.514v6.158c0 0 3.172 1.037 3.232-1.618 0.058-2.65 0-3.381 0-3.381s0.122-2.378-3.232-1.159z"></path></svg>';

            add_menu_page(
                'wp-blog-post-layouts',
                esc_html__( 'WP Blog Post Layouts', 'wp-blog-post-layouts' ),
                'manage_options',
                'wp-blog-post-layouts',
                array( $this, 'admin_menu_callback' ),
                'data:image/svg+xml;base64,' . base64_encode( $admin_icon ),
                20
            );
        }

        /**
         * Callback function for blog-post-layouts admin page.
         * 
         */
        public function admin_menu_callback() {
        ?>
            <div id="cv-blog-post-layouts-admin" class="cv-admin-block-wrapper cv-clearfix">
                <header id="cv-main-header" class="cv-tab-block-wrapper">
                    <h1><?php esc_html_e( 'WP Blog Post Layouts', 'wp-blog-post-layouts' ); ?></h1>
                    <div class="admin-main-menu nav-tab-wrapper cv-nav-tab-wrapper">
                        <ul>
                            <?php
                                $header_titles = array(
                                                        "dashboard" => array( "desc" => "Get started!!", "icon" => "cvicon-dashboard" ),
                                                        "help"      => array( "desc" => "Have an issue?", "icon" => "cvicon-support" ),
                                                        "review"    => array( "desc" => "Review our product", "icon" => "cvicon-review" )
                                                    );
                                foreach( $header_titles as $header_title => $header_title_val ) {
                            ?>
                                    <li class="nav-tab cv-nav-tab <?php echo esc_html( 'cv-'.$header_title ); if( $header_title == 'dashboard' ){ echo esc_html( ' isActive' ); } ?>">
                                        <a href="<?php echo '#cv-'.$header_title; ?>"><?php echo str_replace( '-', ' ', $header_title ); ?>
                                            <span class="cv-nav-sub-title"><?php echo esc_html( $header_title_val['desc'] ); ?></span>
                                            <i class="<?php echo esc_html( $header_title_val['icon'] ); ?>"></i>
                                        </a>
                                    </li>
                            <?php
                                }
                            ?>
                        </ul>
                    </div>
                </header>

                <div id="cv-main-content" class="cv-content-block-wrapper">
                    <?php
                        foreach( $header_titles as $header_title => $header_title_desc ) {
                            include( plugin_dir_path( __FILE__ ) .'partials/content-'.$header_title.'.php' );
                        }
                    ?>
                </div><!-- #main-content -->
                <footer id="cv-main-footer" class="cv-promo-sidebar">
                    <div class="footer-content cv-promo-block">
                        <h2 class="cv-admin-title"><?php esc_html_e( 'Go Premium', 'wp-blog-post-layouts' ); ?></h2>
                        <div class="cv-admin-sub-title"><?php esc_html_e( 'Features', 'wp-blog-post-layouts' ); ?></div>
                        <ul class="cv-footer-list">
                            <li><?php esc_html_e( '20+ total post layouts', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( '8 layout variations in each layout block', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Supports Custom Post Type', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Responsive Design', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( '5 Block Columns', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( '5 Block Title Layout', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Color Options', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Pagination Settings', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Fallback Image Option', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Element Sorting', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Numerous Google Fonts', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Advanced Typography Options', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Show/Hide meta', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Show/Hide before/after icons', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Show/Hide content', 'wp-blog-post-layouts' ); ?></li>
                            <li><?php esc_html_e( 'Features added in every updates ', 'wp-blog-post-layouts' ); ?></li>
                        </ul>
                        <a href="<?php echo esc_url( '//codecanyon.net/item/blog-post-layouts-for-gutenberg-and-elementor/26362956' ); ?>" target="_blank" class="button button-primary"><?php esc_html_e( 'Upgrade Now', 'wp-blog-post-layouts' ); ?></a>
                    </div><!-- .footer-content -->
                    <div class="footer-content cv-wpall-block">
                        <?php
                            esc_html_e( 'We have completely free online WordPress resources offers genuine and useful content helps to build your WordPress knowledge', 'wp-blog-post-layouts' );
                        ?>
                        <a href="<?php echo esc_url( 'https://wpallresources.com/' ); ?>" target="_blank"><?php echo esc_url( 'https://wpallresources.com' ); ?></a>
                    </div><!-- .footer-content -->
                </footer><!-- #cv-main-footer -->
            </div> <!-- #cv-blog-post-layouts-admin.cv-admin-block-wrapper -->
        <?php
        }

        /**
         * Plugin review admin notice after 15 days of plugin activation.
         */
        public function review_admin_notice() {
            global $current_user;
            $user_id = $current_user->ID;

            $wpblog_post_layouts_activated_time = get_option( 'wpblog_post_layouts_activated_time' );
            $wp_blog_post_layouts_ignore_review_notice_partially = get_user_meta( $user_id, 'wp_blog_post_layouts_ignore_review_notice_partially', true );
            $wp_blog_post_layouts_ignore_theme_review_notice = get_user_meta( $user_id, 'wp_blog_post_layouts_ignore_theme_review_notice', true );

            /**
             * if plugin activation time is more than 15 days
             * if plugin review notice is partially ignored and is not 7days.
             * if plugin review is already done.
             * 
             * @return null
             */
            if( ( $wpblog_post_layouts_activated_time > strtotime( '- 15 days' ) ) || ( $wp_blog_post_layouts_ignore_review_notice_partially > strtotime( '- 7 days' ) ) || $wp_blog_post_layouts_ignore_theme_review_notice ) {
                return;
            }
        ?>
            <div id="cv-plugin-admin-notice" class="notice updated is-dismissible">
                <div class="cv-plugin-message">
                    <?php esc_html_e( 'Hey, '.esc_html( $current_user->display_name ).'! Having great experience using WP Blog Post Layouts? We hope you are happy with everything that the plugin has to offer. If you can spare a minute, please help us leaving a 5-star review on wordpress.org. By spreading love, we continue to develop new amazing features in the future, for free!', 'wp-blog-post-layouts' ); ?>
                </div>
                <div class="links">
                    <a href="<?php echo esc_url( '//wordpress.org/support/plugin/wp-blog-post-layouts/reviews/#new-post' ); ?>" class="btn button-primary" target="_blank">
                        <span class="dashicons dashicons-thumbs-up"></span>
                        <span><?php esc_html_e( 'Sure', 'wp-blog-post-layouts' ); ?></span>
                    </a>
                    <a href="<?php echo wp_nonce_url( add_query_arg( 'wp_blog_post_layouts_ignore_review_notice_partially', true ), 'wpblog_post_layouts_nonce' ); ?>" class="btn button-secondary">
                        <span class="dashicons dashicons-calendar"></span>
                        <span><?php esc_html_e( 'Maybe later', 'wp-blog-post-layouts' ); ?></span>
                    </a>

                    <a href="<?php echo wp_nonce_url( add_query_arg( 'wp_blog_post_layouts_ignore_theme_review_notice', true ), 'wpblog_post_layouts_nonce' ); ?>" class="btn button-secondary">
                        <span class="dashicons dashicons-smiley"></span>
                        <span><?php esc_html_e( 'I already did', 'wp-blog-post-layouts' ); ?></span>
                    </a>

                    <a href="<?php echo esc_url( '//wordpress.org/support/plugin/wp-blog-post-layouts/' ); ?>" class="btn button-secondary" target="_blank">
                        <span class="dashicons dashicons-edit"></span>
                        <span><?php esc_html_e( 'Get plugin support question?', 'wp-blog-post-layouts' ); ?></span>
                    </a>
                </div>
            </div>
        <?php
        }

        /**
         * Plugin upgrade to premium notice
         */
        public function upgrade_admin_notice() {
            $wpblog_post_layouts_upgrade_premium = get_option( 'wpblog_post_layouts_upgrade_premium' );
            if( $wpblog_post_layouts_upgrade_premium > strtotime( '- 7 days' ) ) {
                return;
            }
            ?>
                <div id="cv-plugin-admin-notice" class="notice updated is-dismissible">
                    <div class="cv-plugin-message">
                        <?php esc_html_e( 'Looking for extending more features in WP Blog Post Layouts? Unlock additional features with custom post type support and many other options in premium version.', 'wp-blog-post-layouts' ); ?>
                    </div>
                    <div class="cv-plugin-message">
                        <?php esc_html_e( 'Frequent updates available with quick issue handling and get every updates with required features added', 'wp-blog-post-layouts' ); ?>
                    </div>
                    <div class="links">
                        <a href="<?php echo esc_url( '//codecanyon.net/item/blog-post-layouts-for-gutenberg-and-elementor/26362956' ); ?>" class="btn button-primary" target="_blank">
                            <span class="dashicons dashicons-upload"></span>
                            <span><?php esc_html_e( 'Upgrade To Premium', 'wp-blog-post-layouts' ); ?></span>
                        </a>
                        <a href="<?php echo wp_nonce_url( add_query_arg( 'wpblog_post_layouts_upgrade_premium', true ), 'wpblog_post_layouts_nonce' ); ?>" class="btn button-secondary">
                            <span class="dashicons dashicons-no"></span>
                            <span><?php esc_html_e( 'Dismiss this notice', 'wp-blog-post-layouts' ); ?></span>
                        </a>
                    </div><!-- .links -->
                </div>
            <?php
        }

        /**
         * Set plugin admin notice values
         */
        public function review_notice_set_option() {
            global $current_user;
            $user_id = $current_user->ID;

            if( isset( $_GET[ 'wpblog_post_layouts_upgrade_premium' ] ) && wp_verify_nonce( $_GET['_wpnonce'], 'wpblog_post_layouts_nonce' ) ) {
                update_option( 'wpblog_post_layouts_upgrade_premium', time() );
            }

            if( isset( $_GET[ 'wp_blog_post_layouts_ignore_review_notice_partially' ] ) && wp_verify_nonce( $_GET['_wpnonce'], 'wpblog_post_layouts_nonce' ) ) {
                update_user_meta( $user_id, 'wp_blog_post_layouts_ignore_review_notice_partially', time() );
            }

            if( isset( $_GET[ 'wp_blog_post_layouts_ignore_theme_review_notice' ] ) && wp_verify_nonce( $_GET['_wpnonce'], 'wpblog_post_layouts_nonce' ) ) {
                update_user_meta( $user_id, 'wp_blog_post_layouts_ignore_theme_review_notice', true );
            }
        }
    }
Wpblog_Post_Layouts_Admin::instance();
endif;