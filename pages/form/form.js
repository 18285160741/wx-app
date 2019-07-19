//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    countryList:[{
      name:'中国',
      value:'CN',
      checked:true
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
      }],
      sexList:[
        {
          name:'男',
          value:1,
          checked:true
        },
        {
          name: '女',
          value: 0,
          checked: false
        }
      ]
  },
  checkboxChange: function(e){
    console.log(e.detail);
  },
  radioChange: function(e){
    console.log(e);
  }


})
