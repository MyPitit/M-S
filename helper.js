//XMLHttpRequest to get the data from data.json
function getJSONData(callback) {
   var xml = new XMLHttpRequest();
   xml.overrideMimeType("application/json");
   xml.open('GET', 'data.json', true);
   xml.onreadystatechange = function () {
       if (xml.readyState == 4 && xml.status == 200) {
           callback(JSON.parse(xml.responseText));
       }
   };
   xml.send(null);
}
