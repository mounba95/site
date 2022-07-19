/**
 * General Tab Tnspector controls wrapper controls.
 * 
 */
const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { escapeHTML } = wp.escapeHtml;
const { PanelBody, TextControl, SelectControl, RangeControl, ToggleControl } = wp.components;
const { withSelect } = wp.data

class GeneralInspector extends Component {
    constructor( props ) {
        super( ...arguments );
    }

    render() {
        const { blockTitle, blockTitleLayout, blockTitleAlign, posttype, postCategory, postCount, contentType, wordCount, buttonLabel, orderBy, order, dateOption, authorOption, categoryOption, tagsOption, commentOption } = this.props.attributes;
        const { setAttributes, postTypesList, categoriesList } = this.props;

        const hascategoriesList = Array.isArray(categoriesList) && categoriesList.length

        const allCategories = [];
        if( hascategoriesList ) {
            allCategories.push({ label: escapeHTML( __( 'All', 'wp-blog-post-layouts' ) ), value: '' });
            categoriesList.forEach( ( category ) => {
                allCategories.push({ label: category.name + ' (' + category.count + ')', value: category.id });
            });
        } else {
            allCategories.push({ label: escapeHTML( __( 'All', 'wp-blog-post-layouts' ) ), value: '' });
        }

        return (
            <Fragment>
                <PanelBody title={ escapeHTML( __( 'Basic Settings', 'wp-blog-post-layouts' ) ) }>
                    <TextControl
                        label={ escapeHTML( __( 'Block Title', 'wp-blog-post-layouts' ) ) }
                        value={ blockTitle }
                        placeholder={ escapeHTML( __( 'Add title here..', 'wp-blog-post-layouts' ) ) }
                        onChange={ ( newblockTitle ) => setAttributes( { blockTitle: newblockTitle } ) }
                    />
                    { blockTitle &&
                        <SelectControl
                            label = { escapeHTML( __( 'Block Title Layout', 'wp-blog-post-layouts' ) ) }
                            value={ blockTitleLayout }
                            options={ [
                                { value: 'one', label: 'One' },
                                { value: 'two', label: 'Two' },
                                { value: 'three', label: 'Three' }
                            ] }
                            onChange={ ( newblockTitleLayout ) => setAttributes( { blockTitleLayout: newblockTitleLayout } ) }
                        />
                    }
                    { blockTitle &&
                        <SelectControl
                            label={ escapeHTML( __( 'Text Align', 'wp-blog-post-layouts' ) ) }
                            value={ blockTitleAlign }
                            options={ [
                                { value: 'left', label: escapeHTML( __( 'Left', 'wp-blog-post-layouts' ) ) },
                                { value: 'center', label: escapeHTML( __( 'Center', 'wp-blog-post-layouts' ) ) },
                                { value: 'right', label: escapeHTML( __( 'Right', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newblockTitleAlign ) => setAttributes( { blockTitleAlign: newblockTitleAlign } ) }
                        />
                    }
                    <SelectControl
                        label = { escapeHTML( __( 'Category', 'wp-blog-post-layouts' ) ) }
                        value={ postCategory }
                        options={ allCategories }
                        onChange={ ( newpostCategory ) => setAttributes( { postCategory: newpostCategory } ) }
                    />
                    <RangeControl
                        label={ escapeHTML( __( 'Post Count', 'wp-blog-post-layouts' ) ) }
                        value={ postCount }
                        onChange={ ( newpostCount ) => setAttributes( { postCount: newpostCount } ) }
                        min={ 1 }
                        max={ 200 }
                    />
                    <SelectControl
                        label = { escapeHTML( __( 'Content Type', 'wp-blog-post-layouts' ) ) }
                        value={ contentType }
                        options={ [
                            { value: 'excerpt', label: 'Excerpt' },
                            { value: 'content', label: 'Content' }
                        ] }
                        onChange={ ( newcontentType ) => setAttributes( { contentType: newcontentType } ) }
                    />
                    <RangeControl
                        label={ escapeHTML( __( 'Content Length', 'wp-blog-post-layouts' ) ) }
                        value={ wordCount }
                        onChange={ ( newwordCount ) => setAttributes( { wordCount: newwordCount } ) }
                        min={ 1 }
                        max={ 500 }
                    />
                    <TextControl
                        label={ escapeHTML( __( 'Button Label', 'wp-blog-post-layouts' ) ) }
                        value={ buttonLabel }
                        placeholder={ escapeHTML( __( 'Add label here..', 'wp-blog-post-layouts' ) ) }
                        onChange={ ( newbuttonLabel ) => setAttributes( { buttonLabel: newbuttonLabel } ) }
                    />
                </PanelBody>

                <PanelBody title={ escapeHTML( __( 'Query Settings', 'wp-blog-post-layouts' ) ) } initialOpen = { false }>
                    <SelectControl
                        label = { escapeHTML( __( 'Order By', 'wp-blog-post-layouts' ) ) }
                        value={ orderBy }
                        options={ [
                            { value: 'date', label: 'Date' },
                            { value: 'title', label: 'Title' }
                        ] }
                        onChange={ ( neworderBy ) => setAttributes( { orderBy: neworderBy } ) }
                    />
                    <SelectControl
                        label = { escapeHTML( __( 'Order', 'wp-blog-post-layouts' ) ) }
                        value={ order }
                        options={ [
                            { value: 'asc', label: 'Ascending' },
                            { value: 'desc', label: 'Descending' }
                        ] }
                        onChange={ ( neworder ) => setAttributes( { order: neworder } ) }
                    />
                    <ToggleControl
                        label={ escapeHTML( __( 'Show date', 'wp-blog-post-layouts' ) ) }
                        checked={ dateOption }
                        onChange={ ( newdateOption ) => setAttributes( { dateOption: newdateOption } ) }
                    />
                    <ToggleControl
                        label={ escapeHTML( __( 'Show author', 'wp-blog-post-layouts' ) ) }
                        checked={ authorOption }
                        onChange={ ( newauthorOption ) => setAttributes( { authorOption: newauthorOption } ) }
                    />
                    <ToggleControl
                        label={ escapeHTML( __( 'Show categories', 'wp-blog-post-layouts' ) ) }
                        checked={ categoryOption }
                        onChange={ ( newcategoryOption ) => setAttributes( { categoryOption: newcategoryOption } ) }
                    />
                    <ToggleControl
                        label={ escapeHTML( __( 'Show tags', 'wp-blog-post-layouts' ) ) }
                        checked={ tagsOption }
                        onChange={ ( newtagsOption ) => setAttributes( { tagsOption: newtagsOption } ) }
                    />
                    <ToggleControl
                        label={ escapeHTML( __( 'Show comments number', 'wp-blog-post-layouts' ) ) }
                        checked={ commentOption }
                        onChange={ ( newcommentOption ) => setAttributes( { commentOption: newcommentOption } ) }
                    />
                </PanelBody>
            </Fragment>
        )
    }
}

export default withSelect( ( select, props ) => {
    const { posttype } = props.attributes
    const { getEntityRecords, getPostTypes } = select( 'core' );
    let allpostTypesList = getPostTypes()

    let filterpostTypesList = [];
    let taxonomnyName;
    if( allpostTypesList ) {
        allpostTypesList.forEach( ( allpostType ) => {
            if( allpostType.slug != 'page' && allpostType.slug != 'wp_block' && allpostType.slug != 'attachment' ) {
                filterpostTypesList.push({ label: allpostType.name, value: allpostType.slug });
                if( allpostType.slug == posttype ) {
                    taxonomnyName = allpostType.taxonomies[0]
                }
            }
        });
    }
    const taxonomyQuery = {
        hide_empty: true,
        per_page: 100
    }
    return {
        postTypesList: filterpostTypesList,
        categoriesList: getEntityRecords( 'taxonomy', taxonomnyName, taxonomyQuery ),
    };
} )( GeneralInspector );