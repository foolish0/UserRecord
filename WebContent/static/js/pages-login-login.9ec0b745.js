(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login"], {
    2642: function (t, i, e) {
        "use strict";
        e.r(i);
        var n = e("9ac9"), a = e.n(n);
        for (var o in n) "default" !== o && function (t) {
            e.d(i, t, function () {
                return n[t]
            })
        }(o);
        i["default"] = a.a
    }, 5261: function (t, i, e) {
        "use strict";
        var n = function () {
            var t = this, i = t.$createElement, e = t._self._c || i;
            return e("v-uni-view", {staticClass: "container"}, [e("v-uni-view", {staticClass: "card"}, [e("v-uni-view", {staticClass: "title"}, [e("v-uni-text", [t._v("小区/单位 疫情防控进出人员登记")])], 1), e("v-uni-view", {staticClass: "subtitle"}, [e("v-uni-text", {staticClass: "p"}, [t._v("1. 该程序主要用于疫情期间方便小区/单位无纸化记录进出人员")]), e("v-uni-text", {staticClass: "p"}, [t._v("2. 一个账号只能绑定一个小区/单位")]), e("v-uni-text", {staticClass: "p"}, [t._v("3. 绑定后自动成为小区/单位管理员")]), e("v-uni-text", {staticClass: "p"}, [t._v("4. 管理页面中提供二维码给其他进出人员通过微信扫描并自主登记。")]), e("v-uni-text", {staticClass: "p"}, [t._v("5. 所有人员第一次使用时需要完善个人信息，以后不用，完善信息后不能自主修改，小区/单位管理员可后台修改。")]), e("v-uni-text", {staticClass: "p"}, [t._v("6. 不需要登录，依赖于微信自动登录")]), e("v-uni-text", {staticClass: "p"}, [t._v("7. 不炫酷不复杂不耗时，简单、方便、实用")])], 1), e("v-uni-button", {
                staticClass: "b",
                attrs: {type: "primary"},
                on: {
                    click: function (i) {
                        arguments[0] = i = t.$handleEvent(i), t.into.apply(void 0, arguments)
                    }
                }
            }, [t._v("进入")])], 1)], 1)
        }, a = [];
        e.d(i, "a", function () {
            return n
        }), e.d(i, "b", function () {
            return a
        })
    }, "704f": function (t, i, e) {
        "use strict";
        var n = e("b8fa"), a = e.n(n);
        a.a
    }, "7ba7": function (t, i, e) {
        "use strict";
        e.r(i);
        var n = e("5261"), a = e("2642");
        for (var o in a) "default" !== o && function (t) {
            e.d(i, t, function () {
                return a[t]
            })
        }(o);
        e("704f");
        var c = e("f0c5"), s = Object(c["a"])(a["default"], n["a"], n["b"], !1, null, "31b9fc58", null);
        i["default"] = s.exports
    }, "9ac9": function (t, i, e) {
        "use strict";
        Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
        var n = {
            data: function () {
                return {code: ""}
            }, onLoad: function (t) {
            }, methods: {
                into: function () {
                    uni.redirectTo({url: "/pages/login/bind"})
                }
            }
        };
        i.default = n
    }, a21c: function (t, i, e) {
        i = t.exports = e("2350")(!1), i.push([t.i, ".title[data-v-31b9fc58]{font-weight:700;font-size:24px;text-align:center;display:inline-block;width:100%}.subtitle[data-v-31b9fc58]{font-size:14px;color:red;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:10px}.card[data-v-31b9fc58]{display:-webkit-box;display:-webkit-flex;display:flex;border-radius:15px;background-color:#fff;box-shadow:0 1px 7px #888;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:10px}.container[data-v-31b9fc58]{padding:50px 30px}.section[data-v-31b9fc58]{margin:20px;padding:10px 0;border-bottom:%?2?% solid #eee}.login-btn[data-v-31b9fc58]{margin:30px 20px 0 20px}.title[data-v-31b9fc58]{font-size:19px}.subtitle[data-v-31b9fc58]{font-size:16px;color:#50619e;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.p[data-v-31b9fc58]{margin:6px}.b[data-v-31b9fc58]{margin-top:5px}", ""])
    }, b8fa: function (t, i, e) {
        var n = e("a21c");
        "string" === typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        var a = e("4f06").default;
        a("1f409441", n, !0, {sourceMap: !1, shadowMode: !1})
    }
}]);