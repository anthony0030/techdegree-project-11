(this["webpackJsonptechdegree-project-11"]=this["webpackJsonptechdegree-project-11"]||[]).push([[0],{49:function(e,t,a){},55:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(2),c=a(26),s=a.n(c),i=a(15),l=(a(49),a(11)),o=a(12),u=a(43),h=a(42),j=a(4),g=a(41),d=(a(55),a(39)),b=a.n(d);a(69);var m=function(e){var t=e.HandleClick,a=e.links,n=e.setSafeSearch,c=e.safeSearch,s=e.setImagesPerPage,l=e.numberOfImagesPerPage;return Object(r.jsxs)("nav",{className:"main-nav",children:[Object(r.jsxs)("div",{className:"settings_container",children:[Object(r.jsxs)("div",{className:"settings_item",children:["Safe Search:\xa0",Object(r.jsxs)("select",{onChange:n,defaultValue:c,children:[Object(r.jsx)("option",{value:"1",children:"Safe"}),Object(r.jsx)("option",{value:"2",children:"Moderate"}),Object(r.jsx)("option",{value:"3",children:"Restricted"})]})]}),Object(r.jsxs)("div",{className:"settings_item",children:["Results per Page:\xa0",Object(r.jsxs)("select",{onChange:s,defaultValue:l,children:[Object(r.jsx)("option",{value:"20",children:"20"}),Object(r.jsx)("option",{value:"40",children:"40"}),Object(r.jsx)("option",{value:"80",children:"80"}),Object(r.jsx)("option",{value:"120",children:"120"})]})]})]}),Object(r.jsx)("ul",{children:a.map((function(e,a){return Object(r.jsx)("li",{onClick:t,children:Object(r.jsx)(i.b,{exact:!0,to:"/".concat(e.toLowerCase()),children:e})},a)}))})]})},f=a.p+"static/media/search.ca910276.svg";var O=function(e){var t=e.HandleSearch,a=e.searchQuery;return Object(r.jsxs)("form",{className:"search-form",onSubmit:t,children:[Object(r.jsx)("input",{id:"SearchQuery",type:"search",name:"search",placeholder:"Search",defaultValue:a,required:!0}),Object(r.jsx)("button",{type:"submit",className:"search-button",children:Object(r.jsx)("img",{src:f,alt:"SearchIcon"})})]})};var x=function(e){var t=e.url,a=e.title,n=e.index,c=e.HandleImageClick;return Object(r.jsx)("li",{children:Object(r.jsx)("img",{src:t,title:a,index:n,alt:a,onClick:c})})};var p=function(e){var t=e.title;return Object(r.jsxs)("div",{className:"not-found",children:[Object(r.jsx)("h3",{children:"No Results Found"}),Object(r.jsxs)("p",{children:["You search for ",Object(r.jsx)("strong",{children:t})," did not return any results. Please try again."]})]})};var v=function(e){var t=e.setPage,a=e.searchQuery,n=e.curentPage,c=e.text,s=e.value,l=e.className,o=e.disabled,u=e.hide;return Object(r.jsx)("li",{className:"change-page_button-container ".concat(u?"hide":null),children:o?Object(r.jsx)(i.b,{value:s,className:"change-page_button-button ".concat(l),to:"/".concat(a,"/").concat(n),children:c}):Object(r.jsx)(i.b,{onClick:t,value:s,className:"change-page_button-button ".concat(l),to:"/".concat(a,"/").concat(s),children:c})})};var P=function(e){var t=e.numberOfPages,a=e.curentPage,n=e.setPage,c=e.searchQuery;return Object(r.jsx)("nav",{"aria-label":"Page navigation",children:Object(r.jsxs)("ul",{className:"change-page_list",children:[Object(r.jsx)(v,{setPage:n,searchQuery:c,curentPage:a,text:"Previous",value:a-1,disabled:a<=1}),Object(r.jsx)(v,{setPage:n,searchQuery:c,curentPage:a,text:a-2,value:a-2,hide:t>a}),Object(r.jsx)(v,{setPage:n,searchQuery:c,curentPage:a,text:a-1,value:a-1,hide:a<=1}),Object(r.jsx)(v,{setPage:n,searchQuery:c,curentPage:a,text:a,value:a}),Object(r.jsx)(v,{setPage:n,searchQuery:c,curentPage:a,text:a+1,value:a+1,hide:a>=t}),Object(r.jsx)(v,{setPage:n,searchQuery:c,curentPage:a,text:a+2,value:a+2,hide:a>1}),Object(r.jsx)(v,{setPage:n,searchQuery:c,curentPage:a,text:"Next",value:a+1,disabled:t<=a})]})})};var S=function(e){var t=e.amountOfResults,a=e.buildFlikerUrl,n=e.curentPage,c=e.HandleImageClick,s=e.images,i=e.loading,l=e.numberOfPages,o=e.searchQuery,u=e.setPage,h=e.title;if(i)return Object(r.jsx)("p",{children:"loading..."});if(!(s.length>0))return Object(r.jsx)(p,{title:h});var j=s.map((function(e,t){return Object(r.jsx)(x,{url:a(e),title:e.title,index:t,HandleImageClick:c},e.id)}));return Object(r.jsxs)("div",{className:"photo-container",children:[Object(r.jsx)("h2",{children:h}),Object(r.jsxs)("small",{children:["Total Results: ",t]}),Object(r.jsx)("ul",{className:"photo-results",children:j}),Object(r.jsx)(P,{numberOfPages:l,curentPage:n,setPage:u,searchQuery:o})]})},y=a.p+"static/media/404.bbea2c44.jpg";var k=function(){return Object(r.jsx)("ul",{children:Object(r.jsxs)("li",{className:"not-found",children:[Object(r.jsx)("h1",{children:"404 someone took this page"}),Object(r.jsx)("img",{src:y,alt:"Error 404 Page Not Found"})]})})},N=!0,C=!1,I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).HandleMainNavigationVisit=function(t){var a=t.target.textContent.toLowerCase();e.setLoading(a)},e.HandleImageClick=function(t){var a=t.target.getAttribute("index");e.setState({isOpen:!0,photoIndex:a})},e.setSafeSearch=function(t){var a=t.target.value;C=!0,e.setState({safeSearch:a})},e.setImagesPerPage=function(t){var a=t.target.value;console.log(a),C=!0,e.setState({numberOfImagesPerPage:a})},e.HandleSearch=function(t){t.preventDefault();var a=t.target.querySelector("#SearchQuery").value.toLowerCase();e.setLoading(a)&&e.props.history.push("/".concat(a))},e.preformSearch=function(t,a){var r=e.state,n=r.apiKey,c=r.safeSearch,s=r.numberOfImagesPerPage;if(t!==e.state.searchQuery&&N||C){N=!1,C=!1;var i="\n          https://api.flickr.com/services/rest/\n          ?method=flickr.photos.search\n          &api_key=".concat(n,"\n          &safe_search=").concat(c,"\n          &per_page=").concat(s,"\n          &format=json\n          &nojsoncallback=1\n          &tags=").concat(t,"\n          &page=").concat(a,"\n        ").replace(/\s+/g,"");g.a.get(i).then((function(a){e.setState((function(e,r){return{images:a.data.photos.photo,amountOfResults:a.data.photos.total,numberOfPages:a.data.photos.pages,loading:!1,searchQuery:t}})),N=!0})).catch((function(e){}))}},e.setLoading=function(t){return t!==e.state.searchQuery&&(e.setState({loading:!0}),!0)},e.setPage=function(t){C=!0;var a=Number(t.target.value);e.setState({curentPage:a})},e.state={apiKey:"abdf5b6303423d73193915048fd12ef9",navLinks:["Cats","Dogs","Computers","Coffee"],numberOfImagesPerPage:40,numberOfPages:0,curentPage:1,safeSearch:1,images:[],amountOfResults:"0",loading:!0,searchQuery:"",photoIndex:0,isOpen:!1},e}return Object(o.a)(a,[{key:"buildFlikerUrl",value:function(e){return"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")}},{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen,c=t.images,s=t.amountOfResults,i=t.numberOfPages,l=t.searchQuery,o=t.navLinks,u=t.loading,h=t.numberOfImagesPerPage,g=t.safeSearch;return Object(r.jsxs)("div",{className:"container size-101vh",children:[Object(r.jsx)("h1",{children:"Flickr Search Engine"}),n&&Object(r.jsx)(b.a,{mainSrc:this.buildFlikerUrl(c[a]),nextSrc:this.buildFlikerUrl(c[(a+1)%c.length]),prevSrc:this.buildFlikerUrl(c[(a+c.length-1)%c.length]),imageTitle:c[a].title,imageCaption:c[a].title,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+c.length-1)%c.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%c.length})}}),Object(r.jsx)(O,{HandleSearch:this.HandleSearch,searchQuery:this.searchQuery}),Object(r.jsx)(m,{links:o,HandleClick:this.HandleMainNavigationVisit,setSafeSearch:this.setSafeSearch,safeSearch:g,setImagesPerPage:this.setImagesPerPage,numberOfImagesPerPage:h}),Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.a,{exact:!0,from:"/",to:"/cats"}),Object(r.jsx)(j.a,{exact:!0,from:"/:query",to:"/:query/1"}),Object(r.jsx)(j.b,{exact:!0,path:"/:query/:page?",render:function(t){var a=t.match;return e.preformSearch(a.params.query,a.params.page),Object(r.jsx)(S,{amountOfResults:s,buildFlikerUrl:e.buildFlikerUrl,curentPage:Number(a.params.page),HandleImageClick:e.HandleImageClick,images:c,loading:u,numberOfPages:i,searchQuery:l,setPage:e.setPage,title:l})}}),Object(r.jsx)(j.b,{component:k})]})]})}}]),a}(n.Component),Q=Object(j.g)(I);s.a.render(Object(r.jsx)(i.a,{basename:"/techdegree-project-11",children:Object(r.jsx)(Q,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.cee23bf9.chunk.js.map