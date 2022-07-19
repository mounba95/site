<?php
/**
 * Includes widget fields, render contents and callbacks for post grid layout.  
 * 
 */
class Wpblog_Post_Layouts_Grid_Element extends \Elementor\Widget_Base {

    /**
     * @return - name of the widget
     */
    public function get_name() {
        return 'cv-grid-blog-post-layout';
    }

    /**
     * @return - title of the widget
     */
    public function get_title() {
        return esc_html__( 'CV Grid Post Layout', 'wp-blog-post-layouts' );
    }

    /**
     * @return - icon for the widget
     */
    public function get_icon() {
        return 'cvicon-grid';
    }

    /**
     * @return - category name for the widget
     */
    public function get_categories() {
		return [ 'wpblog-post-layouts-elements' ];
    }

    /**
     * Get List of categories
     */
    public function cv_get_categories( $posttype ) {
        $categories_lists[''] = esc_html__( 'All', 'wp-blog-post-layouts' );
        $taxonomies = get_taxonomies( array( 'object_type' => array( $posttype ) ) );
        if( !empty( $taxonomies ) ) {
            foreach( $taxonomies as $taxonomy ) {
                $taxonomy_name = $taxonomy;
                break;
            }
            $categories = get_terms( $taxonomy_name );
            if( !empty( $categories ) ) {
                foreach( $categories as $category ) {
                    $categories_lists[ $category->term_id ] = esc_html( $category->name ) . ' (' . esc_attr( $category->count ). ')';
                }
            }
        }
        return $categories_lists;
    }

