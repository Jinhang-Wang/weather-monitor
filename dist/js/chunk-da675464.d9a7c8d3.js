(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da675464","chunk-e7d6b8d0","chunk-762400b8"],{"00fc":function(t,a,e){},"132c":function(t,a,e){"use strict";var i=e("5a20"),s=e.n(i);s.a},"5a20":function(t,a,e){},6431:function(t,a,e){"use strict";var i=e("00fc"),s=e.n(i);s.a},"9aaa":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"smap"},[t.imgshow?e("div",{staticClass:"gif"},[e("img",{staticClass:"gifimg",staticStyle:{"z-index":"-10",width:"100%"},attrs:{src:t.imgUrl}})]):t._e(),t.imgshow?e("div",{staticClass:"hours"},[e("div",[e("el-button",{staticStyle:{"z-index":"150"},attrs:{type:"primary",value:"24",size:"mini",plain:""},on:{click:function(a){return t.clich("24")}}},[t._v("24小时")]),e("el-button",{staticStyle:{"z-index":"150"},attrs:{type:"primary",value:"72",size:"mini",plain:""},on:{click:function(a){return t.clich("72")}}},[t._v("72小时")]),e("el-button",{staticStyle:{"z-index":"150"},attrs:{type:"primary",value:"96",size:"mini",plain:""},on:{click:function(a){return t.clich("96")}}},[t._v("96小时")]),e("el-button",{staticStyle:{"z-index":"150"},attrs:{type:"primary",value:"120",size:"mini",plain:""},on:{click:function(a){return t.clich("120")}}},[t._v("120小时")])],1),e("div",{staticStyle:{"margin-left":"450px"}},[e("el-button",{staticStyle:{"z-index":"150"},attrs:{type:"primary",deep:"20",size:"mini",plain:""},on:{click:function(a){return t.clicd("20")}}},[t._v("20米")]),e("el-button",{staticStyle:{"z-index":"150"},attrs:{type:"primary",deep:"50",size:"mini",plain:""},on:{click:function(a){return t.clicd("50")}}},[t._v("50米")]),e("el-button",{staticStyle:{"z-index":"150"},attrs:{type:"primary",deep:"100",size:"mini",plain:""},on:{click:function(a){return t.clicd("100")}}},[t._v("100米")]),e("el-button",{staticStyle:{"z-index":"150"},attrs:{type:"primary",deep:"200",size:"mini",plain:""},on:{click:function(a){return t.clicd("200")}}},[t._v("200米")]),e("el-button",{staticStyle:{"z-index":"150"},attrs:{type:"primary",deep:"500",size:"mini",plain:""},on:{click:function(a){return t.clicd("500")}}},[t._v("500米")])],1)]):t._e(),e("div",{staticClass:"datess"},[t._v(t._s(t.time))]),e("el-button",{staticClass:"back",attrs:{type:"success",size:"mini"},on:{click:t.back}},[t._v("返回")]),e("div",{staticClass:"grid"},[t._v(" 网格号 "),e("br"),t._v(t._s(t.areaid)+" ")]),t._m(0),e("div",{directives:[{name:"show",rawName:"v-show",value:t.flg,expression:"flg"}],staticClass:"dqzs"},[t._v(" "+t._s(t.airFlg.name)+" "),e("br"),t._v(" "+t._s(t.airFlg.value)+" ")]),1==this.$route.query.wmNumber?e("div",{staticClass:"wm"},[e("div",{staticClass:"wmBox"},[t._v(t._s(t.wmNumber1.name)+":"+t._s(t.wmNumber1.value))]),e("br"),e("div",{staticClass:"wmBox1"},[t._v(t._s(t.wmNumber2.name)+":"+t._s(t.wmNumber2.value))])]):t._e(),e("div",{staticStyle:{"font-size":"25px",color:"#F56C6C"}},[t._v(" "+t._s(t.notice)+" ")]),t.mapshow?e("div",{staticClass:"maaap"},[e("Map")],1):t._e()],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"jwd"},[t._v(" 经纬度 "),e("br"),t._v("128.13,28.33 ")])}],n=(e("d3b7"),e("25f0"),e("a0be")),r={name:"Small_map",props:["cdata"],data:function(){return{areaid:"",time:"2020-07-24",notice:"请注意出海安全",nowdata:"24",nowdeep:"20",imgUrl:"http://www.nmefc.cn/chanpin/hyhj/c-scs/024_T_0020.png",imgshow:!1,mapshow:!1,flg:!1,airFlg:{name:"大气指数",value:89},wmNumber1:{name:"雾霾指数1",value:60},wmNumber2:{name:"雾霾指数1",value:20}}},components:{Map:n["default"]},created:function(){var t=this.$route.path,a=t.toString();console.log(a),"/Pollution_forecast"==a&&(this.$set(this.$data,"mapshow",!0),this.$set(this.$data,"wmNumber1",{name:"雾霾指数1",value:45}),this.$set(this.$data,"wmNumber2",{name:"雾霾指数2",value:25})),"/Equal_tempe"==a&&(this.$set(this.$data,"wmNumber1",{name:"水温1",value:22}),this.$set(this.$data,"wmNumber2",{name:"水温2",value:33}),this.$set(this.$data,"imgshow",!0),this.$set(this.$data,"mapshow",!1),this.$axios.get("http://175.24.65.62:8900/data/24/20/temperature").then((function(t){console.log("imageUrl："+t.data.data)})).catch((function(t){console.log(t)}))),"/History_air"==a&&(console.log("折线图中的路径"+a),this.$set(this.$data,"flg",!0),this.$set(this.$data,"mapshow",!0),this.$set(this.$data,"airFlg",{name:"大气指数",value:88})),"/Go_sea"==a&&(console.log("折线图中的路径"+a),this.$set(this.$data,"flg",!0),this.$set(this.$data,"mapshow",!0),this.$set(this.$data,"airFlg",{name:"出海指数",value:this.$props.cdata.number}),this.$set(this.$data,"areaid",this.$props.cdata.areaid),this.$set(this.$data,"notice",this.$props.cdata.text))},methods:{clich:function(t){var a=this;this.$data.nowdata=t;var e="http://175.24.65.62:8900/data/"+t+"/"+this.$data.nowdeep+"/temperature";this.$axios.get(e).then((function(t){console.log("imageUrl："+t.data.data),a.$set(a.$data,"imgUrl",t.data.data)})).catch((function(t){console.log(t)}))},clicd:function(t){var a=this;this.$data.nowdeep=t;var e="http://175.24.65.62:8900/data/"+this.$data.nowdata+"/"+t+"/temperature";this.$axios.get(e).then((function(t){console.log("imageUrl："+t.data.data),a.$set(a.$data,"imgUrl",t.data.data)})).catch((function(t){console.log(t)}))},back:function(){this.$router.push({path:"/Statistics"})}}},c=r,l=(e("132c"),e("2877")),o=Object(l["a"])(c,i,s,!1,null,null,null);a["default"]=o.exports},"9ca7":function(t,a,e){"use strict";var i=e("b9e6"),s=e.n(i);s.a},b0f1:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"poll_area",staticClass:"Box2"})},s=[],n=(e("fb6a"),e("d3b7"),e("25f0"),e("313e")),r={name:"Line_chart",props:{curlPath:{type:String}},data:function(){return{chartName:"雾霾覆盖面积随时间变化折线图",dataArray:[820,932,901,934,1290,1330,1320,1500,1600,1200,800,500,1300],AQIArray:null,CO2Array:null,NO2Array:null,PHArray:null,SO2Array:null,OBJ:Object}},created:function(){var t="http://175.24.65.62:8900/data/1/ph",a=this;this.$axios.get(t).then((function(t){console.log(t.data.data),a.$set(a.$data,"AQIArray",t.data.data.AQI),a.$set(a.$data,"CO2Array",t.data.data.CO2),a.$set(a.$data,"NO2Array",t.data.data.NO2),a.$set(a.$data,"PHArray",t.data.data.PH),a.$set(a.$data,"SO2Array",t.data.data.SO2)})).catch((function(t){console.log(t)}))},mounted:function(){var t=this,a=window.location.href.toString().slice(23);setTimeout((function(){t.$nextTick((function(){this.checkName(a),this.initChart()}))}),1e3)},methods:{checkName:function(t){"/Pollution_forecast?wmNumber=true"==t&&(this.$set(this.$data,"chartName","雾霾覆盖面积随时间变化折线图"),this.$set(this.$data,"dataArray",this.$data.AQIArray)),"/Poll_degree"==t&&(this.$set(this.$data,"chartName","海水酸碱度随时间变化"),this.$set(this.$data,"dataArray",this.$data.PHArray)),"/History_air"==t&&(this.$set(this.$data,"chartName","大气总指数随时间变化折线图"),this.$set(this.$data,"dataArray",this.$data.CO2Array)),"/Go_sea"==t&&(this.$set(this.$data,"chartName","出海指数随时间变化曲线图"),this.$set(this.$data,"dataArray",this.$data.NO2Array))},initChart:function(){var t=n.init(this.$refs.poll_area),a={title:{text:""},legend:{data:[this.$data.chartName],top:10,textStyle:{fontSize:20}},xAxis:{type:"category",boundaryGap:!1,data:["1","2","3","4","5","6","7","8","9","10","11","12"]},yAxis:{type:"value"},color:"#4C91D7",series:[{name:this.$data.chartName,data:this.$data.dataArray,type:"line",areaStyle:{}}]};t.setOption(a)}}},c=r,l=(e("9ca7"),e("2877")),o=Object(l["a"])(c,i,s,!1,null,null,null);a["default"]=o.exports},b9e6:function(t,a,e){},f460:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("Small_map"),e("div",[t._v(" 当前海上湿度较高，会导致大气颗粒物的质量浓度增加，污染会持续加重；若出现降雨，则颗粒物会被冲刷走，污染得以缓解。")])],1),e("div",[e("Line_chart")],1)])},s=[],n=e("9aaa"),r=e("b0f1"),c={name:"poll_forecast",data:function(){return{}},mounted:function(){},components:{Small_map:n["default"],Line_chart:r["default"]},methods:{}},l=c,o=(e("6431"),e("2877")),d=Object(o["a"])(l,i,s,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-da675464.d9a7c8d3.js.map