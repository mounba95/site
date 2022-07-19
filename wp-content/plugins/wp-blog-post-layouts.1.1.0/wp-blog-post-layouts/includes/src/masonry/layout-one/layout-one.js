/**
 * Masonry block layout one(default) - editor preview
 */

const { Component } = wp.element;
const { __ } = wp.i18n;
const { escapeHTML } = wp.escapeHtml;
const { withSelect } = wp.data
const { decodeEntities } = wp.htmlEntities;
import Masonry from 'react-masonry-component';

class MasonryOne extends Component {
    constructor( props ) {
        super(...arguments)
    }

    render() {
        const { contentType, wordCount, dateOption, authorOption , categoryOption, tagsOption, commentOption, buttonLabel, postFormatIcon, postButtonIcon, blockColumn, postMargin } = this.props.attributes
        const { posts, authors } = this.props

        if( !posts ) {
            return escapeHTML( __( 'Loading posts', 'wp-blog-post-layouts' ) )
        }

        const hasPosts = Array.isArray(posts) && posts.length;
        if( !hasPosts ) {
            return escapeHTML( __( 'No posts found', 'wp-blog-post-layouts' ) )
        }
        
        const getPostAuthorName = ( author_id ) => {
            for( let author in authors ){
                if( authors[author].id === author_id ) {
                    return authors[author].name;
                }
            }
        };

        const getPostAuthorUrl = ( author_id ) => {
            for(let author in authors){
                if( authors[author].id === author_id ) {
                    return authors[author].link;
                }
            }
        };

        const content = posts.map( ( post, index ) => {
            let image_url = post.blog_post_layout_featured_media_urls.full['0']
            if( typeof image_url === 'undefined' ) {
                image_url = BlocksBuildObject.defaultImage
            }
            let author_name
            let author_url
            if( typeof post.author !== 'undefined' ) {
                author_name = getPostAuthorName( post.author )
                author_url = getPostAuthorUrl( post.author )
            }
            let getcategoryids = post.categories
            let getcategories
            if ( ( typeof post.categories !== 'undefined' ) && ( post.categories != null ) ) {
                getcategories = post.categories_names
            }
            
            let gettagids = post.tags
            let gettags
            if (typeof post.tags !== 'undefined') {
                gettags = post.tags_names
            }
            let getformat
            if (typeof post.tags !== 'undefined') {
                getformat = post.format
            }

            if( postFormatIcon ) {
                getformat += ' cv-icon'
            }
            
            let getmetaIcon = " cv-meta-icon-show"

            let hascategories = Array.isArray(getcategoryids) && getcategoryids.length && categoryOption;
            let hastags = Array.isArray(gettagids) && gettagids.length && tagsOption;
            
            return (
                <article id={`post-${post.id}`} class={ `cv-post post-format--${getformat}` }>
                    <div class="cv-post-thumb">
                        <a href={post.link}><img src={image_url} alt={decodeEntities( post.title.rendered.trim() )}/></a>
                    </div>
                    <h2 class="cv-post-title">
                        <a href={post.link} target="_self">
                            { decodeEntities( decodeEntities( post.title.rendered.trim() ) ) }
                        </a>
                    </h2>
                    <div class={ `cv-post-meta${getmetaIcon}` }>
                        { dateOption &&
                            <span class="cv-post-date cv-post-meta-item">
                                <a href={ `${post.link}` }>{ moment( post.date_gmt ).local().format('MMMM DD, Y') }</a>
                            </span>
                        }
                        { ( (typeof post.author !== 'undefined' ) && authorOption ) &&
                            <span class="cv-post-author-name cv-post-meta-item">{ escapeHTML( __( 'By:', 'wp-blog-post-layouts' ) )  }<a href={author_url} >{ author_name }</a></span>
                        }
                        {
                            ( () => { 
                                if( hascategories ) {
                                    return <span class="cv-post-cats-wrap cv-post-meta-item">{ getcategoryids.map( ( getcategoryid ) => {
                                        return <span class="cv-post-cat"><a href={getcategories[getcategoryid].link}>{ getcategories[getcategoryid].name }</a></span>
                                    } ) }</span>
                                }
                            }) ()
                        }
                        {
                            ( () => { 
                                if( hastags ) {
                                    return <span class="cv-post-tags-wrap cv-post-meta-item">{ gettagids.map( ( gettagid ) => {
                                        return <span class="cv-post-tag"><a href={gettags[gettagid].link}>{ gettags[gettagid].name }</a></span>
                                    } ) }</span>
                                }
                            }) ()
                        }
                        { ( (typeof post.comments_number !== 'undefined' ) && commentOption ) && 
                            <span class="cv-post-comments-wrap cv-post-meta-item">
                                <a href={ `${post.link}/#comments` }>
                                    { post.comments_number }
                                    <span class="cv-comment-txt">{ escapeHTML( __( 'Comments', 'wp-blog-post-layouts' ) ) }</span>
                                </a>
                            </span>
                        }
                    </div>
                    { ( typeof post[contentType] !== 'undefined' ) &&
                        <div class="cv-post-content" dangerouslySetInnerHTML={{ __html: post[contentType].rendered.trim().split(' ').slice(0,wordCount).join(' ') }} />
                    }
                    { buttonLabel &&
                        <div class="cv-read-more">
                            <a href={post.link}>{ buttonLabel }
                                { postButtonIcon &&
                                    <i class="fas fa-arrow-right"></i>
                                }
                            </a>
                        </div>
                    }
                </article>
            )
        });

        let postClass;
        if( postMargin ) {
            postClass = `cv-post--imagemargin column--${blockColumn}`
        } else {
            postClass = `cv-post-no--imagemargin column--${blockColumn}`
        }

        return <Masonry className={ `cv-post-wrapper ${postClass}` }>{ content }</Masonry>
    }
}

export default withSelect( ( select, props ) => {
    const { postCount, posttype, postCategory, orderBy, order } = props.attributes;
    const { getEntityRecords, getAuthors, getTaxonomies } = select( 'core' );
    let registeredCategories = getTaxonomies();
    var taxonomy_name = [];
    let restBase = null;
    if( registeredCategories ) {
        registeredCategories.map( (item ) => {
            if (item.types.includes(posttype)){
                taxonomy_name.push(item.slug);

                if (taxonomy_name.length === 1) {
                    restBase = item.rest_base;
                }
            }
        });
    }

    const PostsQuery = {
        order : order,
        orderby: orderBy,
        per_page: postCount,
    };

    if( postCategory ) {
        PostsQuery[restBase] = postCategory;
    }

    return {
        posts: getEntityRecords( 'postType', posttype, PostsQuery ),
        authors: getAuthors(),
    };
} )( MasonryOne );