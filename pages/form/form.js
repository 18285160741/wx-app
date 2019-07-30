//logs.js
const util = require('../../utils/util.js')


const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}


Page({
  data: {
    countryList: [{
        name: '中国',
        value: 'CN',
        checked: true
      },
      {
        name: '美国',
        value: 'US',
        checked: false
      },
      {
        name: '英国',
        value: 'ENG',
        checked: false
      },
      {
        name: '法国',
        value: 'TUR',
        checked: false
      }
    ],
    sexList: [{
        name: '男',
        value: 1,
        checked: true
      },
      {
        name: '女',
        value: 0,
        checked: false
      }
    ],
    index: 0,
    pickerRangeSelector: [{
        name: '春',
        value: 'chun'
      },
      {
        name: '夏',
        value: 'xia'
      },
      {
        name: '秋',
        value: 'qiu'
      },
      {
        name: '冬',
        value: 'dong'
      }
    ],
    pickerRangeMultiselecor: [
      ['无脊柱动物', '脊柱动物'],
      ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
      ['猪肉绦虫', '吸血虫']
    ],
    multiIndex: [0, 0, 0],
    date: "1998-06-06",
    time: "10:12",
    region: ["贵州省", "贵阳市", "观山湖区"],
    customItem: "请选择",

    years: years,
    year: years[0],
    months: months,
    month: months[0],
    days: days,
    day: days[0],
    value: [0, 0, 0]
  },
  checkboxChange: function(e) {
    console.log(e.detail);
  },
  radioChange: function(e) {
    console.log(e);
  },
  sliderChange: function(e) {
    console.log(e.detail);
  },
  switchChange: function(e) {
    console.log(e.detail);
  },
  textareaInput: function(e) {
    console.log(e.detail);
  },
  selectorChange: function(e) {
    this.setData({
      index: e.detail.value
    });
    console.log(e.detail);
  },
  multiSelectorChange: function(e) {
    this.setData({
      multiIndex: e.detail.value
    });
    console.log(e.detail);
  },
  dateSelectorChange: function(e) {
    this.setData({
      date: e.detail.value
    });
    console.log(e.detail);
  },
  timeSelectorChange: function(e) {
    this.setData({
      time: e.detail.value
    });
    console.log(e.detail);
  },
  regionSelectorChange: function(e) {
    this.setData({
      region: e.detail.value
    });
    console.log(e.detail);
  },
  pickerviewChange: function(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    });
    console.log(e.detail);
  },
  // 接口调用
  submit: function(e) {
    console.log(e.detail.value);
    wx.request({
      url: 'http://192.168.11.30:8080/user/operation',
      data: JSON.stringify(e.detail.value),
      method: 'POST',
      header: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      success: function(res) {
        console.log(res);
      }
    })
  }



})