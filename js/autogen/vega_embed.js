
var COVIDVIS_CHARTS = {};

function loadScript(scriptUrl) {
  const script = document.createElement('script');
  script.src = scriptUrl;
  document.body.appendChild(script);
  
  return new Promise((res, rej) => {
    script.onload = function() {
      res();
    }
    script.onerror = function () {
      rej();
    }
  });
}
    
function startVegaEmbedding() {
  var embedOpt = {"mode": "vega-lite"};
  $(document).ready(function() {
loadScript("js/autogen/jhu_us_cases.js").then(function() {vegaEmbed("#jhu_us_cases", jhu_us_cases, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_us_cases'] = chart;
    
    var handler = makePopulateInfoPageSpaceHandler('jhu_us_cases');
    chart.view.addSignalListener('click', handler);
    handler('click', chart.view.signal('click'));

});}).then(function() {
    loadScript("js/autogen/jhu_us_cases_mobile.js").then(function() {vegaEmbed("#jhu_us_cases_mobile", jhu_us_cases_mobile, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_us_cases_mobile'] = chart;
    
});}).then(function() {
    loadScript("js/autogen/jhu_us_deaths.js").then(function() {vegaEmbed("#jhu_us_deaths", jhu_us_deaths, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_us_deaths'] = chart;
    
    var handler = makePopulateInfoPageSpaceHandler('jhu_us_deaths');
    chart.view.addSignalListener('click', handler);
    handler('click', chart.view.signal('click'));

});}).then(function() {
    loadScript("js/autogen/jhu_us_deaths_mobile.js").then(function() {vegaEmbed("#jhu_us_deaths_mobile", jhu_us_deaths_mobile, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_us_deaths_mobile'] = chart;
    
});}).then(function() {
    loadScript("js/autogen/jhu_world_cases.js").then(function() {vegaEmbed("#jhu_world_cases", jhu_world_cases, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_world_cases'] = chart;
    
});}).then(function() {
    loadScript("js/autogen/jhu_world_cases_mobile.js").then(function() {vegaEmbed("#jhu_world_cases_mobile", jhu_world_cases_mobile, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_world_cases_mobile'] = chart;
    
});}).then(function() {
    loadScript("js/autogen/jhu_world_deaths.js").then(function() {vegaEmbed("#jhu_world_deaths", jhu_world_deaths, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_world_deaths'] = chart;
    
});}).then(function() {
    loadScript("js/autogen/jhu_world_deaths_mobile.js").then(function() {vegaEmbed("#jhu_world_deaths_mobile", jhu_world_deaths_mobile, embedOpt).then(function(chart) {
    COVIDVIS_CHARTS['jhu_world_deaths_mobile'] = chart;
    
});})
})
})
})
})
})
})
})
  });
}
    