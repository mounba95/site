<?php
/**
 * Content for review section in admin area.
 *
 * @package WP Magazine Modules Lite
 * @since 1.0.0
 * 
 */
?>
<div id="cvmm-review" style="display:none">
    <h2 class="cvmm-admin-title">
        <?php echo esc_html__( 'Give a review & motivate us', 'wp-magazine-modules-lite' ); ?>
    </h2>
    <?php
    echo '<div class="cvmm-admin-img">';
        echo '<img src="'.esc_url( plugins_url( 'includes/assets/images/review-img.jpg', dirname(__DIR__) ) ).'">';
    echo '</div>';

        echo sprintf( esc_html__( '%1s Send us your Feedback %2s', 'wp-magazine-modules-lite' ), '<h2>', '</h2>' );
        echo '<div class="cvmm-admin-fields">';
            echo sprintf( esc_html__( "%2sPlease let us know about your experience with WP Magazine Modules Lite so far. We love to hear positive things but we're also thankful for the negatives. Your feedback will alert us to problems and help us improve our WP Magazine Modules Lite.
            Are you happy with us? Would you mind taking a moment to leave us a rating? It will only take a minute. We look forward to receiving feedback from you to make WP Magazine Modules Lite even more useful for you and others. !%2s", 'wp-magazine-modules-lite' ), '<p>', '</p>' );

            echo sprintf( esc_html__( 'Leave a review. %1s here %2s', 'wp-magazine-modules-lite' ), '<a href="'.esc_url( '//wordpress.org/support/plugin/wp-magazine-modules-lite/reviews/?filter=5' ).'">', '</a>' ); 

            echo sprintf( esc_html__( '%1sThanks for choosing WP Magazine Modules Lite%2s', 'wp-magazine-modules-lite' ), '<em class="cvmm-note">', '</em>' );
        echo '</div>';
    ?>
</div><!-- .cvmm-review -->