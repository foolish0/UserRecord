(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabbar-add"], {
    "182e": function (t, e, i) {
        "use strict";
        var n = i("288e");
        i("c5f6");
        var a = n(i("0a0d"));
        i("28a5");
        var r = n(i("59ad"));
        i("6b54");
        var o = n(i("e814"));

        function s(t) {
            if ("number" !== typeof t || t < 0) return t;
            var e = (0, o.default)(t / 3600);
            t %= 3600;
            var i = (0, o.default)(t / 60);
            t %= 60;
            var n = t;
            return [e, i, n].map(function (t) {
                return t = t.toString(), t[1] ? t : "0" + t
            }).join(":")
        }

        function u(t, e) {
            return "string" === typeof t && "string" === typeof e && (t = (0, r.default)(t), e = (0, r.default)(e)), t = t.toFixed(2), e = e.toFixed(2), {
                longitude: t.toString().split("."),
                latitude: e.toString().split(".")
            }
        }

        var c = {
            UNITS: {"年": 315576e5, "月": 26298e5, "天": 864e5, "小时": 36e5, "分钟": 6e4, "秒": 1e3},
            humanize: function (t) {
                var e = "";
                for (var i in this.UNITS) if (t >= this.UNITS[i]) {
                    e = Math.floor(t / this.UNITS[i]) + i + "前";
                    break
                }
                return e || "刚刚"
            },
            format: function (t) {
                var e = new Date(t), i = (0, a.default)() - e.getTime();
                if (i < this.UNITS["天"]) return this.humanize(i);
                var n = function (t) {
                    return t < 10 ? "0" + t : t
                };
                return e.getFullYear() + "/" + n(e.getMonth() + 1) + "/" + n(e.getDate()) + "-" + n(e.getHours()) + ":" + n(e.getMinutes())
            },
            parse: function (t) {
                var e = t.split(/[^0-9]/);
                return new Date(e[0], e[1] - 1, e[2], e[3], e[4], e[5])
            }
        };

        function l(t, e, i) {
            return t + "-" + d(e) + "-" + d(i)
        }

        function d(t) {
            return Number(t) < 10 ? "0" + t : t
        }

        function v(t) {
            return !!/^1[3456789]\d{9}$/.test(t) || (alert("手机号码有误，请重填"), !1)
        }

        function h(t) {
            return !!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/.test(t) || (alert("身份证号码有误，请重填"), !1)
        }

        t.exports = {formatTime: s, formatLocation: u, dateUtils: c, formatDate: l, checkPhone: v, checkIDCard: h}
    }, "1f89": function (t, e, i) {
        var n = i("c472");
        "string" === typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        var a = i("4f06").default;
        a("925e3074", n, !0, {sourceMap: !1, shadowMode: !1})
    }, "3b8d": function (t, e, i) {
        "use strict";
        i.r(e), i.d(e, "default", function () {
            return o
        });
        var n = i("795b"), a = i.n(n);

        function r(t, e, i, n, r, o, s) {
            try {
                var u = t[o](s), c = u.value
            } catch (l) {
                return void i(l)
            }
            u.done ? e(c) : a.a.resolve(c).then(n, r)
        }

        function o(t) {
            return function () {
                var e = this, i = arguments;
                return new a.a(function (n, a) {
                    var o = t.apply(e, i);

                    function s(t) {
                        r(o, n, a, s, u, "next", t)
                    }

                    function u(t) {
                        r(o, n, a, s, u, "throw", t)
                    }

                    s(void 0)
                })
            }
        }
    }, "4e83": function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("v-uni-view", {staticClass: "content"}, [i("v-uni-view", {staticClass: "list"}, [i("v-uni-view", {staticClass: "list-title"}, [t._v("人员信息")]), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("姓名"), i("v-uni-text", {staticClass: "color-red"}, [t._v("*")]), t._v("：")], 1), i("v-uni-input", {
                attrs: {
                    value: "",
                    placeholder: "请输入人员姓名"
                }, model: {
                    value: t.name, callback: function (e) {
                        t.name = e
                    }, expression: "name"
                }
            })], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("证件类型：")]), i("v-uni-picker", {
                attrs: {
                    mode: "selector",
                    "range-key": "label",
                    range: t.idTypeList
                }, on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.idTypeChange.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-view", {staticClass: "xiala"}, [i("v-uni-text", [t._v(t._s(t.idTypeList[t.id_type].label))]), i("v-uni-image", {attrs: {src: "/static/xl.png"}})], 1)], 1)], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("证件号码：")]), i("v-uni-input", {
                style: {backgroundColor: t.isCn ? "#EE6A50" : ""},
                attrs: {placeholder: "请输入证件号码", type: "text"},
                model: {
                    value: t.id_card, callback: function (e) {
                        t.id_card = e
                    }, expression: "id_card"
                }
            })], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("年龄：")]), i("v-uni-slider", {
                attrs: {
                    value: t.age,
                    min: "0",
                    step: "1",
                    max: "120",
                    "show-value": !0
                }, on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.ageChange.apply(void 0, arguments)
                    }
                }
            })], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("性别：")]), i("v-uni-radio-group", {
                on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.sexChange.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-label", [i("v-uni-radio", {
                attrs: {
                    value: "1",
                    checked: "1" == t.sex
                }
            }), i("v-uni-text", [t._v("男")]), i("v-uni-radio", {
                attrs: {
                    value: "0",
                    checked: "0" == t.sex
                }
            }), i("v-uni-text", [t._v("女")])], 1)], 1)], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("是否本地户籍：")]), i("v-uni-radio-group", {
                on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.nativeChange.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-label", [i("v-uni-radio", {attrs: {value: "1"}}), i("v-uni-text", [t._v("是")]), i("v-uni-radio", {attrs: {value: "0"}}), i("v-uni-text", [t._v("否")])], 1)], 1)], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("联系电话"), i("v-uni-text", {staticClass: "color-red"}, [t._v("*")]), t._v("：")], 1), i("v-uni-input", {
                attrs: {
                    value: "",
                    placeholder: "请输入联系电话"
                }, model: {
                    value: t.phone, callback: function (e) {
                        t.phone = e
                    }, expression: "phone"
                }
            })], 1)], 1), i("v-uni-view", {staticClass: "list"}, [i("v-uni-view", {staticClass: "list-title"}, [t._v("到访信息")]), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("本单位联系人：")]), i("v-uni-input", {
                attrs: {placeholder: "请输入联系人姓名"},
                model: {
                    value: t.access.name, callback: function (e) {
                        t.$set(t.access, "name", e)
                    }, expression: "access.name"
                }
            })], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("联系人电话：")]), i("v-uni-input", {
                attrs: {placeholder: "请输入联系电话"},
                model: {
                    value: t.access.phone, callback: function (e) {
                        t.$set(t.access, "phone", e)
                    }, expression: "access.phone"
                }
            })], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("到访事由：")]), i("v-uni-input", {
                attrs: {placeholder: "请输入到访事由"},
                model: {
                    value: t.access.comment, callback: function (e) {
                        t.$set(t.access, "comment", e)
                    }, expression: "access.comment"
                }
            })], 1)], 1), i("v-uni-view", {staticClass: "list"}, [i("v-uni-view", {staticClass: "list-title"}, [t._v("来源地信息")]), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("是否来自湖北：")]), i("v-uni-radio-group", {
                on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.fromHbChange.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-label", [i("v-uni-radio", {attrs: {value: "1"}}), i("v-uni-text", [t._v("是")]), i("v-uni-radio", {attrs: {value: "0"}}), i("v-uni-text", [t._v("否")])], 1)], 1)], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("是否来自武汉：")]), i("v-uni-radio-group", {
                on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.fromWhChange.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-label", [i("v-uni-radio", {attrs: {value: "1"}}), i("v-uni-text", [t._v("是")]), i("v-uni-radio", {attrs: {value: "0"}}), i("v-uni-text", [t._v("否")])], 1)], 1)], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("来源地区：")]), i("v-uni-input", {
                attrs: {
                    disabled: "disabled",
                    placeholder: "请输入地址",
                    value: t.from_address.addressStr
                }, on: {
                    click: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.showCityPicker("from_address")
                    }
                }
            })], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("来源地详细地址：")]), i("v-uni-input", {
                attrs: {placeholder: "请输入地址"},
                model: {
                    value: t.from_address.street, callback: function (e) {
                        t.$set(t.from_address, "street", e)
                    }, expression: "from_address.street"
                }
            })], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("出行方式：")]), i("v-uni-radio-group", {
                on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.trafficTypeChange.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-label", [i("v-uni-radio", {attrs: {value: "0"}}), i("v-uni-text", [t._v("火车")])], 1), i("v-uni-label", [i("v-uni-radio", {attrs: {value: "1"}}), i("v-uni-text", [t._v("自驾")])], 1), i("v-uni-label", [i("v-uni-radio", {attrs: {value: "2"}}), i("v-uni-text", [t._v("汽车")])], 1), i("v-uni-label", [i("v-uni-radio", {attrs: {value: "3"}}), i("v-uni-text", [t._v("飞机")])], 1)], 1)], 1), t.traffic.type > -1 ? i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("交通工具信息：")]), i("v-uni-input", {
                attrs: {placeholder: "请务必输入正确的信息"},
                model: {
                    value: t.traffic.car_plate, callback: function (e) {
                        t.$set(t.traffic, "car_plate", e)
                    }, expression: "traffic.car_plate"
                }
            })], 1) : t._e(), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("到访地区：")]), i("v-uni-input", {
                attrs: {
                    disabled: "disabled",
                    placeholder: "请输入地址",
                    value: t.check_in_address.addressStr
                }, on: {
                    click: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.showCityPicker("check_in_address")
                    }
                }
            })], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("到访地详细地址：")]), i("v-uni-input", {
                attrs: {placeholder: "请输入地址"},
                model: {
                    value: t.check_in_address.street, callback: function (e) {
                        t.$set(t.check_in_address, "street", e)
                    }, expression: "check_in_address.street"
                }
            })], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("到达日期：")]), i("v-uni-picker", {
                attrs: {mode: "date"},
                on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.checkInTimeChange.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-button", {attrs: {size: "mini"}}, [t._v(t._s(t.checkInTimeStr || "请选择"))])], 1)], 1)], 1), i("v-uni-view", {staticClass: "list"}, [i("v-uni-view", {staticClass: "list-title"}, [t._v("健康状况")]), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("身体状况：")]), i("v-uni-radio-group", {
                on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.bodyStatusChange.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-label", [i("v-uni-radio", {attrs: {value: "0"}}), i("v-uni-text", [t._v("普通")])], 1), i("v-uni-label", [i("v-uni-radio", {attrs: {value: "1"}}), i("v-uni-text", [t._v("居家隔离")])], 1), i("v-uni-label", [i("v-uni-radio", {attrs: {value: "2"}}), i("v-uni-text", [t._v("发烧")])], 1), i("v-uni-label", [i("v-uni-radio", {attrs: {value: "3"}}), i("v-uni-text", [t._v("疑似")])], 1), i("v-uni-label", [i("v-uni-radio", {attrs: {value: "4"}}), i("v-uni-text", [t._v("确诊")])], 1), i("v-uni-label", [i("v-uni-radio", {attrs: {value: "5"}}), i("v-uni-text", [t._v("死亡")])], 1)], 1)], 1), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("记录时间：")]), i("v-uni-picker", {
                attrs: {mode: "date"},
                on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.bodyStatusDateChange.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-button", {attrs: {size: "mini"}}, [t._v(t._s(t.bodyStatusDate || "请选择日期"))])], 1), i("v-uni-picker", {
                attrs: {mode: "time"},
                on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.bodyStatusTimeChange.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-button", {attrs: {size: "mini"}}, [t._v(t._s(t.bodyStatusTime || "请选择时间"))])], 1)], 1), i("v-uni-view", {staticClass: "divider"}), i("v-uni-view", {staticClass: "list-item"}, [i("v-uni-text", [t._v("体温：")]), i("v-uni-slider", {
                attrs: {
                    value: "36.5",
                    min: "35",
                    step: "0.1",
                    max: "40",
                    "show-value": !0
                }, on: {
                    change: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.temperatureChange.apply(void 0, arguments)
                    }
                }
            })], 1), i("v-uni-button", {
                on: {
                    click: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.submit.apply(void 0, arguments)
                    }
                }
            }, [t._v("提交信息")])], 1), i("mpvue-city-picker", {
                ref: "mpvueCityPicker",
                attrs: {pickerValueDefault: t.cityPickerValueDefault},
                on: {
                    onConfirm: function (e) {
                        arguments[0] = e = t.$handleEvent(e), t.onCityConfirm.apply(void 0, arguments)
                    }
                }
            })], 1)
        }, a = [];
        i.d(e, "a", function () {
            return n
        }), i.d(e, "b", function () {
            return a
        })
    }, 6002: function (t, e, i) {
        "use strict";
        i.r(e);
        var n = i("4e83"), a = i("f4cb");
        for (var r in a) "default" !== r && function (t) {
            i.d(e, t, function () {
                return a[t]
            })
        }(r);
        i("e909");
        var o = i("f0c5"), s = Object(o["a"])(a["default"], n["a"], n["b"], !1, null, "4fb2dd18", null);
        e["default"] = s.exports
    }, "96cf": function (t, e) {
        !function (e) {
            "use strict";
            var i, n = Object.prototype, a = n.hasOwnProperty, r = "function" === typeof Symbol ? Symbol : {},
                o = r.iterator || "@@iterator", s = r.asyncIterator || "@@asyncIterator",
                u = r.toStringTag || "@@toStringTag", c = "object" === typeof t, l = e.regeneratorRuntime;
            if (l) c && (t.exports = l); else {
                l = e.regeneratorRuntime = c ? t.exports : {}, l.wrap = _;
                var d = "suspendedStart", v = "suspendedYield", h = "executing", f = "completed", p = {}, m = {};
                m[o] = function () {
                    return this
                };
                var g = Object.getPrototypeOf, b = g && g(g(P([])));
                b && b !== n && a.call(b, o) && (m = b);
                var y = C.prototype = x.prototype = Object.create(m);
                k.prototype = y.constructor = C, C.constructor = k, C[u] = k.displayName = "GeneratorFunction", l.isGeneratorFunction = function (t) {
                    var e = "function" === typeof t && t.constructor;
                    return !!e && (e === k || "GeneratorFunction" === (e.displayName || e.name))
                }, l.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, C) : (t.__proto__ = C, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(y), t
                }, l.awrap = function (t) {
                    return {__await: t}
                }, S(E.prototype), E.prototype[s] = function () {
                    return this
                }, l.AsyncIterator = E, l.async = function (t, e, i, n) {
                    var a = new E(_(t, e, i, n));
                    return l.isGeneratorFunction(e) ? a : a.next().then(function (t) {
                        return t.done ? t.value : a.next()
                    })
                }, S(y), y[u] = "Generator", y[o] = function () {
                    return this
                }, y.toString = function () {
                    return "[object Generator]"
                }, l.keys = function (t) {
                    var e = [];
                    for (var i in t) e.push(i);
                    return e.reverse(), function i() {
                        while (e.length) {
                            var n = e.pop();
                            if (n in t) return i.value = n, i.done = !1, i
                        }
                        return i.done = !0, i
                    }
                }, l.values = P, I.prototype = {
                    constructor: I, reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach(D), !t) for (var e in this) "t" === e.charAt(0) && a.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = i)
                    }, stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0], e = t.completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    }, dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(n, a) {
                            return s.type = "throw", s.arg = t, e.next = n, a && (e.method = "next", e.arg = i), !!a
                        }

                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r], s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var u = a.call(o, "catchLoc"), c = a.call(o, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (t, e) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var n = this.tryEntries[i];
                            if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var r = n;
                                break
                            }
                        }
                        r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                        var o = r ? r.completion : {};
                        return o.type = t, o.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, p) : this.complete(o)
                    }, complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
                    }, finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), D(i), p
                        }
                    }, catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.tryLoc === t) {
                                var n = i.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    D(i)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (t, e, n) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = i), p
                    }
                }
            }

            function _(t, e, i, n) {
                var a = e && e.prototype instanceof x ? e : x, r = Object.create(a.prototype), o = new I(n || []);
                return r._invoke = T(t, i, o), r
            }

            function w(t, e, i) {
                try {
                    return {type: "normal", arg: t.call(e, i)}
                } catch (n) {
                    return {type: "throw", arg: n}
                }
            }

            function x() {
            }

            function k() {
            }

            function C() {
            }

            function S(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function E(t) {
                function e(i, n, r, o) {
                    var s = w(t[i], t, n);
                    if ("throw" !== s.type) {
                        var u = s.arg, c = u.value;
                        return c && "object" === typeof c && a.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
                            e("next", t, r, o)
                        }, function (t) {
                            e("throw", t, r, o)
                        }) : Promise.resolve(c).then(function (t) {
                            u.value = t, r(u)
                        }, function (t) {
                            return e("throw", t, r, o)
                        })
                    }
                    o(s.arg)
                }

                var i;

                function n(t, n) {
                    function a() {
                        return new Promise(function (i, a) {
                            e(t, n, i, a)
                        })
                    }

                    return i = i ? i.then(a, a) : a()
                }

                this._invoke = n
            }

            function T(t, e, i) {
                var n = d;
                return function (a, r) {
                    if (n === h) throw new Error("Generator is already running");
                    if (n === f) {
                        if ("throw" === a) throw r;
                        return N()
                    }
                    i.method = a, i.arg = r;
                    while (1) {
                        var o = i.delegate;
                        if (o) {
                            var s = L(o, i);
                            if (s) {
                                if (s === p) continue;
                                return s
                            }
                        }
                        if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
                            if (n === d) throw n = f, i.arg;
                            i.dispatchException(i.arg)
                        } else "return" === i.method && i.abrupt("return", i.arg);
                        n = h;
                        var u = w(t, e, i);
                        if ("normal" === u.type) {
                            if (n = i.done ? f : v, u.arg === p) continue;
                            return {value: u.arg, done: i.done}
                        }
                        "throw" === u.type && (n = f, i.method = "throw", i.arg = u.arg)
                    }
                }
            }

            function L(t, e) {
                var n = t.iterator[e.method];
                if (n === i) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = i, L(t, e), "throw" === e.method)) return p;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var a = w(n, t.iterator, e.arg);
                if ("throw" === a.type) return e.method = "throw", e.arg = a.arg, e.delegate = null, p;
                var r = a.arg;
                return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = i), e.delegate = null, p) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p)
            }

            function $(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function D(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function I(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach($, this), this.reset(!0)
            }

            function P(t) {
                if (t) {
                    var e = t[o];
                    if (e) return e.call(t);
                    if ("function" === typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1, r = function e() {
                            while (++n < t.length) if (a.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = i, e.done = !0, e
                        };
                        return r.next = r
                    }
                }
                return {next: N}
            }

            function N() {
                return {value: i, done: !0}
            }
        }(function () {
            return this || "object" === typeof self && self
        }() || Function("return this")())
    }, b708: function (t, e, i) {
        "use strict";
        (function (t) {
            var n = i("288e");
            Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
            var a = n(i("795b"));
            i("6762"), i("2fdb"), i("7514");
            var r = n(i("e814"));
            i("96cf");
            var o = n(i("3b8d")), s = n(i("0a0d")), u = n(i("f162")), c = i("182e"), l = {
                components: {mpvueCityPicker: u.default}, data: function () {
                    return {
                        data: [],
                        cityPickerValueDefault: [0, 0, 1],
                        name: "",
                        idTypeList: [{label: "身份证", value: 0}, {label: "护照", value: 1}],
                        id_type: 0,
                        id_card: "",
                        isCn: !1,
                        age: 0,
                        sex: -1,
                        native: 2,
                        phone: "",
                        from_hb: 0,
                        from_wh: 0,
                        from_address: {addressStr: "", street: ""},
                        traffic: {type: -1},
                        check_in_address: {addressStr: "", street: ""},
                        checkInTimeStr: "",
                        body_status: {status: 0, time: (0, s.default)()},
                        bodyStatusDate: "",
                        bodyStatusTime: "",
                        temperature: 36.5,
                        contact_virus: {status: "", name: "", contact: ""},
                        contact_like_virus: {status: "", name: "", contact: ""},
                        contact_like_virus_region: {status: "", name: "", contact: ""},
                        comment: "",
                        operator_username: "",
                        access: {name: "", phone: "", comment: ""}
                    }
                }, computed: {
                    check_in_time: function () {
                        return new Date(this.checkInTimeStr).getTime()
                    }
                }, watch: {
                    bodyStatusDate: function () {
                        this.getBodyStatusTimeStamp()
                    }, bodyStatusTime: function () {
                        this.getBodyStatusTimeStamp()
                    }, id_type: function () {
                        this.parseIdCard()
                    }, id_card: function () {
                        this.parseIdCard()
                    }
                }, onLoad: function (t) {
                    this.init(), this.operator_username = t.id, this.operator_username && uni.hideTabBar({animation: !1})
                }, methods: {
                    init: function () {
                        var t = (0, o.default)(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.$cloud.callFunction({name: "get-data", data: {}});
                                    case 2:
                                        e = t.sent, this.data = e.result.data || [];
                                    case 4:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }

                        return e
                    }(), parseIdCard: function () {
                        if (0 == this.id_type && (this.isCn = /[^\w\.\/]/.test(this.id_card), 18 == this.id_card.length)) {
                            var e = (0, r.default)(this.id_card.substr(6, 4)),
                                i = (0, r.default)(this.id_card.substr(16, 1));
                            isNaN(e) || (this.age = (new Date).getFullYear() - e), isNaN(i) || (this.sex = i % 2), t.log(this.sex)
                        }
                    }, idTypeChange: function (t) {
                        this.id_type = t.detail.value
                    }, ageChange: function (t) {
                        this.age = t.detail.value
                    }, sexChange: function (t) {
                        this.sex = t.detail.value
                    }, nativeChange: function (t) {
                        this.native = t.detail.value
                    }, fromHbChange: function (t) {
                        this.from_hb = t.detail.value
                    }, fromWhChange: function (t) {
                        this.from_wh = t.detail.value
                    }, trafficTypeChange: function (t) {
                        this.traffic.type = t.detail.value
                    }, showCityPicker: function (t) {
                        this.tempPickerSegment = t, this.$refs.mpvueCityPicker.show()
                    }, onCityConfirm: function (t) {
                        var e = this[this.tempPickerSegment];
                        e.province = t.value[0], e.city = t.value[1], e.district = t.value[2], e.addressStr = t.label
                    }, checkInTimeChange: function (t) {
                        this.checkInTimeStr = t.detail.value
                    }, bodyStatusChange: function (t) {
                        this.body_status.status = t.detail.value
                    }, bodyStatusDateChange: function (t) {
                        this.bodyStatusDate = t.detail.value
                    }, bodyStatusTimeChange: function (t) {
                        this.bodyStatusTime = t.detail.value
                    }, getBodyStatusTimeStamp: function () {
                        this.bodyStatusDate && this.bodyStatusTime ? this.body_status.time = new Date(this.bodyStatusDate + " " + this.bodyStatusTime).getTime() : this.body_status.time = 0
                    }, temperatureChange: function (t) {
                        this.temperature = t.detail.value
                    }, contactVirusChange: function (t) {
                        this.contact_virus.status = t.detail.value
                    }, contactLikeChange: function (t) {
                        this.contact_like_virus.status = t.detail.value
                    }, contactVirusRegionChange: function (t) {
                        this.contact_like_virus_region.status = t.detail.value
                    }, submit: function () {
                        if (!this.name) return uni.showModal({content: "请填写人员姓名", showCancel: !1}), !1;
                        if (!this.phone) return uni.showModal({content: "请填写人员手机号", showCancel: !1}), !1;
                        if (!(0, c.checkPhone)(this.phone)) return !1;
                        if (0 == this.id_type && this.id_card && !(0, c.checkIDCard)(this.id_card)) return !1;
                        var t = this.id_type, e = this.id_card, i = this.name, n = this.phone, r = this.age,
                            o = this.sex, s = this.native, u = this.from_address, l = this.from_hb, d = this.from_wh,
                            v = this.traffic, h = this.temperature, f = this.check_in_address, p = this.check_in_time,
                            m = this.body_status, g = this.contact_virus, b = this.contact_like_virus,
                            y = this.contact_like_virus_region, _ = this.comment, w = this.operator_username,
                            x = this.access;
                        uni.showLoading({title: "上传中..."});
                        var k = !1;
                        if (0 === this.data.length && this.init(), 0 === this.data.length) return uni.hideLoading(), void uni.showModal({
                            content: "请重新提交",
                            showCancel: !1
                        });
                        if (this.data.length > 0 && v.car_plate && p) {
                            var C = this.data.find(function (t) {
                                return t.t_no.toUpperCase().includes(v.car_plate.toUpperCase()) && t.t_date.includes(new Date(p).toISOString().substring(0, 10) || "")
                            });
                            k = !!C
                        }
                        this.$cloud.callFunction({
                            name: "add-member",
                            data: {
                                is_danger: k,
                                id_type: t,
                                id_card: e,
                                name: i,
                                phone: n,
                                age: r,
                                sex: o,
                                native: s,
                                from_address: u,
                                from_hb: l,
                                from_wh: d,
                                traffic: v,
                                temperature: h,
                                check_in_address: f,
                                check_in_time: p,
                                body_status: m,
                                contact_virus: g,
                                contact_like_virus: b,
                                contact_like_virus_region: y,
                                comment: _,
                                token: uni.getStorageSync("token"),
                                operator_username: w,
                                access: x
                            }
                        }).then(function (t) {
                            if (uni.hideLoading(), 0 === t.result.code) uni.showModal({
                                content: "信息上传完成，请勿重复提交",
                                showCancel: !1
                            }); else {
                                if ("TOKEN_INVALID" !== t.result.errCode) return a.default.reject(new Error(t.result.msg));
                                uni.showModal({
                                    content: "登录状态无效，请重新登录", showCancel: !1, success: function () {
                                        uni.redirectTo({url: "/pages/login/login"})
                                    }
                                })
                            }
                        }).catch(function (t) {
                            uni.hideLoading(), uni.showModal({content: t.message || "记录添加失败", showCancel: !1})
                        })
                    }
                }
            };
            e.default = l
        }).call(this, i("5a52")["default"])
    }, c472: function (t, e, i) {
        e = t.exports = i("2350")(!1), e.push([t.i, 'uni-page-body[data-v-4fb2dd18]{background:#f0f0f0}.content[data-v-4fb2dd18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:%?50?%}.list[data-v-4fb2dd18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?680?%;margin:auto;margin-top:%?20?%;background:#fff;border-radius:%?20?%;padding-bottom:%?20?%}.list-title[data-v-4fb2dd18]{width:%?580?%;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?40?%;font-weight:700;border-bottom:#f0f0f0 %?1?% solid;margin:auto;margin-bottom:%?20?%}.list-item[data-v-4fb2dd18]{width:%?580?%;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;margin:auto;font-size:%?30?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list-item>uni-text[data-v-4fb2dd18]{white-space:nowrap}.list-item uni-input[data-v-4fb2dd18]{background:#f0f0f0;border-radius:%?10?%;padding-left:%?20?%;padding-right:%?20?%;width:%?300?%;height:%?60?%;color:#999;font-size:%?30?%}.list-item uni-slider[data-v-4fb2dd18]{width:%?300?%}.list-item uni-picker[data-v-4fb2dd18]{margin-right:10px}.list-item uni-picker uni-button[data-v-4fb2dd18]{vertical-align:middle}.list-item uni-label[data-v-4fb2dd18]{display:inline-block;margin:5px 0}.list-item uni-label uni-text[data-v-4fb2dd18]{margin-right:10px}.list-item uni-textarea[data-v-4fb2dd18]{border-radius:5px;background-color:#f8f8f8;padding:10px}.xiala[data-v-4fb2dd18]{display:-webkit-box;display:-webkit-flex;display:flex;background:#f0f0f0;padding:%?10?%;border-radius:%?10?%;color:#999;font-size:%?30?%}.xiala uni-image[data-v-4fb2dd18]{display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?5?%;width:%?30?%;height:%?30?%;margin-left:%?10?%}.divider[data-v-4fb2dd18]{content:"";width:%?580?%;margin:5px auto;height:1px;background-color:#ddd}.color-red[data-v-4fb2dd18]{color:#f33}body.?%PAGE?%[data-v-4fb2dd18]{background:#f0f0f0}', ""])
    }, e909: function (t, e, i) {
        "use strict";
        var n = i("1f89"), a = i.n(n);
        a.a
    }, f4cb: function (t, e, i) {
        "use strict";
        i.r(e);
        var n = i("b708"), a = i.n(n);
        for (var r in n) "default" !== r && function (t) {
            i.d(e, t, function () {
                return n[t]
            })
        }(r);
        e["default"] = a.a
    }
}]);