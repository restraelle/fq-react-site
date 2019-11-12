import React from 'react';

import Template from '../Template';
import Page from '../Page';
import SearchableItem from '../SearchableItem';

import ImageSkinCare from '../../static/img/skin-care.jpg';

export default class SunAndSkinCare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <Page title="Sun & Skin Care" image={ImageSkinCare}>
                <div className="searchable-item__header">
                    <div className="desktop-third mobile-half left"><b>Trade Name</b></div>
                    <div className="desktop-two-thirds mobile-half left"><b>INCI Name</b></div>
                    <div className="clearfix"></div>
                </div>
                <SearchableItem name="Alphaflow®" description="Emollients and gloss agents"/>
                <SearchableItem name="Biomethics® Emulsifiers" description="Emulsifiers"/>
                <SearchableItem name="Colourmat®" description="Colour composites based on mica"/>
                <SearchableItem name="Colourspheres®" description="Encapsulated colourants"/>
                <SearchableItem name="Creabase®" description="Wax"/>
                <SearchableItem name="Creaester® ET ISO 16128" description="Moisture barrier, silicone substitute, UV-filter solubiliser"/>
                <SearchableItem name="Creaester® MCP" description="Emulsifier"/>
                <SearchableItem name="Creagel® Crystal" description="Gellified lipids and viscosity modifiers"/>
                <SearchableItem name="Creagel® EZ" description="Auto-emulsifiers and viscosity builders"/>
                <SearchableItem name="Creagel® EZ VF" description="Gel-emulsifier, viscosity builder"/>
                <SearchableItem name="Creanatural®" description="Skin conditioners and antioxidants"/>
                <SearchableItem name="Creascrub®" description="Exfoliants"/>
                <SearchableItem name="Creasil®" description="Solvents, glossiers and film formers"/>
                <SearchableItem name="Creasoluble®" description="Solubilizer"/>
                <SearchableItem name="Creasperse® BB" description="Colour shade dispersions for BB creams and foundations"/>
                <SearchableItem name="Creasperse® Colours" description="Colourants"/>
                <SearchableItem name="Creasperse® UV" description="UV-filters"/>
                <SearchableItem name="Creaspheres®" description="Texturizer and dry lubricants"/>
                <SearchableItem name="Creastar®" description="Colourants"/>
                <SearchableItem name="Creasterol® ISO 16128" description="Emollient, lubricant, moisture barrier"/>
                <SearchableItem name="Dedraflow®" description="Photostable emollients"/>
                <SearchableItem name="Dedraflow® ISO 16128" description="Emollient, lubricant, moisture barrier"/>
                <SearchableItem name="Eospoly® Colour" description="Colourant, UV-filter, soft focus agent"/>
                <SearchableItem name="Eospoly® UV" description="UV-filters with soft focus effect"/>
                <SearchableItem name="Fiflow®" description="Anti-age actives"/>
                <SearchableItem name="Hectone®" description="Pre-dispersed organoclays"/>
                <SearchableItem name="Hydrasoft®" description="Water soluble viscosity and texture modifiers"/>
                <SearchableItem name="Meadowfoam Seed Oil and derivates ISO 16128" description="Vegetable oil, emollient, anti-inflammatory"/>
                <SearchableItem name="Micromatrix® Dry Sphere Colour" description="Colourant, mattifier, texturizer"/>
                <SearchableItem name="Micromatrix® Fractile" description="Polymeric matrix"/>
                <SearchableItem name="Nordic Beauty Aqua Finlandia" description="Water"/>
                <SearchableItem name="Nordic Beauty Avena Finlandia" description="Oat oil"/>
                <SearchableItem name="Nordic Beauty Berry Extracts" description="Berries"/>
                <SearchableItem name="Nordic Beauty Birch" description="Birch Sap"/>
                <SearchableItem name="Nordic Beauty Brassica Finlandia" description=""/>
                <SearchableItem name="Nordic Beauty Flaxseed" description="Exfoliant, Flaxseed Scrub"/>
                <SearchableItem name="Nordic Beauty Peat" description="Peat"/>
                <SearchableItem name="Nordic Beauty Pine Bark Extract" description="Pine Bark"/>
                <SearchableItem name="NovaPowder®" description="Absorbent and texturizing powder"/>
                <SearchableItem name="Novatext®" description="Silicone based texture modifiers"/>
                <SearchableItem name="Novatext® Nude ISO 16128" description="Texture modifier, soft focus agent, colourant"/>
                <SearchableItem name="Novatext® Soft Focus ISO 16128" description="Texture modifier, soft focus agent"/>
                <SearchableItem name="Nylonpoly®" description="Texturizing powders"/>
                <SearchableItem name="Nylonpoly® Colour" description="Intense colourant, mattifier, texturizer, dry binder, anti-caking"/>
                <SearchableItem name="Oligolides®" description="Actives based on trace elements"/>
                <SearchableItem name="Pelavie® ISO 16128" description="Clays"/>
                <SearchableItem name="Soluble Dyes" description="Hydrosoluble Colours, Liposoluble Colours"/>
                <SearchableItem name="Thixolastic®" description="Texturizer"/>
                <SearchableItem name="Vegeflow®" description="Silicone substitute, emollient"/>
                <div className="clearfix"></div>
            </Page>
        );
    }
}