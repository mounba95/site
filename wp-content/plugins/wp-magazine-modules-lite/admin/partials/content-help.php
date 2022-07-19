<?php
/**
 * Content for help section in admin area.
 *
 * @package WP Magazine Modules Lite
 * @since 1.0.0
 * 
 */
?>
<div id="cvmm-help" style="display:none">
    <h2 class="cvmm-admin-title">
        <?php echo esc_html__( 'Do you need any help related to our plugin ?', 'wp-magazine-modules-lite' ); ?>
    </h2>
    <?php
        echo '<div class="cvmm-admin-img">';
            echo '<img src="'.esc_url( plugins_url( 'includes/assets/images/support-img.jpg', dirname(__DIR__) ) ).'">';
        echo '</div>';

        echo '<div class="cvmm-admin-box-wrapper">';
            echo '<div class="cvmm-admin-fields">';
                echo esc_html__( 'Our documentation gives all the necessary detailed information to get you started. It provides an elaborated overview on plugin features, how to use those features and how to troubleshoot errors.', 'wp-magazine-modules-lite' );
                echo '<div class="cvmm-main-btn">';
                    echo '<a class="button-primary" href="'.esc_url( '//docs.codevibrant.com/plugins/wp-magazine-modules/' ).'" target="_blank">';
                        echo esc_html__( 'Documentation', 'wp-magazine-modules-lite' );
                    echo '</a>';
                echo '</div>';
            echo '</div>';

            echo '<div class="cvmm-admin-fields">';
                echo esc_html__( 'Our TeamSupport specialists are standing by to better understand your customer support needs and solve your problem for you. We aim to provide professional technical support  24/7 to satisfy your need and wish. We also offer support via email and social media.', 'wp-magazine-modules-lite' );
                echo '<div class="cvmm-main-btn">';
                    echo '<a class="button-primary" href="'.esc_url( '//codevibrant.com/contact/' ).'" target="_blank">';
                        echo esc_html__( 'Support', 'wp-magazine-modules-lite' );
                    echo '</a>';
                echo '</div>';
            echo '</div>';

            echo '<div class="cvmm-admin-fields">';
                echo esc_html__( 'Here are our some plugin related latest blogs.', 'wp-magazine-modules-lite' );
                echo '<div class="cvmm-main-btn">';
                    echo '<a class="button-primary" href="'.esc_url( '//wpallresources.com/' ).'" target="_blank">';
                        echo esc_html__( 'Wpallresources', 'wp-magazine-modules-lite' );
                    echo '</a>';
                echo '</div>';
            echo '</div>';
        echo '</div>';
    ?>
</div><!-- .cvmm-help -->