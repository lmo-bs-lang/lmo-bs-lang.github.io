(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{229:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(33),n(174),n(37),n(1).a.extend({name:"Translator",created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,body;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("vocabulary").fetch();case 2:n=e.sent,body=n.body,t.content=body;case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{way:"ita-bs",content:[],query:"",res:[],noResultsFor:""}},computed:{from:function(){return"ita-bs"===this.way?"italiano":"bresciano"},to:function(){return"ita-bs"===this.way?"bresciano":"italiano"}},methods:{switchLang:function(){this.res=[],this.noResultsFor="","ita-bs"===this.way?this.way="bs-ita":this.way="ita-bs"},search:function(){var t=this;if(this.query){this.noResultsFor="";var e="ita-bs"===this.way?"ita":"bs";this.res=this.content.filter((function(i){var q=t.query.toLowerCase().trim();return i[e].toLowerCase()===q})),0===this.res.length&&(this.noResultsFor=this.query)}}}})),l=n(47),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main max-w-3xl mx-auto p-4 w-full min-h-screen pb-10 relative"},[n("h1",{staticClass:"text-3xl text-gray-800 tracking-tighter leading-none font-serif text-center md:leading-tight"},[t._v("\n        Vocabolario Ortografico Italiano - Bresciano\n    ")]),t._v(" "),t._m(0),t._v(" "),n("form",{staticClass:"md:h-10 mt-8 text-xl w-full md:flex space-y-2 md:space-y-0 md:space-x-3",on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"border rounded-md px-2 text-xl h-10 md:h-full md:flex-auto w-full md:w-auto",attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),n("div",{staticClass:"h-10 md:h-full border rounded-md bg-gray-100 flex md:flex-none"},[n("input",{staticClass:"h-full text-center w-1/2 md:w-32 bg-transparent capitalize",attrs:{type:"text",disabled:""},domProps:{value:t.from}}),t._v(" "),n("button",{staticClass:"bg-gray-300 focus:outline-none px-3 rounded-md text-xl h-full",attrs:{type:"button"},on:{click:t.switchLang}},[n("svg",{staticClass:"h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}})])]),t._v(" "),n("input",{staticClass:"h-full text-center w-1/2 md:w-32 bg-transparent capitalize",attrs:{type:"text",disabled:""},domProps:{value:t.to}})]),t._v(" "),n("button",{staticClass:"bg-blue-600 hover:bg-blue-700 focus:outline-none text-white md:px-8 rounded-md h-10 md:h-full w-full md:w-auto",attrs:{type:"submit"}},[n("svg",{staticClass:"h-5 hidden md:block",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})]),t._v(" "),n("span",{staticClass:"md:hidden"},[t._v("Cerca")])])]),t._v(" "),t.res.length?n("ul",{staticClass:"space-y-2 p-4 mt-6 border rounded-md",attrs:{id:"results"}},t._l(t.res,(function(i,e){return n("li",{key:e,staticClass:"text-2xl list-disc list-inside"},[n("span",{staticClass:"capitalize"},[t._v(t._s("ita-bs"===t.way?i.bs:i.ita))]),t._v(" "),i.category&&"ita-bs"===t.way?n("span",{staticClass:"text-sm text-gray-500 italic pl-1"},[t._v("\n                ("+t._s(i.category)+")\n            ")]):t._e()])})),0):t._e(),t._v(" "),!t.res.length&&t.noResultsFor?n("p",{staticClass:"mt-10 text-gray-500 text-xl text-center",attrs:{id:"no-results"}},[t._v("\n        Nessun risultato per "),n("span",{staticClass:"italic"},[t._v('"'+t._s(t.noResultsFor)+'"')]),t._v(".\n    ")]):t._e(),t._v(" "),t._m(1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-center text-gray-400 text-sm"},[t._v("\n        Basato sul\n        "),n("a",{staticClass:"text-blue-500",attrs:{href:"http://scaramella.brescia.it",target:"_blank"}},[t._v("\n            lavoro originale di Giovanni Scaramella\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"text-gray-400 text-center text-sm p-4 absolute bottom-0 inset-x-0"},[n("span",[t._v("\n            Creato da\n            "),n("a",{staticClass:"text-blue-500",attrs:{href:"https://andreabertoloni.com",target:"_blank"}},[t._v("\n                Andrea Bertoloni\n            ")])])])}],!1,null,null,null);e.default=component.exports}}]);