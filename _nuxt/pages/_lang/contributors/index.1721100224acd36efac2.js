webpackJsonp([36],{Ial1:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.$data.i18nPrefix+"hero.title")))]),e("h4",{staticClass:"title is-4"},[t._v(t._s(t.$t(t.$data.i18nPrefix+"credit.title")))]),e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"table is-bordered is-striped is-narrow is-fullwidth"},[e("thead",[e("tr",[e("th",{staticClass:"has-text-centered"},[t._v(t._s(t.$t(t.$data.i18nPrefix+"credit.table_credit.thead.th1")))]),e("th",{staticClass:"has-text-centered"},[t._v(t._s(t.$t(t.$data.i18nPrefix+"credit.table_credit.thead.th2")))])])]),e("tbody",[e("tr",[e("td",[t._v("Von Willem (FR)")]),e("td",[t._v(t._s(t.$t(t.$data.i18nPrefix+"credit.table_credit.tbody.td1")))])]),e("tr",[e("td",[t._v("Ozyman Tremble Weaklings (US)")]),e("td",[t._v(t._s(t.$t(t.$data.i18nPrefix+"credit.table_credit.tbody.td2")))])])])])]),e("h4",{staticClass:"title is-4"},[t._v(t._s(t.$t(t.$data.i18nPrefix+"programmer_and_translator.title")))]),e("b-loading",{attrs:{"is-full-page":!1,active:0===t.contributors.length},on:{"update:active":function(i){t.$set(t.contributors,"length === 0",i)}}}),t._l(t.contributors,function(i){return e("div",{staticClass:"tile is-ancestor"},t._l(i,function(i){return e("div",{staticClass:"tile is-parent"},[null!==i?e("article",{staticClass:"tile is-child"},[e("a",{attrs:{href:i.html_url,target:"_blank"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-left"},[e("figure",{staticClass:"image is-48x48",staticStyle:{"margin-left":"0em","margin-right":"0em"}},[e("img",{attrs:{src:i.avatar_url,alt:i.login+" avatar"}})])]),e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-4"},[t._v(t._s(i.login))]),t.i18nExists(t.i18nPrefix+"programmer_and_translator.contributors."+i.login)?e("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.$t(t.$data.i18nPrefix+"programmer_and_translator.contributors."+i.login)))]):t._e()])])])])])]):t._e()])}))})],2)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};i.a=a},L1cA:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("obHe"),a=e("Ial1"),r=e("VU/8")(s.a,a.a,!1,null,null,null);r.options.__file="pages/_lang/contributors/index.vue",i.default=r.exports},obHe:function(t,i,e){"use strict";var s=e("FQzT"),a="routes.contributors.";i.a={head:function(){return this.$store.commit("SET_HERO",{title:a+"hero.title",subtitle:a+"hero.subtitle"}),{title:this.$t(a+"title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","contributors"),{i18nPrefix:a,url:"https://api.github.com/repos/FOE-Tools/FOE-Tools.github.io/contributors",contributors:[]}},methods:{i18nExists:function(t,i){return this.$i18n.i18next.exists(t,i||{})}},mounted:function(){var t=new XMLHttpRequest,i=this;t.onreadystatechange=function(){4===t.readyState&&(200===t.status?i.$data.contributors=s.a.splitArray(JSON.parse(t.responseText),2,!0):console.error(t.statusText))},t.open("GET",this.$data.url,!0),t.onerror=function(){console.error(t.statusText)},t.send(null)}}}});