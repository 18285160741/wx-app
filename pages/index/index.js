//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:1000,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    mov:{
      inertia: true,
      direction:"all",
      outOfBounds:false,
      x:1,
      y:1,
      damping:15,     // 阻尼系数
      friction:2      // 摩擦系数
    }
  },
  tap: function (e) {
    this.setData({
      mov:{
        x: 300,
        y: 300
      }
    });
  }
})
