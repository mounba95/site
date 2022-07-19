<?php
/**
 * Widget Post Slider
 *
 * @link              https://smartpostshow.com/
 * @since             1.3.3
 * @package           Widget_Post_Slider
 *
 * @wordpress-plugin
 * Plugin Name:       Widget Post Slider
 * Plugin URI:        https://wordpress.org/plugins/widget-post-slider/
 * Description:       Widget Post Slider to display posts image in a slider from category.
 * Version:           1.3.3
 * Author:            ShapedPlugin
 * Author URI:        https://shapedplugin.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       widget-post-slider
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'Widget_Post_Slider_URL', plugins_url( '/' ) . plugin_basename( dirname( __FILE__ ) ) . '/' );
define( 'Widget_Post_Slider_PATH', plugin_dir_path( __FILE__ ) );

require_once Widget_Post_Slider_PATH . 'inc/scripts.php';
require_once Widget_Post_Slider_PATH . 'inc/functions.php';

add_action( 'init', 'widget_post_slider_textdomain' );
function widget_post_slider_textdomain() {
	load_plugin_textdomain( 'widget-post-slider', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' ); 
}
