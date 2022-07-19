<?php
/**
 * Content for dashboard section in admin area.
 *
 * @package WP Magazine Modules Lite
 * @since 1.0.0
 * 
 */
?>
<div id="cvmm-dashboard">
    <h2 class="cvmm-admin-title">
        <?php
            esc_html_e( 'Get Started with WP Magazine Modules Lite', 'wp-magazine-modules-lite' );
        ?>
    </h2>
    <div class="cvmm-admin-desc">
        <?php
            esc_html_e( 'Thank you so much for installing the WP Magazine Modules Lite Plugin. We have designed and developed the most impressive post-layout designs for Gutenberg and Elementor ! If you have any confusions, please check out our documentation on below link:', 'wp-magazine-modules-lite' );
        ?>
    </div>
    <?php

        echo '<div class="cvmm-admin-img">';
            echo '<img src="'.esc_url( plugins_url( 'includes/assets/images/dashboard-img.jpg', dirname(__DIR__) ) ).'">';
        echo '</div>';

        echo '<div class="cvmm-main-btn-wrap">';
            if( current_user_can( 'edit_posts' ) ) {
                ?>
                    <div class="cvmm-main-btn">
                        <a class="button-primary" href="<?php echo esc_url( admin_url().'/post-new.php?post_type=page' ); ?>" target="_blank">
                            <?php echo esc_html__( 'Create first template', 'wp-magazine-modules-lite' ); ?>
                        </a>
                    </div><!-- .cvmm-main-btn -->
                <?php
            }
                ?>
                    <div class="cvmm-main-btn">
                        <a class="button-primary" href="<?php echo esc_url( 'http://demo.codevibrant.com/plugins/wp-magazine-modules/' ); ?>" target="_blank">
                            <?php echo esc_html__( 'View Demos', 'wp-magazine-modules-lite' ); ?>
                        </a>
                    </div><!-- .cvmm-main-btn -->
                    <div class="cvmm-main-btn">
                        <a class="button-primary" href="<?php echo esc_url( '//docs.codevibrant.com/plugins/wp-magazine-modules' ); ?>" target="_blank">
                            <?php echo esc_html__( 'Documentation', 'wp-magazine-modules-lite' ); ?>
                        </a>
                    </div><!-- .cvmm-main-btn -->
                <?php
        echo '</div>';
    ?>
</div><!-- .cvmm-dashboard -->