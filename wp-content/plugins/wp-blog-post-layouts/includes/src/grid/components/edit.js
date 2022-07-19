/**
 * Block View wrapper
 */
import GridOne from '../layout-one/layout-one'
import GridTwo from '../layout-two/layout-two'
import GridThree from '../layout-three/layout-three'

const { Component, Fragment } = wp.element;
import WebFont from 'webfontloader';
import { Style } from "react-style-tag";

export default class Edit extends Component {
    constructor( props ) {
        super( ...arguments )
    }

    enqueueGooglefonts() {
        const { typographyOption, blockTitleFontFamily, blockTitleFontWeight, titleFontFamily, titleFontWeight, metaFontFamily, metaFontWeight, descFontFamily, descFontWeight, buttonFontFamily, buttonFontWeight } = this.props.attributes;
        { typographyOption == false &&
            ( blockTitleFontFamily ) &&
                WebFont.load({
                    google: {
                        families: [`${blockTitleFontFamily}:${blockTitleFontWeight}`]
                    }
                });
            ( titleFontFamily ) &&
                WebFont.load({
                    google: {
                        families: [`${titleFontFamily}:${titleFontWeight}`]
                    }
                });
            ( metaFontFamily ) &&
                WebFont.load({
                    google: {
                        families: [`${metaFontFamily}:${metaFontWeight}`]
                    }
                });
            ( descFontFamily ) &&
                WebFont.load({
                    google: {
                        families: [`${descFontFamily}:${descFontWeight}`]
                    }
                });
            ( buttonFontFamily ) &&
                WebFont.load({
                    google: {
                        families: [`${buttonFontFamily}:${buttonFontWeight}`]
                    }
                });
        }
    }

    componentDidMount() {
        this.enqueueGooglefonts()
    }

    componentDidUpdate() {
        this.enqueueGooglefonts()
    }

