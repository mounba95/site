<?php
/**
 * Content for review section in admin area.
 */
?>
<div id="cv-review" style="display:none">
    <h2 class="cv-admin-title">
        <?php esc_html_e( 'Give a review & motivate us', 'wp-blog-post-layouts' ); ?>
    </h2>
    <?php
    echo '<div class="cv-admin-img">';
        echo '<img src="'.esc_url( plugins_url( 'includes/assets/images/review-img.jpg', dirname(__DIR__) ) ).'">';
    echo '</div>';

        echo sprintf( esc_html__( '%1s Send us your Feedback %2s', 'wp-blog-post-layouts' ), '<h2>', '</h2>' );
        echo '<div class="cv-admin-fields">';
            echo sprintf( esc_html__( "%2sPlease let us know about your experience with Blog Post Layout so far. We love to hear positive things but we're also thankful for the negatives. Your feedback will alert us to problems and help us improve our WP Blog Post Layouts.
            Are you happy with us? Would you mind taking a moment to leave us a rating? It will only take a minute. We look forward to receiving feedback from you to make WP Blog Post Layouts even more useful for you and others. !%2s", 'wp-blog-post-layouts' ), '<p>', '</p>' );
            echo '<p><a class="button-primary" href="'.esc_url( '//wordpress.org/support/plugin/wp-blog-post-layouts/reviews/?filter=5' ).'" target="_blank">'.esc_html__( 'Review Plugin', 'wp-blog-post-layouts' ).'</a></p>';
            echo sprintf( esc_html__( '%1sThanks for choosing WP Blog Post Layouts%2s', 'wp-blog-post-layouts' ), '<em class="cv-note">', '</em>' );
        echo '</div>';
    ?>
</div><!-- .cv-review -->