    /**
     * add controls for widget.
     */
    protected function register_controls() {

        //General Settings
        $this->start_controls_section(
            'general_setting_section',
            [
                'label' => esc_html__( 'General Setting', 'wp-blog-post-layouts' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'blockTitle',
            [
                'label' => esc_html__( 'Title', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'placeholder' => esc_html__( 'Enter title', 'wp-blog-post-layouts' )
            ]
        );

        $this->add_control(
            'blockTitleLayout',
            [
                'label' => esc_html__( 'Block Title Layout', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'one',
                'options' => [
                    'one'   => esc_html__( 'One', 'wp-blog-post-layouts' ),
                    'two'   => esc_html__( 'Two', 'wp-blog-post-layouts' ),
                    'three'   => esc_html__( 'Three', 'wp-blog-post-layouts' )
                ],
                'condition' => [
                    'blockTitle!' => ''
                ]
            ]
        );

        $this->add_control(
            'blockTitleAlign',
            [
                'label' => esc_html__( 'Text Align', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => esc_html__( 'Left', 'wp-blog-post-layouts' ),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__( 'Center', 'wp-blog-post-layouts' ),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => esc_html__( 'Right', 'wp-blog-post-layouts' ),
                        'icon' => 'fa fa-align-right',
                    ],
                ],
                'default' => 'left',
                'toggle' => true,
                'condition' => [
                    'blockTitle!' => ''
                ],
                'selectors' => [
                    '{{WRAPPER}} .cv-block-title' => 'text-align: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'postCategory',
            [
                'label' => esc_html__( 'Category', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => '',
                'options' => $this->cv_get_categories( 'post' )
            ]
        );

        $this->add_control(
            'postCount',
            [
                'label' => esc_html__( 'Post Count', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'min' => 1,
                'max' => 200,
                'step' => 1,
                'default' => 4,
            ]
        );
         
        $this->add_control(
            'contentType',
            [
                'label' => esc_html__( 'Content Type', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'excerpt',
                'options' => [
                    'excerpt'   => esc_html__( 'Excerpt', 'wp-blog-post-layouts' ),
                    'content'   => esc_html__( 'Content', 'wp-blog-post-layouts' )
                ],
            ]
        );

        $this->add_control(
            'wordCount',
            [
                'label' => esc_html__( 'Content Length', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'min' => 1,
                'max' => 500,
                'step' => 1,
                'default' => 15,
            ]
        );

        $this->add_control(
            'buttonLabel',
            [
                'label' => esc_html__( 'Button Label', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'placeholder' => esc_html__( 'Add label here...', 'wp-blog-post-layouts' ),
                'default'   => esc_html__( 'Read more', 'wp-blog-post-layouts' )
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'query_setting_section',
            [
                'label' => esc_html__( 'Query Setting', 'wp-blog-post-layouts' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'orderBy',
            [
                'label' => esc_html__( 'Order By', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'date',
                'options' => [
                    'date'   => esc_html__( 'Date', 'wp-blog-post-layouts' ),
                    'title'  => esc_html__( 'Title', 'wp-blog-post-layouts' )
                ]
            ]
        );

        $this->add_control(
            'order',
            [
                'label' => esc_html__( 'Order', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'desc',
                'options' => [
                    'asc'   => esc_html__( 'Ascending', 'wp-blog-post-layouts' ),
                    'desc'   => esc_html__( 'Descending', 'wp-blog-post-layouts' )
                ]
            ]
        );

        $this->add_control(
            'dateOption',
            [
                'label' => esc_html__( 'Show date', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'label_off' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'show' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'hide' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'return_value' => 'show',
                'default' => 'show',
            ]
        );
        
        $this->add_control(
            'authorOption',
            [
                'label' => esc_html__( 'Show author', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'label_off' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'show' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'hide' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'return_value' => 'show',
                'default' => 'show',
            ]
        );
        
        $this->add_control(
            'categoryOption',
            [
                'label' => esc_html__( 'Show categories', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'label_off' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'show' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'hide' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'return_value' => 'show',
                'default' => 'show',
            ]
        );

        $this->add_control(
            'tagsOption',
            [
                'label' => esc_html__( 'Show tags', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'label_off' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'show' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'hide' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'return_value' => 'show',
                'default' => 'show',
            ]
        );
        
        $this->add_control(
            'commentOption',
            [
                'label' => esc_html__( 'Show comments number', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'label_off' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'show' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'hide' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'return_value' => 'show',
                'default' => 'show',
            ]
        );

        $this->end_controls_section();
        /**************************************************/

        $this->start_controls_section(
            'style_section',
            [
            'label' => esc_html__( 'Style Setting', 'wp-blog-post-layouts' ),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'layoutOption',
            [
                'label' => esc_html__( 'List Layout Variations', 'wp-blog-post-layouts' ),
                'type' => 'RADIOIMAGE',
                'default' => 'layout-one',
                'options' => [
                    [
                        'value' => 'layout-one',
                        'label' => esc_url( WPBLOG_POST_LAYOUTS_INCLUDES_URL . '/assets/images/grid-layout-one.png' ),
                    ],
                    [
                        'value' => 'layout-two',
                        'label' => esc_url( WPBLOG_POST_LAYOUTS_INCLUDES_URL . '/assets/images/grid-layout-two.png' ),
                    ],
                    [
                        'value' => 'layout-three',
                        'label' => esc_url( WPBLOG_POST_LAYOUTS_INCLUDES_URL . '/assets/images/grid-layout-three.png' ),
                    ]
                ],
            ]
        );
        
        $this->add_control(
            'postFormatIcon',
            [
                'label' => esc_html__( 'Show post format icon', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'label_off' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'show' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'hide' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'return_value' => 'show',
                'default' => 'show',
            ]
        );

        $this->add_control(
            'postButtonIcon',
            [
                'label' => esc_html__( 'Show read more button icon', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'label_off' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'show' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'hide' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'return_value' => 'show',
                'default' => 'show',
            ]
        );

        $this->add_control(
            'blockColumn',
            [
                'label' => esc_html__( 'Block Column', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'two',
                'options' => [
                    'one'  => esc_html__( 'One', 'wp-blog-post-layouts' ),
                    'two'  => esc_html__( 'Two', 'wp-blog-post-layouts' ),
                    'three' => esc_html__( 'Three', 'wp-blog-post-layouts' ),
                    'four'  => esc_html__( 'Four', 'wp-blog-post-layouts' ),
                    'five'  => esc_html__( 'Five', 'wp-blog-post-layouts' )
                ],
            ]
        );
        
        $this->add_control(
            'postMargin',
            [
                'label' => esc_html__( 'Allow margin between each post', 'wp-blog-post-layouts' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'label_off' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'show' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                'hide' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                'return_value' => 'show',
                'default' => 'show',
            ]
        );

        $this->end_controls_section();

        /**************************************************/

        $this->start_controls_section(
            'element_typography_section',
            [
            'label' => esc_html__( 'Typography Section', 'wp-blog-post-layouts' ),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

            $this->add_control(
                'typographyOption',
                [
                    'label' => esc_html__( 'Inherit default from plugin typography', 'wp-blog-post-layouts' ),
                    'type' => \Elementor\Controls_Manager::SWITCHER,
                    'label_on' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                    'label_off' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                    'show' => esc_html__( 'Show', 'wp-blog-post-layouts' ),
                    'hide' => esc_html__( 'Hide', 'wp-blog-post-layouts' ),
                    'return_value' => 'show',
                    'default' => 'show',
                ]
            );
            
            /**
             * Start typography tabs
             */
            $this->start_controls_tabs(
                'style_typography_tabs'
            );
        
                //Block Title Typo Tab
                $this->start_controls_tab(
                    'block_title_typo_tab',
                    [
                        'label' => esc_html__( 'Block Title', 'wp-blog-post-layouts' ),
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'block_title_font_family',
                    [
                        'label' => esc_html__( 'Font Family', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::SELECT,
                        'default' => 'Yanone Kaffeesatz',
                        'options' => [
                            'Yanone Kaffeesatz'  => esc_html__( 'Yanone Kaffeesatz', 'wp-blog-post-layouts' ),
                            'Roboto'  => esc_html__( 'Roboto', 'wp-blog-post-layouts' ),
                            'Open Sans' => esc_html__( 'Open Sans', 'wp-blog-post-layouts' ),
                            'Roboto Slab' => esc_html__( 'Roboto Slab', 'wp-blog-post-layouts' ),
                            'Poppins' => esc_html__( 'Poppins', 'wp-blog-post-layouts' )
                        ],
                        'selectors' => [
                            '{{WRAPPER}} .cv-block-title' => 'font-family: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_group_control(
                    \Elementor\Group_Control_Typography::get_type(),
                    [
                        'name' => 'block_title_typography',
                        'label' => esc_html__( 'Block Title', 'wp-blog-post-layouts' ),
                        'selector' => '{{WRAPPER}} .cv-block-title',
                        'exclude' => [ 'font_family', 'letter_spacing' ],
                        'fields_options'   => [
                            'font_weight' => [ 'default' => 700 ],
                            'font_style' => [ 'default' => 'normal' ],
                            'font_size' => [ 'default' => [ 'unit' => 'px','size' => 32 ] ],
                            'text_transform' => [ 'default' => 'uppercase' ],
                            'text_decoration' => [ 'default' => 'none' ],
                            'line_height' => [ 'default' => [ 'unit' => 'em','size' => 1.5 ] ],
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'blockTitleColor',
                    [
                        'label' => esc_html__( 'Font Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => '#3b3b3b',
                        'selectors' => [
                            '{{WRAPPER}} .cv-block-title' => 'color: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'blockTitleBorderColor',
                    [
                        'label' => esc_html__( 'Border Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => '#f47e00',
                        'selectors' => [
                            '{{WRAPPER}} .cv-block-title.layout--four span, .cv-block-title span::before, .cv-block-title span::after, .cv-block-title.layout--four span:after, .cv-block-title.layout--five span:before, .cv-block-title.layout--five span:after' => 'border-color: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->end_controls_tab();

                //Title Typo Tab
                $this->start_controls_tab(
                    'title_typo_tab',
                    [
                        'label' => esc_html__( 'Title', 'wp-blog-post-layouts' ),
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'titleTextAlign',
                    [
                        'label' => esc_html__( 'Text Align', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::CHOOSE,
                        'options' => [
                            'left' => [
                                'title' => esc_html__( 'Left', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-left',
                            ],
                            'center' => [
                                'title' => esc_html__( 'Center', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-center',
                            ],
                            'right' => [
                                'title' => esc_html__( 'Right', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-right',
                            ],
                        ],
                        'default' => 'left',
                        'toggle' => true,
                        'selectors' => [
                            '{{WRAPPER}} .cv-post-title' => 'text-align: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'title_font_family',
                    [
                        'label' => esc_html__( 'Font Family', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::SELECT,
                        'default' => 'Yanone Kaffeesatz',
                        'options' => [
                            'Yanone Kaffeesatz'  => esc_html__( 'Yanone Kaffeesatz', 'wp-blog-post-layouts' ),
                            'Roboto'  => esc_html__( 'Roboto', 'wp-blog-post-layouts' ),
                            'Open Sans' => esc_html__( 'Open Sans', 'wp-blog-post-layouts' ),
                            'Roboto Slab' => esc_html__( 'Roboto Slab', 'wp-blog-post-layouts' ),
                            'Poppins' => esc_html__( 'Poppins', 'wp-blog-post-layouts' )
                        ],
                        'selectors' => [
                            '{{WRAPPER}} .cv-post-title a' => 'font-family: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_group_control(
                    \Elementor\Group_Control_Typography::get_type(),
                    [
                        'name' => 'title_typography',
                        'label' => esc_html__( 'Title', 'wp-blog-post-layouts' ),
                        'selector' => '{{WRAPPER}} .cv-post-title a',
                        'exclude' => [ 'font_family', 'letter_spacing' ],
                        'fields_options'   => [
                            'font_weight' => [ 'default' => 700 ],
                            'font_style' => [ 'default' => 'normal' ],
                            'font_size' => [ 'default' => [ 'unit' => 'px','size' => 28 ] ],
                            'text_transform' => [ 'default' => 'capitalize' ],
                            'text_decoration' => [ 'default' => 'none' ],
                            'line_height' => [ 'default' => [ 'unit' => 'em','size' => 1.5 ] ],
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'titleFontColor',
                    [
                        'label' => esc_html__( 'Font Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => '#333333',
                        'selectors' => [
                            '{{WRAPPER}} .cv-post-title a' => 'color: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'titleHoverColor',
                    [
                        'label' => esc_html__( 'Hover Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => '#f47e00',
                        'selectors' => [
                            '{{WRAPPER}} .cv-post-title a:hover' => 'color: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->end_controls_tab();

                //Meta Typo Tab
                $this->start_controls_tab(
                    'meta_typo_tab',
                    [
                        'label' => esc_html__( 'Meta', 'wp-blog-post-layouts' ),
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );
                
                $this->add_control(
                    'metaTextAlign',
                    [
                        'label' => esc_html__( 'Text Align', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::CHOOSE,
                        'options' => [
                            'left' => [
                                'title' => esc_html__( 'Left', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-left',
                            ],
                            'center' => [
                                'title' => esc_html__( 'Center', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-center',
                            ],
                            'right' => [
                                'title' => esc_html__( 'Right', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-right',
                            ],
                        ],
                        'default' => 'left',
                        'toggle' => true,
                        'selectors' => [
                            '{{WRAPPER}} .cv-post-meta' => 'text-align: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'meta_font_family',
                    [
                        'label' => esc_html__( 'Font Family', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::SELECT,
                        'default' => 'Roboto',
                        'options' => [
                            'Yanone Kaffeesatz'  => esc_html__( 'Yanone Kaffeesatz', 'wp-blog-post-layouts' ),
                            'Roboto'  => esc_html__( 'Roboto', 'wp-blog-post-layouts' ),
                            'Open Sans' => esc_html__( 'Open Sans', 'wp-blog-post-layouts' ),
                            'Roboto Slab' => esc_html__( 'Roboto Slab', 'wp-blog-post-layouts' ),
                            'Poppins' => esc_html__( 'Poppins', 'wp-blog-post-layouts' )
                        ],
                        'selectors' => [
                            '{{WRAPPER}} .cv-post-meta .cv-post-meta-item' => 'font-family: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_group_control(
                    \Elementor\Group_Control_Typography::get_type(),
                    [
                        'name' => 'meta_typography',
                        'label' => esc_html__( 'Meta', 'wp-blog-post-layouts' ),
                        'selector' => '{{WRAPPER}} .cv-post-meta .cv-post-meta-item',
                        'exclude' => [ 'letter_spacing' ],
                        'fields_options'   => [
                            'font_family' => [ 'default' => 'Roboto' ],
                            'font_weight' => [ 'default' => 400 ],
                            'font_style' => [ 'default' => 'normal' ],
                            'font_size' => [ 'default' => [ 'unit' => 'px','size' => 14 ] ],
                            'text_transform' => [ 'default' => 'capitalize' ],
                            'text_decoration' => [ 'default' => 'none' ],
                            'line_height' => [ 'default' => [ 'unit' => 'em','size' => 1.8 ] ],
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'metaFontColor',
                    [
                        'label' => esc_html__( 'Font Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => '#434343',
                        'selectors' => [
                            '{{WRAPPER}} .cv-post-meta .cv-post-meta-item' => 'color: {{VALUE}}',
                            '{{WRAPPER}} .cv-post-meta .cv-post-meta-item a' => 'color: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'metaHoverColor',
                    [
                        'label' => esc_html__( 'Hover Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => '#f47e00',
                        'selectors' => [
                            '{{WRAPPER}} .cv-post-meta .cv-post-meta-item:hover' => 'color: {{VALUE}}',
                            '{{WRAPPER}} .cv-post-meta a:hover' => 'color: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->end_controls_tab();

                //Content Typo Tab
                $this->start_controls_tab(
                    'content_typo_tab',
                    [
                        'label' => esc_html__( 'Content', 'wp-blog-post-layouts' ),
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );
                
                $this->add_control(
                    'descTextAlign',
                    [
                        'label' => esc_html__( 'Text Align', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::CHOOSE,
                        'options' => [
                            'left' => [
                                'title' => esc_html__( 'Left', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-left',
                            ],
                            'center' => [
                                'title' => esc_html__( 'Center', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-center',
                            ],
                            'right' => [
                                'title' => esc_html__( 'Right', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-right',
                            ],
                        ],
                        'default' => 'left',
                        'toggle' => true,
                        'selectors' => [
                            '{{WRAPPER}} .cv-post-content' => 'text-align: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'content_font_family',
                    [
                        'label' => esc_html__( 'Font Family', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::SELECT,
                        'default' => 'Roboto',
                        'options' => [
                            'Yanone Kaffeesatz'  => esc_html__( 'Yanone Kaffeesatz', 'wp-blog-post-layouts' ),
                            'Roboto'  => esc_html__( 'Roboto', 'wp-blog-post-layouts' ),
                            'Open Sans' => esc_html__( 'Open Sans', 'wp-blog-post-layouts' ),
                            'Roboto Slab' => esc_html__( 'Roboto Slab', 'wp-blog-post-layouts' ),
                            'Poppins' => esc_html__( 'Poppins', 'wp-blog-post-layouts' )
                        ],
                        'selectors' => [
                            '{{WRAPPER}} .cv-post-content' => 'font-family: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_group_control(
                    \Elementor\Group_Control_Typography::get_type(),
                    [
                        'name' => 'content_typography',
                        'label' => esc_html__( 'Content/Excerpt', 'wp-blog-post-layouts' ),
                        'selector' => '{{WRAPPER}} .cv-post-content',
                        'exclude' => [ 'letter_spacing' ],
                        'fields_options'   => [
                            'font_family' => [ 'default' => 'Roboto' ],
                            'font_weight' => [ 'default' => 400 ],
                            'font_style' => [ 'default' => 'normal' ],
                            'font_size' => [ 'default' => [ 'unit' => 'px','size' => 15 ] ],
                            'text_transform' => [ 'default' => 'none' ],
                            'text_decoration' => [ 'default' => 'none' ],
                            'line_height' => [ 'default' => [ 'unit' => 'em','size' => 2 ] ],
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'descFontColor',
                    [
                        'label' => esc_html__( 'Font Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => '#3b3b3b',
                        'selectors' => [
                            '{{WRAPPER}} .cv-post-content' => 'color: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->end_controls_tab();

                //Button Typo Tab
                $this->start_controls_tab(
                    'button_typo_tab',
                    [
                        'label' => esc_html__( 'Button', 'wp-blog-post-layouts' ),
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );
                
                $this->add_control(
                    'buttonTextAlign',
                    [
                        'label' => esc_html__( 'Text Align', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::CHOOSE,
                        'options' => [
                            'left' => [
                                'title' => esc_html__( 'Left', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-left',
                            ],
                            'center' => [
                                'title' => esc_html__( 'Center', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-center',
                            ],
                            'right' => [
                                'title' => esc_html__( 'Right', 'wp-blog-post-layouts' ),
                                'icon' => 'fa fa-align-right',
                            ],
                        ],
                        'default' => 'left',
                        'toggle' => true,
                        'selectors' => [
                            '{{WRAPPER}} .cv-read-more' => 'text-align: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'button_font_family',
                    [
                        'label' => esc_html__( 'Font Family', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::SELECT,
                        'default' => 'Roboto',
                        'options' => [
                            'Yanone Kaffeesatz'  => esc_html__( 'Yanone Kaffeesatz', 'wp-blog-post-layouts' ),
                            'Roboto'  => esc_html__( 'Roboto', 'wp-blog-post-layouts' ),
                            'Open Sans' => esc_html__( 'Open Sans', 'wp-blog-post-layouts' ),
                            'Roboto Slab' => esc_html__( 'Roboto Slab', 'wp-blog-post-layouts' ),
                            'Poppins' => esc_html__( 'Poppins', 'wp-blog-post-layouts' )
                        ],
                        'selectors' => [
                            '{{WRAPPER}} .cv-read-more' => 'font-family: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_group_control(
                    \Elementor\Group_Control_Typography::get_type(),
                    [
                        'name' => 'button_typography',
                        'label' => esc_html__( 'Button', 'wp-blog-post-layouts' ),
                        'selector' => '{{WRAPPER}} .cv-read-more',
                        'exclude' => [ 'letter_spacing', 'line_height', 'text_decoration', 'font_style' ],
                        'fields_options'   => [
                            'font_family' => [ 'default' => 'Roboto' ],
                            'font_weight' => [ 'default' => 400 ],
                            'font_size' => [ 'default' => [ 'unit' => 'px','size' => 15 ] ],
                            'text_transform' => [ 'default' => 'none' ],
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'buttonFontColor',
                    [
                        'label' => esc_html__( 'Font Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => '#3b3b3b',
                        'selectors' => [
                            '{{WRAPPER}} .cv-read-more a' => 'color: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'buttonHoverColor',
                    [
                        'label' => esc_html__( 'Hover Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => '#3b3b3b',
                        'selectors' => [
                            '{{WRAPPER}} .cv-read-more a:hover' => 'color: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'buttonBackgroundColor',
                    [
                        'label' => esc_html__( 'Background Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => 'transparent',
                        'selectors' => [
                            '{{WRAPPER}} .cv-read-more a' => 'background-color: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'buttonBackgroundHoverColor',
                    [
                        'label' => esc_html__( 'Background Hover Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => '#f47e00',
                        'selectors' => [
                            '{{WRAPPER}} .cv-read-more a::hover' => 'background-color: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'buttonBorderType',
                    [
                        'label' => esc_html__( 'Border Type', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::SELECT,
                        'default' => 'solid',
                        'options' => [
                            'none'   => esc_html__( 'None', 'wp-blog-post-layouts' ),
                            'solid'   => esc_html__( 'Solid', 'wp-blog-post-layouts' ),
                            'dotted'   => esc_html__( 'Dotted', 'wp-blog-post-layouts' ),
                            'dashed'   => esc_html__( 'Dashed', 'wp-blog-post-layouts' )
                        ],
                        'selectors' => [
                            '{{WRAPPER}} .cv-read-more a' => 'border-style: {{VALUE}}',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->add_control(
                    'buttonBorderWeight',
                    [
                        'label' => esc_html__( 'Border Weight', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::NUMBER,
                        'min' => 0,
                        'max' => 10,
                        'step' => 0.1,
                        'default' => 1,
                        'selectors' => [
                            '{{WRAPPER}} .cv-read-more a' => 'border-width: {{VALUE}}px',
                        ],
                        'conditions' => [
                            'terms' => [
                                [
                                    'name' => 'buttonBorderType',
                                    'operator' => '!in',
                                    'value' => [
                                        'none',
                                    ],
                                ],
                                [
                                    'name' => 'typographyOption',
                                    'operator' => '!in',
                                    'value' => [
                                        'show',
                                    ],
                                ],
                            ],
                        ],
                    ]
                );

                $this->add_control(
                    'buttonBorderColor',
                    [
                        'label' => esc_html__( 'Border Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => 'transparent',
                        'selectors' => [
                            '{{WRAPPER}} .cv-read-more a' => 'border-color: {{VALUE}}',
                        ],
                        'conditions' => [
                            'terms' => [
                                [
                                    'name' => 'buttonBorderType',
                                    'operator' => '!in',
                                    'value' => [
                                        'none',
                                    ],
                                ],
                                [
                                    'name' => 'typographyOption',
                                    'operator' => '!in',
                                    'value' => [
                                        'show',
                                    ],
                                ],
                            ],
                        ],
                    ]
                );

                $this->add_control(
                    'buttonBorderHoverColor',
                    [
                        'label' => esc_html__( 'Border Hover Color', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::COLOR,
                        'default' => '#f47e00',
                        'selectors' => [
                            '{{WRAPPER}} .cv-read-more a::hover' => 'border-color: {{VALUE}}',
                        ],
                        'conditions' => [
                            'terms' => [
                                [
                                    'name' => 'buttonBorderType',
                                    'operator' => '!in',
                                    'value' => [
                                        'none',
                                    ],
                                ],
                                [
                                    'name' => 'typographyOption',
                                    'operator' => '!in',
                                    'value' => [
                                        'show',
                                    ],
                                ],
                            ],
                        ],
                    ]
                );

                $this->add_control(
                    'buttonPadding',
                    [
                        'label' => esc_html__( 'Padding', 'wp-blog-post-layouts' ),
                        'type' => \Elementor\Controls_Manager::DIMENSIONS,
                        'size_units' => [ 'px', '%', 'em' ],
                        'default'   => [
                            'top' => '2',
                            'right' => '10',
                            'bottom' => '2',
                            'left' => '10',
                        ],
                        'selectors' => [
                            '{{WRAPPER}} .cv-read-more a' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                        ],
                        'condition' => [
                            'typographyOption!' => 'show'
                        ]
                    ]
                );

                $this->end_controls_tab();
            $this->end_controls_tab();
            /*** Start typography tabs ***/

        $this->end_controls_section();
    }
    
    /**
     * renders the widget content.
     */
    protected function render() {
        $settings = $this->get_settings_for_display();
        extract( $settings );
        $element_id = $this->get_id();
        $dateOption = ( $dateOption === 'show' );
        $authorOption = ( $authorOption === 'show' );
        $categoryOption = ( $categoryOption === 'show' );
        $tagsOption = ( $tagsOption === 'show' );
        $commentOption = ( $commentOption === 'show' );
        $postFormatIcon = ( $postFormatIcon === 'show' );
        $postButtonIcon = ( $postButtonIcon === 'show' );
        $postMargin = ( $postMargin === 'show' );
        $posttype = 'post';

        echo '<div id="cv-grid-post-layout" class="block-'.esc_html( $element_id ).' cv-block cv-block-grid--'.esc_html( $layoutOption ).'">';
            if( !empty( $blockTitle ) ) {
                echo '<h2 class="cv-block-title align--' .esc_html( $blockTitleAlign ). ' layout--'.esc_html( $blockTitleLayout ).'"><span>'.esc_html( $blockTitle ).'</span></h2>';
            }
            include( plugin_dir_path( __FILE__ ) .'/'.$layoutOption.'/'.$layoutOption.'.php' );
        echo '</div>';
    }
}