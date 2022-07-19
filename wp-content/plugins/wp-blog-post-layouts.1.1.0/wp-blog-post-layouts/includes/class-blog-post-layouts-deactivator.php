<?php
/**
 * Defines the plugin class exucutes when plugin is deactivated.
 * 
 * @since 1.0.0
 * @package WP Blog Post Layouts
 
 */
if( !class_exists( 'Wpblog_Post_Layouts_Deactivator' ) ):
    class Wpblog_Post_Layouts_Deactivator {
        /**
         * @access public static
         */
        public static function deactivate() {
            global $current_user;
            $user_id = $current_user->ID;

            $wpblog_post_layouts_activated_time = get_option( 'wpblog_post_layouts_activated_time' );
            $wpblog_post_layouts_upgrade_premium = get_option( 'wpblog_post_layouts_upgrade_premium' );
            $wp_blog_post_layouts_ignore_review_notice_partially = get_user_meta( $user_id, 'wp_blog_post_layouts_ignore_review_notice_partially', true );
            $wp_blog_post_layouts_ignore_theme_review_notice = get_user_meta( $user_id, 'wp_blog_post_layouts_ignore_theme_review_notice', true );

            if( $wpblog_post_layouts_activated_time ) {
                delete_option( 'wpblog_post_layouts_activated_time' );
            }

            if( $wpblog_post_layouts_upgrade_premium ) {
                delete_option( 'wpblog_post_layouts_upgrade_premium' );
            }

            if( $wp_blog_post_layouts_ignore_review_notice_partially ) {
                delete_user_meta( $user_id, 'wp_blog_post_layouts_ignore_review_notice_partially' );
            }

            if( $wp_blog_post_layouts_ignore_theme_review_notice ) {
                delete_user_meta( $user_id, 'wp_blog_post_layouts_ignore_theme_review_notice' );
            }
        }
    }
endif;