import zIndex from"../behaviors/zIndex";import watchShow from"../behaviors/watchShow";import validator from"../behaviors/validator";Component({behaviors:[zIndex,watchShow,validator],externalClasses:["l-class","l-image-class"],properties:{show:Boolean,icon:String,iconColor:{type:String,value:"#fff"},iconSize:{type:String,value:"28"},image:String,content:String,type:{type:String,value:"primary",options:["primary","warning","success","error"]},duration:{type:Number,value:1500},openApi:{type:Boolean,value:!0},top:{type:Number,value:0}},data:{status:!1},observers:{icon:function(){}},attached(){this.initMessage()},pageLifetimes:{show(){this.initMessage()}},methods:{initMessage(){wx.lin=wx.lin||{},wx.lin.showMessage=(t={})=>{const{content:e="",icon:i="",image:a="",type:s="primary",duration:o=1500,success:n=null,top:r=0}=t;return this.data.success=n,this.setData({content:e,icon:i,image:a,duration:o,type:s,top:r}),this.changeStatus(),this},wx.lin.hideMessage=()=>{this.setData({status:!1})}}}});