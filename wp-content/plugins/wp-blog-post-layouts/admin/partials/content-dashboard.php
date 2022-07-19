<?php
/**
 * Content for dashboard section in admin area.
 */
?>
<div id="cv-dashboard">
    <h2 class="cv-admin-title">
        <?php
            esc_html_e( 'Get Started with WP Blog Post Layouts', 'wp-blog-post-layouts' );
        ?>
    </h2>
    <div class="cv-admin-desc">
        <?php
            esc_html_e( 'Thank you so much for installing the WP Blog Post Layouts Plugin. We have designed and developed the most impressive post-layout designs for Gutenberg and Elementor ! If you have any confusions, please check out our documentation on below link:', 'wp-blog-post-layouts' );
        ?>
    </div>
    <?php

        echo '<div class="cv-admin-img">';
            echo '<img src="'.esc_url( plugins_url( 'includes/assets/images/dashboard-img.jpg', dirname(__DIR__) ) ).'">';
        echo '</div>';

        echo '<div class="cv-main-btn-wrap">';
            if( current_user_can( 'edit_posts' ) ) {
                ?>
                    <div class="cv-main-btn">
                        <a class="button-primary" href="<?php echo esc_url( admin_url().'/post-new.php?post_type=page' ); ?>" target="_blank">
                            <?php esc_html_e( 'Create first template', 'wp-blog-post-layouts' ); ?>
                        </a>
                    </div><!-- .cv-main-btn -->
                <?php
            }
                ?>
                    <div class="cv-main-btn">
                        <a class="button-primary" href="<?php echo esc_url( 'http://demo.codevibrant.com/plugins/blog-post-layouts/' ); ?>" target="_blank">
                            <?php esc_html_e( 'View Demos', 'wp-blog-post-layouts' ); ?>
                        </a>
                    </div><!-- .cv-main-btn -->
                    <div class="cv-main-btn">
                        <a class="button-primary" href="<?php echo esc_url( '//docs.codevibrant.com/plugins/blog-post-layouts' ); ?>" target="_blank">
                            <?php esc_html_e( 'Documentation', 'wp-blog-post-layouts' ); ?>
                        </a>
                    </div><!-- .cv-main-btn -->
                <?php
        echo '</div>';
    ?>
</div><!-- .cv-dashboard -->