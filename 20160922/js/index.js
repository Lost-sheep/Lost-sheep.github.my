var cmbProvince = document.querySelector('#province');
var cmbCity = document.querySelector('#city');
var cmbArea = document.querySelector('#area');


initCtrlProvince();

function changeCity() {

  var result =  city.filter(function (item) {
      if (item.ProID == cmbProvince.value) {
        return item;
      }
    });
    initCtrlCity(result);
    changeArea();
}

function changeArea() {
  var result = District.filter(function (item) {
    if (item.CityID == cmbCity.value) {
      return item;
    }
  });
  initCtrlArea(result);
}


function initCtrlProvince() {
  var strHtml='<option value="请选择">请选择</option>';
  province.forEach(function (item) {
    strHtml+='<option value="'+item.ProID+'">'+item.ProName+'</option>';
  });
  cmbProvince.innerHTML = strHtml;
}


function initCtrlCity(data) {
  var strHtml='<option value="请选择">请选择</option>';
  data.forEach(function (item) {
      strHtml+='<option value="'+item.CityID+'">'+item.CityName+'</option>';
  });
  cmbCity.innerHTML = strHtml;
}

function initCtrlArea(data) {
  var strHtml='<option value="请选择">请选择</option>';
  data.forEach(function (item) {
    strHtml+='<option value="'+item.CityID+'">'+item.DisName+'</option>';
  });
  cmbArea.innerHTML = strHtml;
}
