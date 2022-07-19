/**
 * Elementor live preview handler
 * 
 */
 jQuery(document).ready(function($) {
    if( window.elementorFrontend ) {
        if( typeof( elementorFrontend.hooks ) != 'undefined' ) {
            /**
             * Masonry elementor preview
             * 
             */
             elementorFrontend.hooks.addAction( 'frontend/element_ready/cv-masonry-blog-post-layout.default', function( $scope, $ ) {
                var masonryContainer = $scope.find( '.cv-masonry-post-layout' );
                if( masonryContainer.length !== 0 ) {
                    masonryContainer.each( function() {
                        var Pid = $(this).attr('id');
                        var container = $( '#' + Pid + ' .cv-post-wrapper' );
                        container.imagesLoaded( function() {
                            container.masonry();
                        })
                    });
                }
            });
        }
    }
})