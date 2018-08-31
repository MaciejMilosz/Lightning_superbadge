({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },

    onPlotMapMarker : function(component, event) {
        console.log('-V- handler');
        console.log(event.getParams());
        var long = event.getParam("long");
        var lat = event.getParam("lat");
        console.log(lat);
        console.log(long);
        var location = {};
        location.long = long;
        location.lat = lat;
        console.log(location);
        component.set("v.location", location);
    }
})