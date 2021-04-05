(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-member-detail-member-detail"], {
    "0795": function (t, i, e) {
        var a = e("9460");
        "string" === typeof a && (a = [[t.i, a, ""]]), a.locals && (t.exports = a.locals);
        var n = e("4f06").default;
        n("23c68fc8", a, !0, {sourceMap: !1, shadowMode: !1})
    }, 3912: function (t, i, e) {
        "use strict";
        var a = e("0795"), n = e.n(a);
        n.a
    }, "419f": function (t, i, e) {
        "use strict";
        var a = {
            name: "姓名",
            phone: "电话",
            age: "年龄",
            id_type: "证件类型",
            id_card: "证件号码",
            sex: "性别",
            from_address: {addressStr: "来源地区", street: "来源地区详细地址"},
            from_hb: "来自湖北",
            from_wh: "来自武汉",
            traffic: {type: "交通工具类型", car_plate: "交通工具信息"},
            temperature: "体温",
            check_in_address: {addressStr: "到访地区", street: "到访详细地址"},
            check_in_time: "到达日期",
            check_out_time: "离开时间",
            body_status: {status: "身体状态", time: "测量时间"},
            contact_virus: {status: "是否接触过确诊人员", name: "确诊人员姓名", contact: "确诊人员联系方式"},
            contact_like_virus: {status: "是否接触过疑似人员", name: "疑似人员姓名", contact: "疑似人员联系方式"},
            contact_like_virus_region: {status: "是否接触过来自疫区的人员", name: "对方姓名", contact: "联系方式"},
            comment: "备注",
            operator_username: "操作者"
        }, n = ["普通", "居家隔离", "发烧", "疑似", "确诊", "死亡"], s = ["火车", "自驾", "汽车", "飞机"];
        t.exports = {exportTitle: a, bodyStatus: n, trafficType: s}
    }, "60ab": function (t, i, e) {
        "use strict";
        (function (t) {
            var a = e("288e");
            Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
            var n = a(e("a4bb"));
            e("ac6a");
            var s = a(e("5176"));
            e("c5f6");
            var o = e("419f"), r = {
                data: function () {
                    return {
                        ryinfo: {
                            body_status: {},
                            traffic: {},
                            contact_virus: {},
                            contact_like_virus: {},
                            contact_like_virus_region: {},
                            access: {}
                        }, showxg: 1, showxq: 1
                    }
                }, filters: {
                    age: function (t) {
                        return t ? "".concat(t, "岁") : "未知"
                    }, idType: function (t) {
                        return ["身份证", "护照"][t] || "未知"
                    }, boolean: function (t) {
                        return ["否", "是"][t] || "未知"
                    }, trafficType: function (t) {
                        return o.trafficType[t] || "未知"
                    }, bodyStatus: function (t) {
                        return o.bodyStatus[t] || "未知"
                    }, addres: function (t) {
                        return ("object" === typeof t ? t.street : t) || "未知"
                    }, formatTime: function (t) {
                        if (!t) return "无";
                        var i = new Date(t);
                        return "".concat(i.getFullYear(), "年").concat(i.getMonth() + 1, "月").concat(i.getDate(), "日 ").concat(i.getHours(), "时").concat(i.getMinutes(), "分").concat(i.getSeconds(), "秒")
                    }, sex: function (t) {
                        return ["女", "男"][Number(t) % 2] || "未知"
                    }
                }, onLoad: function () {
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = i.item;
                    try {
                        var a = (0, s.default)(this.ryinfo, JSON.parse(decodeURIComponent(e)));
                        a.list_id || this.loadData(a._id)
                    } catch (n) {
                        t.error(n)
                    }
                }, methods: {
                    loadData: function (i) {
                        var e = this;
                        uni.showLoading({title: "加载中..."}), this.$cloud.callFunction({
                            name: "member-detail",
                            data: {token: uni.getStorageSync("token"), id: i}
                        }).then(function (i) {
                            var a = i.result;
                            if (uni.hideLoading(), t.log(a), -3 !== a.code) if (0 === a.code) {
                                var s = a.data;
                                (0, n.default)(s).forEach(function (t) {
                                    "_id" !== t && (e.ryinfo[t] = s[t])
                                }), t.log(e.ryinfo)
                            } else uni.showToast({icon: "none", title: a.msg}); else uni.showModal({
                                content: "登陆状态无效",
                                showCancel: !1,
                                complete: function () {
                                    uni.redirectTo({url: "/pages/login/login"})
                                }
                            })
                        }).catch(function (t) {
                            uni.hideLoading(), uni.showToast({icon: "none", title: "数据加载失败"})
                        })
                    }
                }
            };
            i.default = r
        }).call(this, e("5a52")["default"])
    }, "7c10": function (t, i, e) {
        "use strict";
        var a = function () {
            var t = this, i = t.$createElement, e = t._self._c || i;
            return e("v-uni-view", {staticClass: "content"}, [0 == t.showxg ? e("v-uni-view", [t._v("参数传递错误")]) : t._e(), 0 != t.showxq ? e("v-uni-view", {staticClass: "ryxq"}, [e("v-uni-view", {staticClass: "xq-list"}, [e("v-uni-view", {staticClass: "items"}, [t._v("最后更新：" + t._s(t._f("formatTime")(t.ryinfo.create_time)))])], 1), e("v-uni-view", {
                staticClass: "xq-title",
                staticStyle: {position: "relative"}
            }, [t._v("人员信息")]), e("v-uni-view", {staticClass: "xq-list"}, [e("v-uni-view", {staticClass: "items"}, [t._v("姓名：" + t._s(t.ryinfo["name"]))]), e("v-uni-view", {staticClass: "items"}, [t._v("性别：" + t._s(t._f("sex")(t.ryinfo.sex)))]), e("v-uni-view", {staticClass: "items"}, [t._v("是否本地户籍：" + t._s(t._f("boolean")(t.ryinfo.native)))]), e("v-uni-view", {staticClass: "items"}, [t._v("年龄：" + t._s(t._f("age")(t.ryinfo.age)))]), e("v-uni-view", {staticClass: "items"}, [t._v("证件类型：" + t._s(t._f("idType")(t.ryinfo.id_type)))]), e("v-uni-view", {staticClass: "items"}, [t._v("证件号码：" + t._s(t.ryinfo.id_card || "未知"))]), e("v-uni-view", {staticClass: "items"}, [t._v("联系电话：" + t._s(t.ryinfo.phone))])], 1), e("v-uni-view", {staticClass: "xq-title"}, [t._v("到访信息")]), e("v-uni-view", {staticClass: "xq-list"}, [e("v-uni-view", {staticClass: "items"}, [t._v("本单位联系人：" + t._s(t.ryinfo.access.name || "无"))]), e("v-uni-view", {staticClass: "items"}, [t._v("联系人电话：" + t._s(t.ryinfo.access.phone || "无"))]), e("v-uni-view", {staticClass: "items"}, [t._v("到访事由：" + t._s(t.ryinfo.access.comment || "无"))])], 1), e("v-uni-view", {staticClass: "xq-title"}, [t._v("来源地信息")]), e("v-uni-view", {staticClass: "xq-list"}, [e("v-uni-view", {staticClass: "items"}, [t._v("是否来自武汉：" + t._s(t._f("boolean")(t.ryinfo.from_wh)))]), e("v-uni-view", {staticClass: "items"}, [t._v("是否来自湖北：" + t._s(t._f("boolean")(t.ryinfo.from_hb)))]), e("v-uni-view", {staticClass: "items"}, [t._v("出行方式：" + t._s(t._f("trafficType")(t.ryinfo.traffic.type)))]), e("v-uni-view", {staticClass: "items"}, [t._v("车牌或列车号：" + t._s(t.ryinfo.traffic.car_plate || "未知"))]), e("v-uni-view", {staticClass: "items"}, [t._v("来源：" + t._s(t._f("addres")(t.ryinfo.from_address)))]), e("v-uni-view", {staticClass: "items"}, [t._v("现居：" + t._s(t._f("addres")(t.ryinfo.check_in_address)))])], 1), e("v-uni-view", {staticClass: "xq-title"}, [t._v("健康状况")]), e("v-uni-view", {staticClass: "xq-list"}, [e("v-uni-view", {staticClass: "items"}, [t._v("体温：" + t._s(t.ryinfo.temperature))])], 1)], 1) : t._e()], 1)
        }, n = [];
        e.d(i, "a", function () {
            return a
        }), e.d(i, "b", function () {
            return n
        })
    }, 9460: function (t, i, e) {
        i = t.exports = e("2350")(!1), i.push([t.i, "uni-page-body[data-v-2a75d6ac]{background:#fff}.ryxq[data-v-2a75d6ac]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?750?%;\n\t/* height: 100%; */background:#fff;\n\n\t/* position: fixed;\n\tz-index: 99;\n\tmargin-top: 0upx;\n\ttop: 0upx; */-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:auto}.xq-list[data-v-2a75d6ac]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;font-size:%?30?%;line-height:%?60?%;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?20?%;height:auto;margin-bottom:%?20?%}.items[data-v-2a75d6ac]{float:left;overflow:hidden;background:#efefef;height:%?50?%;line-height:%?50?%;margin:%?20?% %?20?% %?0?% %?20?%;padding:%?5?% %?15?% %?5?% %?15?%;border-radius:%?20?%}.xq-title[data-v-2a75d6ac]{padding:%?20?%;border-bottom:#ccc %?2?% solid}body.?%PAGE?%[data-v-2a75d6ac]{background:#fff}", ""])
    }, f02f: function (t, i, e) {
        "use strict";
        e.r(i);
        var a = e("7c10"), n = e("f46a");
        for (var s in n) "default" !== s && function (t) {
            e.d(i, t, function () {
                return n[t]
            })
        }(s);
        e("3912");
        var o = e("f0c5"), r = Object(o["a"])(n["default"], a["a"], a["b"], !1, null, "2a75d6ac", null);
        i["default"] = r.exports
    }, f46a: function (t, i, e) {
        "use strict";
        e.r(i);
        var a = e("60ab"), n = e.n(a);
        for (var s in a) "default" !== s && function (t) {
            e.d(i, t, function () {
                return a[t]
            })
        }(s);
        i["default"] = n.a
    }
}]);