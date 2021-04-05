(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-member-add-member-noid"], {
    "066a": function (i, t, e) {
        "use strict";
        var n = e("7259"), a = e.n(n);
        a.a
    }, "5f54": function (i, t, e) {
        "use strict";
        (function (i) {
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var e = {
                data: function () {
                    return {
                        realName: "",
                        phone: "",
                        address: "",
                        jksm: "是",
                        tw: "是",
                        inout: "进",
                        remark: "",
                        oid: "",
                        error: !0
                    }
                }, onLoad: function (i) {
                    var t = uni.getStorageSync("userinfo");
                    this.oid = t.oid, this.oid && "" !== this.oid && (this.error = !1)
                }, methods: {
                    resetV: function () {
                        this.realName = "", this.phone = "", this.address = "", this.jksm = "是", this.tw = "是", this.inout = "进", this.remark = ""
                    }, inoutChanged: function (i) {
                        this.inout = i.target.value
                    }, jksmChanged: function (i) {
                        this.jksm = i.target.value
                    }, twChanged: function (i) {
                        this.tw = i.target.value
                    }, remarkBlur: function (i) {
                        this.remark = i.target.value
                    }, submit: function () {
                        var t = this;
                        uni.showModal({
                            title: "提示", content: "确认提交？", success: function (e) {
                                if (e.confirm) {
                                    var n = {
                                        name: t.realName,
                                        phone: t.phone,
                                        address: t.address,
                                        jksm: t.jksm,
                                        tw: t.tw,
                                        inoutstr: t.inout,
                                        remark: t.remark,
                                        oid: t.oid
                                    };
                                    i.log(n), t.$sendhttp("/Weixin/addRecordNoid.dhtml", n, function (i) {
                                        t.$showModal("记录添加成功"), t.resetV()
                                    })
                                }
                            }
                        })
                    }
                }
            };
            t.default = e
        }).call(this, e("5a52")["default"])
    }, "6a34": function (i, t, e) {
        "use strict";
        var n = function () {
            var i = this, t = i.$createElement, e = i._self._c || t;
            return e("v-uni-view", {staticClass: "content"}, [i.error ? e("v-uni-view", [i._v("参数错误，请重新扫描二维码进入")]) : i._e(), i.error ? i._e() : e("v-uni-view", [e("v-uni-view", {staticClass: "title"}, [i._v("人员出入登记")]), e("v-uni-view", {staticClass: "list-item"}, [i._v("姓名："), e("v-uni-input", {
                staticClass: "input",
                model: {
                    value: i.realName, callback: function (t) {
                        i.realName = t
                    }, expression: "realName"
                }
            })], 1), e("v-uni-view", {staticClass: "list-item"}, [i._v("手机："), e("v-uni-input", {
                staticClass: "input",
                model: {
                    value: i.phone, callback: function (t) {
                        i.phone = t
                    }, expression: "phone"
                }
            })], 1), e("v-uni-view", {staticClass: "list-item"}, [i._v("住址："), e("v-uni-input", {
                staticClass: "input",
                model: {
                    value: i.address, callback: function (t) {
                        i.address = t
                    }, expression: "address"
                }
            })], 1), e("v-uni-view", {staticClass: "list-item-no"}, [i._v("健康声明")]), e("v-uni-view", {staticClass: "list-item-mul"}, [e("v-uni-text", [i._v("本人确认无发烧、咳嗽等肺炎疑似症状，没有接触湖北及周边地区人员")]), e("v-uni-radio-group", {
                staticClass: "uni-radio-group",
                on: {
                    change: function (t) {
                        arguments[0] = t = i.$handleEvent(t), i.jksmChanged.apply(void 0, arguments)
                    }
                }
            }, i._l(["是", "否"], function (t, n) {
                return e("v-uni-label", {
                    key: t,
                    staticClass: "uni-list-cell "
                }, [e("v-uni-view", [e("v-uni-radio", {
                    attrs: {
                        value: t,
                        checked: t === i.jksm
                    }
                })], 1), e("v-uni-view", [i._v(i._s(t))])], 1)
            }), 1)], 1), e("v-uni-view", {staticClass: "list-item-no"}, [i._v("体温情况")]), e("v-uni-view", {staticClass: "list-item-mul"}, [e("v-uni-radio-group", {
                staticClass: "uni-radio-group-col",
                on: {
                    change: function (t) {
                        arguments[0] = t = i.$handleEvent(t), i.twChanged.apply(void 0, arguments)
                    }
                }
            }, i._l(["是", "否"], function (t, n) {
                return e("v-uni-label", {
                    key: t,
                    staticClass: "uni-list-cell "
                }, [e("v-uni-view", [e("v-uni-radio", {
                    attrs: {
                        value: t,
                        checked: t === i.tw
                    }
                })], 1), 0 === n ? e("v-uni-view", [i._v("正常(低于37.3度)")]) : i._e(), 1 === n ? e("v-uni-view", [i._v("异常(37.3度或以上)")]) : i._e()], 1)
            }), 1)], 1), e("v-uni-view", {staticClass: "list-item-no"}, [i._v("进出小区/单位")]), e("v-uni-view", {staticClass: "list-item-mul"}, [e("v-uni-radio-group", {
                staticClass: "uni-radio-group",
                on: {
                    change: function (t) {
                        arguments[0] = t = i.$handleEvent(t), i.inoutChanged.apply(void 0, arguments)
                    }
                }
            }, i._l(["进", "出"], function (t, n) {
                return e("v-uni-label", {
                    key: t,
                    staticClass: "uni-list-cell "
                }, [e("v-uni-view", [e("v-uni-radio", {
                    attrs: {
                        value: t,
                        checked: t === i.inout
                    }
                })], 1), 0 === n ? e("v-uni-view", [i._v("进")]) : i._e(), 1 === n ? e("v-uni-view", [i._v("出")]) : i._e()], 1)
            }), 1)], 1), e("v-uni-view", {staticClass: "list-item-no"}, [i._v("备注")]), e("v-uni-view", {staticClass: "list-item-mul"}, [e("v-uni-view", {
                staticClass: "uni-textarea",
                staticStyle: {height: "100px"}
            }, [e("v-uni-textarea", {
                attrs: {placeholder: "其他情况备注", value: i.remark}, on: {
                    blur: function (t) {
                        arguments[0] = t = i.$handleEvent(t), i.remarkBlur.apply(void 0, arguments)
                    }
                }
            })], 1)], 1), e("v-uni-button", {
                attrs: {type: "primary"}, on: {
                    click: function (t) {
                        arguments[0] = t = i.$handleEvent(t), i.submit.apply(void 0, arguments)
                    }
                }
            }, [i._v("提交")])], 1)], 1)
        }, a = [];
        e.d(t, "a", function () {
            return n
        }), e.d(t, "b", function () {
            return a
        })
    }, 7259: function (i, t, e) {
        var n = e("932b");
        "string" === typeof n && (n = [[i.i, n, ""]]), n.locals && (i.exports = n.locals);
        var a = e("4f06").default;
        a("1fac1b98", n, !0, {sourceMap: !1, shadowMode: !1})
    }, "81ca": function (i, t, e) {
        "use strict";
        e.r(t);
        var n = e("6a34"), a = e("f3be");
        for (var o in a) "default" !== o && function (i) {
            e.d(t, i, function () {
                return a[i]
            })
        }(o);
        e("066a");
        var s = e("f0c5"), l = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, "550d144d", null);
        t["default"] = l.exports
    }, "932b": function (i, t, e) {
        t = i.exports = e("2350")(!1), t.push([i.i, "uni-page-body[data-v-550d144d]{background:#fff}.title[data-v-550d144d]{color:#007aff;font-size:21px;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:%?20?% 10px}.list-item[data-v-550d144d],.list-item-mul[data-v-550d144d],.list-item-no[data-v-550d144d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;border:1px solid #d3d3d3;line-height:50px;margin:20px 20px;padding:0 10px}.list-item-no[data-v-550d144d]{border:none;margin-bottom:-30px;font-weight:700;font-size:21px}.list-item-mul[data-v-550d144d]{line-height:30px;padding:10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.list-item-col[data-v-550d144d]{line-height:30px;padding:10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-radio-group[data-v-550d144d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around}.uni-radio-group-col[data-v-550d144d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around}.uni-list-cell[data-v-550d144d]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex}.input[data-v-550d144d]{width:250px;height:50px}body.?%PAGE?%[data-v-550d144d]{background:#fff}", ""])
    }, f3be: function (i, t, e) {
        "use strict";
        e.r(t);
        var n = e("5f54"), a = e.n(n);
        for (var o in n) "default" !== o && function (i) {
            e.d(t, i, function () {
                return n[i]
            })
        }(o);
        t["default"] = a.a
    }
}]);