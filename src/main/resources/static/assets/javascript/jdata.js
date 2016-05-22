var jmappings = [];

var jstart = function (options) {
    for (var i = 0; i < jmappings.length; i++) {
        jmappings[i].url += "?projects_id=" + jdata_projects_id + "&token=" + jdata_token + "&start=" + date_start + "&end=" + date_end + "&" + options;
        jmappings[i].start();
    }
}


var jdata = function (url) {
    this.url = url;
    this.map = [];
    this.loadings = [];
};

jdata.prototype.mapText = function (json, dom) {
    this.map.push(['text', json, dom]);
};

jdata.prototype.mapDataTable = function (json, dom) {
    this.map.push(['datatable', json, dom]);
};

jdata.prototype.mapChart = function (json, dom) {
    this.map.push(['chart', json, dom]);
};


jdata.prototype.start = function () {
    /* prepare loadings */
    for (var i = 0; i < this.map.length; i++) {
        if (this.map[i][0] == "text") {
            this.map[i][2].text("...");
        }
    }

    var httpRequest;
    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {

            }
        }
    }
    if (!httpRequest) {
        return false;
    }
    httpRequest.onreadystatechange = (function (map) {
        return function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                //for (var i = 0; i < this.loadings.length; i++) {
                //    clearInterval(this.loadings[i]);
                //}

                var json = JSON.parse(httpRequest.responseText);


                /** loading completed, fill necessary areas. */

                for (var i = 0; i < map.length; i++) {
                    if (map[i][0] == "text") {
                        map[i][2].text(JSPath.apply(map[i][1], json));
                    } else if (map[i][0] == "datatable") {
                        map[i][2].mydata = JSPath.apply(map[i][1], json);
                        console.log(map[i][2].myoptions);
                        mapDataTable(map[i][2], map[i][2].mydata, map[i][2].myoptions);
                    }
                }
            }
        };
    })(this.map);
    httpRequest.open('GET', this.url);
    httpRequest.send();
};


var mapDataTable = function (element, data, options, is_first) {

    data = element.mydata;
    if (element.fnGetData().length == 0) {
        for (var i = 0; i < data.length; i++) {
            var arr = [];

            for (var j = 0; j < options.length; j++) {
                arr.push(data[i][options[j]]);
            }
            element.fnAddData(arr, true);
        }
    } else {
        for (var i = 0; i < data.length; i++) {
            var arr = [];

            for (var j = 0; j < options.length; j++) {
                element.fnUpdate(data[i][options[j]], i, j);
            }
        }
    }
};


