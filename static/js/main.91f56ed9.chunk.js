(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},26:function(e,t,a){},27:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},28:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},31:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},38:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},39:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},41:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(12),c=a.n(i),o=a(7),s=(a(23),a(5)),l=a.n(s),u=a(8),m=[{name:"Movie",exportName:"movie"},{name:"TV Movie",exportName:"tvMovie"},{name:"Series",exportName:"tvSeries"},{name:"Mini Series",exportName:"tvMiniSeries"},{name:"Episode",exportName:"tvEpisode"},{name:"Video",exportName:"video"},{name:"Short",exportName:"short"},{name:"TV Short",exportName:"tvShort"},{name:"TV Special",exportName:"tvSpecial"},{name:"Video Game",exportName:"videoGame"}],d="***";function p(e){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return a=e.sent,e.abrupt("return",v(a));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function g(e){return new Promise(function(t,a){var n=new FileReader;n.onloadend=function(e){var a=e.target.result;t(a)},n.onerror=function(e){a(e)},n.readAsText(e,"Windows-1252")})}function v(e){var t=function(e){return function(e){return e.replace("Const,","id,").replace("Your Rating,","rating,").replace("Title,","title,").replace("Date Rated,","dateRatedString,").replace("Genres,","genres,").replace("Title Type,","mediaType,").replace("Num Votes,","votes,").replace("Runtime (mins),","runtime,").replace("Release Date,","releaseDate,").replace("URL,","url,").replace("Year,","year,").replace("IMDb Rating,","imdbRating,").replace(",Directors",",directors")}(e).replace(/"[^"]+"/g,function(e){return e.replace(/,/g,"###")}).replace(/,/g,d).replace(/###/g,",").replace(/"/g,"")}(e).split("\n");console.log(t[0]);var a,n=[],r=t[0].split(d);return t.map(function(e,t){if(t<1)return n;var a={},i=e.split(d);return r.map(function(e,t){return a[e]=i[t],a}),n.push(a),n}),n.pop(),(a=n).map(function(e){var t=m.findIndex(function(t){return t.exportName===e.mediaType});return e.rating=parseInt(e.rating),e.runtime=parseInt(e.runtime),e.votes=parseInt(e.votes),e.year=parseInt(e.year),e.imdbRating=parseFloat(e.imdbRating),e.dateRated=new Date(e.dateRatedString),e.mediaTypeId=t,e.mediaType=m[t].name,e.genres=e.genres.split(","),e.directors=e.directors.split(","),e}),n=a,console.log(n),n}var h=a(16);var b=function(e){var t=Object(h.a)(new Set(e.map(function(e){return e.mediaTypeId})));return t=t.sort()},E=(a(26),function(e){var t=e.setLoaded,a=e.setRatings,n=e.setLoadedMediaTypes,i=function(){var e=Object(u.a)(l.a.mark(function e(){var r,i,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementById("fileUpload").files[0],e.next=3,p(r);case 3:i=e.sent,c=b(i),console.log(c),a(i),n(c),t(!0),sessionStorage.setItem("ratings",JSON.stringify(i)),sessionStorage.setItem("mediaTypes",c);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"uploader"},r.a.createElement("h1",null,"Upload IMDb Ratings CSV"),r.a.createElement("input",{type:"file",id:"fileUpload",onChange:i}))}),y=(a(27),function(){return r.a.createElement("div",{className:"title-bar"},r.a.createElement("span",{className:"app-name"},"IMDb Ratings Visualizer"))}),w=(a(28),a(42)),x=a(15),k=(a(31),function(e){var t=e.ratings,a=r.a.createElement("span",null,r.a.createElement("span",{style:{verticalAlign:"middle"}},"Next"),r.a.createElement("i",{className:"material-icons pagination-icon"},"keyboard_arrow_right")),n=r.a.createElement("span",null,r.a.createElement("i",{className:"material-icons pagination-icon left-pagination-icon"},"keyboard_arrow_left"),r.a.createElement("span",null,"Previous"));return r.a.createElement(x.a,{data:t,columns:[{Header:"ID",accessor:"id"},{Header:"Title",accessor:"title"},{Header:"Rating",accessor:"rating"},{Header:"Type",accessor:"mediaType"},{Header:"Date Rated",accessor:"dateRatedString"},{Header:"Genres",accessor:"genres"}],className:"-striped -highlight main-component",defaultSorted:[{id:"rating",desc:!0}],defaultPageSize:50,pageSizeOptions:[5,10,20,25,50,100,250,1e3],nextText:a,previousText:n,minRows:0})}),N=a(13),S=a.n(N),T=["#FF355E","#FD5B78","#FF6037","#FF9933","#FFCC33","#FFFF66","#CCFF00","#66FF66","#50BFE6","#FF00CC"],R=function(e){var t=e.title,a=e.categories,n=e.data,i=e.dataCount,c=e.seriesName,o=e.height,s=e.width,l={colors:T,plotOptions:{bar:{dataLabels:{position:"top"},distributed:!0,colors:{backgroundBarOpacity:1}}},dataLabels:{enabled:!0,formatter:function(e){return Math.round(e/i*100)+"%"},style:{fontSize:"12px",colors:["#ffffff"]}},xaxis:{categories:a,labels:{style:{colors:T}}},title:{text:t,floating:!0,align:"center",style:{color:"#ffffff"}},tooltip:{x:{show:!1}},grid:{show:!1},chart:{toolbar:{tools:{download:!1}}}},u=[{name:c,data:n}];return r.a.createElement("div",{className:"chart-container"},r.a.createElement(S.a,{options:l,series:u,type:"bar",height:o,width:s}))},O=function(e){var t=e.ratingsData,a=e.ratingsCount;return r.a.createElement(R,{title:"Ratings per Stars",categories:["1","2","3","4","5","6","7","8","9","10"],data:t,dataCount:a,seriesName:"Ratings",height:"350",width:"600"})},F=(a(38),function(e){var t=e.ratings,a=e.ratingsCount,n=(t.reduce(function(e,t){return e+(t.rating||0)},0)/a).toFixed(1);return r.a.createElement("div",{className:"chart-container"},r.a.createElement("div",null,r.a.createElement("div",{className:"key-description"},"Total Ratings"),r.a.createElement("div",{className:"key-number"},a)),r.a.createElement("div",null,r.a.createElement("div",{className:"key-description"},"Average Rating"),r.a.createElement("div",{className:"key-number"},n)))}),I=(a(39),function(e){for(var t=e.map(function(e){return e.rating}),a={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},n=0;n<t.length;n++){var r=t[n];a[r]=a[r]?a[r]+1:1}console.log(a);for(var i=[],c=1;c<=10;c++)i.push(a[c]);return console.log(i),i}),j=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];var C=function(e){var t=e.ratings,a=t.length,n=function(e){var t=e.reduce(function(e,t){return e[t.dateRated.getDay()]++,e},[0,0,0,0,0,0,0]);return t.push(t.shift()),t}(t);return console.log("ratingsPerWeekday =>",n),r.a.createElement("div",null,r.a.createElement(R,{title:"Ratings per Weekday",categories:j,data:n,dataCount:a,seriesName:"Weekday",width:"600",height:"400"}))},M=[{name:"Dashboard",icon:"bubble_chart",path:"/",component:function(e){var t=e.ratings,a=t.length;return r.a.createElement("div",null,r.a.createElement("div",{className:"main-component",style:{height:"384px"}},r.a.createElement(F,{ratings:t,ratingsCount:a}),r.a.createElement(O,{ratingsData:I(t),ratingsCount:a})))}},{name:"Ratings",icon:"list",path:"/ratings",component:k},{name:"Time",icon:"calendar_today",path:"/time",component:function(e){var t=e.ratings;return r.a.createElement("div",{className:"main-component"},"Time...",r.a.createElement(C,{ratings:t}))}}],D=function(){var e,t=Object(n.useState)((e=M,console.log(e),e.find(function(e){var t=window.location.pathname.substr(window.location.pathname.lastIndexOf("/"));return e.path===t}).name)),a=Object(o.a)(t,2),i=a[0],c=a[1];return M?r.a.createElement("div",null,M.map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement(w.a,{to:"".concat("/imdb-ratings-visualizer").concat(e.path),className:"sidebar-link"},r.a.createElement("div",{className:(t=e.name,i===t?"active-tab":"")},r.a.createElement("div",{onClick:function(){return c(e.name)},className:"sidebar-box"},r.a.createElement("i",{className:"material-icons sidebar-icon"},e.icon),r.a.createElement("span",{className:"sidebar-text"},e.name)))));var t})):"Loading"},B=function(e){var t=e.id,a=e.name,n=e.checked,i=e.onChange;return r.a.createElement("label",{className:"filter-checkbox-label"},r.a.createElement("input",{type:"checkbox",className:"custom-checkbox",value:t,name:a,checked:n,onChange:i}),a)},L=function(e){var t=e.loadedMediaTypes,a=e.filterMovies,i=t.map(function(e){return[e,!0]}),c=Object(n.useState)(1),s=Object(o.a)(c,2),l=s[0],u=s[1],d=Object(n.useState)(new Map(i)),p=Object(o.a)(d,2),f=p[0],g=p[1],v=function(e){var t=parseInt(e.target.value),n=e.target.checked;g(f.set(t,n)),u(l+1),a(f)};return r.a.createElement("div",{className:"sidebar"},r.a.createElement(D,null),r.a.createElement("div",null,r.a.createElement("h3",{className:"filter-heading"},"Filter"),f?t.map(function(e){return r.a.createElement(B,{key:e,id:e,name:m[e].name,checked:f.get(e),onChange:v})}):"loading"))},V=a(43),Y=a(44);function W(){return(W=Object(u.a)(l.a.mark(function e(t,a,n){var r,i,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=sessionStorage.getItem("ratings"))){e.next=12;break}return e.next=4,JSON.parse(r);case 4:return i=e.sent,e.next=7,z(i);case 7:c=e.sent,t(c),console.log(c),a(sessionStorage.getItem("mediaTypes").split(",").map(function(e){return parseInt(e)})),n(!0);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function z(e){return H.apply(this,arguments)}function H(){return(H=Object(u.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.map(function(e){return e.dateRated=new Date(e.dateRated),e}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var _=function(e,t,a){return W.apply(this,arguments)},A=function(e){var t=e.ratings,a=e.loadedMediaTypes,i=Object(n.useState)(t),c=Object(o.a)(i,2),s=c[0],l=c[1],u=M.map(function(e){var t=e.path,a=e.component,n=e.name;return r.a.createElement(Y.a,{exact:!0,path:"".concat("/imdb-ratings-visualizer").concat(t),render:function(){return r.a.createElement(a,{ratings:s})},key:n})});return r.a.createElement("div",null,r.a.createElement(L,{loadedMediaTypes:a,filterMovies:function(e){var a=t.filter(function(t){return!0===e.get(t.mediaTypeId)});l(a)}}),u)},G=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(),s=Object(o.a)(c,2),l=s[0],u=s[1],m=Object(n.useState)(),d=Object(o.a)(m,2),p=d[0],f=d[1];return Object(n.useEffect)(function(){a||_(u,f,i)},[a]),r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement("div",{className:"main-content"},a?r.a.createElement(V.a,null,r.a.createElement(A,{ratings:l,loadedMediaTypes:p})):r.a.createElement(E,{setLoaded:i,setRatings:u,setLoadedMediaTypes:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.91f56ed9.chunk.js.map