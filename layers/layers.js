var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BA_Municipios_2024_1 = new ol.format.GeoJSON();
var features_BA_Municipios_2024_1 = format_BA_Municipios_2024_1.readFeatures(json_BA_Municipios_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BA_Municipios_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA_Municipios_2024_1.addFeatures(features_BA_Municipios_2024_1);
var lyr_BA_Municipios_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BA_Municipios_2024_1, 
                style: style_BA_Municipios_2024_1,
                popuplayertitle: 'BA_Municipios_2024',
                interactive: true,
                title: '<img src="styles/legend/BA_Municipios_2024_1.png" /> BA_Municipios_2024'
            });
var format_ESTADOBAHIA_2 = new ol.format.GeoJSON();
var features_ESTADOBAHIA_2 = format_ESTADOBAHIA_2.readFeatures(json_ESTADOBAHIA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTADOBAHIA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTADOBAHIA_2.addFeatures(features_ESTADOBAHIA_2);
var lyr_ESTADOBAHIA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTADOBAHIA_2, 
                style: style_ESTADOBAHIA_2,
                popuplayertitle: 'ESTADO-BAHIA',
                interactive: false,
                title: '<img src="styles/legend/ESTADOBAHIA_2.png" /> ESTADO-BAHIA'
            });
var format_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3 = new ol.format.GeoJSON();
var features_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3 = format_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3.readFeatures(json_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3.addFeatures(features_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3);
var lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3, 
                style: style_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3,
                popuplayertitle: 'PERIMETROS-PAs-Bahia-GERAL - FALTA INCRA FISCALIZAR - UTM-24S',
                interactive: true,
                title: '<img src="styles/legend/PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3.png" /> PERIMETROS-PAs-Bahia-GERAL - FALTA INCRA FISCALIZAR - UTM-24S'
            });
var format_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4 = new ol.format.GeoJSON();
var features_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4 = format_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4.readFeatures(json_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4.addFeatures(features_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4);
var lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4, 
                style: style_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4,
                popuplayertitle: 'PERIMETROS-PAs-Bahia-GERAL - FALTA INCRA FISCALIZAR - UTM-23S',
                interactive: true,
                title: '<img src="styles/legend/PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4.png" /> PERIMETROS-PAs-Bahia-GERAL - FALTA INCRA FISCALIZAR - UTM-23S'
            });
var format_PERIMETROPAsBahiaAPROVADOS_5 = new ol.format.GeoJSON();
var features_PERIMETROPAsBahiaAPROVADOS_5 = format_PERIMETROPAsBahiaAPROVADOS_5.readFeatures(json_PERIMETROPAsBahiaAPROVADOS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIMETROPAsBahiaAPROVADOS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIMETROPAsBahiaAPROVADOS_5.addFeatures(features_PERIMETROPAsBahiaAPROVADOS_5);
var lyr_PERIMETROPAsBahiaAPROVADOS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIMETROPAsBahiaAPROVADOS_5, 
                style: style_PERIMETROPAsBahiaAPROVADOS_5,
                popuplayertitle: 'PERIMETRO-PAs-Bahia-APROVADOS',
                interactive: true,
                title: '<img src="styles/legend/PERIMETROPAsBahiaAPROVADOS_5.png" /> PERIMETRO-PAs-Bahia-APROVADOS'
            });
var group_BAHIA = new ol.layer.Group({
                                layers: [lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3,lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4,lyr_PERIMETROPAsBahiaAPROVADOS_5,],
                                fold: 'open',
                                title: 'BAHIA'});
var group_ESTADOSTED = new ol.layer.Group({
                                layers: [lyr_ESTADOBAHIA_2,],
                                fold: 'open',
                                title: 'ESTADOS-TED'});
