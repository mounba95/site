<?php
/**
 * Add dynamic css for each block;
 *
 * @since 1.0.0
 * @package WP Blog Post Layouts
 * 
 */

if( !class_exists( 'Wpblog_Post_Layouts_Dynamic_Css' ) ):
    class Wpblog_Post_Layouts_Dynamic_Css {
        /**
         * Instance
         *
         * @access private
         * @static
         *
         * @var Wpblog_Post_Layouts_Dynamic_Css The single instance of the class.
         */
        private static $_instance = null;

        /**
         * Ensures only one instance of the class is loaded or can be loaded.
         *
         * @access public
         * @static
         *
         * @return Wpblog_Post_Layouts_Dynamic_Css An instance of the class.
         */
        public static function instance() {
            if ( is_null( self::$_instance ) ) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }
        
        /**
         * Run hooks necessary for dynamic css.
         *
         * @since    1.0.0
         * @access   public
         *
         * @return void
         */
        public function __construct() {
            add_action( 'wp_enqueue_scripts', array( $this, 'add_dynamic_css' ), 99 );
        }

        /**
         * Add dynamic styles of the block.
         */
        public function add_dynamic_css() {
            global $post;
            if( !isset( $post->post_content ) ) {
                return;
            }
            $cv_blocks = parse_blocks( $post->post_content);
            $output_css = '';
            foreach( $cv_blocks as $cv_block ) {
                $cv_block_name = $cv_block['blockName'];
                if( $cv_block_name == 'wpblog-post-layouts/cv-grid-blog-post-layout' || $cv_block_name == 'wpblog-post-layouts/cv-list-blog-post-layout' || $cv_block_name == 'wpblog-post-layouts/cv-masonry-blog-post-layout' ) {
                    $cv_block_attributes = $cv_block['attrs'];
                    extract( $cv_block_attributes );
                    $blockTitleAlign = ( !isset( $blockTitleAlign ) ? 'left' : $blockTitleAlign );
                    $output_css .= ".block-".esc_html( $blockID )." .cv-block-title{
                        text-align: ".esc_attr( $blockTitleAlign ).";
                    }\n";
                    if( isset( $typographyOption ) ) {
                        
                        $blockTitleFontFamily = ( !isset( $blockTitleFontFamily ) ? 'Yanone Kaffeesatz' : $blockTitleFontFamily );
                        $blockTitleFontWeight = ( !isset( $blockTitleFontWeight ) ? '700' : $blockTitleFontWeight );
                        $blockTitleFontSize = ( !isset( $blockTitleFontSize ) ? 32 : $blockTitleFontSize );
                        $blockTitleFontStyle = ( !isset( $blockTitleFontStyle ) ? 'normal' : $blockTitleFontStyle );
                        $blockTitleTextTransform = ( !isset( $blockTitleTextTransform ) ? 'Uppercase' : $blockTitleTextTransform );
                        $blockTitleTextDecoration = ( !isset( $blockTitleTextDecoration ) ? 'none' : $blockTitleTextDecoration );
                        $blockTitleColor = ( !isset( $blockTitleColor ) ? '#3b3b3b' : $blockTitleColor );
                        $blockTitleLineHeight = ( !isset( $blockTitleLineHeight ) ? 1.5 : $blockTitleLineHeight );
                        $blockTitleBorderColor = ( !isset( $blockTitleBorderColor ) ? '#f47e00' : $blockTitleBorderColor );

                        $titleTextAlign = ( !isset( $titleTextAlign ) ? 'left' : $titleTextAlign );
                        $titleFontFamily = ( !isset( $titleFontFamily ) ? 'Yanone Kaffeesatz' : $titleFontFamily );
                        $titleFontWeight = ( !isset( $titleFontWeight ) ? '700' : $titleFontWeight );
                        $titleFontSize = ( !isset( $titleFontSize ) ? 28 : $titleFontSize );
                        $titleFontStyle = ( !isset( $titleFontStyle ) ? 'normal' : $titleFontStyle );
                        $titleTextTransform = ( !isset( $titleTextTransform ) ? 'capitalize' : $titleTextTransform );
                        $titleTextDecoration = ( !isset( $titleTextDecoration ) ? 'none' : $titleTextDecoration );
                        $titleFontColor = ( !isset( $titleFontColor ) ? '#333333' : $titleFontColor );
                        $titleHoverColor = ( !isset( $titleHoverColor ) ? '#f47e00' : $titleHoverColor );
                        $titlelineHeight = ( !isset( $titlelineHeight ) ? 1.5 : $titlelineHeight );
                        
                        $metaTextAlign = ( !isset( $metaTextAlign ) ? 'left' : $metaTextAlign);
                        $metaFontFamily = ( !isset( $metaFontFamily ) ? 'Roboto' : $metaFontFamily );
                        $metaFontWeight = ( !isset( $metaFontWeight ) ? '400' : $metaFontWeight );
                        $metaFontSize = ( !isset( $metaFontSize ) ? 14 : $metaFontSize );
                        $metaFontStyle = ( !isset( $metaFontStyle ) ? 'normal' : $metaFontStyle );
                        $metaTextTransform = ( !isset( $metaTextTransform ) ? 'capitalize' : $metaTextTransform );
                        $metaTextDecoration = ( !isset( $metaTextDecoration ) ? 'none' : $metaTextDecoration );
                        $metaFontColor = ( !isset( $metaFontColor ) ? '#434343' : $metaFontColor );
                        $metaHoverColor = ( !isset( $metaHoverColor ) ? '#f47e00' : $metaHoverColor );
                        $metalineHeight = ( !isset( $metalineHeight ) ? 1.8 : $metalineHeight );
                        
                        $descTextAlign = ( !isset( $descTextAlign ) ? 'left' : $descTextAlign );
                        $descFontFamily = ( !isset( $descFontFamily ) ? 'Roboto' : $descFontFamily );
                        $descFontWeight = ( !isset( $descFontWeight ) ? '400' : $descFontWeight );
                        $descFontSize = ( !isset( $descFontSize ) ? 15 : $descFontSize );
                        $descFontStyle = ( !isset( $descFontStyle ) ? 'normal' : $descFontStyle );
                        $descTextTransform = ( !isset( $descTextTransform ) ? 'none' : $descTextTransform );
                        $descTextDecoration = ( !isset( $descTextDecoration ) ? 'none' : $descTextDecoration );
                        $descFontColor = ( !isset( $descFontColor ) ? '#3b3b3b' : $descFontColor );
                        $desclineHeight = ( !isset( $desclineHeight ) ? 2 : $desclineHeight );
                        
                        $buttonTextAlign = ( !isset( $buttonTextAlign ) ? 'left' : $buttonTextAlign );
                        $buttonFontFamily = ( !isset( $buttonFontFamily ) ? 'Roboto' : $buttonFontFamily );
                        $buttonFontWeight = ( !isset( $buttonFontWeight ) ? '400' : $buttonFontWeight );
                        $buttonFontSize = ( !isset( $buttonFontSize ) ? 15 : $buttonFontSize );
                        $buttonTextTransform = ( !isset( $buttonTextTransform ) ? 'none' : $buttonTextTransform );
                        $buttonFontColor = ( !isset( $buttonFontColor ) ? '#3b3b3b' : $buttonFontColor );
                        $buttonHoverColor = ( !isset( $buttonHoverColor ) ? '#3b3b3b' : $buttonHoverColor );
                        $buttonBackgroundHoverColor = ( !isset( $buttonBackgroundHoverColor ) ? '#f47e00' : $buttonBackgroundHoverColor );
                        $buttonBackgroundColor = ( !isset( $buttonBackgroundColor ) ? 'transparent' : $buttonBackgroundColor );
                        $buttonPaddingTop = ( !isset( $buttonPaddingTop ) ? '2' : $buttonPaddingTop );
                        $buttonPaddingRight = ( !isset( $buttonPaddingRight ) ? '10' : $buttonPaddingRight );
                        $buttonPaddingBottom = ( !isset( $buttonPaddingBottom ) ? '2' : $buttonPaddingBottom );
                        $buttonPaddingLeft = ( !isset( $buttonPaddingLeft ) ? '10' : $buttonPaddingLeft );
                        $buttonBorderType = ( !isset( $buttonBorderType ) ? 'solid' : $buttonBorderType );
                        $buttonBorderWeight = ( !isset( $buttonBorderWeight ) ? '1' : $buttonBorderWeight );
                        $buttonBorderColor = ( !isset( $buttonBorderColor ) ? 'transparent' : $buttonBorderColor );
                        $buttonBorderHoverColor = ( !isset( $buttonBorderHoverColor ) ? '#f47e00' : $buttonBorderHoverColor );
                    
                        $output_css .= ".block-".esc_html( $blockID )." .cv-block-title{
                            font-family: ".esc_attr( $blockTitleFontFamily ).";
                            font-weight: ".esc_attr( $blockTitleFontWeight ).";
                            font-size: ".esc_attr( $blockTitleFontSize )."px;
                            font-style: ".esc_attr( $blockTitleFontStyle ).";
                            text-transform: ".esc_attr( $blockTitleTextTransform ).";
                            text-decoration: ".esc_attr( $blockTitleTextDecoration ).";
                            color: ".esc_attr( $blockTitleColor ).";
                            line-height: ".esc_attr( $blockTitleLineHeight ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-block-title span::before{
                            background: ".esc_attr( $blockTitleBorderColor ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-block-title span::after{
                            background: ".esc_attr( $blockTitleBorderColor ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-block-title.layout--four span{
                            border-color: ".esc_attr( $blockTitleBorderColor )." !important;
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-block-title.layout--four span:after{
                            border-color: ".esc_attr( $blockTitleBorderColor )." !important;
                            background: #ffffff !important;
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-block-title.layout--five span:before{
                            border-color: ".esc_attr( $blockTitleBorderColor )." !important;
                            border-left: none;
                            background: #ffffff !important;
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-block-title.layout--five span:after{
                            border-color: ".esc_attr( $blockTitleBorderColor )." !important;
                            border-left: none;
                            background: #ffffff !important;
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-post-title a{
                            text-align: ".esc_attr( $titleTextAlign ).";
                            font-family: ".esc_attr( $titleFontFamily ).";
                            font-weight: ".esc_attr( $titleFontWeight ).";
                            font-size: ".esc_attr( $titleFontSize )."px;
                            font-style: ".esc_attr( $titleFontStyle ).";
                            text-transform: ".esc_attr( $titleTextTransform ).";
                            text-decoration: ".esc_attr( $titleTextDecoration ).";
                            color: ".esc_attr( $titleFontColor ).";
                            line-height: ".esc_attr( $titlelineHeight ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-post-title a:hover{
                            color: ".esc_attr( $titleHoverColor ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-post-meta a{
                            text-align: ".esc_attr( $metaTextAlign ).";
                            font-family: ".esc_attr( $metaFontFamily ).";
                            font-weight: ".esc_attr( $metaFontWeight ).";
                            font-size: ".esc_attr( $metaFontSize )."px;
                            font-style: ".esc_attr( $metaFontStyle ).";
                            text-transform: ".esc_attr( $metaTextTransform ).";
                            text-decoration: ".esc_attr( $metaTextDecoration ).";
                            color: ".esc_attr( $metaFontColor ).";
                            line-height: ".esc_attr( $metalineHeight ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-post-meta > span{
                            text-align: ".esc_attr( $metaTextAlign ).";
                            font-family: ".esc_attr( $metaFontFamily ).";
                            font-weight: ".esc_attr( $metaFontWeight ).";
                            font-size: ".esc_attr( $metaFontSize )."px;
                            font-style: ".esc_attr( $metaFontStyle ).";
                            text-transform: ".esc_attr( $metaTextTransform ).";
                            text-decoration: ".esc_attr( $metaTextDecoration ).";
                            color: ".esc_attr( $metaFontColor ).";
                            line-height: ".esc_attr( $metalineHeight ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-post-meta a:hover{
                            color: ".esc_attr( $metaHoverColor ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-post-meta > span:hover{
                            color: ".esc_attr( $metaHoverColor ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-post-content{
                            text-align: ".esc_attr( $descTextAlign ).";
                            font-family: ".esc_attr( $descFontFamily ).";
                            font-weight: ".esc_attr( $descFontWeight ).";
                            font-size: ".esc_attr( $descFontSize )."px;
                            font-style: ".esc_attr( $descFontStyle ).";
                            text-transform: ".esc_attr( $descTextTransform ).";
                            text-decoration: ".esc_attr( $descTextDecoration ).";
                            color: ".esc_attr( $descFontColor ).";
                            line-height: ".esc_attr( $desclineHeight ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-read-more a{
                            font-family: ".esc_attr( $buttonFontFamily ).";
                            font-weight: ".esc_attr( $buttonFontWeight ).";
                            font-size: ".esc_attr( $buttonFontSize )."px;
                            text-transform: ".esc_attr( $buttonTextTransform ).";
                            color: ".esc_attr( $buttonFontColor ).";
                            background-color: ".esc_attr( $buttonBackgroundColor ).";
                            padding-top: ".esc_attr( $buttonPaddingTop )."px;
                            padding-right: ".esc_attr( $buttonPaddingRight )."px;
                            padding-bottom: ".esc_attr( $buttonPaddingBottom )."px;
                            padding-left: ".esc_attr( $buttonPaddingLeft )."px;
                            border-style: ".esc_attr( $buttonBorderType ).";
                            border-width: ".esc_attr( $buttonBorderWeight )."px;
                            border-color: ".esc_attr( $buttonBorderColor ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-read-more{
                            text-align: ".esc_attr( $buttonTextAlign ).";
                        }\n";

                        $output_css .= ".block-".esc_html( $blockID )." .cv-read-more a:hover{
                            color: ".esc_attr( $buttonHoverColor ).";
                            background-color: ".esc_attr( $buttonBackgroundHoverColor ).";
                            border-color: ".esc_attr( $buttonBorderHoverColor ).";
                        }\n";

                        unset( $blockTitleFontFamily, $blockTitleFontWeight, $blockTitleFontSize, $blockTitleFontStyle, $blockTitleTextTransform, $blockTitleTextDecoration, $blockTitleColor, $blockTitleLineHeight, $blockTitleBorderColor, $titleTextAlign, $titleFontFamily, $titleFontWeight, $titleFontSize, $titleFontStyle, $titleTextTransform, $titleTextDecoration, $titleFontColor, $titleHoverColor, $titlelineHeight, $metaTextAlign, $metaFontFamily, $metaFontWeight, $metaFontSize, $metaFontStyle, $metaTextTransform, $metaTextDecoration, $metaFontColor, $metaHoverColor, $metalineHeight, $descTextAlign, $descFontFamily, $descFontWeight, $descFontSize, $descFontStyle, $descTextTransform, $descTextDecoration, $descFontColor, $desclineHeight, $buttonTextAlign, $buttonFontFamily, $buttonFontSize, $buttonTextTransform, $buttonFontColor, $buttonHoverColor, $buttonBackgroundColor, $buttonBackgroundHoverColor, $buttonPaddingTop, $buttonPaddingRight, $buttonPaddingBottom, $buttonPaddingLeft, $buttonBorderType, $buttonBorderWeight, $buttonBorderColor, $buttonBorderHoverColor, $typographyOption );
                    }
                    unset( $blockTitleAlign);
                }
            }

            $refine_output_css = $this->css_strip_whitespace( $output_css );
            wp_add_inline_style( 'wpblog-post-layouts-block-style', wp_strip_all_tags( $refine_output_css ) );
        }

        /**
         * Get minified css and removed space
         *
         * @since 1.0.0
         */
        public function css_strip_whitespace( $css ) {
            $replace = array(
                "#/\*.*?\*/#s" => "",  // Strip C style comments.
                "#\s\s+#"      => " ", // Strip excess whitespace.
            );
            $search = array_keys( $replace );
            $css = preg_replace( $search, $replace, $css );

            $replace = array(
                ": "  => ":",
                "; "  => ";",
                " {"  => "{",
                " }"  => "}",
                ", "  => ",",
                "{ "  => "{",
                ";}"  => "}", // Strip optional semicolons.
                ",\n" => ",", // Don't wrap multiple selectors.
                "\n}" => "}", // Don't wrap closing braces.
                "} "  => "}\n", // Put each rule on it's own line.
            );
            $search = array_keys( $replace );
            $css = str_replace( $search, $replace, $css );

            return trim( $css );
        }
    }
    Wpblog_Post_Layouts_Dynamic_Css::instance();
endif;