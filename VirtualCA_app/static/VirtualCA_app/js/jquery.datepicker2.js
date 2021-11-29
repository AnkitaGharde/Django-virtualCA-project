! function(e) {
    e.datePicker = {
        defaults: {
            container: "body",
            mode: "popup",
            select: "single",
            theme: "theme-light",
            show: "month",
            doubleSize: !1,
            restrictDates: !1,
            disableAnimations: !1,
            strings: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            views: {
                decade: {
                    show: null,
                    selected: [],
                    disabled: [],
                    forbidden: [],
                    enabled: [],
                    marked: []
                },
                year: {
                    show: null,
                    selected: [],
                    disabled: [],
                    forbidden: [],
                    enabled: [],
                    marked: []
                },
                month: {
                    show: null,
                    selected: [],
                    disabled: [],
                    forbidden: [],
                    enabled: [],
                    marked: [],
                    firstDayOfWeek: 0
                }
            },
            templates: {
                widget: '<div class="jquery-datepicker">',
                header: '<div class="box-row row-header"><div class="header-title">{title}</div><div class="header-actions"><div class="header-action action-down"></div><div class="header-action action-up"></div></div></div>'
            },
            callbacks: {
                onCreate: function(e) {},
                onShow: function(e) {},
                onViewDecade: function(e, a) {
                    return !0
                },
                onViewYear: function(e, a) {
                    return !0
                },
                onViewMonth: function(e, a) {
                    return !0
                },
                onChangeDecade: function(e, a, t) {
                    return !0
                },
                onChangeYear: function(e, a, t) {
                    return !0
                },
                onChangeMonth: function(e, a, t) {
                    return !0
                },
                onChangeDay: function(e, a, t) {
                    return !0
                },
                onCheckCell: function(e, a, t) {
                    return !1
                },
                onRenderCell: function(e, a, t) {},
                onHide: function(e) {}
            },
            animate: function(e, a, t) {
                if (this.disableAnimations) t(e);
                else switch (a) {
                    case "fadeOut":
                        e.css({
                            opacity: 1
                        }).animate({
                            opacity: 0
                        }, {
                            duration: 150,
                            complete: function() {
                                t && t(e)
                            }
                        });
                        break;
                    case "slideLeftOut":
                        e.css({
                            opacity: 1
                        }).animate({
                            opacity: 0,
                            translateX: 8
                        }, {
                            duration: 150,
                            step: function(a, t) {
                                "translateX" == t.prop && e.css("transform", "translateX(" + a + "px)")
                            },
                            complete: function() {
                                e.css("transform", "translateX(0)"), t && t(e)
                            }
                        });
                        break;
                    case "slideRightOut":
                        e.css({
                            opacity: 1
                        }).animate({
                            opacity: 0,
                            translateX: -8
                        }, {
                            duration: 150,
                            step: function(a, t) {
                                "translateX" == t.prop && e.css("transform", "translateX(" + a + "px)")
                            },
                            complete: function() {
                                e.css("transform", "translateX(0)"), t && t(e)
                            }
                        });
                        break;
                    case "slideDownOut":
                        e.css({
                            opacity: 1
                        }).animate({
                            opacity: 0,
                            translateY: 0
                        }, {
                            duration: 150,
                            step: function(a, t) {
                                "translateY" == t.prop && e.css("transform", "translateY(" + (8 - a) + "px)")
                            },
                            complete: function() {
                                e.css("transform", "translateY(0)"), t && t(e)
                            }
                        });
                        break;
                    case "slideUpOut":
                        e.css({
                            opacity: 1
                        }).animate({
                            opacity: 0,
                            translateY: 0
                        }, {
                            duration: 150,
                            step: function(a, t) {
                                "translateY" == t.prop && e.css("transform", "translateY(" + -(8 - a) + "px)")
                            },
                            complete: function() {
                                e.css("transform", "translateY(0)"), t && t(e)
                            }
                        });
                        break;
                    case "fadeIn":
                        e.css({
                            opacity: 0
                        }).animate({
                            opacity: 1
                        }, {
                            duration: 150,
                            complete: function() {
                                t && t(e)
                            }
                        });
                        break;
                    case "slideLeftIn":
                        e.css({
                            opacity: 0,
                            transform: "translateX(8px)"
                        }).animate({
                            opacity: 1,
                            translateX: 0
                        }, {
                            duration: 150,
                            step: function(a, t) {
                                "translateX" == t.prop && e.css("transform", "translateX(" + -a + "px)")
                            },
                            complete: function() {
                                t && t(e)
                            }
                        });
                        break;
                    case "slideRightIn":
                        e.css({
                            opacity: 0,
                            transform: "translateX(-8px)"
                        }).animate({
                            opacity: 1,
                            translateX: 0
                        }, {
                            duration: 150,
                            step: function(a, t) {
                                "translateX" == t.prop && e.css("transform", "translateX(" + -a + "px)")
                            },
                            complete: function() {
                                t && t(e)
                            }
                        });
                        break;
                    case "slideUpIn":
                        e.css({
                            opacity: 0,
                            transform: "translateY(8px)"
                        }).animate({
                            opacity: 1,
                            translateY: 8
                        }, {
                            duration: 150,
                            step: function(a, t) {
                                "translateY" == t.prop && e.css("transform", "translateY(" + (8 - a) + "px)")
                            },
                            complete: function() {
                                t && t(e)
                            }
                        });
                        break;
                    case "slideDownIn":
                        e.css({
                            opacity: 0,
                            transform: "translateY(-8px)"
                        }).animate({
                            opacity: 1,
                            translateY: 8
                        }, {
                            duration: 150,
                            step: function(a, t) {
                                "translateY" == t.prop && e.css("transform", "translateY(" + -(8 - a) + "px)")
                            },
                            complete: function() {
                                t && t(e)
                            }
                        })
                }
            },
            dateFormat: function(e) {
                return e.getDate() + "-" + (e.getMonth() + 1) + "-" + e.getFullYear()
            },
            dateParse: function(a) {
                return e.datePicker.api.date(a)
            }
        },
        api: {
            date: function(e) {
                var a = null;
                if (e instanceof Date) a = new Date(e);
                else {
                    var t = e.match(/(\d{1,2})-(\d{1,2})-(\d{4})/);
                    t && 4 == t.length && (a = new Date(t[3], t[1] - 1, t[2]))
                }
                return a
            },
            show: function(a) {
                var t = e(".jquery-datepicker.is-popup"),
                    s = e.datePicker.api.createWidget(a);
                return t.length && e.datePicker.api.hide(t), s.addClass("is-open"), s.options.animate(s, s.hasClass("tip-above") ? "slideDownIn" : "slideUpIn", function() {
                    s.options.callbacks.onShow(s)
                }), s
            },
            hide: function(a) {
                return (a = (a = a || e(".jquery-datepicker.is-popup")).length ? a.eq(0) : null).length && a.is(":visible") && (a.options = a.data("options"), a.options.animate(a, a.hasClass("tip-above") ? "slideUpOut" : "slideDownOut", function() {
                    a.removeClass("is-open"), a.options.callbacks.onHide(a), a.remove()
                })), a
            },
            createWidget: function(a) {
                var t = e.extend(!0, {}, e.datePicker.defaults, a),
                    s = e(t.templates.widget);
                switch (t.container = t.container instanceof jQuery ? t.container : e(t.container), t.element = t.element instanceof jQuery ? t.element : e(t.element), t.views.decade.show = t.views.decade.show ? t.dateParse(t.views.decade.show) : new Date, t.views.year.show = t.views.year.show ? t.dateParse(t.views.year.show) : new Date, t.views.month.show = t.views.month.show ? t.dateParse(t.views.month.show) : new Date, s.data("options", t), s.options = t, s.views = {}, s.views.decade = e.datePicker.api.createDecadeView(t), s.views.year = e.datePicker.api.createYearView(t), s.views.month = e.datePicker.api.createMonthView(t), s.append(s.views.decade), s.append(s.views.year), s.append(s.views.month), t.show) {
                    case "decade":
                        s.views.decade.addClass("is-active");
                        break;
                    case "year":
                        s.views.year.addClass("is-active");
                        break;
                    case "month":
                        s.views.month.addClass("is-active")
                }
                switch (t.container.append(s), t.mode) {
                    case "inline":
                        s.addClass("is-open").addClass("is-inline");
                        break;
                    case "popup":
                        if (t.element.length) {
                            var i = t.element.offset(),
                                n = window.innerWidth;
                            elementSize = {
                                x: t.element.outerWidth(),
                                y: t.element.outerHeight()
                            }, widgetSize = {
                                x: s.outerWidth(),
                                y: s.outerHeight()
                            }, i.top > widgetSize.y + 15 ? (s.addClass("tip-below"), s.css("top", i.top - widgetSize.y - 15 + "px")) : (s.addClass("tip-above"), s.css("top", i.top + elementSize.y + 15 + "px")), i.left < n / 2 ? (s.addClass("tip-left"), s.css("left", i.left + "px")) : (s.addClass("tip-right"), s.css("left", i.left + elementSize.x - widgetSize.x + "px"))
                        }
                        s.addClass("is-popup"), e(document).on("mouseup", function(a) {
                            s.is(a.target) || 0 !== s.has(a.target).length || (e(document).off("mouseup"), e.datePicker.api.hide(s))
                        })
                }
                return s.views.decade.on("click", ".header-title", function(a) {
                    e(this);
                    a.preventDefault()
                }), s.views.decade.on("click", ".action-down", function(a) {
                    e(this);
                    a.preventDefault(), t.callbacks.onChangeDecade(s, new Date(t.views.decade.show), "down") && t.animate(s.views.decade, "slideLeftOut", function() {
                        s.views.decade.empty(), t.views.decade.show.setYear(t.views.decade.show.getFullYear() - 10), e.datePicker.api.createDecadeView(t, s.views.decade), t.animate(s.views.decade, "slideRightIn")
                    })
                }), s.views.decade.on("click", ".action-up", function(a) {
                    e(this);
                    a.preventDefault(), t.callbacks.onChangeDecade(s, new Date(t.views.decade.show), "up") && t.animate(s.views.decade, "slideRightOut", function() {
                        s.views.decade.empty(), t.views.decade.show.setYear(t.views.decade.show.getFullYear() + 10), e.datePicker.api.createDecadeView(t, s.views.decade), t.animate(s.views.decade, "slideLeftIn")
                    })
                }), s.views.decade.on("click", ".cell-day", function(a) {
                    var i = e(this),
                        n = i.data("date");
                    a.preventDefault(), i.hasClass("cell-grayed") || (t.callbacks.onChangeYear(s, e.datePicker.api.date(n), !1) && (s.views.year.empty(), t.views.year.show = e.datePicker.api.date(n), e.datePicker.api.createYearView(t, s.views.year)), t.callbacks.onViewYear(s, e.datePicker.api.date(n)) && t.animate(s.views.decade, "fadeOut", function() {
                        s.views.decade.removeClass("is-active"), s.views.year.addClass("is-active"), t.animate(s.views.year, "fadeIn")
                    }))
                }), s.views.year.on("click", ".header-title", function(a) {
                    e(this);
                    a.preventDefault(), t.callbacks.onViewDecade(s, t.views.decade.show) && t.animate(s.views.year, "fadeOut", function() {
                        t.views.decade.show.getFullYear() != t.views.year.show.getFullYear() && (s.views.decade.empty(), t.views.decade.show.setYear(t.views.year.show.getFullYear()), e.datePicker.api.createDecadeView(t, s.views.decade)), s.views.year.removeClass("is-active"), s.views.decade.addClass("is-active"), t.animate(s.views.decade, "fadeIn")
                    })
                }), s.views.year.on("click", ".action-down", function(a) {
                    e(this);
                    a.preventDefault(), t.callbacks.onChangeYear(s, new Date(t.views.year.show), "down") && t.animate(s.views.year, "slideLeftOut", function() {
                        s.views.year.empty(), t.views.year.show.setYear(t.views.year.show.getFullYear() - 1), e.datePicker.api.createYearView(t, s.views.year), t.animate(s.views.year, "slideRightIn")
                    })
                }), s.views.year.on("click", ".action-up", function(a) {
                    e(this);
                    a.preventDefault(), t.callbacks.onChangeYear(s, new Date(t.views.year.show), "up") && t.animate(s.views.year, "slideRightOut", function() {
                        s.views.year.empty(), t.views.year.show.setYear(t.views.year.show.getFullYear() + 1), e.datePicker.api.createYearView(t, s.views.year), t.animate(s.views.year, "slideLeftIn")
                    })
                }), s.views.year.on("click", ".cell-day", function(a) {
                    var i = e(this),
                        n = i.data("date");
                    a.preventDefault(), i.hasClass("cell-grayed") || (t.callbacks.onChangeMonth(s, e.datePicker.api.date(n), !1) && (s.views.month.empty(), t.views.month.show = e.datePicker.api.date(n), e.datePicker.api.createMonthView(t, s.views.month)), t.callbacks.onViewMonth(s, e.datePicker.api.date(n)) && t.animate(s.views.year, "fadeOut", function() {
                        s.views.year.removeClass("is-active"), s.views.month.addClass("is-active"), t.animate(s.views.month, "fadeIn")
                    }))
                }), s.views.month.on("click", ".header-title", function(a) {
                    e(this);
                    a.preventDefault(), t.callbacks.onViewYear(s, t.views.year.show) && t.animate(s.views.month, "fadeOut", function() {
                        t.views.year.show.getFullYear() != t.views.month.show.getFullYear() && (s.views.year.empty(), t.views.year.show.setYear(t.views.month.show.getFullYear()), e.datePicker.api.createYearView(t, s.views.year)), s.views.month.removeClass("is-active"), s.views.year.addClass("is-active"), t.animate(s.views.year, "fadeIn")
                    })
                }), s.views.month.on("click", ".action-down", function(a) {
                    e(this);
                    a.preventDefault(), t.callbacks.onChangeMonth(s, new Date(t.views.month.show), "down") && t.animate(s.views.month, "slideLeftOut", function() {
                        var a = t.views.month.show.getMonth() - 1;
                        a < 0 && (t.views.month.show.setYear(t.views.month.show.getFullYear() - 1), a = 11), s.views.month.empty(), t.views.month.show.setMonth(a), e.datePicker.api.createMonthView(t, s.views.month), t.animate(s.views.month, "slideRightIn")
                    })
                }), s.views.month.on("click", ".action-up", function(a) {
                    e(this);
                    a.preventDefault(), t.callbacks.onChangeMonth(s, new Date(t.views.month.show), "up") && t.animate(s.views.month, "slideRightOut", function() {
                        var a = t.views.month.show.getMonth() + 1;
                        a > 11 && (t.views.month.show.setYear(t.views.month.show.getFullYear() + 1), a = 0), s.views.month.empty(), t.views.month.show.setMonth(a), e.datePicker.api.createMonthView(t, s.views.month), t.animate(s.views.month, "slideLeftIn")
                    })
                }), s.views.month.on("click", ".cell-day", function(a) {
                    var i = e(this),
                        n = i.data("date");
                    a.preventDefault(), i.hasClass("cell-grayed") || i.hasClass("cell-forbidden") || t.callbacks.onChangeDay(s, e.datePicker.api.date(n)) && ("single" == t.select && (t.views.month.selected = [], s.views.month.find(".cell-day").removeClass("cell-selected"), "popup" == t.mode && (e.datePicker.api.hide(s), t.element.val(t.dateFormat(n)))), i.addClass("cell-selected"), t.views.month.selected.push(e.datePicker.api.date(n)))
                }), s.addClass(t.theme), t.doubleSize && s.addClass("is-2x"), t.callbacks.onCreate(s), s
            },
            createHeader: function(a, t) {
                return e(t.templates.header.replace("{title}", a))
            },
            createDecadeView: function(a, t) {
                t = t || e('<div class="datepicker-box"></div>');
                for (var s = a.views.decade, i = s.show.getFullYear() - s.show.getFullYear() % 10, n = i + "-" + (i + 9), r = e.datePicker.api.createHeader(n, a), o = [], d = 0, c = i - 3; d < 16; d++, c++) o.push(c);
                r.addClass("js-header-decade"), t.append(r), t.addClass("box-decade");
                var l = [];
                for (d = 0; d < 4; d++) {
                    var w = e('<div class="box-row row-week"></div>');
                    l.push(w), t.append(w)
                }
                var h = new Date;
                h.setMonth(0), h.setDate(1);
                d = 0;
                for (var p = 0, v = 1; d < 16; d++, v++) {
                    w = l[p];
                    var u = e('<div class="box-cell cell-day">' + o[d] + "</div>");
                    w.append(u), v > 3 && (v = 0, p++);
                    var f = "01-01-" + o[d];
                    f = e.datePicker.api.date(f), u.data("date", f);
                    var m = !1;
                    switch (a.restrictDates) {
                        case "past":
                            m = f > h;
                            break;
                        case "future":
                            m = f.toDateString() != h.toDateString() && f < h;
                            break;
                        case "custom":
                            m = !a.callbacks.onCheckCell(u, f, "year")
                    }
                    d < 3 || d >= 13 || m ? u.addClass("cell-grayed") : f.toDateString() == h.toDateString() && u.addClass("cell-today"), a.callbacks.onRenderCell(u, f, "year")
                }
                return t
            },
            createYearView: function(a, t) {
                t = t || e('<div class="datepicker-box"></div>');
                for (var s = a.views.year, i = s.show.getFullYear(), n = e.datePicker.api.createHeader(i, a), r = [], o = 0; o < 12; o++) r.push(a.strings.months[o]);
                n.addClass("js-header-year"), t.append(n), t.addClass("box-year");
                var d = [];
                for (o = 0; o < 3; o++) {
                    var c = e('<div class="box-row row-week"></div>');
                    d.push(c), t.append(c)
                }
                var l = new Date;
                l.setDate(1);
                o = 0;
                for (var w = 0, h = 1; o < 12; o++, h++) {
                    c = d[w];
                    var p = e('<div class="box-cell cell-day">' + r[o].substring(0, 3) + "</div>");
                    c.append(p), h > 3 && (h = 0, w++);
                    var v = o + 1 + "-01-" + s.show.getFullYear();
                    v = e.datePicker.api.date(v), p.data("date", v);
                    var u = !1;
                    switch (a.restrictDates) {
                        case "past":
                            u = v > l;
                            break;
                        case "future":
                            u = v.toDateString() != l.toDateString() && v < l;
                            break;
                        case "custom":
                            u = !a.callbacks.onCheckCell(p, v, "month")
                    }
                    u && p.addClass("cell-grayed"), v.toDateString() == l.toDateString() && p.addClass("cell-today"), a.callbacks.onRenderCell(p, v, "month")
                }
                return t
            },
            createMonthView: function(a, t) {
                t = t || e('<div class="datepicker-box"></div>');
                for (var s = a.views.month, i = a.strings.months[s.show.getMonth()] + " " + s.show.getFullYear(), n = e.datePicker.api.createHeader(i, a), r = new Date(s.show.getFullYear(), s.show.getMonth() + 1, 0).getDate(), o = new Date(s.show.getFullYear(), s.show.getMonth(), 1).getDay(), d = 0 == s.show.getMonth() ? 11 : s.show.getMonth() - 1, c = s.show.getFullYear() - (0 == s.show.getMonth() ? 1 : 0), l = 11 == s.show.getMonth() ? 0 : s.show.getMonth() + 1, w = s.show.getFullYear() + (11 == s.show.getMonth() ? 1 : 0), h = new Date(c, d + 1, 0).getDate(), p = [], v = 0; v < r; v++) p.push(v + 1);
                n.addClass("js-header-month"), t.append(n), t.addClass("box-month"), s.firstDayOfWeek = s.firstDayOfWeek < 0 ? 0 : s.firstDayOfWeek > 6 ? 6 : s.firstDayOfWeek;
                var u = a.strings.days.slice();
                if (s.firstDayOfWeek > 0) {
                    var f = u.splice(0, s.firstDayOfWeek);
                    u = u.concat(f)
                }
                var m = e('<div class="box-row row-days"></div>');
                for (v = 0; v < 7; v++) m.append('<div class="box-cell cell-day">' + u[v].substring(0, 2) + "</div>");
                t.append(m);
                var y = o - s.firstDayOfWeek,
                    g = 42 - (r + y);
                y < 0 && (g = 42 - (r + (y = 7 + y)));
                var k = [];
                for (v = 1; v <= y; v++) k.push(h - (y - v));
                p = k.concat(p), k = [];
                for (v = 1; v <= g; v++) k.push(v);
                p = p.concat(k);
                var b = [];
                for (v = 0; v < 6; v++) {
                    var D = e('<div class="box-row row-week"></div>');
                    b.push(D), t.append(D)
                }
                for (var C = new Date, Y = (v = 0, 0), P = 1; v < 42; v++, P++) {
                    D = b[Y];
                    var x = e('<div class="box-cell cell-day">' + p[v] + "</div>");
                    D.append(x), P > 6 && (P = 0, Y++);
                    var S = "";
                    S = v < y ? d + 1 + "-" + p[v] + "-" + c : v >= 42 - g ? l + 1 + "-" + p[v] + "-" + w : s.show.getMonth() + 1 + "-" + p[v] + "-" + s.show.getFullYear(), S = e.datePicker.api.date(S), x.data("date", S);
                    var M = !1;
                    if (s.enabled.length) {
                        M = !0;
                        for (var F = 0; F < s.enabled.length; F++)
                            if (s.enabled[F].length && ("string" == typeof s.enabled[F] && (s.enabled[F] = e.datePicker.api.date(s.enabled[F])), S.toDateString() == s.enabled[F].toDateString())) {
                                M = !1;
                                break
                            }
                    } else switch (a.restrictDates) {
                        case "past":
                            M = S > C;
                            break;
                        case "future":
                            M = S.toDateString() != C.toDateString() && S < C;
                            break;
                        case "custom":
                            M = !a.callbacks.onCheckCell(x, S, "day")
                    }
                    if (v < y || v >= 42 - g || M) x.addClass("cell-grayed");
                    else {
                        if (S.toDateString() == C.toDateString() && x.addClass("cell-today"), s.disabled.length)
                            for (F = 0; F < s.disabled.length; F++)
                                if ("string" == typeof s.disabled[F] && (s.disabled[F] = e.datePicker.api.date(s.disabled[F])), s.disabled[F] && S.toDateString() == s.disabled[F].toDateString()) {
                                    x.addClass("cell-grayed");
                                    break
                                }
                        if (s.forbidden.length)
                            for (F = 0; F < s.forbidden.length; F++)
                                if ("string" == typeof s.forbidden[F] && (s.forbidden[F] = e.datePicker.api.date(s.forbidden[F])), s.forbidden[F] && S.toDateString() == s.forbidden[F].toDateString()) {
                                    x.addClass("cell-forbidden");
                                    break
                                }
                        if (s.marked.length)
                            for (F = 0; F < s.marked.length; F++)
                                if ("string" == typeof s.marked[F] && (s.marked[F] = e.datePicker.api.date(s.marked[F])), s.marked[F] && S.toDateString() == s.marked[F].toDateString()) {
                                    x.addClass("cell-marked");
                                    break
                                }
                        if (s.selected.length)
                            for (F = 0; F < s.selected.length; F++)
                                if ("string" == typeof s.selected[F] && (s.selected[F] = e.datePicker.api.date(s.selected[F])), s.selected[F] && S.toDateString() == s.selected[F].toDateString()) {
                                    x.addClass("cell-selected");
                                    break
                                }
                    }
                    a.callbacks.onRenderCell(x, S, "day")
                }
                return t
            }
        }
    }, jQuery(document).ready(function(e) {
        e("[data-select=datepicker]").each(function() {
            var a = e(this);
            a.attr("autocomplete", "off"), a.on("click", function() {
                var t = a.val(),
                    s = t ? e.datePicker.defaults.dateParse(t) : null,
                    i = e.datePicker.api.show({
                        views: {
                            month: {
                                show: t ? s : "",
                                selected: t ? [s] : []
                            }
                        },
                        element: a
                    });
                a.data("widget", i)
            })
        })
    })
}(jQuery);