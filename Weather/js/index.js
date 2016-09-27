getWeatherInfo('北京');
function doSearch() {
  getWeatherInfo(document.querySelector("#cityname").value);
}
function getWeatherInfo(cityname) {
  $.ajax({
    url:"http://apis.baidu.com/apistore/weatherservice/cityinfo",
    data:{
      cityname:cityname
    },
    method:'get',
    headers:{
      apikey:"60e1493a96045c7876656904d1ff4b45"
    },
    dataType:'json',
    success:function (res) {
      var weath = res.retData;
      getMoreWeatherInfo(weath.cityname,weath.cityCode);
    },
    error:function (err) {
      console.log(err);
    }
  });
}
function getMoreWeatherInfo(cityname,cityid) {
  $.ajax({
    url:"http://apis.baidu.com/apistore/weatherservice/recentweathers",
    data:{
      cityname:cityname,
      cityid:cityid
    },
    method:'get',
    headers:{
      apikey:"60e1493a96045c7876656904d1ff4b45"
    },
    dataType:'json',
    success:function (res) {
      var tbody = document.querySelector('.tbody');
      var strHtml = '';
      var allWeather = res.retData;
      var frtureWeachter = allWeather.forecast;
      var yestdayWeather = allWeather.history;
      var toDayWeather = allWeather.today;
      for (var a = 0; a < yestdayWeather.length; a++) {
        var yestday = yestdayWeather[a];
        styleHTML(yestday,"info");
      }
      var today = toDayWeather;
      styleHTML(today,"danger");

      for (var i = 0; i < frtureWeachter.length; i++) {
        var futrue = frtureWeachter[i];
        styleHTML(futrue,"success");
      }
      tbody.innerHTML = strHtml;
      function styleHTML(data,string) {
        strHtml +='<tr class="'+string+'">'+
        '<th>'+data.date+'</th>'+
        '<th>'+data.fengli+'</th>'+
        '<th>'+data.fengxiang+'</th>'+
        '<th>'+data.hightemp+'</th>'+
        '<th>'+data.lowtemp+'</th>'+
        '<th>'+data.type+'</th>'+
        '<th>'+data.week+'</th>'+
        '</tr>';
      }
    },
    error:function (err) {
      console.log(err);
    }
  });
}
