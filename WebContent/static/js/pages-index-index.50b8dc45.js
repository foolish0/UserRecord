(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index"], {
    "6b31": function (e, n, t) {
        "use strict";
        var o = function () {
            var e = this, n = e.$createElement, t = e._self._c || n;
            return t("v-uni-view")
        }, i = [];
        t.d(n, "a", function () {
            return o
        }), t.d(n, "b", function () {
            return i
        })
    }, "7fd8": function (e, n, t) {
        "use strict";
        t.r(n);
        var o = t("839c"), i = t.n(o);
        for (var a in o) "default" !== a && function (e) {
            t.d(n, e, function () {
                return o[e]
            })
        }(a);
        n["default"] = i.a
    }, "839c": function (e, n, t) {
        "use strict";
        (function (e) {
            Object.defineProperty(n, "__esModule", {value: !0}), n.default = void 0, t("386d");
            var o = {
                data: function () {
                    return {code: ""}
                }, onLoad: function (n) {
                    e.log(n), e.log(location), location.search.indexOf("code=") > -1 ? (this.code = location.search.substring(location.search.indexOf("code=") + 5, location.search.indexOf("&", location.search.indexOf("code=") + 5)), e.log(this.code), this.$sendhttp(getApp().globalData.tokenurl + "?code=" + this.code, {}, function (e) {
                        uni.setStorageSync("token", e.token), uni.setStorageSync("userinfo", e.userinfo), "a" == n.t ? uni.redirectTo({url: "/pages/login/login"}) : uni.redirectTo({url: "/pages/add-member/add-member?oid=" + n.oid + "&oname=" + n.oname})
                    })) : this.$showModal("没有code")
                }
            };
            n.default = o
        }).call(this, t("5a52")["default"])
    }, d891: function (e, n, t) {
        "use strict";
        t.r(n);
        var o = t("6b31"), i = t("7fd8");
        for (var a in i) "default" !== a && function (e) {
            t.d(n, e, function () {
                return i[e]
            })
        }(a);
        var c = t("f0c5"), r = Object(c["a"])(i["default"], o["a"], o["b"], !1, null, "16d044e4", null);
        n["default"] = r.exports
    }
}]);