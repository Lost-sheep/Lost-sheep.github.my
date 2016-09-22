txt = document.querySelector('#txt');
content = document.querySelector('.content');

var data = [{
    name: "红米Note4",
    msg: "Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量",
    src: "http://i8.mifile.cn/v1/a1/65981365-72b0-d254-c4fb-e20225f10e4f.jpg",
    english: "HongMiNote4",
    price: "899元 起"
}, {
    name: "红米Pro",
    msg: "硬件级实时背景虚化 / Helio X20 十核旗舰处理 / 5.5” OLED 超鲜艳屏幕 / 拉丝全金属机身",
    english: "HongMiPro",
    src: "http://i8.mifile.cn/v1/a1/18234d8c-0026-9b84-d9df-fe483de6079e.jpg",
    price: "1499元 起"
}, {
    name: "小米Max全网通",
    msg: "6.44 大屏黄金尺寸 / 4850mAh 大电量 / 指纹识别 / 2.5D玻璃",
    english: "XiaoMiMaxQuanWangTong",
    src: "http://i8.mifile.cn/v1/a1/T1XSE_B5x_1RXrhCrK.jpg",
    price: "1299元 起"
}, {
    name: "小米5 标准版",
    msg: "骁龙820处理器 / 4轴防抖相机 / 新增支持双开微信，能刷公交卡、银行卡",
    english: "XiaoMi5 Biaozhunban",
    src: "http://i8.mifile.cn/v1/a1/T14xJTByZ_1RXrhCrK.jpg",
    price: "1799元 起"
}, {
    name: "小米笔记本Air",
    msg: "Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量",
    english: "XiaoMiBiJiBenAir",
    src: "http://i8.mifile.cn/v1/a1/ef4b3763-3460-bcf3-9643-eb892bbadfb8.jpg",
    price: "3499元 起"
}];

function initCtrl(data) {
    var strName = '';
    data.forEach(function(item) {
        strName += '<div class="list">' + '<img class="ico-lazy" src=' + item.src + '>' + '<p class="list-name">' + item.name + '</p>' + '<br>' + '<p class="list-msg">' + item.msg + '</p>' + '<br>' + '<p class="list-price">' + item.price + '</p>' + '</div>';
    });
    content.innerHTML = strName;
}
initCtrl(data);
// console.log(data);
txt.onkeyup = function(e) {
    var str = txt.value;
    var result = data.filter(function(item) {
        if (item.name.toLowerCase().indexOf(str.toLowerCase()) > -1 ||
            item.english.toLowerCase().indexOf(str.toLowerCase()) > -1) {
              console.log(item);
            return item;
        }
    });
    initCtrl(result);
};
