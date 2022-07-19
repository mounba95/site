<?php
/**
 * Plugin Name:       WP Blog Post Layouts
 * Description:       Versatile plugin specially designed to create beautiful posts layouts. Fully compatible with Gutenberg and Elementor. Comes with advanced features such as multiple archive layout types, typography option and so on.
 * Version:           1.1.0
 * Author:            CodeVibrant
 * Author URI:        http://codevibrant.com/
 * License:           GNU General Public License v3 or later
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       wp-blog-post-layouts
 * 
 * @since             1.0.0
 * @package           WP Blog Post Layouts
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Current plugin version.
 */
define( 'WPBLOG_POST_LAYOUTS', 'WP Blog Post Layouts' );
define( 'WPBLOG_POST_LAYOUTS_VERSION', '1.1.0' );
define( 'WPBLOG_POST_LAYOUTS_PATH', plugin_dir_path( __FILE__ ) );
define( 'WPBLOG_POST_LAYOUTS_INCLUDES_URL', plugin_dir_url( __FILE__ ). 'includes' );

/**
 * defines plugin functioning codes ( internationalization, admin-specific hooks, and public-facing site hooks )
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-blog-post-layouts.php';
require plugin_dir_path( __FILE__ ) . 'admin/class-blog-post-layouts-admin.php';


if( !function_exists( 'wpblog_post_layouts_activation' ) ) :
	require plugin_dir_path( __FILE__ ) . 'includes/class-blog-post-layouts-activator.php';
	/**
	 * When plugin is activated.
	 */
	function wpblog_post_layouts_activation() {
		set_transient( 'wp-blog-post-layouts-admin-notice', true, 5 );
		Wpblog_Post_Layouts_Activator::activate();
	}
	register_activation_hook( __FILE__, 'wpblog_post_layouts_activation' );
endif;

if( !function_exists( 'wpblog_post_layouts_deactivation' ) ) :
	require plugin_dir_path( __FILE__ ) . 'includes/class-blog-post-layouts-deactivator.php';
	/**
	 * When plugin is deactivated.
	 */
	function wpblog_post_layouts_deactivation() {
		Wpblog_Post_Layouts_Deactivator::deactivate();
	}
	register_deactivation_hook( __FILE__, 'wpblog_post_layouts_deactivation' );
endif;

/**
 * Admin notices.
 */
if( !function_exists( 'wpblog_post_layouts_admin_notice' ) ):
	function wpblog_post_layouts_admin_notice() {
		if( get_transient( 'wp-blog-post-layouts-admin-notice' ) ) {
	?>
			<div id="cv-blog-post-layouts-message" class="blog-post-layouts-message notice notice-info is-dismissible">
				<p><?php printf( esc_html__( 'Thank you for choosing %1$s! To fully take advantage of the best our plugin can offer please make sure you visit our %2$s dashboard page %3$s.', 'wp-blog-post-layouts' ), esc_html( WPBLOG_POST_LAYOUTS ), '<a href="'.esc_url( admin_url( 'admin.php?page=wp-blog-post-layouts' ) ).'">', '</a>' ); ?></p>
				<p><a class="button button-primary" href="<?php echo esc_url( admin_url( 'admin.php?page=wp-blog-post-layouts' ) ); ?>"><?php esc_html_e( 'Get started', 'wp-blog-post-layouts' ); ?></a></p>
			</div>
	<?php
			delete_transient( 'wp-blog-post-layouts-admin-notice' );
		}
	}
endif;
add_action( 'admin_notices', 'wpblog_post_layouts_admin_notice' );

/**
 * check if gutenberg block editor is active or not.
 */
if( !function_exists( 'wpblog_post_layouts_check_gutenberg' ) ) :
	function wpblog_post_layouts_check_gutenberg() {
		if( function_exists( 'register_block_type' ) ) {
			define( 'WPBLOG_POST_LAYOUTS_GUTENBERG', TRUE );
			return;
		}
		
		define( 'WPBLOG_POST_LAYOUTS_GUTENBERG', FALSE );
		add_action( 'admin_notices', 'wpblog_post_layouts_gutenberg_admin_notice' );
	}
	add_action( 'plugins_loaded', 'wpblog_post_layouts_check_gutenberg', 99 );
endif;

/**
 * Displays the gutenberg incompability notices.
 */
if( !function_exists( 'wpblog_post_layouts_gutenberg_admin_notice' ) ) :
	function wpblog_post_layouts_gutenberg_admin_notice() {
		if ( isset( $_GET['activate'] ) ) unset( $_GET['activate'] );

		$message = sprintf(
			esc_html__( '"%1$s" in your site. "%2$s" need be installed and activated for better compatibility.', 'wp-blog-post-layouts' ),
			'<strong>' . esc_html__( 'Gutenberg is not installed.', 'wp-blog-post-layouts' ) . '</strong>',
			'<strong>' . esc_html__( 'Gutenberg Blocks', 'wp-blog-post-layouts' ) . '</strong>'
		);

		printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );
	}
endif;


/**
 * check if elementor is active or not.
 */
if( !function_exists( 'wpblog_post_layouts_check_elementor' ) ) :
	function wpblog_post_layouts_check_elementor() {
		if ( ! did_action( 'elementor/loaded' ) ) {
			define( 'WPBLOG_POST_LAYOUTS_ELEMENTOR', FALSE );
			return;
		}
		define( 'WPBLOG_POST_LAYOUTS_ELEMENTOR', TRUE );
	}
	add_action( 'plugins_loaded', 'wpblog_post_layouts_check_elementor', 99 );
endif;

/**
 * Execution of the plugin.
 *
 * @since    1.0.0
 */
if( !function_exists( 'wpblog_post_layouts_run' ) ):
	function wpblog_post_layouts_run() {
		$instance = Wpblog_Post_Layouts::instance();
	}
	add_action( 'plugins_loaded', 'wpblog_post_layouts_run' );
endif;