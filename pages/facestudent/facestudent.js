//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
        uploaderList: [],
        uploaderNum:0,
        showUpload:true,
        name:'张三',
        stuno:'111'
    },
    // 删除图片
    clearImg:function(e){
        var nowList = [];//新数据
        var uploaderList = this.data.uploaderList;//原数据
        
        for (let i = 0; i < uploaderList.length;i++){
            if (i == e.currentTarget.dataset.index){
                continue;
            }else{
                nowList.push(uploaderList[i])
            }
        }
        this.setData({
            uploaderNum: this.data.uploaderNum - 1,
            uploaderList: nowList,
            showUpload: true
        })
    },
    //展示图片
    showImg:function(e){
        var that=this;
        wx.previewImage({
            urls: that.data.uploaderList,
            current: that.data.uploaderList[e.currentTarget.dataset.index]
        })
    },
    //上传图片
    upload: function(e) {
        var that = this;
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
                console.log(res)
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                let tempFilePaths = res.tempFilePaths;
                let uploaderList = that.data.uploaderList.concat(tempFilePaths);
                if (uploaderList.length==1){
                    that.setData({
                        showUpload:false
                    })
                }
                that.setData({
                    uploaderList: uploaderList,
                    uploaderNum: uploaderList.length,
                })
            }
        })
    },
    upfile:function(){
        wx.redirectTo({
            url: '../notice/notice'
          })
        // wx.uploadFile({
        //     url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        //     filePath: that.data.uploaderList[0],
        //     name: 'file',
        //     success (res){
        //       const data = res.data
        //       //do something
        //       wx.redirectTo({
        //         url: '../bind/bind'
        //       })
        //     }
        //   })
    },
    onLoad: function() {}
})