    render() {
        const { blockID, blockTitle, blockTitleLayout, layoutOption, typographyOption, blockTitleAlign, blockTitleFontFamily, blockTitleFontWeight, blockTitleFontSize, blockTitleFontStyle, blockTitleTextTransform, blockTitleTextDecoration, blockTitleColor, blockTitleLineHeight, blockTitleBorderColor, titleTextAlign, titleFontFamily, titleFontWeight, titleFontSize, titleFontStyle, titleTextTransform, titleTextDecoration, titleFontColor, titleHoverColor, titlelineHeight, metaTextAlign, metaFontFamily, metaFontWeight, metaFontSize, metaFontStyle, metaTextTransform, metaTextDecoration, metaFontColor, metaHoverColor, metalineHeight, descTextAlign, descFontFamily, descFontWeight, descFontSize, descFontStyle, descTextTransform, descTextDecoration, descFontColor, desclineHeight, buttonTextAlign, buttonFontFamily, buttonFontWeight, buttonFontSize, buttonTextTransform, buttonFontColor, buttonHoverColor, buttonBackgroundColor, buttonBackgroundHoverColor, buttonPaddingTop, buttonPaddingRight, buttonPaddingBottom, buttonPaddingLeft, buttonBorderType, buttonBorderWeight, buttonBorderColor, buttonBorderHoverColor } = this.props.attributes;
        return (
            <Fragment>
                <Style id={ `${blockID}-block-title-style` }>
                    {`
                        .block-${blockID} .cv-block-title{
                            text-align: ${blockTitleAlign}
                        }
                    `}
                </Style>
                { typographyOption == false &&
                    <Style id={ `${blockID}-block-style` }>
                        {`
                        .block-${blockID} .cv-block-title{
                            font-family: ${blockTitleFontFamily}
                            font-weight: ${blockTitleFontWeight}
                            font-size: ${blockTitleFontSize}px
                            font-style: ${blockTitleFontStyle}
                            text-transform: ${blockTitleTextTransform}
                            text-decoration: ${blockTitleTextDecoration}
                            color: ${blockTitleColor}
                            line-height: ${blockTitleLineHeight}
                        }

                        .block-${blockID} .cv-block-title span::before{
                            background: ${blockTitleBorderColor}
                        }

                        .block-${blockID} .cv-block-title span::after{
                            background: ${blockTitleBorderColor}
                        }

                        .block-${blockID} .cv-block-title.layout--four span{
                            border-color: ${blockTitleBorderColor} !important;
                        }

                        .block-${blockID} .cv-block-title.layout--four span:after{
                            border-color: ${blockTitleBorderColor} !important;
                            background: #ffffff !important;
                        }

                        .block-${blockID} .cv-block-title.layout--five span:before{
                            border-color: ${blockTitleBorderColor} !important;
                            border-left: none;
                            background: #ffffff !important;
                        }

                        .block-${blockID} .cv-block-title.layout--five span:after{
                            border-color: ${blockTitleBorderColor} !important;
                            border-left: none;
                            background: #ffffff !important;
                        }

                        .block-${blockID} .cv-post-title a{
                            text-align: ${titleTextAlign}
                            font-family: ${titleFontFamily}
                            font-weight: ${titleFontWeight}
                            font-size: ${titleFontSize}px
                            font-style: ${titleFontStyle}
                            text-transform: ${titleTextTransform}
                            text-decoration: ${titleTextDecoration}
                            color: ${titleFontColor}
                            line-height: ${titlelineHeight}
                        }

                        .block-${blockID} .cv-post-title a:hover{
                            color: ${titleHoverColor}
                        }

                        .block-${blockID} .cv-post-meta a{
                            text-align: ${metaTextAlign}
                            font-family: ${metaFontFamily}
                            font-weight: ${metaFontWeight}
                            font-size: ${metaFontSize}px
                            font-style: ${metaFontStyle}
                            text-transform: ${metaTextTransform}
                            text-decoration: ${metaTextDecoration}
                            color: ${metaFontColor}
                            line-height: ${metalineHeight}
                        }

                        .block-${blockID} .cv-post-meta > span{
                            text-align: ${metaTextAlign}
                            font-family: ${metaFontFamily}
                            font-weight: ${metaFontWeight}
                            font-size: ${metaFontSize}px
                            font-style: ${metaFontStyle}
                            text-transform: ${metaTextTransform}
                            text-decoration: ${metaTextDecoration}
                            color: ${metaFontColor}
                            line-height: ${metalineHeight}
                        }

                        .block-${blockID} .cv-post-meta a:hover{
                            color: ${metaHoverColor}
                        }

                        .block-${blockID} .cv-post-meta > span:hover{
                            color: ${metaHoverColor}
                        }

                        .block-${blockID} .cv-post-content p{
                            text-align: ${descTextAlign}
                            font-family: ${descFontFamily}
                            font-weight: ${descFontWeight}
                            font-size: ${descFontSize}px
                            font-style: ${descFontStyle}
                            text-transform: ${descTextTransform}
                            text-decoration: ${descTextDecoration}
                            color: ${descFontColor}
                            line-height: ${desclineHeight}
                        }

                        .block-${blockID} .cv-read-more a{
                            font-family: ${buttonFontFamily}
                            font-weight: ${buttonFontWeight}
                            font-size: ${buttonFontSize}px
                            text-transform: ${buttonTextTransform}
                            color: ${buttonFontColor}
                            background-color: ${buttonBackgroundColor}
                            padding-top: ${buttonPaddingTop}px
                            padding-right: ${buttonPaddingRight}px
                            padding-bottom: ${buttonPaddingBottom}px
                            padding-left: ${buttonPaddingLeft}px
                            border-style: ${buttonBorderType}
                            border-width: ${buttonBorderWeight}px
                            border-color: ${buttonBorderColor}
                        }

                        .block-${blockID} .cv-read-more{
                            text-align: ${buttonTextAlign}
                        }

                        .block-${blockID} .cv-read-more a:hover{
                            color: ${buttonHoverColor}
                            background-color: ${buttonBackgroundHoverColor}
                            border-color: ${buttonBorderHoverColor}
                        }
                    `}
                    </Style>
                }
                <div id="cv-grid-post-layout" className={ `block-${blockID} cv-block cv-block-grid--${layoutOption}` }>
                    {
                        ( () => {
                            if( !!blockTitle ) {
                                return <h2 className={ `cv-block-title align--${blockTitleAlign} layout--${blockTitleLayout}` }><span>{ blockTitle }</span></h2>
                            }
                        }) ()
                    }
                    {
                        ( () => {
                            switch( layoutOption ) {
                                case 'layout-two' : return <GridTwo { ...this.props }/>
                                case 'layout-three' : return <GridThree { ...this.props }/>
                                default: return <GridOne { ...this.props }/>
                            }
                        }) ()
                    }
                </div>
            </Fragment>
        );
    }
}