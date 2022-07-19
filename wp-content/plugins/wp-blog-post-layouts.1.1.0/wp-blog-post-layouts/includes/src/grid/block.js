/**
 * Register grid post layout block. 
 */
import Inspector from './components/inspector';
import Edit from './components/edit';
import Icons from './../../assets/cv-block-icons/icons';
import { getCommonAttributes } from '../block-base/block-base';

const { __ } = wp.i18n;
const { escapeHTML } = wp.escapeHtml;
const { registerBlockType } = wp.blocks;

// block attributes
const gridlayoutAttributes = getCommonAttributes()

registerBlockType( 'wpblog-post-layouts/cv-grid-blog-post-layout', {
    title: escapeHTML( __( 'CV Grid Post Layout', 'wp-blog-post-layouts' ) ),
    description: escapeHTML( __( 'Post collection with grid layout', 'wp-blog-post-layouts' ) ),
    icon: {
        background: '#fff',
        foreground: 'rgba(212,51,93,1)',
        src: Icons.Grid,
    },
    keywords: [
        escapeHTML( __( 'blog', 'wp-blog-post-layouts' ) ),
        escapeHTML( __( 'grid', 'wp-blog-post-layouts' ) ),
        escapeHTML( __( 'post', 'wp-blog-post-layouts' ) ),
        escapeHTML( __( 'layout', 'wp-blog-post-layouts' ) ),
    ],
    category: 'wpblog-post-layouts-blocks',
    attributes: gridlayoutAttributes,
    supports: { align: ["wide","full"] },
    example: {
        attributes: {
            'blockColumn' : 'two',
            'postCount' : 4,
            'dateOption' : false,
            'authorOption' : false,
            'categoryOption' : false,
            'tagsOption' : false,
            'commentOption' : false,
            'contentOption' : false,
            'buttonLabel'   : '',
            'postFormatIcon': false
        }
    },
    edit: props => {
        props.attributes.blockID = props.clientId
        return [
            <Inspector { ...props } />,
            <Edit { ...props } />
        ];
    },

    save: props => {
        return null;
    }
});