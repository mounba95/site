/**
 * Style Tab Tnspector controls wrapper controls.
 * 
 */
const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { escapeHTML } = wp.escapeHtml;
const { PanelBody, SelectControl, ToggleControl, RangeControl, ColorPalette, TextControl, Button } = wp.components;
import googlefonts from '../../block-base/googlefonts.json';

export default class StyleInspector extends Component {
    constructor( props ) {
        super( ...arguments );
        this.state = {
            google_fonts: []
        }
    }

    get_google_fonts() {
        const GoogleFontsLists = googlefonts
        this.setState({ google_fonts: GoogleFontsLists })
    }

    componentDidMount() {
        this.get_google_fonts()
    }

    render() {
        const { layoutOption, postFormatIcon, postButtonIcon, blockColumn, postMargin, typographyOption, blockTitleFontFamily, blockTitleFontWeight, blockTitleFontSize, blockTitleFontStyle, blockTitleTextTransform, blockTitleTextDecoration, blockTitleColor, blockTitleLineHeight, blockTitleBorderColor, titleTextAlign, titleFontFamily, titleFontSize, titleFontStyle, titleTextTransform, titleTextDecoration, titleFontColor, titleHoverColor, titlelineHeight, metaTextAlign, metaFontFamily, metaFontSize, metaFontStyle, metaTextTransform, metaTextDecoration, metaFontColor, metaHoverColor, metalineHeight, descTextAlign, descFontFamily, descFontSize, descFontStyle, descTextTransform, descTextDecoration, descFontColor, desclineHeight, buttonTextAlign, buttonFontFamily, buttonFontSize, buttonTextTransform, buttonFontColor, buttonHoverColor, buttonBackgroundColor, buttonBackgroundHoverColor, buttonPaddingTop, buttonPaddingRight, buttonPaddingBottom, buttonPaddingLeft, buttonBorderType, buttonBorderWeight, buttonBorderColor, buttonBorderHoverColor } = this.props.attributes;
        let { titleFontWeight, metaFontWeight, descFontWeight, buttonFontWeight } = this.props.attributes;
        const { setAttributes } = this.props;

        let googleFontsOptions = this.state.google_fonts.map( ( google_font, fontindex ) => {
            return { value: google_font.family, label: google_font.family }
        })

        const google_fonts = this.state.google_fonts
        function setfontWeight( FontFamily, google_fonts ) {
            let i;
            let googleFontWeight;
            for( i=0; i<google_fonts.length; i++  ) {
                if( google_fonts[i].family === FontFamily ) {
                    const variants = google_fonts[i].variants
                    googleFontWeight = variants.map( ( variant ) => {
                        let converted_variant = convert_google_font_variant( variant )
                        return { value: converted_variant, label: converted_variant }
                    })
                    break;
                }
            }
            return googleFontWeight;
        }

        function convert_google_font_variant( variant ) {
            switch ( variant ) {
                case '100':
                    return escapeHTML( __( '100', 'wp-blog-post-layouts' ) );
                    break;
        
                case '100italic':
                    return escapeHTML( __( '100 Italic', 'wp-blog-post-layouts' ) );
                    break;
        
                case '200':
                    return escapeHTML( __( '200', 'wp-blog-post-layouts' ) );
                    break;
        
                case '200italic':
                    return escapeHTML( __( '200 Italic', 'wp-blog-post-layouts' ) );
                    break;
        
                case '300':
                    return escapeHTML( __( '300', 'wp-blog-post-layouts' ) );
                    break;
        
                case '300italic':
                    return escapeHTML( __( '300 Italic', 'wp-blog-post-layouts' ) );
                    break;
    
                case 'regular':
                        return escapeHTML( __( '400', 'wp-blog-post-layouts' ) );
                        break;
    
                case '400':
                    return escapeHTML( __( '400', 'wp-blog-post-layouts' ) );
                    break;
        
                case '400italic':
                    return escapeHTML( __( '400 Italic', 'wp-blog-post-layouts' ) );
                    break;
        
                case 'italic':
                    return escapeHTML( __( '400 Italic', 'wp-blog-post-layouts' ) );
                    break;
        
                case '500':
                    return escapeHTML( __( '500', 'wp-blog-post-layouts' ) );
                    break;
        
                case '500italic':
                    return escapeHTML( __( '500 Italic', 'wp-blog-post-layouts' ) );
                    break;
        
                case '600':
                    return escapeHTML( __( '600', 'wp-blog-post-layouts' ) );
                    break;
        
                case '600italic':
                    return escapeHTML( __( '600 Italic', 'wp-blog-post-layouts' ) );
                    break;
        
                case '700':
                    return escapeHTML( __( '700', 'wp-blog-post-layouts' ) );
                    break;
        
                case '700italic':
                    return escapeHTML( __( '700 Italic', 'wp-blog-post-layouts' ) );
                    break;
        
                case '800':
                    return escapeHTML( __( '800', 'wp-blog-post-layouts' ) );
                    break;
        
                case '800italic':
                    return escapeHTML( __( '800 Italic', 'wp-blog-post-layouts' ) );
                    break;
        
                case '900':
                    return escapeHTML( __( '900', 'wp-blog-post-layouts' ) );
                    break;
        
                case '900italic':
                    return escapeHTML( __( '900 Italic', 'wp-blog-post-layouts' ) );
                    break;
                
                default:
                    break;
            }
        }

        return (
            <Fragment>
                <PanelBody title={ escapeHTML( __( 'Layout Settings', 'wp-blog-post-layouts' ) ) } initialOpen = { false }>
                    <div className="wpblog-layout-button-group">
                        <div>
                            <label>{ escapeHTML( __( 'Masonry Layout Variations', 'blog-post-layouts' ) ) }</label>
                        </div>
                        <div>
                            <Button className={ `${( layoutOption == 'layout-one') ? "isActive" : "" }` } onClick={ ( e ) => setAttributes( { layoutOption: 'layout-one' } ) }><img src={ BlocksBuildObject.gridLayoutOne } /></Button>
                            <Button className={ `${( layoutOption == 'layout-two') ? "isActive" : "" }` } onClick={ ( e ) => setAttributes( { layoutOption: 'layout-two' } ) } ><img src={ BlocksBuildObject.gridLayoutTwo } /></Button>
                            <Button className={ `${( layoutOption == 'layout-three') ? "isActive" : "" }` } onClick={ ( e ) => setAttributes( { layoutOption: 'layout-three' } ) }><img src={ BlocksBuildObject.gridLayoutThree } /></Button>
                        </div>
                    </div>
                    <ToggleControl
                        label={ escapeHTML( __( 'Show post format icon', 'wp-blog-post-layouts' ) ) }
                        checked={ postFormatIcon }
                        onChange={ ( newpostFormatIcon ) => setAttributes( { postFormatIcon: newpostFormatIcon } ) }
                    />
                    <ToggleControl
                        label={ escapeHTML( __( 'Show read more button icon', 'wp-blog-post-layouts' ) ) }
                        checked={ postButtonIcon }
                        onChange={ ( newpostButtonIcon ) => setAttributes( { postButtonIcon: newpostButtonIcon } ) }
                    />
                    <SelectControl
                        label={ escapeHTML( __( 'Block Column', 'wp-blog-post-layouts' ) ) }
                        value={ blockColumn }
                        options={ [
                            { value: 'one', label: escapeHTML( __( 'One', 'wp-blog-post-layouts' ) ) },
                            { value: 'two', label: escapeHTML( __( 'Two', 'wp-blog-post-layouts' ) ) },
                            { value: 'three', label: escapeHTML( __( 'Three', 'wp-blog-post-layouts' ) ) },
                            { value: 'four', label: escapeHTML( __( 'Four', 'wp-blog-post-layouts' ) ) },
                            { value: 'five', label: escapeHTML( __( 'Five', 'wp-blog-post-layouts' ) ) }
                        ] }
                        onChange={ ( newblockColumn ) => setAttributes( { blockColumn: newblockColumn } ) }
                    />
                    <ToggleControl
                        label={ escapeHTML( __( 'Allow margin between each post', 'wp-blog-post-layouts' ) ) }
                        checked={ postMargin }
                        onChange={ ( newpostMargin ) => setAttributes( { postMargin: newpostMargin } ) }
                    />
                </PanelBody>
                <PanelBody title={ escapeHTML( __( 'Typography Settings', 'wp-blog-post-layouts' ) ) } initialOpen = { false } >
                    <ToggleControl
                        label={ escapeHTML( __( 'Inherit default from plugin typography', 'wp-blog-post-layouts' ) ) }
                        checked={ typographyOption }
                        onChange={ ( newtypographyOption ) => setAttributes( { typographyOption: newtypographyOption } ) }
                    />
                    <PanelBody className="cv-editor-component-sub-panel_body" title={ escapeHTML( __( 'Block Title', 'wp-blog-post-layouts' ) ) } initialOpen = { false } >
                        <SelectControl
                            label={ escapeHTML( __( 'Font Family', 'wp-blog-post-layouts' ) ) }
                            value={ blockTitleFontFamily }
                            options={ googleFontsOptions }
                            onChange={ ( newblockTitleFontFamily ) => setAttributes( { blockTitleFontFamily: newblockTitleFontFamily,blockTitleFontWeight: setfontWeight( newblockTitleFontFamily, google_fonts )[0].value } ) }
                        />
                        { blockTitleFontFamily &&
                            <SelectControl
                                label={ escapeHTML( __( 'Font Weight', 'wp-blog-post-layouts' ) ) }
                                value={ blockTitleFontWeight }
                                options={ setfontWeight( blockTitleFontFamily, google_fonts ) }
                                onChange={ ( newblockTitleFontWeight ) => setAttributes( { blockTitleFontWeight: newblockTitleFontWeight } ) }
                            />
                        }
                        <RangeControl
                            label={ escapeHTML( __( 'Font Size', 'wp-blog-post-layouts' ) ) }
                            value={ blockTitleFontSize }
                            onChange={ ( newblockTitleFontSize ) => setAttributes( { blockTitleFontSize: newblockTitleFontSize } ) }
                            min={ 1 }
                            max={ 200 }
                            allowReset={ true }
                            initialPosition = { 0 }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Font Style', 'wp-blog-post-layouts' ) ) }
                            value={ blockTitleFontStyle }
                            options={ [
                                { value: '', label: escapeHTML( __( 'Default', 'wp-blog-post-layouts' ) ) },
                                { value: 'normal', label: escapeHTML( __( 'Normal', 'wp-blog-post-layouts' ) ) },
                                { value: 'italic', label: escapeHTML( __( 'Italic', 'wp-blog-post-layouts' ) ) },
                                { value: 'oblique', label: escapeHTML( __( 'Oblique', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newblockTitleFontStyle ) => setAttributes( { blockTitleFontStyle: newblockTitleFontStyle } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Text Transform', 'wp-blog-post-layouts' ) ) }
                            value={ blockTitleTextTransform }
                            options={ [
                                { value: '', label: escapeHTML( __( 'Default', 'wp-blog-post-layouts' ) ) },
                                { value: 'uppercase', label: escapeHTML( __( 'Uppercase', 'wp-blog-post-layouts' ) ) },
                                { value: 'lowercase', label: escapeHTML( __( 'Lowercase', 'wp-blog-post-layouts' ) ) },
                                { value: 'capitalize', label: escapeHTML( __( 'Capitalize', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newblockTitleTextTransform ) => setAttributes( { blockTitleTextTransform: newblockTitleTextTransform } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Text Decoration', 'wp-blog-post-layouts' ) ) }
                            value={ blockTitleTextDecoration }
                            options={ [
                                { value: 'none', label: escapeHTML( __( 'None', 'wp-blog-post-layouts' ) ) },
                                { value: 'underline', label: escapeHTML( __( 'Underline', 'wp-blog-post-layouts' ) ) },
                                { value: 'line-through', label: escapeHTML( __( 'Line-through', 'wp-blog-post-layouts' ) ) },
                                { value: 'overline', label: escapeHTML( __( 'Overline', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newblockTitleTextDecoration ) => setAttributes( { blockTitleTextDecoration: newblockTitleTextDecoration } ) }
                        />
                        <div class="cv-block-title-color-wrap">
                            <label>{ escapeHTML( __( 'Font Color', 'wp-blog-post-layouts' ) ) }</label>
                            <ColorPalette
                                value={ blockTitleColor }
                                onChange={ ( newblockTitleColor ) => setAttributes( { blockTitleColor: newblockTitleColor } ) }
                            />
                            <label>{ escapeHTML( __( 'Border Color', 'wp-blog-post-layouts' ) ) }</label>
                            <ColorPalette
                                value={ blockTitleBorderColor }
                                onChange={ ( newblockTitleBorderColor ) => setAttributes( { blockTitleBorderColor: newblockTitleBorderColor } ) }
                            />
                        </div>
                        <RangeControl
                            label={ escapeHTML( __( 'Line Height', 'wp-blog-post-layouts' ) ) }
                            value={ blockTitleLineHeight }
                            onChange={ ( newblockTitleLineHeight ) => setAttributes( { blockTitleLineHeight: newblockTitleLineHeight } ) }
                            step={ 0.1 }
                            min={ 0.1 }
                            max={ 10 }
                            allowReset={ true }
                        />
                    </PanelBody>

                    <PanelBody className="cv-editor-component-sub-panel_body" title={ escapeHTML( __( 'Title', 'wp-blog-post-layouts' ) ) } initialOpen = { false } >
                        <SelectControl
                            label={ escapeHTML( __( 'Text Align', 'wp-blog-post-layouts' ) ) }
                            value={ titleTextAlign }
                            options={ [
                                { value: 'left', label: escapeHTML( __( 'Left', 'wp-blog-post-layouts' ) ) },
                                { value: 'center', label: escapeHTML( __( 'Center', 'wp-blog-post-layouts' ) ) },
                                { value: 'right', label: escapeHTML( __( 'Right', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newtitleTextAlign ) => setAttributes( { titleTextAlign: newtitleTextAlign } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Font Family', 'wp-blog-post-layouts' ) ) }
                            value={ titleFontFamily }
                            options={ googleFontsOptions }
                            onChange={ ( newtitleFontFamily ) => setAttributes( { titleFontFamily: newtitleFontFamily, titleFontWeight: setfontWeight( newtitleFontFamily, google_fonts )[0].value } ) }
                        />
                        { titleFontFamily &&
                            <SelectControl
                                label={ escapeHTML( __( 'Font Weight', 'wp-blog-post-layouts' ) ) }
                                value={ titleFontWeight }
                                options={ setfontWeight( titleFontFamily, google_fonts ) }
                                onChange={ ( newtitleFontWeight ) => setAttributes( { titleFontWeight: newtitleFontWeight } ) }
                            />
                        }
                        <RangeControl
                            label={ escapeHTML( __( 'Font Size', 'wp-blog-post-layouts' ) ) }
                            value={ titleFontSize }
                            onChange={ ( newtitleFontSize ) => setAttributes( { titleFontSize: newtitleFontSize } ) }
                            min={ 1 }
                            max={ 200 }
                            allowReset={ true }
                            initialPosition = { 0 }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Font Style', 'wp-blog-post-layouts' ) ) }
                            value={ titleFontStyle }
                            options={ [
                                { value: '', label: escapeHTML( __( 'Default', 'wp-blog-post-layouts' ) ) },
                                { value: 'normal', label: escapeHTML( __( 'Normal', 'wp-blog-post-layouts' ) ) },
                                { value: 'italic', label: escapeHTML( __( 'Italic', 'wp-blog-post-layouts' ) ) },
                                { value: 'oblique', label: escapeHTML( __( 'Oblique', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newtitleFontStyle ) => setAttributes( { titleFontStyle: newtitleFontStyle } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Text Transform', 'wp-blog-post-layouts' ) ) }
                            value={ titleTextTransform }
                            options={ [
                                { value: '', label: escapeHTML( __( 'Default', 'wp-blog-post-layouts' ) ) },
                                { value: 'uppercase', label: escapeHTML( __( 'Uppercase', 'wp-blog-post-layouts' ) ) },
                                { value: 'lowercase', label: escapeHTML( __( 'Lowercase', 'wp-blog-post-layouts' ) ) },
                                { value: 'capitalize', label: escapeHTML( __( 'Capitalize', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newtitleTextTransform ) => setAttributes( { titleTextTransform: newtitleTextTransform } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Text Decoration', 'wp-blog-post-layouts' ) ) }
                            value={ titleTextDecoration }
                            options={ [
                                { value: 'none', label: escapeHTML( __( 'None', 'wp-blog-post-layouts' ) ) },
                                { value: 'underline', label: escapeHTML( __( 'Underline', 'wp-blog-post-layouts' ) ) },
                                { value: 'line-through', label: escapeHTML( __( 'Line-through', 'wp-blog-post-layouts' ) ) },
                                { value: 'overline', label: escapeHTML( __( 'Overline', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newtitleTextDecoration ) => setAttributes( { titleTextDecoration: newtitleTextDecoration } ) }
                        />
                        <div class="cv-title-color-wrap">
                            <label>{ escapeHTML( __( 'Font Color', 'wp-blog-post-layouts' ) ) }</label>
                            <ColorPalette
                                value={ titleFontColor }
                                onChange={ ( newtitleFontColor ) => setAttributes( { titleFontColor: newtitleFontColor } ) }
                            />
                            <label>{ escapeHTML( __( 'Hover Color', 'wp-blog-post-layouts' ) ) }</label>
                            <ColorPalette
                                value={ titleHoverColor }
                                onChange={ ( newtitleHoverColor ) => setAttributes( { titleHoverColor: newtitleHoverColor } ) }
                            />
                        </div>
                        <RangeControl
                            label={ escapeHTML( __( 'Line Height', 'wp-blog-post-layouts' ) ) }
                            value={ titlelineHeight }
                            onChange={ ( newtitlelineHeight ) => setAttributes( { titlelineHeight: newtitlelineHeight } ) }
                            step={ 0.1 }
                            min={ 0.1 }
                            max={ 10 }
                            allowReset={ true }
                        />
                    </PanelBody>

                    <PanelBody className="cv-editor-component-sub-panel_body" title={ escapeHTML( __( 'Meta', 'wp-blog-post-layouts' ) ) } initialOpen = { false } >
                        <SelectControl
                            label={ escapeHTML( __( 'Text Align', 'wp-blog-post-layouts' ) ) }
                            value={ metaTextAlign }
                            options={ [
                                { value: 'left', label: escapeHTML( __( 'Left', 'wp-blog-post-layouts' ) ) },
                                { value: 'center', label: escapeHTML( __( 'Center', 'wp-blog-post-layouts' ) ) },
                                { value: 'right', label: escapeHTML( __( 'Right', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newmetaTextAlign ) => setAttributes( { metaTextAlign: newmetaTextAlign } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Font Family', 'wp-blog-post-layouts' ) ) }
                            value={ metaFontFamily }
                            options={ googleFontsOptions }
                            onChange={ ( newmetaFontFamily ) => setAttributes( { metaFontFamily: newmetaFontFamily, metaFontWeight: setfontWeight( newmetaFontFamily, google_fonts )[0].value } ) }
                        />
                        { metaFontFamily &&
                            <SelectControl
                                label={ escapeHTML( __( 'Font Weight', 'wp-blog-post-layouts' ) ) }
                                value={ metaFontWeight }
                                options={ setfontWeight( metaFontFamily, google_fonts ) }
                                onChange={ ( newmetaFontWeight ) => setAttributes( { metaFontWeight: newmetaFontWeight } ) }
                            />
                        }
                        <RangeControl
                            label={ escapeHTML( __( 'Font Size', 'wp-blog-post-layouts' ) ) }
                            value={ metaFontSize }
                            onChange={ ( newmetaFontSize ) => setAttributes( { metaFontSize: newmetaFontSize } ) }
                            min={ 1 }
                            max={ 200 }
                            allowReset={ true }
                            initialPosition = { 0 }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Font Style', 'wp-blog-post-layouts' ) ) }
                            value={ metaFontStyle }
                            options={ [
                                { value: '', label: escapeHTML( __( 'Default', 'wp-blog-post-layouts' ) ) },
                                { value: 'normal', label: escapeHTML( __( 'Normal', 'wp-blog-post-layouts' ) ) },
                                { value: 'italic', label: escapeHTML( __( 'Italic', 'wp-blog-post-layouts' ) ) },
                                { value: 'oblique', label: escapeHTML( __( 'Oblique', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newmetaFontStyle ) => setAttributes( { metaFontStyle: newmetaFontStyle } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Text Transform', 'wp-blog-post-layouts' ) ) }
                            value={ metaTextTransform }
                            options={ [
                                { value: '', label: escapeHTML( __( 'Default', 'wp-blog-post-layouts' ) ) },
                                { value: 'uppercase', label: escapeHTML( __( 'Uppercase', 'wp-blog-post-layouts' ) ) },
                                { value: 'lowercase', label: escapeHTML( __( 'Lowercase', 'wp-blog-post-layouts' ) ) },
                                { value: 'capitalize', label: escapeHTML( __( 'Capitalize', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newmetaTextTransform ) => setAttributes( { metaTextTransform: newmetaTextTransform } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Text Decoration', 'wp-blog-post-layouts' ) ) }
                            value={ metaTextDecoration }
                            options={ [
                                { value: 'none', label: escapeHTML( __( 'None', 'wp-blog-post-layouts' ) ) },
                                { value: 'underline', label: escapeHTML( __( 'Underline', 'wp-blog-post-layouts' ) ) },
                                { value: 'line-through', label: escapeHTML( __( 'Line-through', 'wp-blog-post-layouts' ) ) },
                                { value: 'overline', label: escapeHTML( __( 'Overline', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newmetaTextDecoration ) => setAttributes( { metaTextDecoration: newmetaTextDecoration } ) }
                        />
                        <div class="cv-meta-color">
                            <label>{ escapeHTML( __( 'Font Color', 'wp-blog-post-layouts' ) ) }</label>
                            <ColorPalette
                                value={ metaFontColor }
                                onChange={ ( newmetaFontColor ) => setAttributes( { metaFontColor: newmetaFontColor } ) }
                            />
                            <label>{ escapeHTML( __( 'Hover Color', 'wp-blog-post-layouts' ) ) }</label>
                            <ColorPalette
                                value={ metaHoverColor }
                                onChange={ ( newmetaHoverColor ) => setAttributes( { metaHoverColor: newmetaHoverColor } ) }
                            />
                        </div>
                        <RangeControl
                            label={ escapeHTML( __( 'Line Height', 'wp-blog-post-layouts' ) ) }
                            value={ metalineHeight }
                            onChange={ ( newmetalineHeight ) => setAttributes( { metalineHeight: newmetalineHeight } ) }
                            step={ 0.1 }
                            min={ 0.1 }
                            max={ 10 }
                            allowReset={ true }
                        />
                    </PanelBody>

                    <PanelBody className="cv-editor-component-sub-panel_body" title={ escapeHTML( __( 'Content/Excerpt', 'wp-blog-post-layouts' ) ) } initialOpen = { false } >
                        <SelectControl
                            label={ escapeHTML( __( 'Text Align', 'wp-blog-post-layouts' ) ) }
                            value={ descTextAlign }
                            options={ [
                                { value: 'left', label: escapeHTML( __( 'Left', 'wp-blog-post-layouts' ) ) },
                                { value: 'center', label: escapeHTML( __( 'Center', 'wp-blog-post-layouts' ) ) },
                                { value: 'right', label: escapeHTML( __( 'Right', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newdescTextAlign ) => setAttributes( { descTextAlign: newdescTextAlign } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Font Family', 'wp-blog-post-layouts' ) ) }
                            value={ descFontFamily }
                            options={ googleFontsOptions }
                            onChange={ ( newdescFontFamily ) => setAttributes( { descFontFamily: newdescFontFamily, descFontWeight: setfontWeight( newdescFontFamily, google_fonts )[0].value } ) }
                        />
                        { descFontFamily &&
                            <SelectControl
                                label={ escapeHTML( __( 'Font Weight', 'wp-blog-post-layouts' ) ) }
                                value={ descFontWeight }
                                options={ setfontWeight( descFontFamily, google_fonts ) }
                                onChange={ ( newdescFontWeight ) => setAttributes( { descFontWeight: newdescFontWeight } ) }
                            />
                        }
                        <RangeControl
                            label={ escapeHTML( __( 'Font Size', 'wp-blog-post-layouts' ) ) }
                            value={ descFontSize }
                            onChange={ ( newdescFontSize ) => setAttributes( { descFontSize: newdescFontSize } ) }
                            min={ 1 }
                            max={ 200 }
                            allowReset={ true }
                            initialPosition = { 0 }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Font Style', 'wp-blog-post-layouts' ) ) }
                            value={ descFontStyle }
                            options={ [
                                { value: '', label: escapeHTML( __( 'Default', 'wp-blog-post-layouts' ) ) },
                                { value: 'normal', label: escapeHTML( __( 'Normal', 'wp-blog-post-layouts' ) ) },
                                { value: 'italic', label: escapeHTML( __( 'Italic', 'wp-blog-post-layouts' ) ) },
                                { value: 'oblique', label: escapeHTML( __( 'Oblique', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newdescFontStyle ) => setAttributes( { descFontStyle: newdescFontStyle } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Text Transform', 'wp-blog-post-layouts' ) ) }
                            value={ descTextTransform }
                            options={ [
                                { value: '', label: escapeHTML( __( 'Default', 'wp-blog-post-layouts' ) ) },
                                { value: 'uppercase', label: escapeHTML( __( 'Uppercase', 'wp-blog-post-layouts' ) ) },
                                { value: 'lowercase', label: escapeHTML( __( 'Lowercase', 'wp-blog-post-layouts' ) ) },
                                { value: 'capitalize', label: escapeHTML( __( 'Capitalize', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newdescTextTransform ) => setAttributes( { descTextTransform: newdescTextTransform } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Text Decoration', 'wp-blog-post-layouts' ) ) }
                            value={ descTextDecoration }
                            options={ [
                                { value: 'none', label: escapeHTML( __( 'None', 'wp-blog-post-layouts' ) ) },
                                { value: 'underline', label: escapeHTML( __( 'Underline', 'wp-blog-post-layouts' ) ) },
                                { value: 'line-through', label: escapeHTML( __( 'Line-through', 'wp-blog-post-layouts' ) ) },
                                { value: 'overline', label: escapeHTML( __( 'Overline', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newdescTextDecoration ) => setAttributes( { descTextDecoration: newdescTextDecoration } ) }
                        />
                        <ColorPalette
                            value={ descFontColor }
                            onChange={ ( newdescFontColor ) => setAttributes( { descFontColor: newdescFontColor } ) }
                        />
                        <RangeControl
                            label={ escapeHTML( __( 'Line Height', 'wp-blog-post-layouts' ) ) }
                            value={ desclineHeight }
                            onChange={ ( newdesclineHeight ) => setAttributes( { desclineHeight: newdesclineHeight } ) }
                            step={ 0.1 }
                            min={ 0.1 }
                            max={ 10 }
                            allowReset={ true }
                        />
                    </PanelBody>

                    <PanelBody className="cv-editor-component-sub-panel_body" title={ escapeHTML( __( 'Button', 'wp-blog-post-layouts' ) ) } initialOpen = { false } >
                        <SelectControl
                            label={ escapeHTML( __( 'Text Align', 'wp-blog-post-layouts' ) ) }
                            value={ buttonTextAlign }
                            options={ [
                                { value: 'left', label: escapeHTML( __( 'Left', 'wp-blog-post-layouts' ) ) },
                                { value: 'center', label: escapeHTML( __( 'Center', 'wp-blog-post-layouts' ) ) },
                                { value: 'right', label: escapeHTML( __( 'Right', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newbuttonTextAlign ) => setAttributes( { buttonTextAlign: newbuttonTextAlign  } ) }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Font Family', 'wp-blog-post-layouts' ) ) }
                            value={ buttonFontFamily }
                            options={ googleFontsOptions }
                            onChange={ ( newbuttonFontFamily ) => setAttributes( { buttonFontFamily: newbuttonFontFamily, buttonFontWeight: setfontWeight( newbuttonFontFamily, google_fonts )[0].value } ) }
                        />
                        { buttonFontFamily &&
                            <SelectControl
                                label={ escapeHTML( __( 'Font Weight', 'wp-blog-post-layouts' ) ) }
                                value={ buttonFontWeight }
                                options={ setfontWeight( buttonFontFamily, google_fonts ) }
                                onChange={ ( newbuttonFontWeight ) => setAttributes( { buttonFontWeight: newbuttonFontWeight } ) }
                            />
                        }
                        <RangeControl
                            label={ escapeHTML( __( 'Font Size', 'wp-blog-post-layouts' ) ) }
                            value={ buttonFontSize }
                            onChange={ ( newbuttonFontSize ) => setAttributes( { buttonFontSize: newbuttonFontSize } ) }
                            min={ 1 }
                            max={ 200 }
                            allowReset={ true }
                            initialPosition = { 0 }
                        />
                        <SelectControl
                            label={ escapeHTML( __( 'Text Transform', 'wp-blog-post-layouts' ) ) }
                            value={ buttonTextTransform }
                            options={ [
                                { value: '', label: escapeHTML( __( 'Default', 'wp-blog-post-layouts' ) ) },
                                { value: 'uppercase', label: escapeHTML( __( 'Uppercase', 'wp-blog-post-layouts' ) ) },
                                { value: 'lowercase', label: escapeHTML( __( 'Lowercase', 'wp-blog-post-layouts' ) ) },
                                { value: 'capitalize', label: escapeHTML( __( 'Capitalize', 'wp-blog-post-layouts' ) ) }
                            ] }
                            onChange={ ( newbuttonTextTransform ) => setAttributes( { buttonTextTransform: newbuttonTextTransform } ) }
                        />
                        <label for={buttonFontColor}>{ escapeHTML( __( 'Font Color', 'wp-blog-post-layouts' ) ) }</label>
                        <ColorPalette
                            value={ buttonFontColor }
                            onChange={ ( newbuttonFontColor ) => setAttributes( { buttonFontColor: newbuttonFontColor } ) }
                        />
                        <label for={buttonHoverColor}>{ escapeHTML( __( 'Hover Font Color', 'wp-blog-post-layouts' ) ) }</label>
                        <ColorPalette
                            value={ buttonHoverColor }
                            onChange={ ( newbuttonHoverColor ) => setAttributes( { buttonHoverColor: newbuttonHoverColor } ) }
                        />
                        <label for={buttonBackgroundColor}>{ escapeHTML( __( 'Background Color', 'wp-blog-post-layouts' ) ) }</label>
                        <ColorPalette
                            value={ buttonBackgroundColor }
                            onChange={ ( newbuttonBackgroundColor ) => setAttributes( { buttonBackgroundColor: newbuttonBackgroundColor } ) }
                        />
                        <label for={buttonBackgroundHoverColor}>{ escapeHTML( __( 'Background Hover Color', 'wp-blog-post-layouts' ) ) }</label>
                        <ColorPalette
                            value={ buttonBackgroundHoverColor }
                            onChange={ ( newbuttonBackgroundHoverColor ) => setAttributes( { buttonBackgroundHoverColor: newbuttonBackgroundHoverColor } ) }
                        />
                        <div class="cv-padding-control-wrap">
                            <label for="button-padding">{ escapeHTML( __( 'Padding', 'wp-blog-post-layouts' ) ) }</label>
                            <TextControl
                                label={ escapeHTML( __( 'Top', 'wp-blog-post-layouts' ) ) }
                                type="number"
                                min={ 0 }
                                max={ 100 }
                                value={ buttonPaddingTop }
                                onChange={ ( newbuttonPaddingTop ) => setAttributes( { buttonPaddingTop: newbuttonPaddingTop } ) }
                            />
                            <TextControl
                                label={ escapeHTML( __( 'Right', 'wp-blog-post-layouts' ) ) }
                                type="number"
                                min={ 0 }
                                max={ 100 }
                                value={ buttonPaddingRight }
                                onChange={ ( newbuttonPaddingRight ) => setAttributes( { buttonPaddingRight: newbuttonPaddingRight } ) }
                            />
                            <TextControl
                                label={ escapeHTML( __( 'Bottom', 'wp-blog-post-layouts' ) ) }
                                type="number"
                                min={ 0 }
                                max={ 100 }
                                value={ buttonPaddingBottom }
                                onChange={ ( newbuttonPaddingBottom ) => setAttributes( { buttonPaddingBottom: newbuttonPaddingBottom } ) }
                            />
                            <TextControl
                                label={ escapeHTML( __( 'Left', 'wp-blog-post-layouts' ) ) }
                                type="number"
                                min={ 0 }
                                max={ 100 }
                                value={ buttonPaddingLeft }
                                onChange={ ( newbuttonPaddingLeft ) => setAttributes( { buttonPaddingLeft: newbuttonPaddingLeft } ) }
                            />
                        </div>
                        <SelectControl
                            label={ escapeHTML( __( 'Border Type', 'wp-blog-post-layouts' ) ) }
                            value={ buttonBorderType }
                            options={ [
                                { value: 'none', label: 'None' },
                                { value: 'solid', label: 'Solid' },
                                { value: 'dotted', label: 'Dotted' },
                                { value: 'dashed', label: 'Dashed' }
                            ] }
                            onChange={ ( newbuttonBorderType ) => setAttributes( { buttonBorderType: newbuttonBorderType } ) }
                        />
                        <TextControl
                            label={ escapeHTML( __( 'Border Weight', 'wp-blog-post-layouts' ) ) }
                            type="number"
                            min={ 0 }
                            max={ 10 }
                            value={ buttonBorderWeight }
                            onChange={ ( newbuttonBorderWeight ) => setAttributes( { buttonBorderWeight: newbuttonBorderWeight } ) }
                        />
                        <label for={buttonBorderColor}>{ escapeHTML( __( 'Border Color', 'wp-blog-post-layouts' ) ) }</label>
                        <ColorPalette
                            value={ buttonBorderColor }
                            onChange={ ( newbuttonBorderColor ) => setAttributes( { buttonBorderColor: newbuttonBorderColor } ) }
                        />
                        <label for={buttonBorderHoverColor}>{ escapeHTML( __( 'Border Hover Color', 'wp-blog-post-layouts' ) ) }</label>
                        <ColorPalette
                            value={ buttonBorderHoverColor }
                            onChange={ ( newbuttonBorderHoverColor ) => setAttributes( { buttonBorderHoverColor: newbuttonBorderHoverColor } ) }
                        />
                    </PanelBody>
                </PanelBody>
            </Fragment>
        )
    }
}