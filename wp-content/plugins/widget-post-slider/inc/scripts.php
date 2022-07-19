<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}  // if direct access

function sp_widget_post_slider_script_and_style() {
	// CSS
	wp_enqueue_style( 'slick', Widget_Post_Slider_URL . 'assets/css/slick.css', array(), null );
	wp_enqueue_style( 'font-awesome-css', Widget_Post_Slider_URL . 'assets/css/font-awesome.min.css', array(), null );
	wp_enqueue_style( 'widget-post-slider-style', Widget_Post_Slider_URL . 'assets/css/style.css' );

	// JS
	wp_enqueue_script( 'slick-min-js', Widget_Post_Slider_URL . 'assets/js/slick.min.js', array( 'jquery' ), null, true );

}
add_action( 'wp_enqueue_scripts', 'sp_widget_post_slider_script_and_style' );
