app.run(["$rootScope", function () {
    "use strict";
    NC_Util.extendProjectConfig({
        mainpage: {title: "首页", bannerImg: "frame/pc/modules/mainpage/images/main/banner.png"},
        app: {welcome: "/login"}
    })
}]), app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", function (e) {
    "use strict";
    e.state("app", {
        "abstract": !0,
        views: {
            main: {
                templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/layout_mainpage.html",
                controller: "mainpageCtrl"
            }
        }
    }).state("app.首页", {
        "abstract": !0,
        views: {navbar: {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/navbar.html"}}
    }), NC_Util.regRouter(e, {
        "app.首页": [{
            "app.首页.主页": {
                url: "/main",
                views: {
                    "main@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/main.html"},
                    "sidebar@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/sidebar.html"}
                }
            }
        }, {
            "app.首页.业务办理": {
                url: "/ywbl",
                views: {"main12@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/ywbl.html"}}
            }
        }, {
            "app.首页.招聘求职": {
                url: "/zpqz",
                views: {
                    "main@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/zpqz.html"},
                    "sidebar@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/sidebar.html"}
                }
            }
        }, {
            "app.首页.就业政策": {
                url: "/jyzc",
                views: {"main12@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/jyzc.html"}}
            }
        }, {
            "app.首页.职业培训": {
                url: "/zypx",
                views: {"main12@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/zypx.html"}}
            }
        }, {
            "app.首页.网上业务": {
                url: "/wsyw",
                views: {
                    "main@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/wsyw.html"},
                    "sidebar@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/sidebar.html"}
                }
            }
        }, {
            "app.首页.政策法规": {
                url: "/zcfg",
                views: {"main12@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/zcfg.html"}}
            }
        }, {
            "app.首页.办事指南": {
                url: "/bszn",
                views: {"main12@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/bszn.html"}}
            }
        }, {
            "app.首页.通知公告": {
                url: "/tzgg",
                views: {"main12@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/tzgg.html"}}
            }
        }, {
            "app.首页.文件下载": {
                url: "/wjxz",
                views: {"main12@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/wjxz.html"}}
            }
        }, {
            "app.首页.机构简介": {
                url: "/jgjj",
                views: {"main12@app": {templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/jgjj.html"}}
            }
        }, {
            "app.首页.注册新用户": {
                url: "/register",
                views: {
                    "main12@app": {
                        isMenu: "true",
                        templateUrl: "frame/pc/modules/sysmgt/views/sysmgt/user/register.html"
                    }
                }
            }
        }, {
            "app.首页.个人设置": {
                url: "/settings",
                views: {
                    "main12@app": {
                        isMenu: "true",
                        templateUrl: "frame/pc/modules/sysmgt/views/sysmgt/user/settings.html"
                    }
                }
            }
        }, {
            "app.首页.登录": {
                url: "/login",
                views: {
                    "main@": {
                        templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/page/login.html",
                        controller: "mainpageCtrl"
                    }
                }
            }
        }]
    })
}]), app.controller("homepage_ctrl", ["$scope", "$rootScope", "$cacheFactory", "DicServices", "$http", "$log", function (e, a, r, t) {
    "use strict";
    e.stateScope = e, e.doit = function () {
        angular.forEach(e, function (e, a) {
            0 === a.indexOf(NC_Config.Pre_Model)
        }), e.messageType = "success", e.message = "aaa" + Math.random();
        var a = {};
        a.oper = "RyxxAction.query"
    }, e.dic = function () {
        t.getDic(e, "AAC004", "1=1")
    }
}]), app.controller("homepage_ctrl1", ["$scope", "$rootScope", "$cacheFactory", "DicServices", "$http", "$log", function (e) {
    "use strict";
    e.stateScope = e, e.datas = [{
        "姓名": "张三",
        "性别": "1",
        "工资": "3000",
        "出生日期": "2000-01-01",
        "所在公司": "华南资讯科技有限公司",
        id: "123"
    }, {"姓名": "李四", "性别": "2", "工资": "4500", "出生日期": "1990-01-01", "所在公司": "广州人社局信息中心", id: "234"}, {
        "姓名": "王五",
        "性别": "9",
        "工资": "5000",
        "出生日期": "1985-01-01",
        "所在公司": "广东省人社厅信息中心",
        id: "345"
    }], e.heads = ["姓名", "性别", "工资", "出生日期", "所在公司", "操作"], e.dataoptions = {"性别": "dic:AAC004"}, e.bigNoOfPages = 18, e.bigCurrentPage = 1, e.noOfPages = 7, e.currentPage = 4, e.maxSize = 5, e.doit = function () {
        e.datas[0]["性别"] = "02"
    }, e.listTest = function () {
        var e = {};
        e.oper = "RyxxAction.queryList"
    }, e.checked = function (a) {
        var r = e.delArray = void 0 == e.delArray ? [] : e.delArray, t = a.target.value, o = a.target.checked;
        o ? r.push(t) : r.removeFirst(t)
    }
}]), app.controller("homepage_ctrl_zp", ["$scope", "$rootScope", function (e) {
    "use strict";
    e.datas = [{"职位名称": "实习生", "公司名称": "信诚人寿保险邮箱公司", "工作地点": "武汉", "更新日期": "2013-07-02"}, {
        "职位名称": "精算专员",
        "公司名称": "信诚人寿保险邮箱公司",
        "工作地点": "武汉",
        "更新日期": "2013-07-02"
    }, {"职位名称": "精算师", "公司名称": "中国美臣金融服务集团有限公司", "工作地点": "武汉", "更新日期": "2013-07-02"}, {
        "职位名称": "产品研发岗",
        "公司名称": "众诚汽车保险股份有限公司",
        "工作地点": "武汉",
        "更新日期": "2013-06-28"
    }], e.heads = ["职位名称", "公司名称", "工作地点", "更新日期"], e.bigNoOfPages = 18, e.bigCurrentPage = 1, e.noOfPages = 7, e.currentPage = 4, e.maxSize = 5
}]), app.controller("homepage_ctrl_tz", ["$scope", "$rootScope", function (e) {
    "use strict";
    e.datas = ["AngularJS入门教程00入门教程入门教程入门教程入门教程", "AngularJS入门教程01入门教程入门教程入门教程入门教程", "AngularJS入门教程02入门教程入门教程入门教程入门教程", "AngularJS入门教程02入门教程入门教程入门教程入门教程"]
}]), app.controller("homepage_ctrl_fj", ["$scope", "$rootScope", function (e) {
    "use strict";
    e.datas = ["武汉市2013[008]号文武汉市2013[008]号文 ", "武汉市2013[009]号文武汉市2013[009]号文 "]
}]), app.controller("homepage_ctrl_xw", ["$scope", "$rootScope", function (e) {
    "use strict";
    e.datas = ["我市落实为外籍人才提供签证及居住场所居住场所居住场所", "我市落实为外籍人才提供签证及居住场所居住场所居住场所", "我市落实为外籍人才提供签证及居住场所居住场所居住场所", "我市落实为外籍人才提供签证及居住场所居住场所居住场所"]
}]), app.controller("homepage_ctrl2", ["$scope", "$rootScope", function (e) {
    "use strict";
    e.data = "22222", e.XXX = "sdfsdf"
}]), app.controller("homepage_ctrl3", ["$scope", "$rootScope", function (e) {
    "use strict";
    e.data = "33333"
}]), app.controller("zxblCtrl", ["$scope", "$rootScope", function (e) {
    "use strict";
    var a = e.zxbl = {};
    a.title = "在线办理", a.menuLevel1s = [];
    var r = {title: "用户管理", menuLevel2s: [], img: "images/icons/Book@2x.png"},
        t = {title: "单位用户管理", menuLevel3s: [], img: "images/icons/Clipboard@2x.png"};
    t.menuLevel3s.push({title: "查询", state: "main.cbzl"}), t.menuLevel3s.push({
        title: "在线办理",
        state: "main.cbzlSave"
    }), r.menuLevel2s.push(t), a.menuLevel1s.push(r), r = {
        title: "XX管理",
        menuLevel2s: [],
        img: "images/icons/Compas@2x.png"
    }, t = {title: "xxxx管理", menuLevel3s: []}, t.menuLevel3s.push({
        title: "xx查询",
        state: "main.cbzl"
    }), t.menuLevel3s.push({
        title: "xx在线办理",
        state: "main.cbzlSave"
    }), r.menuLevel2s.push(t), a.menuLevel1s.push(r), e.curMenuLevel1 = a.menuLevel1s[0], e.changeMenuLevel1 = function (a) {
        e.curMenuLevel1 = a
    }
}]), app.controller("mainpageCtrl", ["$scope", "$http", "$rootScope", "$timeout", "WrapperServices", function (e, a, r, t, o) {
    "use strict";
    e.stateScope = e, e.switchMenu = function (e, a, t, i) {
        r.menuLevel1 = a, r.menuLevel2 = t, r.menuLevel3 = i, r.MenuId = i, o.router.go(i.router, {isMenu: !0})
    };
    var i = function (e, a) {
        var r = e && e.size() > 0 ? e.offset().top : 0;
        e && ($("body").hasClass("page-header-fixed") && (r -= $(".header").height()), r += a ? a : -1 * e.height()), $("html,body").animate({scrollTop: r}, "slow")
    }, s = function () {
        $(".page-sidebar").on("click", "li > a", function (e) {
            if (0 == $(this).next().hasClass("sub-menu"))return void(0 == $(".btn-navbar").hasClass("collapsed") && $(".btn-navbar").click());
            if (!$(this).next().hasClass("sub-menu always-open")) {
                var a = $(this).parent().parent(), r = $(this), t = $(".page-sidebar-menu"), o = $(this).next(),
                    s = t.data("auto-scroll") ? t.data("auto-scroll") : !0,
                    n = t.data("slide-speed") ? parseInt(t.data("slide-speed")) : 200;
                a.children("li.open").children("a").children(".arrow").removeClass("open"), a.children("li.open").children(".sub-menu:not(.always-open)").slideUp(200), a.children("li.open").removeClass("open");
                var c = -200;
                o.is(":visible") ? ($(".arrow", $(this)).removeClass("open"), $(this).parent().removeClass("open"), o.slideUp(n, function () {
                    1 == s && 0 == $("body").hasClass("page-sidebar-closed") && ($("body").hasClass("page-sidebar-fixed") ? t.slimScroll({scrollTo: r.position().top}) : i(r, c))
                })) : ($(".arrow", $(this)).addClass("open"), $(this).parent().addClass("open"), o.slideDown(n, function () {
                    1 == s && 0 == $("body").hasClass("page-sidebar-closed") && ($("body").hasClass("page-sidebar-fixed") ? t.slimScroll({scrollTo: r.position().top}) : i(r, c))
                })), e.preventDefault()
            }
        })
    };
    e.init = function () {
        t(function () {
            s();
            for (var e = 0; e < r.yx.menu.children.length; e++)if (r.yx.menu.children[e].name === r.menuLevel1.name) {
                $(".page-sidebar > ul > li:eq(" + e + ") > a").click();
                for (var a = 0; a < r.yx.menu.children[e].children.length; a++)r.yx.menu.children[e].children[a].name === r.menuLevel2.name && $(".page-sidebar > ul > li:eq(" + e + ") > ul > li:eq(" + a + ") > a").click()
            }
        }, 0, !1)
    }, e.login = function () {
        var t = frm.LOGINID.value, i = frm.PASSWORD1.value,
            s = "exec |insert |delete |update |truncate |declare |select |%'|;| or |<script|&#", n = s.split("|");
        if ("" == t || "" == i)return void NC_Util.showMessage(e, "error", "请输入用户名和密码！");
        for (var c = t.toLowerCase(), l = (i.toLowerCase(), 0); l < n.length; l++) {
            var u = n[l].toLowerCase().replace(" ", "");
            if (-1 != c.indexOf(u) || -1 != i.indexOf(u))return void NC_Util.showMessage(e, "error", "输入的用户名和密码中包含不安全字符！")
        }
        var p;
        "0" == NC_Global.Login_Encrypt ? p = frm.PASSWORD1.value : "1" == NC_Global.Login_Encrypt && (frm._1_.value = NC_Util.getCookie("skey"), setSsoUid(), e._1_(), frm._1_.value = "", frm.PASSWORD1.value = "", p = frm.PASSWORD.value);
        var m = "LOGINID=" + t + "&&PASSWORD=" + p + "&&now=" + new Date, g = {
            cache: !0, xsrfHeaderName: "Token", transformResponse: [function (e) {
                return e
            }]
        };
        return a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8", a.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest", NC_Global.loginHttpTest || (NC_Global.loginHttpTest = NC_Global.loginHttp), a.post(NC_Global.loginHttpTest + "?r=" + Math.random(), m, g).success(function (a) {
            var t = angular.fromJson(a), i = t.flag, s = t.message;
            if ("-1" === i) NC_Util.showMessage(e, "error", "登录失败，" + s); else if ("MFW0001" === i || "MFW0002" === i) {
                frm.LOGINID.value = "", frm.PASSWORD.value = "";
                var n = angular.fromJson(s);
                NC_Util.saveUserInfo(n), r.ncUser = n, o.router.goYw("app.首页.网上业务", {}), NC_Global.ep.emit(NC_ED["框架_通用功能_获取菜单数据"])
            }
        })
    }, e.register = function () {
        o.router.go("app.首页.注册新用户", {})
    }, e.go = function (e) {
        "settings" === e ? o.router.go("app.首页.个人设置", {}) : "todolist" === e ? alert("显示待办列表") : "home" === oper ? o.router.go("app.首页.网上业务", {isMenu: !0}) : "help" === oper && alert("帮助中心")
    }, e.clear = function () {
        frm.LOGINID.value = "", frm.PASSWORD.value = "", frm.PASSWORD1.value = ""
    }, e.fKeyPress = function () {
        13 == window.event.keyCode && "" != document.frm.LOGINID.value && ("" != document.frm.PASSWORD1.value ? e.login() : document.frm.PASSWORD1.focus())
    }, e._1_ = function () {
        var e = frm.PASSWORD1.value, a = e, r = frm._1_.value;
        a = stringToHex(encrypt(r, e)), frm.PASSWORD.value = a
    }, e.doReset = function () {
        document.frm.LOGINID.value = "", document.frm.PASSWORD1.value = "", document.frm.LOGINID.focus()
    }, e.initGrsz = function () {
        var a = "ncm_gt_个人设置", r = function () {
            e[a]["密码"] = ""
        };
        e[a] = {}, o.gt.clear(e, a), e[a]["操作员ID"] = o.data.getUserInfo("operid"), o.io.ajax(e, "UserAction.queryGrsz", [a], {
            successFn: r,
            isShowMessage: !1,
            isCommonAction: !0
        })
    }, e.checkConsistency = function () {
        var a = e["ncm_gt_个人设置"];
        if (void 0 != a["密码"] && void 0 != a["确认密码"]) {
            var t = !0, o = " 密码与确认密码不一致！", i = a["密码"], s = a["确认密码"];
            return i != s && (t = !1), NC_DirectiveUtil.dealBussCheckResult(r, e, "用户信息_密码一致性", o, t)
        }
    }, e.saveGrsz = function () {
        var a = !0, r = "ncm_gt_个人设置";
        e.checkParams = {}, e.checkParams["登录ID"] = e[r]["登录ID"], e.checkParams["操作员ID"] = e[r]["操作员ID"], e.checkParams["原密码"] = e[r]["原密码"];
        var t = function (r) {
            var t = r.checkResult.params.result;
            if (!t)return void o.msg.show(e, "error", "登录ID已存在，请重新输入");
            if (void 0 != e["ncm_gt_个人设置"]["原密码"] && "" != e["ncm_gt_个人设置"]["原密码"]) {
                var i = function (r) {
                    var t = r.checkResult.params.result;
                    return t ? void o.io.ajax(e, "UserAction.saveGrsz", ["ncm_gt_个人设置"], {isCommonAction: a}) : void o.msg.show(e, "error", "原密码输入错误，请重新输入")
                };
                o.io.ajax(e, "UserAction.checkPwd", ["checkParams"], {
                    successFn: i,
                    isShowMessage: !1,
                    isCommonAction: a
                })
            } else o.io.ajax(e, "UserAction.saveGrsz", ["ncm_gt_个人设置"], {isCommonAction: a})
        };
        o.io.ajax(e, "UserAction.checkLoginId", ["checkParams"], {successFn: t, isShowMessage: !1, isCommonAction: a})
    }, e.logout = function () {
        NC_Global.ep.emit(NC_ED["平台_登录注册_注销登录"], "false", "app.首页.登录")
    }
}]), app.config(["$stateProvider", function (e) {
    "use strict";
    NC_Util.regYwTopRouter(e, "系统管理", "/sysmgt"), NC_Util.regRouter(e, {
        "系统管理": [{
            "系统管理.权限管理": {
                url: "/qxgl",
                views: {
                    navbar: {
                        templateUrl: "frame/pc/modules/mainpage/views/public/mainpage/navbar.html",
                        controller: "userCtrl"
                    }
                }
            }
        }]
    })
}]), app.controller("orgCtrl", ["$scope", "$timeout", "$rootScope", "WrapperServices", function (e, a, r, t) {
    "use strict";
    e.stateScope = e;
    var o = null, i = null, s = null;
    e.initOrgTree = function () {
        e.checkParams = {}, e.checkParams.bae001 = "44", e.checkParams.editable = "true";
        var a = function (a) {
            var r = a.checkResult.params.result, t = angular.fromJson(r);
            e.orgData = t
        };
        t.io.ajax(e, "OrgAction.getOrgTreeJson", ["checkParams"], {successFn: a, isShowMessage: !1})
    }, e.beforeAdd = function (a) {
        return null == a.id || null == a.name ? (NC_Util.showMessage(e, "error", "请先去保存节点信息"), !1) : (e.orgId = a.id, e.oper = "add", e.editId = e.orgId, i = a, e.$apply(function () {
            e.edit(a.tId)
        }), !1)
    }, e.beforeEdit = function (a, r) {
        i = null;
        var t = e.tree.orgData;
        return t.selectNode(r), null == r.id || null == r.name ? (e.oper = "add", e.orgId = e.editId) : (e.orgId = r.id, e.oper = "update"), e.$apply(function () {
            e.edit(r.tId)
        }), !1
    }, e.edit = function () {
        e.dialogPageTemplate = "dialog_sysmgt_org?" + Math.random();
        var a = e.tree.orgData, r = (a.getSelectedNodes()[0], "dialog_sysmgt_org"), t = $("#div_" + r);
        e.init(), o = NC_DirectiveUtil.showDialog(r, t)
    }, e.beforeRemove = function (a, r) {
        if (null == r.id || null == r.name)return NC_Util.showMessage(e, "error", "请先去保存节点信息"), !1;
        if (!confirm("确定要删除指定的数据？"))return !1;
        var t = r.id;
        return s = r, e.$apply(function () {
            e.del(t)
        }), !1
    }, e.del = function (a) {
        e.checkParams = {}, e.checkParams.bae001 = a;
        var r = function () {
            e.deleteTreeNode()
        };
        t.io.ajax(e, "OrgAction.del", ["checkParams"], {successFn: r})
    }, e.init = function () {
        var a = "ncm_gt_组织机构", r = e.orgId, o = e.oper;
        if (e[a] = {}, "update" === o) e[a]["组织机构代码"] = r, t.io.ajax(e, "OrgAction.query", [a], {isShowMessage: !1}); else {
            e[a]["上级组织机构"] = r;
            var i = r;
            e.checkParams = {}, e.checkParams.pBae001 = i;
            var s = function (r) {
                var t = r.checkResult.params.result;
                e[a]["组织机构代码"] = t
            };
            t.io.ajax(e, "OrgAction.getNewBae001", ["checkParams"], {successFn: s, isShowMessage: !1})
        }
    }, e.save = function () {
        var a = "ncm_gt_组织机构", r = function () {
            e.updateTreeNode(e[a]["组织机构代码"], e[a]["组织机构名称"])
        };
        t.io.ajax(e, "OrgAction.save", [a], {successFn: r})
    }, e.updateTreeNode = function (a, r) {
        var t = e.tree.orgData;
        if (null != i) {
            var o = t.addNodes(i, [{name: ""}])[0];
            t.selectNode(o)
        }
        i = null;
        var s = t.getSelectedNodes();
        s[0].id = a, s[0].name = r, t.updateNode(s[0])
    }, e.deleteTreeNode = function () {
        var a = e.tree.orgData;
        a.removeNode(s), s = null
    }
}]), app.controller("userCtrl", ["$scope", "$http", "$timeout", "$rootScope", "WrapperServices", function (e, a, r, t, o) {
    "use strict";
    e.stateScope = e;
    var i = null;
    e.initUser2OrgTree = function () {
        e.checkParams = {}, e.checkParams.bae001 = "44", e.checkParams.editable = "false";
        var a = function (a) {
            var r = a.checkResult.params.result, t = angular.fromJson(r);
            e.user2orgData = t
        };
        o.io.ajax(e, "OrgAction.getOrgTreeJson", ["checkParams"], {successFn: a, isShowMessage: !1})
    }, e.onUser2OrgClick = function (a, r) {
        e.orgId = r.id, e.$apply(function () {
            e.list()
        })
    }, e.list = function () {
        var a = "ncm_gt_查询条件", r = "ncm_glt_用户列表";
        void 0 != e.orgId && (e[a]["所属组织机构编码"] = e.orgId), o.io.ajax(e, "UserAction.list", [a, r], {isShowMessage: !1})
    }, e.clear = function () {
        var a = "ncm_gt_查询条件";
        o.gt.clear(e, a), delete e[a]["所属经办机构编码"]
    }, e.go = function (a) {
        if (e.oper = a, "add" === a) {
            if (void 0 == e.orgId)return void o.msg.show(e, "error", "请先在左边的机构树中单击树的某个节点选中新增用户所属的组织机构！");
            e.edit()
        } else if ("update" === a) {
            var r = o.glt.getRecords(e, "ncm_glt_用户列表", "操作员ID", !1);
            if (r) {
                var t = "ncm_gt_用户信息";
                e[t] = {}, e[t]["操作员ID"] = e.selectArray.params.IDS[0], e.edit()
            }
        } else"home" === a ? o.router.go("app.首页.网上业务", {isMenu: !0}) : "help" === a && alert("帮助中心")
    }, e.edit = function () {
        e.dialogPageTemplate = "dialog_sysmgt_user?" + Math.random();
        var a = "dialog_sysmgt_user", r = $("#div_" + a);
        e.init(), i = NC_DirectiveUtil.showDialog(a, r)
    }, e.viewRight = function () {
        var a = o.glt.getRecords(e, "ncm_glt_用户列表", "操作员ID", !1);
        if (a) {
            var r = e.selectArray.params.IDS[0];
            e.dialog_init(r)
        }
    }, e.dialog_init = function () {
        e.dialogPageTemplateUser2right = "dialog_sysmgt_user2right?" + Math.random();
        var a = "dialog_sysmgt_user2right", r = $("#div_" + a);
        i = NC_DirectiveUtil.showDialog(a, r)
    }, e.initOperator2RightTree = function () {
        var a = e.selectArray.params.IDS[0];
        e.checkParams = {}, e.checkParams.editable = "false", e.checkParams.operid = a;
        var r = function (a) {
            var r = a.checkResult.params.result, t = angular.fromJson(r);
            e.operator2rightData = t
        };
        o.io.ajax(e, "UserAction.getRightTreeJson", ["checkParams"], {successFn: r, isShowMessage: !1})
    }, e.del = function () {
        var a = function () {
            e.list()
        };
        o.glt.del(e, "UserAction.del", "ncm_glt_用户列表", "操作员ID", {successFn: a})
    }, e.update = function (a) {
        var r = o.glt.getRecords(e, "ncm_glt_用户列表", "操作员ID");
        if (r) {
            var t = "注销";
            "1" === a && (t = "恢复");
            var i = "您确定要" + t + "指定的用户？";
            if (!confirm(i))return;
            e.selectArray.params.status = a;
            var s = function () {
                e.list()
            };
            o.io.ajax(e, "UserAction.update", ["selectArray"], {successFn: s})
        }
    }, e.init = function () {
        var a = "ncm_gt_用户信息", r = e.oper, t = function () {
            e[a]["密码"] = ""
        };
        "update" === r ? o.io.ajax(e, "UserAction.query", [a], {
            successFn: t,
            isShowMessage: !1
        }) : "add" === r ? (e[a] = {}, e[a]["所属组织机构编码"] = e.orgId) : (e[a] = {}, o.gt.clear(e, a), o.log.info("操作员ID=" + o.data.getUserInfo("operid")), e[a]["操作员ID"] = o.data.getUserInfo("operid"), o.io.ajax(e, "UserAction.query", [a], {
            successFn: t,
            isShowMessage: !1,
            isCommonAction: !0
        }))
    }, e.register = function () {
        var a = "ncm_gt_用户信息";
        e.checkParams = {}, e.checkParams["登录ID"] = e[a]["登录ID"];
        var r = function (r) {
            var t = r.checkResult.params.result;
            if (!t)return void o.msg.show(e, "error", "登录ID已存在，请重新输入");
            var i = function () {
                o.gt.clear(e, a)
            };
            o.io.ajax(e, "UserAction.save", [a], {successFn: i})
        };
        o.io.ajax(e, "UserAction.checkLoginId", ["checkParams"], {successFn: r, isShowMessage: !1})
    }, e.save = function () {
        var a = !1, r = "ncm_gt_用户信息";
        e.checkParams = {}, e.checkParams["登录ID"] = e[r]["登录ID"], e.checkParams["操作员ID"] = e[r]["操作员ID"], e.checkParams["原密码"] = e[r]["原密码"];
        var t = function (r) {
            var t = r.checkResult.params.result;
            if (!t)return void o.msg.show(e, "error", "登录ID已存在，请重新输入");
            if (void 0 != e["ncm_gt_用户信息"]["原密码"] && "" != e["ncm_gt_用户信息"]["原密码"]) {
                var i = function (r) {
                    var t = r.checkResult.params.result;
                    return t ? void o.io.ajax(e, "UserAction.save", ["ncm_gt_用户信息"], {isCommonAction: a}) : void o.msg.show(e, "error", "原密码输入错误，请重新输入")
                };
                o.io.ajax(e, "UserAction.checkPwd", ["checkParams"], {
                    successFn: i,
                    isShowMessage: !1,
                    isCommonAction: a
                })
            } else {
                var i = function () {
                    e.list()
                };
                o.io.ajax(e, "UserAction.save", ["ncm_gt_用户信息"], {successFn: i, isCommonAction: a})
            }
        };
        o.io.ajax(e, "UserAction.checkLoginId", ["checkParams"], {successFn: t, isShowMessage: !1, isCommonAction: a})
    }, e.clearPwd = function () {
        var a = e["ncm_gt_用户信息"];
        if (void 0 != a["密码"] || void 0 != a["确认密码"]) {
            var r = !0, o = a["原密码"];
            return "" === o && (a["密码"] = "", a["确认密码"] = ""), NC_DirectiveUtil.dealBussCheckResult(t, e, "用户信息_原密码为空时清空新密码", "", r)
        }
    }, e.checkConsistency = function () {
        var a = e["ncm_gt_用户信息"];
        if (void 0 != a["密码"] && void 0 != a["确认密码"]) {
            var r = !0, o = " 密码与确认密码不一致！", i = a["密码"], s = a["确认密码"];
            return i != s && (r = !1), NC_DirectiveUtil.dealBussCheckResult(t, e, "用户信息_密码一致性", o, r)
        }
    }
}]), app.controller("roleCtrl", ["$scope", "$timeout", "$rootScope", "WrapperServices", function (e, a, r, t) {
    "use strict";
    e.stateScope = e;
    var o = null;
    e.dialogPageTemplate = "", e.initRole2OrgTree = function () {
        e.checkParams = {}, e.checkParams.bae001 = "44", e.checkParams.editable = "false";
        var a = function (a) {
            var r = a.checkResult.params.result, t = angular.fromJson(r);
            e.role2orgData = t
        };
        t.io.ajax(e, "OrgAction.getOrgTreeJson", ["checkParams"], {successFn: a, isShowMessage: !1})
    }, e.initRole2UserTree = function () {
        e.checkParams = {}, e.checkParams.bae001 = "44", e.checkParams.editable = "false", e.checkParams.roleId = e["ncm_gt_角色信息"]["角色ID"];
        var a = function (a) {
            var r = a.checkResult.params.result, t = angular.fromJson(r);
            e.role2userData = t
        };
        t.io.ajax(e, "UserAction.getUserTreeJson", ["checkParams"], {successFn: a, isShowMessage: !1})
    }, e.initRole2RightTree = function () {
        e.checkParams = {}, e.checkParams.editable = "false", e.checkParams.roleId = e["ncm_gt_角色信息"]["角色ID"];
        var a = function (a) {
            var r = a.checkResult.params.result, t = angular.fromJson(r);
            e.role2rightData = t
        };
        t.io.ajax(e, "RightAction.getRightTreeJson", ["checkParams"], {successFn: a, isShowMessage: !1})
    }, e.onRole2OrgClick = function (a, r) {
        e.orgId = r.id, e.$apply(function () {
            e.list()
        })
    }, e.list = function () {
        var a = "ncm_gt_查询条件", r = "ncm_glt_角色列表";
        void 0 != e.orgId && (e[a]["所属组织机构编码"] = e.orgId), t.io.ajax(e, "RoleAction.list", [a, r], {isShowMessage: !1})
    }, e.query = function () {
        var a = "ncm_gt_角色信息";
        e[a] = {}, e[a]["角色ID"] = t.router.getParam("id"), t.io.ajax(e, "RoleAction.query", [a], {isShowMessage: !1})
    }, e.clear = function () {
        var a = "ncm_gt_查询条件";
        t.gt.clear(e, a), delete e[a]["所属经办机构编码"]
    }, e.go = function (a) {
        if ("add" === a) {
            if (void 0 == e.orgId)return void t.msg.show(e, "error", "请先在左边的机构树中单击树的某个节点选中新增角色所属的组织机构！");
            e.param = {oper: a, orgId: e.orgId}, t.router.go("系统管理.权限管理.角色管理.保存", {
                oper: a,
                orgId: e.orgId
            }, e, ["ncm_gt_查询条件", "ncm_glt_角色列表"])
        } else if ("update" === a) {
            var r = t.glt.getRecords(e, "ncm_glt_角色列表", "角色ID", !1);
            if (r) {
                var o = e.selectArray.params.IDS[0];
                e.param = {oper: a, id: o}, t.router.go("系统管理.权限管理.角色管理.保存", {
                    oper: a,
                    id: o
                }, e, ["ncm_gt_查询条件", "ncm_glt_角色列表"])
            }
        }
    }, e.del = function () {
        var a = function () {
            e.list()
        };
        t.glt.del(e, "RoleAction.del", "ncm_glt_角色列表", "角色ID", {successFn: a})
    }, e.edit = function (a, r, i) {
        var s = "dialog_sysmgt_role", n = "系统管理.权限管理.角色管理.保存", c = {oper: a, id: r, orgId: i};
        e.dialogPageTemplate = "?aaa" + t.router.getUrlByRouter(e, n, c);
        var l = $("#div_" + s);
        o = NC_DirectiveUtil.showDialog(s, l)
    }, e.init = function (a) {
        if ("user" === a); else if ("right" === a); else {
            var r = "ncm_gt_角色信息", o = t.router.getParam("oper");
            "update" === o ? e.query() : "add" === o && (e[r] = {}, e[r]["所属组织机构编码"] = t.router.getParam("orgId"))
        }
    }, e.save = function (a) {
        if ("user" === a) {
            for (var r = e.tree.role2userData, o = r.getCheckedNodes(!0), i = [],
                     s = 0; s < o.length; s++)null != o[s].icon && i.push(o[s].id);
            e.selectArray = {}, e.selectArray.params = {}, e.selectArray.params.roleId = e["ncm_gt_角色信息"]["角色ID"], e.selectArray.params.userIds = i, t.io.ajax(e, "RoleAction.saveRole2User", ["selectArray"])
        } else if ("right" === a) {
            for (var n = e.tree.role2rightData, o = n.getCheckedNodes(!0), c = [],
                     s = 0; s < o.length; s++)c.push(o[s].id);
            e.selectArray = {}, e.selectArray.params = {}, e.selectArray.params.roleId = e["ncm_gt_角色信息"]["角色ID"], e.selectArray.params.rightIds = c, t.io.ajax(e, "RoleAction.saveRole2Right", ["selectArray"])
        } else {
            var l = "ncm_gt_角色信息";
            t.io.ajax(e, "RoleAction.save", [l])
        }
    }, e.back = function () {
        t.router.go("系统管理.权限管理.角色管理", {})
    }
}]), app.controller("rightCtrl", ["$scope", "$timeout", "$rootScope", "WrapperServices", function (e, a, r, t) {
    "use strict";
    e.stateScope = e;
    var o = null;
    e.dialogPageTemplate = "";
    var i = null, s = null;
    NC_Global.ep.on(NC_ED["系统管理_权限管理_菜单管理_更新菜单树节点"], function (a, r) {
        e.updateTreeNode(a, r)
    }), NC_Global.ep.on(NC_ED["系统管理_权限管理_菜单管理_删除菜单树节点"], function () {
        e.deleteTreeNode()
    }), e.initRightTree = function () {
        e.checkParams = {}, e.checkParams.editable = "true";
        var a = function (a) {
            var r = a.checkResult.params.result, t = angular.fromJson(r);
            e.rightData = t
        };
        t.io.ajax(e, "RightAction.getRightTreeJson", ["checkParams"], {successFn: a, isShowMessage: !1})
    }, e.beforeAdd = function (a) {
        return e.rightId = a.id, i = a, e.$apply(function () {
            e.edit("add", a.id)
        }), !1
    }, e.beforeEdit = function (a, r) {
        i = null;
        var t = e.tree.rightData;
        return t.selectNode(r), e.rightId = r.id, e.$apply(function () {
            e.edit("update", r.id)
        }), !1
    }, e.edit = function (a, r) {
        var i = "dialog_sysmgt_right", s = "系统管理.权限管理.菜单管理.保存", n = {oper: a, id: r};
        e.dialogPageTemplate = "?aaa" + t.router.getUrlByRouter(e, s, n);
        var c = $("#div_" + i);
        o = NC_DirectiveUtil.showDialog(i, c)
    }, e.beforeRemove = function (a, r) {
        return confirm("确定要删除指定的数据？") ? (e.rightId = r.id, s = r, e.$apply(function () {
            e.del()
        }), !1) : !1
    }, e.del = function (a) {
        if ("actions" === a) {
            e.selectArray = {}, e.selectArray.params = {}, e.selectArray.params.rightId = t.router.getParam("id");
            var r = function () {
                e.query("actionslist")
            };
            t.glt.del(e, "RightAction.delActions", "ncm_glt_操作列表", "操作ID", {successFn: r})
        } else {
            e.checkParams = {}, e.checkParams.rightId = e.rightId;
            var r = function () {
                parent.NC_Global.ep.emit(NC_ED["系统管理_权限管理_菜单管理_删除菜单树节点"])
            };
            t.io.ajax(e, "RightAction.del", ["checkParams"], {successFn: r})
        }
    }, e.go = function (a) {
        if ("addActions" === a) e.goActions(a); else if ("updateActions" === a) {
            var r = t.glt.getRecords(e, "ncm_glt_操作列表", "操作ID", !1);
            if (r) {
                var o = e.selectArray.params.IDS[0];
                e.goActions(a, o)
            }
        }
    }, e.goActions = function (a, r) {
        e.tabArray[1].url = t.router.getViewTemplateUrl("系统管理.权限管理.菜单管理.保存.保存操作信息", "虚拟"), t.router.go("系统管理.权限管理.菜单管理.保存.保存操作信息", {
            oper1: a,
            id1: r
        })
    }, e.init = function (a) {
        if ("actionslist" === a) e.query("actionslist"); else if ("actions" === a) e.query("actions"); else {
            var r = "ncm_gt_菜单信息";
            e[r] = {};
            var o = t.router.getParam("oper");
            if ("update" === o) e[r]["保存标志"] = "1", e[r]["权限ID"] = t.router.getParam("id"), t.io.ajax(e, "RightAction.query", [r], {isShowMessage: !1}); else if ("add" === o) {
                var i = t.router.getParam("id");
                e[r]["父权限ID"] = i, e.checkParams = {}, e.checkParams.prightId = i;
                var s = function (a) {
                    var t = a.checkResult.params.result;
                    e[r]["权限ID"] = t
                };
                t.io.ajax(e, "RightAction.getNewRightId", ["checkParams"], {successFn: s, isShowMessage: !1})
            }
        }
    }, e.query = function (a) {
        if ("actionslist" === a) {
            var r = "ncm_gt_菜单信息", o = "ncm_glt_操作列表";
            void 0 == e[o] && (e[o] = {}, e[o].params = {}, e[o].params.pageSize = 10, e[o].params.curPageNum = 1), t.io.ajax(e, "RightAction.listActions", [r, o], {isShowMessage: !1})
        } else if ("actions" === a) {
            var i = t.router.getParam("oper1"), r = "ncm_gt_操作信息";
            e[r] = {}, "updateActions" === i && (e[r]["操作ID"] = t.router.getParam("id1"), t.io.ajax(e, "RightAction.queryActions", [r], {isShowMessage: !1}))
        } else {
            var r = "ncm_gt_菜单信息";
            e[r] = {}, e[r]["权限ID"] = t.router.getParam("id"), t.io.ajax(e, "RightAction.query", [r], {isShowMessage: !1})
        }
    }, e.save = function (a) {
        if ("actions" === a) {
            var r = "ncm_gt_操作信息", o = "ncm_gt_菜单信息";
            e[o]["权限ID"] = t.router.getParam("id"), t.io.ajax(e, "RightAction.saveActions", [r, o])
        } else {
            var r = "ncm_gt_菜单信息", i = function () {
                e[r]["保存标志"] = "1", parent.NC_Global.ep.emit(NC_ED["系统管理_权限管理_菜单管理_更新菜单树节点"], e[r]["权限ID"], e[r]["权限名称"])
            };
            t.io.ajax(e, "RightAction.save", [r], {successFn: i})
        }
    }, e.back = function () {
        t.router.go("系统管理.权限管理.菜单管理", {})
    }, e.back2actions = function () {
        e.tabArray[1].url = t.router.getViewTemplateUrl("系统管理.权限管理.菜单管理.保存", "菜单操作"), t.router.go("^")
    }, e.updateTreeNode = function (a, r) {
        var t = e.tree.rightData;
        if (null != i) {
            var o = t.addNodes(i, [{name: ""}])[0];
            t.selectNode(o)
        }
        i = null;
        var s = t.getSelectedNodes();
        s[0].id = a, s[0].name = r, t.updateNode(s[0])
    }, e.deleteTreeNode = function () {
        var a = e.tree.rightData;
        a.removeNode(s), s = null
    }
}]), app.controller("routerCtrl", ["$scope", "$timeout", "$rootScope", "WrapperServices", function (e, a, r, t) {
    "use strict";
    e.stateScope = e;
    var o = null, i = null, s = null;
    e.initRouterTree = function () {
        e.checkParams = {};
        var a = function (a) {
            var r = a.checkResult.params.result, t = angular.fromJson(r);
            e.routerData = t
        };
        t.io.ajax(e, "RouterAction.getRouterTreeJson", ["checkParams"], {successFn: a, isShowMessage: !1})
    }, e.beforeAdd = function (a) {
        return null == a.id || null == a.name ? (NC_Util.showMessage(e, "error", "请先去保存节点信息"), !1) : a.add ? (e.routerId = a.id, e.oper = "add", e.editId = e.routerId, i = a, e.$apply(function () {
            e.edit(a.tId)
        }), !1) : (NC_Util.showMessage(e, "error", "不允许在路由节点上新增路由"), !1)
    }, e.beforeEdit = function (a, r) {
        i = null;
        var t = e.tree.routerData;
        return t.selectNode(r), null == r.id || null == r.name ? (e.oper = "add", e.routerId = e.editId) : (e.routerId = r.id, e.oper = "update"), e.$apply(function () {
            e.edit(r.tId)
        }), !1
    }, e.edit = function () {
        e.dialogPageTemplate = "dialog_sysmgt_router?" + Math.random();
        var a = e.tree.routerData, r = (a.getSelectedNodes()[0], "dialog_sysmgt_router"), t = $("#div_" + r);
        e.init(), o = NC_DirectiveUtil.showDialog(r, t)
    }, e.beforeRemove = function (a, r) {
        if (null == r.id || null == r.name)return NC_Util.showMessage(e, "error", "请先去保存节点信息"), !1;
        if (!confirm("确定要删除指定的数据？"))return !1;
        var t = r.id;
        return s = r, e.$apply(function () {
            e.del(t)
        }), !1
    }, e.del = function (a) {
        e.checkParams = {}, e.checkParams.routerId = a;
        var r = function () {
            e.deleteTreeNode()
        };
        t.io.ajax(e, "RouterAction.del", ["checkParams"], {successFn: r})
    }, e.init = function () {
        var a = "ncm_gt_路由信息", r = e.routerId, o = e.oper;
        e[a] = {}, "update" === o ? (e[a]["路由ID"] = r, t.io.ajax(e, "RouterAction.query", [a], {isShowMessage: !1})) : e[a]["菜单ID"] = r
    }, e.save = function () {
        var a = "ncm_gt_路由信息", r = function () {
            e.updateTreeNode(e[a]["路由ID"], e[a]["路由名称"])
        };
        t.io.ajax(e, "RouterAction.save", [a], {successFn: r})
    }, e.updateTreeNode = function (a, r) {
        var t = e.tree.routerData;
        if (null != i) {
            var o = t.addNodes(i, [{name: ""}])[0];
            t.selectNode(o)
        }
        i = null;
        var s = t.getSelectedNodes();
        s[0].id = a, s[0].name = r, t.updateNode(s[0])
    }, e.deleteTreeNode = function () {
        var a = e.tree.routerData;
        a.removeNode(s), s = null
    }
}]), app.run(["$rootScope", function () {
    "use strict"
}]);