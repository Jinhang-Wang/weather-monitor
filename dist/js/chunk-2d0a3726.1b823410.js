(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3726"],{"01e4":function(t,l,a){"use strict";a.r(l);var e=function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("div",{staticClass:"ces-main"},[a("el-tag",{staticClass:"themetag"},[t._v("操作日志")]),a("el-form",[a("el-form-item",{attrs:{label:"数据导出",prop:"authority"}},[a("el-select",{attrs:{placeholder:"请选择时间段"},model:{value:t.down,callback:function(l){t.down=l},expression:"down"}},[a("el-option",{attrs:{label:"今日",value:"1"}}),a("el-option",{attrs:{label:"一周",value:"2"}}),a("el-option",{attrs:{label:"当月",value:"3"}}),a("el-option",{attrs:{label:"三个月",value:"4"}}),a("el-option",{attrs:{label:"一年",value:"5"}})],1),a("el-button",{attrs:{type:"info",icon:"el-icon-download",circle:""},on:{click:t.download}})],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"序号"}}),a("el-table-column",{attrs:{prop:"log_name",label:"操作人用户名"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{prop:"content",label:"操作内容"}}),a("el-table-column",{attrs:{prop:"time",label:"操作时间"}})],1)],1)},o=[],n=a("dac6"),s={data:function(){return{that:this,down:"",tableData:[]}},created:function(){this.GetAllData()},methods:{GetAllData:function(){var t=this,l="/logs/";n["a"].get(l).then((function(l){console.log(l),t.tableData=l.data.data.results})).catch((function(l){console.log(l),t.$notify.error({title:"失败",message:"获取数据失败"})}))},download:function(){}}},r=s,c=a("2877"),i=Object(c["a"])(r,e,o,!1,null,"07538876",null);l["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0a3726.1b823410.js.map