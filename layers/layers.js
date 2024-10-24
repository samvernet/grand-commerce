var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Grandscommerces2024_1 = new ol.format.GeoJSON();
var features_Grandscommerces2024_1 = format_Grandscommerces2024_1.readFeatures(json_Grandscommerces2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grandscommerces2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grandscommerces2024_1.addFeatures(features_Grandscommerces2024_1);
var lyr_Grandscommerces2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grandscommerces2024_1, 
                style: style_Grandscommerces2024_1,
                popuplayertitle: "Grands commerces — 2024",
                interactive: true,
    title: 'Grands commerces — 2024<br />\
    <img src="styles/legend/Grandscommerces2024_1_0.png" /> Alimentaire<br />\
    <img src="styles/legend/Grandscommerces2024_1_1.png" /> Culture loisirs santé<br />\
    <img src="styles/legend/Grandscommerces2024_1_2.png" /> Equip. de la maison<br />\
    <img src="styles/legend/Grandscommerces2024_1_3.png" /> Equip. de la personne<br />\
    <img src="styles/legend/Grandscommerces2024_1_4.png" /> Grand commerce<br />\
    <img src="styles/legend/Grandscommerces2024_1_5.png" /> Véhicules<br />'
        });
var format_Aveclogos_2 = new ol.format.GeoJSON();
var features_Aveclogos_2 = format_Aveclogos_2.readFeatures(json_Aveclogos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aveclogos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aveclogos_2.addFeatures(features_Aveclogos_2);cluster_Aveclogos_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Aveclogos_2
});
var lyr_Aveclogos_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Aveclogos_2, 
                style: style_Aveclogos_2,
                popuplayertitle: "Avec logos",
                interactive: true,
                title: '<img style="max-width:16px; max-height:16px;" src="styles/red-marker.svg" /> Avec logos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Grandscommerces2024_1.setVisible(true);lyr_Aveclogos_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Grandscommerces2024_1,lyr_Aveclogos_2];
lyr_Grandscommerces2024_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ROWID_ID': 'ROWID_ID', 'Ordre': 'Ordre', 'Etablissement': 'Etablissement', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Code': 'Code', 'Activité': 'Activité', 'EN': 'EN', 'Surface': 'Surface', 'Note': 'Note', 'DateTerrai': 'DateTerrai', 'Drive': 'Drive', 'Mod': 'Mod', 'Mod2020': 'Mod2020', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2013': 'Mod2013', 'Mod2023': 'Mod2023', 'Code2023': 'Code2023', 'Mod2024': 'Mod2024', 'Code2024': 'Code2024', 'VILLE': 'VILLE', 'INSEE': 'INSEE', 'CODE POSTAL': 'CODE POSTAL', 'Catégorie 2024': 'Catégorie 2024', 'logo chemin': 'logo chemin', });
lyr_Aveclogos_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ROWID_ID': 'ROWID_ID', 'Ordre': 'Ordre', 'Etablissement': 'Etablissement', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Code': 'Code', 'Activité': 'Activité', 'EN': 'EN', 'Surface': 'Surface', 'Note': 'Note', 'DateTerrai': 'DateTerrai', 'Drive': 'Drive', 'Mod': 'Mod', 'Mod2020': 'Mod2020', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2013': 'Mod2013', 'Mod2023': 'Mod2023', 'Code2023': 'Code2023', 'Mod2024': 'Mod2024', 'Code2024': 'Code2024', 'VILLE': 'VILLE', 'INSEE': 'INSEE', 'CODE POSTAL': 'CODE POSTAL', 'Catégorie 2024': 'Catégorie 2024', 'logo chemin': 'logo chemin', });
lyr_Grandscommerces2024_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ROWID_ID': 'Range', 'Ordre': 'TextEdit', 'Etablissement': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Code': 'TextEdit', 'Activité': 'TextEdit', 'EN': 'TextEdit', 'Surface': 'Range', 'Note': 'Range', 'DateTerrai': 'DateTime', 'Drive': 'TextEdit', 'Mod': 'TextEdit', 'Mod2020': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2013': 'TextEdit', 'Mod2023': 'TextEdit', 'Code2023': 'TextEdit', 'Mod2024': 'TextEdit', 'Code2024': 'TextEdit', 'VILLE': 'TextEdit', 'INSEE': 'TextEdit', 'CODE POSTAL': 'Range', 'Catégorie 2024': 'TextEdit', 'logo chemin': 'TextEdit', });
lyr_Aveclogos_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ROWID_ID': 'Range', 'Ordre': 'TextEdit', 'Etablissement': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Code': 'TextEdit', 'Activité': 'TextEdit', 'EN': 'TextEdit', 'Surface': 'Range', 'Note': 'Range', 'DateTerrai': 'DateTime', 'Drive': 'TextEdit', 'Mod': 'TextEdit', 'Mod2020': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2013': 'TextEdit', 'Mod2023': 'TextEdit', 'Code2023': 'TextEdit', 'Mod2024': 'TextEdit', 'Code2024': 'TextEdit', 'VILLE': 'TextEdit', 'INSEE': 'TextEdit', 'CODE POSTAL': 'Range', 'Catégorie 2024': 'TextEdit', 'logo chemin': 'TextEdit', });
lyr_Grandscommerces2024_1.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ROWID_ID': 'hidden field', 'Ordre': 'hidden field', 'Etablissement': 'inline label - visible with data', 'Numero': 'inline label - visible with data', 'Adresse': 'inline label - visible with data', 'Code': 'hidden field', 'Activité': 'inline label - visible with data', 'EN': 'header label - visible with data', 'Surface': 'header label - visible with data', 'Note': 'header label - visible with data', 'DateTerrai': 'hidden field', 'Drive': 'header label - visible with data', 'Mod': 'hidden field', 'Mod2020': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2013': 'hidden field', 'Mod2023': 'hidden field', 'Code2023': 'hidden field', 'Mod2024': 'hidden field', 'Code2024': 'hidden field', 'VILLE': 'inline label - visible with data', 'INSEE': 'hidden field', 'CODE POSTAL': 'hidden field', 'Catégorie 2024': 'inline label - visible with data', 'logo chemin': 'hidden field', });
lyr_Aveclogos_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ROWID_ID': 'hidden field', 'Ordre': 'hidden field', 'Etablissement': 'hidden field', 'Numero': 'hidden field', 'Adresse': 'hidden field', 'Code': 'hidden field', 'Activité': 'hidden field', 'EN': 'hidden field', 'Surface': 'hidden field', 'Note': 'hidden field', 'DateTerrai': 'hidden field', 'Drive': 'hidden field', 'Mod': 'hidden field', 'Mod2020': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2013': 'hidden field', 'Mod2023': 'hidden field', 'Code2023': 'hidden field', 'Mod2024': 'hidden field', 'Code2024': 'hidden field', 'VILLE': 'hidden field', 'INSEE': 'hidden field', 'CODE POSTAL': 'hidden field', 'Catégorie 2024': 'hidden field', 'logo chemin': 'inline label - visible with data', });
lyr_Aveclogos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});