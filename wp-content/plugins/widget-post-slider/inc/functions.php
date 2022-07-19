<?php

// Thumbnail Size
add_image_size( 'wps_thumbnail_size', 360, 250, true );


// Widget
add_action( 'widgets_init', 'sp_widget_post_slider_register' );

function sp_widget_post_slider_register() {
	register_widget( 'SP_Widget_Post_Slider' );
}

class SP_Widget_Post_Slider extends WP_Widget {

	/**
	 * Widget setup.
	 */
	public function __construct() {
		parent::__construct(
			'sp_widget_post_slider', // Base ID
			esc_html__( 'Widget Post Slider', 'widget-post-slider' ), // Name
			array( 'description' => esc_html__( 'Widget Post Slider to display posts', 'widget-post-slider' ) ) // Args
		);
	}


	/*
	-------------------------------------------------------
	 *				Front-end display of widget
	 *-------------------------------------------------------*/

	public function widget( $args, $instance ) {
		extract( $args );

		$title  = apply_filters( 'widget_title', $instance['title'] );
		$count  = $instance['count'];
		$cat_ID = $instance['cat_name'];

		echo $before_widget;

		$output = '';

		if ( $title ) {
			echo $before_title . $title . $after_title;
		}

		global $post;

		$custom_id = uniqid();
		$args      = array(
			'posts_per_page' => $count,
			'category'       => $cat_ID,
		);

		$posts = get_posts( $args );

		if ( count( $posts ) > 0 ) {

			$output .= '
		    <script type="text/javascript">
		    jQuery(document).ready(function() {
				jQuery("#sp-widget-post-slider-' . $custom_id . '").slick({
			        dots: false,
			        infinite: true,
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        autoplay: true,
		            speed: 600,
		            autoplaySpeed: 4000,
		            arrows: true,
		            prevArrow: "<div class=\'slick-prev\'><i class=\'fa fa-angle-left\'></i></div>",
		            nextArrow: "<div class=\'slick-next\'><i class=\'fa fa-angle-right\'></i></div>",
		        });

		    });
		    </script>';

			$output .= '<div id="sp-widget-post-slider-' . $custom_id . '" class="sp-widget-post-slider-section">';
			foreach ( $posts as $post ) :
				setup_postdata( $post );

				if ( has_post_thumbnail() ) {
					$output .= '<div class="widget-post-slider">';
					$output .= '<a href="' . get_permalink() . '">' . get_the_post_thumbnail( $post->ID, 'wps_thumbnail_size', array( 'class' => 'wps-image' ) ) . '</a>';
					$output .= '<div class="wps-caption"><a href="' . get_permalink() . '">' . get_the_title() . '</a></div>';
					$output .= '</div>';
				}

			endforeach;
			$output .= '</div>';

		}

		echo $output;

		echo $after_widget;
	}


	public function update( $new_instance, $old_instance ) {
		$instance = $old_instance;

		$instance['title']    = strip_tags( $new_instance['title'] );
		$instance['cat_name'] = strip_tags( $new_instance['cat_name'] );
		$instance['count']    = strip_tags( $new_instance['count'] );

		return $instance;
	}


	public function form( $instance ) {
		$defaults = array(
			'title'    => 'Widget Post Slider',
			'cat_name' => '',
			'count'    => 5,
		);
		$instance = wp_parse_args( (array) $instance, $defaults );
		?>
		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php esc_html_e( 'Widget Title:', 'widget-post-slider' ); ?></label>
			<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" value="<?php echo $instance['title']; ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'cat_name' ); ?>"><?php esc_html_e( 'Select Category:', 'widget-post-slider' ); ?></label>
			<?php
			$categories = get_categories( array( 'hierarchical' => false ) );
			if ( isset( $instance['cat_name'] ) ) {
				$cat_ID = $instance['cat_name'];
			}
			?>
			<select class="widefat" id="<?php echo $this->get_field_id( 'cat_name' ); ?>" name="<?php echo $this->get_field_name( 'cat_name' ); ?>">


				<option value='all' 
				<?php
				if ( 'all' == $instance['cat_name'] ) {
					echo 'selected="selected"';}
				?>
				><?php esc_html_e( 'All Categories', 'widget-post-slider' ); ?></option>
				<?php $categories = get_categories( 'hide_empty=0&depth=1&type=post' ); ?>
				<?php foreach ( $categories as $category ) { ?>
					<option value='<?php echo $category->term_id; ?>' 
											  <?php
												if ( $category->term_id == $instance['cat_name'] ) {
													echo 'selected="selected"';}
												?>
					><?php echo $category->cat_name; ?></option>
				<?php } ?>
			</select>
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'count' ); ?>"><?php esc_html_e( 'Slide Count', 'widget-post-slider' ); ?></label>
			<input class="widefat" id="<?php echo $this->get_field_id( 'count' ); ?>" name="<?php echo $this->get_field_name( 'count' ); ?>" value="<?php echo $instance['count']; ?>" />
		</p>

		<?php
	}
}
