require('leaflet');
require('leaflet-draw');

var togpx = require('togpx');
var tokml = require('tokml');
var vkbeautify = require('vkbeautify');

var DEFAULT_STYLE = {
    "color": "#F06EAA",
    "weight": 4,
    "opacity": 0.5
};

var SELECTED_STYLE = {
    "color": "#FF4E32",
    "weight": 6,
    "opacity": 0.5
};

var EXPORT_DATA = {
    geojson: {
        ext: "json",
        mime: "application/json"
    },
    gpx: {
        ext: "gpx",
        mime: "application/gpx+xml"
    },
    kml: {
        ext: "kml",
        mime: "application/vnd.google-earth.kml+xml"
    }
}

var exportMethods = {
    "geojson": function(beautify = false) {
        var data = JSON.stringify(drawnItems.toGeoJSON());
        return (beautify) ? vkbeautify.json(data) : data;
    },
    "gpx": function(beautify = false) {
        var data = togpx(drawnItems.toGeoJSON());
        return (beautify) ? vkbeautify.xml(data) : data;
    },
    "kml": function(beautify = false) {
        var data = tokml(drawnItems.toGeoJSON());
        return (beautify) ? vkbeautify.xml(data) : data;
    }
};

var selectedLayer;

var map = L.map('map', { closePopupOnClick: false }).setView([53.0685, -4.0763], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicXd5Y2siLCJhIjoiY2lzeXhqa3Z6MDA1MDJ6bzN2MXY2eHh0bSJ9.iAPf9IhnK6N7MrkIM_3pJA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 20
}).addTo(map);

var drawnItems = new L.FeatureGroup().addTo(map);
var drawControl = new L.Control.Draw({
    draw: {
        polygon: false,
        rectangle: false,
        circle: false
    },
    edit: {
        featureGroup: drawnItems
    }
}).addTo(map);

map.on('draw:created', function(e) {
    var layer = e.layer;

    layer.on('click', onLayerClicked);

    // http://stackoverflow.com/a/35819611
    var feature = layer.feature = layer.feature || {};
    feature.type = "Feature";
    feature.properties = feature.properties || {};
    feature.properties.name = "Trail" + Math.floor(Math.random() * 1000);
    
    drawnItems.addLayer(layer);
});

$('#export-modal-link').on('click', onExportClicked);
$('#download-link').on('click', onDownloadClicked);

function onExportClicked() {
    $('.export-modal .tab-pane').each(function() {
        var dataType = $(this).data('type');
        $('pre code', this).text(exportMethods[dataType](true));
    });
}

function onDownloadClicked() {
    var dataType = $('.export-modal .tab-content .active').data('type');

    var data = exportMethods[dataType]();
    var filename = "Route1." + EXPORT_DATA[dataType].ext;
    var options = {
        type: EXPORT_DATA[dataType].mime + ";charset=utf-8"
    }

    // http://stackoverflow.com/a/20194533
    var tempElem = window.document.createElement('a');
    tempElem.href = window.URL.createObjectURL(new Blob([data], options));
    tempElem.download = filename;

    document.body.appendChild(tempElem)
    tempElem.click();
    
    // tidy up
    document.body.removeChild(tempElem)
}

function onLayerClicked(e) {
    var layer = e.target;

    if (layer instanceof L.Path) {
        toggleSelectedLayer(layer, e);
    }
}

function toggleSelectedLayer(layer, e) {
    if (selectedLayer !== undefined) {
        if (selectedLayer._leaflet_id === layer._leaflet_id) {
            selectedLayer.setStyle(DEFAULT_STYLE);
            selectedLayer = undefined;
            map.closePopup();
        } else {
            selectedLayer.setStyle(DEFAULT_STYLE);
            selectedLayer = layer;
            selectedLayer.setStyle(SELECTED_STYLE);
            openPopup(e.latlng, layer);
        }
    } else {
        selectedLayer = layer;
        selectedLayer.setStyle(SELECTED_STYLE);
        openPopup(e.latlng, layer);
    }
}

function openPopup(latlng, layer) {
    var popup = L.popup()
                .setLatLng(latlng)
                .setContent(getPopupTemplate(layer))
                .openOn(map);

    $('#savePathName').on('click', function() {
        layer.feature.properties.name = $('#popupPathName').val();
        map.closePopup();
    });
    
    map.on('popupclose', function onPopupClose() {
        if (selectedLayer !== undefined) {
           toggleSelectedLayer(layer);
        }
        map.off('popupclose', onPopupClose);
    });
}

function getPopupTemplate(layer) {
    return '<form class="form-inline"> \
        <div class="form-group"> \
            <label class="sr-only" for="popupPathName">Trail name</label> \
            <input type="text" class="form-control" id="popupPathName" placeholder="' + layer.feature.properties.name + '"> \
        </div> \
        <button type="button" id="savePathName" class="btn btn-primary">Save</button> \
    </form>';
}

function importGeoJson(json) {
    drawnItems.clearLayers();

    geoJsonLayer = L.geoJson(json, {
        style: DEFAULT_STYLE,
        onEachFeature: function (feature, layer) {
            drawnItems.addLayer(layer);
        }
    });
}