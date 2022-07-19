/**
 * Contains the base functions, hooks or components
 * 
 * @since 1.0.5
 */
const { __ } = wp.i18n;
const { escapeHTML } = wp.escapeHtml;

export const getCommonAttributes = () => {
    return {
        blockID: {
            type: 'string',
            default: ''
        },
        blockTitle: {
            type: 'string',
            default: ''
        },
        blockTitleLayout: {
            type: 'string',
            default: 'one'
        },
        posttype: {
            type: 'string',
            default: 'post'
        },
        postCategory: {
            type: 'string',
            default: ''
        },
        postCount: {
            type: 'integer',
            default: 4
        },
        contentType: {
            type: 'string',
            default: 'excerpt'
        },
        wordCount: {
            type: 'integer',
            default: 15
        },
        buttonLabel: {
            type: 'string',
            default: escapeHTML( __( 'Read more', 'wp-blog-post-layouts' ) )
        },
        orderBy: {
            type: 'string',
            default: 'date'
        },
        order: {
            type: 'string',
            default: 'desc'
        },
        dateOption: {
            type: 'boolean',
            default: true
        },
        authorOption: {
            type: 'boolean',
            default: true
        },
        categoryOption: {
            type: 'boolean',
            default: true
        },
        tagsOption: {
            type: 'boolean',
            default: true
        },
        commentOption: {
            type: 'boolean',
            default: true
        },
        layoutOption: {
            type: 'string',
            default: 'layout-one'
        },
        postFormatIcon: {
            type: 'boolean',
            default: true
        },
        postButtonIcon: {
            type: 'boolean',
            default: true
        },
        blockColumn: {
            type: 'string',
            default: 'two'
        },
        postMargin: {
            type: 'boolean',
            default: true
        },
        typographyOption: {
            type: 'boolean',
            default: true
        },
        blockTitleAlign : {
            type : 'string',
            default : 'left'
        },
        blockTitleFontFamily : {
            type : 'string',
            default : 'Yanone Kaffeesatz'
        },
        blockTitleFontWeight : {
            type : 'string',
            default : '700'
        },
        blockTitleFontSize : {
            type : 'number',
            default : 32
        },
        blockTitleFontStyle : {
            type : 'string',
            default : 'normal'
        },
        blockTitleTextTransform : {
            type : 'string',
            default : 'Uppercase'
        },
        blockTitleTextDecoration : {
            type : 'string',
            default : 'none'
        },
        blockTitleColor : {
            type : 'string',
            default : '#3b3b3b'
        },
        blockTitleLineHeight : {
            type : 'number',
            default : 1.5
        },
        blockTitleBorderColor: {
            type : 'string',
            default : '#f47e00'
        },
        titleTextAlign: {
            type: 'string',
            default: 'left'
        },
        titleFontFamily: {
            type: 'string',
            default: 'Yanone Kaffeesatz'
        },
        titleFontWeight: {
            type: 'string',
            default: '700'
        },
        titleFontSize: {
            type: 'number',
            default: 28
        },
        titleFontStyle: {
            type: 'string',
            default: 'normal'
        },
        titleTextTransform: {
            type: 'string',
            default: 'capitalize'
        },
        titleTextDecoration: {
            type: 'string',
            default: 'none'
        },
        titleFontColor: {
            type: 'string',
            default: '#333333'
        },
        titleHoverColor: {
            type: 'string',
            default: '#f47e00'
        },
        titlelineHeight: {
            type: 'number',
            default: 1.5
        },
        metaTextAlign: {
            type: 'string',
            default: 'left'
        },
        metaFontFamily: {
            type: 'string',
            default: 'Roboto'
        },
        metaFontWeight: {
            type: 'string',
            default: '400'
        },
        metaFontSize: {
            type: 'number',
            default: 14
        },
        metaFontStyle: {
            type: 'string',
            default: 'normal'
        },
        metaTextTransform: {
            type: 'string',
            default: 'capitalize'
        },
        metaTextDecoration: {
            type: 'string',
            default: 'none'
        },
        metaFontColor: {
            type: 'string',
            default: '#434343'
        },
        metaHoverColor: {
            type: 'string',
            default: '#f47e00'
        },
        metalineHeight: {
            type: 'number',
            default: 1.8
        },
        descTextAlign: {
            type: 'string',
            default: 'left'
        },
        descFontFamily: {
            type: 'string',
            default: 'Roboto'
        },
        descFontWeight: {
            type: 'string',
            default: '400'
        },
        descFontSize: {
            type: 'number',
            default: 15
        },
        descFontStyle: {
            type: 'string',
            default: 'normal'
        },
        descTextTransform: {
            type: 'string',
            default: 'none'
        },
        descTextDecoration: {
            type: 'string',
            default: 'none'
        },
        descFontColor: {
            type: 'string',
            default: '#3b3b3b'
        },
        desclineHeight: {
            type: 'number',
            default: 2
        },
        buttonTextAlign: {
            type: 'string',
            default: 'left'
        },
        buttonFontFamily: {
            type: 'string',
            default: 'Roboto'
        },
        buttonFontWeight: {
            type: 'string',
            default: '400'
        },
        buttonFontSize: {
            type: 'number',
            default: 15
        },
        buttonTextTransform: {
            type: 'string',
            default: 'none'
        },
        buttonFontColor: {
            type: 'string',
            default: '#3b3b3b'
        },
        buttonHoverColor: {
            type: 'string',
            default: '#3b3b3b'
        },
        buttonBackgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        buttonBackgroundHoverColor: {
            type: 'string',
            default: '#f47e00'
        },
        buttonPaddingTop: {
            type: 'string',
            default: '2'
        },
        buttonPaddingRight: {
            type: 'string',
            default: '10'
        },
        buttonPaddingBottom: {
            type: 'string',
            default: '2'
        },
        buttonPaddingLeft: {
            type: 'string',
            default: '10'
        },
        buttonBorderType: {
            type: 'string',
            default: 'solid'
        },
        buttonBorderWeight: {
            type: 'string',
            default: '1'
        },
        buttonBorderColor: {
            type: 'string',
            default: 'transparent'
        },
        buttonBorderHoverColor: {
            type: 'string',
            default: '#f47e00'
        }
    }
}