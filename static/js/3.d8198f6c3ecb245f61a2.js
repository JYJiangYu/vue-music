webpackJsonp([3],{O5nU:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),a=e("Sgn/"),c=e("T452"),r=(e("GQaK"),e("0aAL"),e("PvFA")),o=(e("9cIF"),e("kvay")),u=e("NYxO"),g={name:"SingerDetial",components:{MusicList:o.a},data:function(){return{songList:[]}},computed:s()({singName:function(){return this.singer.name},singImg:function(){return this.singer.avatar}},Object(u.c)(["singer"])),methods:{},created:function(){var t=this;Object(a.a)(this.singer.id).then(function(n){n.code===c.b&&n.data.list.forEach(function(n,e){n.musicData.songid&&n.musicData.albummid&&t.songList.push(Object(r.a)(n.musicData,"songVkey"))})}),this.singer.id||this.$router.back()},mounted:function(){}},d={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{songs:this.songList,title:this.singName,bgImage:this.singImg}})],1)},staticRenderFns:[]};var f=e("VU/8")(g,d,!1,function(t){e("OD4D")},"data-v-28a6418f",null);n.default=f.exports},OD4D:function(t,n){},"Sgn/":function(t,n,e){"use strict";n.b=function(){var t=s()({},a.c,{channel:"singer",page:"list",key:"all_all_all",pagesize:50,pagenum:1,hostUin:"0",needNewCode:"0",platform:"yqq",g_tk:2001751543});return Object(c.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,a.d)},n.a=function(t){var n=s()({},a.c,{g_tk:5381,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:100,songstatus:1});return Object(c.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",n,a.d)};var i=e("woOf"),s=e.n(i),a=e("T452"),c=e("Gak4"),r=e("mtWM");e.n(r)}});
//# sourceMappingURL=3.d8198f6c3ecb245f61a2.js.map