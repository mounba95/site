/**
 * Handles admin scripts.
 */
jQuery(document).ready(function($){
    "use strict";

    var ispluginadminPage = $( 'body' ).hasClass( 'toplevel_page_wp-blog-post-layouts' );
    if( ispluginadminPage ) {
        /**
         * Main tabs trigger
         */
        function admin_page_main_nav_trigger(){
            var last_segment = window.location.hash.substr(1);
            if( last_segment == '' ){
                return;
            }
            $( ".cv-nav-tab-wrapper ul li." + last_segment ).siblings().removeClass( "isActive" );
            $( ".cv-nav-tab-wrapper ul li." + last_segment ).addClass( "isActive" );
            $( "#cv-main-content #" + last_segment ).siblings().hide();
            $( "#cv-main-content #" + last_segment ).show();
        }
        admin_page_main_nav_trigger();

        $( "#cv-main-header .cv-nav-tab-wrapper ul li" ).on( 'click', function(){
            var dis = $(this);
            dis.siblings().removeClass( "isActive" );
            dis.addClass( "isActive" );
            var content_attr = dis.find("a").attr("href");
            var main_content = $( "#cv-main-content " + content_attr );
            main_content.siblings().hide();
            main_content.show();
        });
    }
})