// pages/mydate/mydate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      currentWeek: 1,
      time: {
        one: [{
            index: 1,
            timeStart: '08:00',
            timeEnd: '08:45'
          },
          {
            index: 2,
            timeStart: '08:55',
            timeEnd: '09:40'
          },
          {
            index: 3,
            timeStart: '09:50',
            timeEnd: '10:45'
          },
          {
            index: 4,
            timeStart: '10:50',
            timeEnd: '11:35'
          },
          {
            index: 5,
            timeStart: '13:30',
            timeEnd: '14:15'
          },
          {
            index: 6,
            timeStart: '14:25',
            timeEnd: '15:10'
          },
          {
            index: 7,
            timeStart: '15:20',
            timeEnd: '16:05'
          },
          {
            index: 8,
            timeStart: '16:15',
            timeEnd: '17:00'
          },
          {
            index: 9,
            timeStart: '13:30',
            timeEnd: '14:15'
          },

          {
            index: 10,
            timeStart: '14:25',
            timeEnd: '15:10'
          },
          {
            index: 11,
            timeStart: '15:20',
            timeEnd: '16:05'
          },
          {
            index: 12,
            timeStart: '16:15',
            timeEnd: '17:00'
          },
          
        ],
      },
      weeks:[{
        id:1,
        class:[{
          week:7,
          num1:1,
          num2:5,
          sub: '编译原理',
          add: 'B202',
          tec: "苏苏苏",
          color:Math.floor(Math.random()*10)
          },{
            week:6,
            num1:4,
            num2:9,
            sub: '操作系统',
            add: 'N502',
            tec: "苏苏苏",
            color:Math.floor(Math.random()*10)
          },
        ],
      },{
        id:2,
        class:[{
          week:3,
          num1:1,
          num2:5,
          sub: '编译原理',
          add: 'B202',
          tec: "苏苏苏",
          color:Math.floor(Math.random()*10)
          },{
            week:5,
            num1:4,
            num2:9,
            sub: '操作系统',
            add: 'N502',
            tec: "苏苏苏",
            color:Math.floor(Math.random()*10)
          },
        ],
      },{
        id:3,
        class:[{
          week:2,
          num1:4,
          num2:8,
          sub: '编译原理',
          add: 'B202',
          tec: "苏苏苏",
          color:Math.floor(Math.random()*10)
          },{
            week:6,
            num1:4,
            num2:9,
            sub: '操作系统',
            add: 'N502',
            tec: "苏苏苏",
            color:Math.floor(Math.random()*10)
          },
        ],
      },,,,,,,,,,,,,,],
      weekList: [{
        isCurr:true,
        week:"周一",
        day:"1-10",
      },{
        isCurr:false,
        week:"周二",
        day:"1-11",
      },{
        isCurr:false,
        week:"周三",
        day:"1-12",
      },{
        isCurr:false,
        week:"周四",
        day:"1-9",
      },{
        isCurr:false,
        week:"周五",
        day:"1-9",
      },{
        isCurr:false,
        week:"周六",
        day:"1-9",
      },{
        isCurr:false,
        week:"周日",
        day:"1-9",
      }],
      isShow: false,
      color:["#8fb3a5","#be6476","#819b77","#b8a070","#1f8faf","#419b89","#8e7f64","#6476be","#e07050","8faf1f"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  changeWeeks(e){
    this.setData({
      currentWeek:e.detail.current+1
    })
  },
  cannelMask(){
    this.setData({
      isShow:false
    })
  },
  showMask(){
    this.setData({
      isShow:true
    })
  }
})