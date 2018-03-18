/*******************************************************
                    MAPBOX engine
*******************************************************/

mapboxgl.accessToken = 'pk.eyJ1IjoidmlsbGkiLCJhIjoiY2lpb3h1c24yMDFoYnRya24xNmU4bjMyMCJ9.E-HMCovFdMRW8jioK56Rrg';
var map = new mapboxgl.Map({
    container: 'mapbox',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-18.781,64.108],
    zoom: 6   
});
  
map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

function openSide() {
    document.getElementById("mapSideInfo").style.width = "30%";
    document.getElementById("mapbox").style.marginLeft = "30%";
                                                            }
                                                            
function closeNav() {
    document.getElementById("mapSideInfo").style.width = "0";
    document.getElementById("mapbox").style.marginLeft= "0";
}

map.on('load', function () {
    // Add a symbol layer.
    map.addLayer({
        "id": "symbols",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {
                            "name": "First Spot"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -21.125,
                                -64.257
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "name": "Second Spot"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -22.406,
                                63.908
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "name": "Third Spot"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -21.322,
                                64.376
                            ]
                        }
                    }
                ]
            }
        },
        "layout": {
            "icon-image": "bar-15"
        }
    });
    
     
});
       
       map.on('click', 'symbols', function (e) {
        map.flyTo({center: e.features[0].geometry.coordinates});
        document.getElementById("mapSideInfo").style.width = "30%";
        document.getElementById("mapbox").style.marginLeft = "30%";
        $("#side-info-header").text(e.features[0].properties.name);
        
    });


/*******************************************************
                    PRICE engine
*******************************************************/

$(document).ready(function () {
                                                                    
    function estimatePrice(num) {
        if (num <= 10) { return 100000; }
        else if (num > 10 && num <= 25) { return num * 10000; }
        else if (num > 25 && num <= 40) { return (num * 10000) * 0.9; }
        else if (num > 40 && num <= 70) { return (num * 10000) * 0.8; }
        else return "Offer arrives via email!"
    }
                                                                    
    function updatePrice() {
        var sum, PAXvalue = $("#idi_PAX").val();
        if(PAXvalue) {
            var num;
            if (PAXvalue == 'Guest Number') { num = 0; }
            else { num = parseInt(PAXvalue); }
            
            var EstNum = estimatePrice(num);                                                                
            if (EstNum == "Offer arrives via email!") {
                $("#price-calculator").text(EstNum);
            } else {
                $("#price-calculator").text(EstNum.toFixed(0) + " ISK.");
            }
        }
    }
    $(document).on("change, mouseup, keyup", "#idi_PAX", updatePrice);
});