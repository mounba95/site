<?php
/**
 * List block layout two - php render.
 */
    if( $postMargin ) {
        $postClass = 'cv-post--imagemargin column--'.esc_html( $blockColumn );
    } else {
        $postClass = 'cv-post-no--imagemargin column--'.esc_html( $blockColumn );
    }
?>
    <div class="cv-post-wrapper <?php echo esc_html( $postClass ); ?>">
        <?php
            $taxonomies = get_taxonomies( array( 'object_type' => array( $posttype ) ) );
            foreach( $taxonomies as $taxonomy ) {
                $taxonomy_name = $taxonomy;
                break;
            }

            $list_post_args = array(
                'post_type'     => esc_html( $posttype ),
                'posts_per_page' => esc_attr( $postCount ),
                'order'         => esc_html( $order ),
                'orderby'       => esc_html( $orderBy ),
                'status'        => 'publish'
            );
            if( !empty( $postCategory ) && ( $posttype == 'post' ) ) {
                $list_post_args['cat'] = array( esc_html( $postCategory ) );
            } elseif( !empty( $postCategory ) ) {
                $list_post_args['tax_query'] = array( 
                    array( 'taxonomy' => esc_html( $taxonomy_name ),
                            'terms' => esc_html( $postCategory )
                ));
            }

            $list_post_query = new WP_Query( $list_post_args );
            if( !( $list_post_query->have_posts() ) ) {
                return esc_html__( 'No posts found', 'wp-blog-post-layouts' );
            }

            while( $list_post_query->have_posts() ) : $list_post_query->the_post();
                $post_id = get_the_ID();
                $post_format = get_post_format( $post_id );
                if( empty( $post_format ) ) {
                    $post_format = 'standard';
                }
                $author_id  = get_post_field( 'post_author', $post_id );
                $author_display_name = get_the_author_meta( 'display_name', $author_id );
                $author_url = get_author_posts_url( $author_id );
                
                if( $postFormatIcon ) {
                    $post_format .= ' cv-icon';
                }

                $getmetaIcon = ' cv-meta-icon-show';

                if( $posttype == 'post' ) {
                    $categories = get_the_category( $post_id );
                } else {
                    if( isset( $taxonomy_name ) ) {
                        $categories = get_the_terms( $post_id, $taxonomy_name );
                    } else {
                        $categories = '';
                    }
                }
                

                $tags = get_the_tags( $post_id );
                

                $comments_number = get_comments_number( $post_id );

                if( has_post_thumbnail() ) {
                    $image_url = get_the_post_thumbnail_url( $post_id, 'full' );
                } else {
                    $image_url = WPBLOG_POST_LAYOUTS_IMAGE;
                }
        ?>
                <article post-id="post-<?php echo esc_attr( $post_id ); ?>" class="cv-post post-format--<?php echo esc_html( $post_format ) ?>" itemscope itemtype="<?php echo esc_url( 'http://schema.org/articleBody' ); ?>">
                    <div class="cv-post-left-wrap">
                        <div class="cv-post-thumb">
                            <a href="<?php the_permalink(); ?>"><img src="<?php echo esc_url( $image_url ); ?>" alt="<?php the_title(); ?>"/></a>
                        </div>
                    </div><!-- .cv-post-left-wrap -->
                    <div class="cv-post-right-wrap">
                        <?php
                            if( $categoryOption && $categories ) {
                                echo '<div class="cv-post-cats-wrap">';
                                    foreach( $categories as $category ) :
                                        echo '<span class="cv-post-cat"><a href="'.esc_url( get_term_link( $category->term_id ) ).'">'.esc_html( $category->name ).'</a></span>';
                                    endforeach;
                                echo '</div>';
                            }
                        ?>
                        <h2 class="cv-post-title">
                            <a href="<?php the_permalink(); ?>" target="_self">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        <div class="cv-post-meta<?php echo esc_html( $getmetaIcon ); ?>">
                            <?php
                                if( $dateOption ) {
                                    echo '<span class="cv-post-date cv-post-meta-item" itemprop="datePublished">';
                                        echo '<a href="'.esc_url( get_the_permalink() ).'">'.get_the_date().'</a>';
                                    echo '</span>';
                                }

                                if( $authorOption ) {
                                    echo '<span class="cv-post-author-name cv-post-meta-item" itemprop="author">';
                                        esc_html_e( 'By:', 'wp-blog-post-layouts' );
                                        echo '<a href="'.esc_url( $author_url ).'">';
                                        echo esc_html( $author_display_name );
                                        echo '</a>';
                                    echo '</span>';
                                }

                                if( $tagsOption && $tags ) {
                                    echo '<span class="cv-post-tags-wrap cv-post-meta-item">';
                                    foreach( $tags as $tag ) :
                                        echo '<span class="cv-post-tag"><a href="'.esc_url( get_tag_link( $tag->term_id ) ).'">'.esc_html( $tag->name ).'</a></span>';
                                    endforeach;
                                    echo '</span>';
                                }

                                if( $commentOption ) {
                                    echo '<span class="cv-post-comments-wrap cv-post-meta-item">';
                                        echo '<a href="'.esc_url( get_the_permalink() ).'/#comments">';
                                            echo esc_attr( $comments_number );
                                            echo '<span class="cv-comment-txt">'.esc_html__( "Comments", "blog-post-layouts" ).'</span>';
                                        echo '</a>';
                                    echo '</span>';
                                }
                            ?>
                        </div>
                        <?php
                            echo '<div class="cv-post-content" itemprop="description">';
                                if( $contentType == 'content' ) {
                                    echo wp_trim_words( get_the_content(), $wordCount );
                                } else {
                                    echo wp_trim_words( get_the_excerpt(), $wordCount );
                                }
                            echo '</div>';
                        ?>
                        <?php
                            if( !empty( $buttonLabel ) ) {
                                echo '<div class="cv-read-more"><a href='.esc_url( get_the_permalink() ).'>'.esc_html( $buttonLabel );
                                    if( $postButtonIcon ) {
                                        echo '<i class="fas fa-arrow-right"></i>';
                                    }
                                echo '</a></div>';
                            }
                        ?>
                    </div><!-- .cv-post-right-wrap -->
                </article>
        <?php
            endwhile;
        ?>
    </div>