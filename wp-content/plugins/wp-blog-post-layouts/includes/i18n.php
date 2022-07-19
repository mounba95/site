<?php
/**
 * Define the internationalization functionality
 *
 * @since 1.0.0
 * @package WP Blog Post Layouts
 
 */
class Wpblog_Post_Layouts_i18n {

	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'wp-blog-post-layouts',
			false,
			WPBLOG_POST_LAYOUTS_PATH . '/languages/'
		);

	}
}