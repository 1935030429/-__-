// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    active:0
  },
  onLoad() {
    
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
})