var group_BRASILZONAS = new ol.layer.Group({
                                layers: [lyr_BA_Municipios_2024_1,],
                                fold: 'open',
                                title: 'BRASIL-ZONAS'});

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_BA_Municipios_2024_1.setVisible(true);lyr_ESTADOBAHIA_2.setVisible(true);lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3.setVisible(true);lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4.setVisible(true);lyr_PERIMETROPAsBahiaAPROVADOS_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_BRASILZONAS,group_ESTADOSTED,group_BAHIA];
lyr_BA_Municipios_2024_1.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_ESTADOBAHIA_2.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'AREA_KM2': 'AREA_KM2', 'ESTADO': 'ESTADO', 'AREA_HA': 'AREA_HA', 'Quantidade-Assentamentos': 'Quantidade-Assentamentos', });
lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3.set('fieldAliases', {'fid': 'fid', 'Cod_PA': 'Cod_PA', 'Descricao': 'Descricao', 'Municipio': 'Municipio', 'Tipologia': 'Tipologia', 'Fuso_UTM': 'Fuso_UTM', 'Tipo_lote': 'Tipo_lote', 'area_ha': 'area_ha', });
lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4.set('fieldAliases', {'fid': 'fid', 'Cod_PA': 'Cod_PA', 'Descricao': 'Descricao', 'Municipio': 'Municipio', 'Tipologia': 'Tipologia', 'Fuso_UTM': 'Fuso_UTM', 'Tipo_lote': 'Tipo_lote', 'area_ha': 'area_ha', });
lyr_PERIMETROPAsBahiaAPROVADOS_5.set('fieldAliases', {'fid': 'fid', 'Cod_PA': 'Cod_PA', 'Cod_SIGEF': 'Cod_SIGEF', 'Descricao': 'Descricao', });
lyr_BA_Municipios_2024_1.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_ESTADOBAHIA_2.set('fieldImages', {'fid': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'NM_REGIAO': '', 'AREA_KM2': '', 'ESTADO': '', 'AREA_HA': '', 'Quantidade-Assentamentos': '', });
lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3.set('fieldImages', {'fid': 'TextEdit', 'Cod_PA': 'TextEdit', 'Descricao': 'TextEdit', 'Municipio': 'TextEdit', 'Tipologia': 'TextEdit', 'Fuso_UTM': 'TextEdit', 'Tipo_lote': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4.set('fieldImages', {'fid': 'TextEdit', 'Cod_PA': 'TextEdit', 'Descricao': 'TextEdit', 'Municipio': 'TextEdit', 'Tipologia': 'TextEdit', 'Fuso_UTM': 'TextEdit', 'Tipo_lote': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_PERIMETROPAsBahiaAPROVADOS_5.set('fieldImages', {'fid': 'TextEdit', 'Cod_PA': 'TextEdit', 'Cod_SIGEF': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_BA_Municipios_2024_1.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_ESTADOBAHIA_2.set('fieldLabels', {'fid': 'hidden field', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', 'ESTADO': 'no label', 'AREA_HA': 'no label', 'Quantidade-Assentamentos': 'no label', });
lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM24S_3.set('fieldLabels', {'fid': 'hidden field', 'Cod_PA': 'no label', 'Descricao': 'no label', 'Municipio': 'no label', 'Tipologia': 'no label', 'Fuso_UTM': 'no label', 'Tipo_lote': 'no label', 'area_ha': 'no label', });
lyr_PERIMETROSPAsBahiaGERALFALTAINCRAFISCALIZARUTM23S_4.set('fieldLabels', {'fid': 'hidden field', 'Cod_PA': 'no label', 'Descricao': 'no label', 'Municipio': 'no label', 'Tipologia': 'no label', 'Fuso_UTM': 'no label', 'Tipo_lote': 'no label', 'area_ha': 'no label', });
lyr_PERIMETROPAsBahiaAPROVADOS_5.set('fieldLabels', {'fid': 'hidden field', 'Cod_PA': 'no label', 'Cod_SIGEF': 'no label', 'Descricao': 'no label', });
lyr_PERIMETROPAsBahiaAPROVADOS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});