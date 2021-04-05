<%@ page pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <%@include file="_head.jsp" %>

    <style>
        .top_logo {
            color: white;
            font-size: 30px;
            font-weight: bold;
        }
    </style>

</head>
<body>
<div id="loading"
     style="position:absolute;z-index:1000;top:0px;left:0px;width:100%;height:100%;background:#DDDDDB;text-align :center;padding-top:20%;">
    <h1>
        <font color="#15428B" size="5">加载中....</font>
    </h1>
</div>
<div class="container">
    <div id="pf-hd">
        <div class="pf-logo">
            <!-- <img src="/resources/easyui/static/green/images/main/main_logo.png" alt="logo"> -->
            <label class="top_logo">${systemconfig.title }</label>
        </div>

        <div class="pf-nav-wrap">
            <div class="pf-nav-ww">

                <ul class="pf-nav">

                </ul>
            </div>


            <a href="javascript:;" class="pf-nav-prev disabled iconfont">&#xe606;</a>
            <a href="javascript:;" class="pf-nav-next iconfont">&#xe607;</a>
        </div>

        <!--
                        <div class="pf-skin">
                            <i class="iconfont">&#xe708;</i>
                            <ul class="skin-list">
                                <li class="skin-item" data-color="green"></li>
                                <li class="skin-item" data-color="blue"></li>
                                <li class="skin-item" data-color="lightblue"></li>
                                <li class="skin-item" data-color="orange"></li>
                                <li class="skin-item" data-color="red"></li>
                                <li class="skin-item" data-color="darkblue"></li>
                                <li class="skin-item" data-color="black"></li>
                                <li class="skin-item" data-color="darkgrey"></li>
                                <li class="skin-item" data-color="light"></li>
                                <li class="skin-item" data-color="darkgreen"></li>
                            </ul>
                        </div> -->
        <div class="pf-user">
            <span class="msgts unreadMsgNum" style="display:none">${unreadMsgNum }</span>
            <%-- <c:if test="${unreadMsgNum > 0 }">
            </c:if> --%>
            <div class="pf-user-photo">
                <img src="/resources/easyui/static/green/images/main/user.png" alt="">
            </div>
            <h4 class="pf-user-name ellipsis">${_loginUser_.name}</h4>
            <i class="iconfont xiala">&#xe607;</i>

            <div class="pf-user-panel">
                <ul class="pf-user-opt">

                    <li class="pf-modify-pwd">
                        <a href="#" onclick="goToMessage()">
                            <i class="iconfont">&#xe6f8;</i>
                            <span class="pf-opt-name">消息<i class="mailtext ">[<span
                                    class="unreadMsgNum">${unreadMsgNum }</span>]</i></span>
                        </a>
                    </li>
                    <li class="pf-modify-pwd">
                        <a href="#" onclick="openChangePwd()">
                            <i class="iconfont">&#xe634;</i>
                            <span class="pf-opt-name">修改密码</span>
                        </a>
                    </li>
                    <li class="pf-logout">
                        <a href="javascript:;">
                            <i class="iconfont">&#xe60e;</i>
                            <span class="pf-opt-name">退出</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>

    <div id="pf-bd">
        <div class="pf-sider-wrap">

        </div>


        <div id="pf-page">

        </div>
    </div>

    <div id="pf-ft">
        <div class="system-name">
            <i class="iconfont">&#xe6fe;</i>
            <span>${context_defaultt_systitle }&nbsp;v${context_version}</span>
        </div>
        <div class="copyright-name">
            <span>CopyRight&nbsp;2019&nbsp;&nbsp;版权所有</span>
            <i class="iconfont">&#xe6ff;</i>
        </div>
    </div>
</div>

<div id="mm" class="easyui-menu tabs-menu" style="width:120px;display:none;">
    <div id="mm-tabrefresh">刷新</div>
    <div id="mm-tabclose">关闭</div>
    <div id="mm-tabcloseall">关闭所有</div>
    <div id="mm-tabcloseother">关闭其他</div>
</div>


<div id="addUserDiv" style="display: none;">
    <div class="" style="padding: 10px;">
        <div class="content">
            <form id="pwdForm">
                <table class="kv-table">
                    <tbody>
                    <tr>
                        <td class="kv-label">原密码</td>
                        <td class="kv-content"><input name="password" type="password" easyui-validatebox"
                            data-options="required:true" />
                        </td>
                    </tr>
                    <tr>
                        <td class="kv-label">新密码</td>
                        <td class="kv-content">
                            <input type="password" name="newPassword" class="easyui-validatebox"
                                   data-options="required:true"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="kv-label">确认密码</td>
                        <td class="kv-content">
                            <input type="password" name="newPasswordConfirm" class="easyui-validatebox"
                                   data-options="required:true"/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" style="    text-align: center;    padding-top: 20px;"><a href="#"
                                                                                                 class="easyui-linkbutton"
                                                                                                 iconCls="icon-ok"
                                                                                                 data-options=""
                                                                                                 onclick="postPwd()">提交</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</div>

<%@include file="_script.jsp" %>

<script type="text/javascript">
    var SystemMenu = [];

    <c:if test="${fn:contains(auths, ',syssetIcon,')}">
    var m = [];
    var item = {
        title: '系统设置',
        icon: '&#xe63f;',
        isCurrent: true,
        menu: m
    };
    SystemMenu.push(item);
    <c:if test="${fn:contains(auths, ',managerUser,')}">
    m.push({
        title: '后台用户管理',
        icon: '&#xe62f;',
        isCurrent: true,
        href: '/LoginUser/page.dhtml?_t=' + new Date().getTime(),
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',role,')}">
    m.push({
        title: '角色管理',
        icon: '&#xe625;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=base/role',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',org,')}">
    m.push({
        title: '公司管理',
        icon: '&#xe620;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=base/org',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',orgSysset,') || fn:contains(auths, ',sysset,') }">
    m.push({
        title: '参数设置',
        icon: '&#xe620;',
        href: '/Main/sysConfigPage.dhtml?_t=' + new Date().getTime(),
        children: []
    });
    </c:if>
    </c:if>

    <c:if test="${fn:contains(auths, ',carIcon,')}">
    var m = [];
    var item = {
        title: '车辆运维',
        icon: '&#xe60d;',
        menu: m
    };
    SystemMenu.push(item);
    <c:if test="${fn:contains(auths, ',car,')}">
    m.push({
        title: '车辆管理',
        icon: '&#xe647;',
        href: '/Car/carPage.dhtml?_t=' + new Date().getTime(),
        children: [],
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',carType,')}">
    m.push({
        title: '车型管理',
        icon: '&#xe611;',
        href: '/Car/carTypePage.dhtml?_t=' + new Date().getTime(),
        children: [],
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',terminal,')}">
    m.push({
        title: '设备管理',
        icon: '&#xe611;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=car/terminal',
        children: [],
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',repairUser,') }">
    m.push({
        title: '维修人员管理',
        icon: '&#xe611;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=car/repairUser',
        children: [],
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',driver,')}">
    m.push({
        title: '驾驶员管理',
        icon: '&#xe611;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=car/driver',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',part,') }">
    m.push({
        title: '配件管理',
        icon: '&#xe62f;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=car/part',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',carMainten,')}">
    m.push({
        title: '车辆保养管理',
        icon: '&#xe62f;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=car/mainten',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',powerCheck,')}">
    m.push({
        title: '电池保养管理',
        icon: '&#xe62f;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=car/powermainten',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',carError,')}">
    m.push({
        title: '车辆故障管理',
        icon: '&#xe62f;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=car/carerror',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',carCheck,')}">
    m.push({
        title: '车辆点检管理',
        icon: '&#xe62f;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=car/carcheck',
        children: []
    });
    </c:if>
    </c:if>
    <c:if test="${fn:contains(auths, ',monitorIcon,')}">
    var m = [];
    var item = {
        title: '实时监控',
        icon: '&#xe61e;',
        menu: m
    };
    SystemMenu.push(item);
    <c:if test="${fn:contains(auths, ',monitor,')}">
    m.push({
        title: '车辆监控',
        icon: '&#xe647;',
        href: '/Monitor/monitorPage.dhtml?_t=' + new Date().getTime(),
        isCurrent: true,
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',area,')}">
    m.push({
        title: '围栏管理',
        icon: '&#xe611;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=monitor/area',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',hisalarm,')}">
    m.push({
        title: '历史报警',
        icon: '&#xe611;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=monitor/alarm',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',chart,')}">
    m.push({
        title: '实时图表',
        icon: '&#xe611;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=monitor/chart',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',chartHis,')}">
    m.push({
        title: '历史图表',
        icon: '&#xe611;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=monitor/hischart',
        children: []
    });
    </c:if>
    </c:if>
    <c:if test="${fn:contains(auths, ',statisticsIcon,')}">
    var m = [];
    var item = {
        title: '统计报表',
        icon: '&#xe620;',
        menu: m
    };
    SystemMenu.push(item);
    <c:if test="${fn:contains(auths, ',carworkstatisc,')}">
    m.push({
        title: '车辆作业效率',
        icon: '&#xe647;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=statistics/carworkstatisc',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',carworklog,')}">
    m.push({
        title: '车辆作业记录',
        icon: '&#xe611;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=statistics/carworklog',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',driverworkstatisc,')}">
    m.push({
        title: '驾驶员作业效率',
        icon: '&#xe611;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=statistics/driverworkstatisc',
        children: []
    });
    </c:if>
    <c:if test="${fn:contains(auths, ',driverworklog,')}">
    m.push({
        title: '驾驶员作业记录',
        icon: '&#xe611;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=statistics/driverworklog',
        children: []
    });
    </c:if>
    </c:if>
    <c:if test="${fn:contains(auths, ',repairIcon,')}">
    var m = [];
    var item = {
        title: '报修管理',
        icon: '&#xe625;',
        menu: m
    };
    SystemMenu.push(item);
    <c:if test="${fn:contains(auths, ',repair,')}">
    m.push({
        title: '订单列表',
        icon: '&#xe647;',
        href: '/Common/j.dhtml?_t=' + new Date().getTime() + '&p=car/repair',
        children: []
    });
    </c:if>
    </c:if>
    var m = [];
    var item = {
        title: '信息通知',
        icon: '&#xe61d;',
        menu: m
    };
    SystemMenu.push(item);
    m.push({
        title: '信息列表',
        icon: '&#xe61d;',
        href: '/Common/j.dhtml?p=car/message&_t=' + new Date().getTime(),
        children: []
    });

</script>
<%-- <script type="text/javascript" src="/resources/js/menu.js?_v=${context_version }"></script> --%>
<script type="text/javascript" src="/resources/easyui/static/green/js/main.js?_v=${context_version }"></script>
<script type="text/javascript" src="/resources/js/page/main.js?_v=${context_version }"></script>
<!--[if IE 7]>
<script type="text/javascript">
    $(window).resize(function () {
        $('#pf-bd').height($(window).height() - 76);
    }).resize();

</script>
<![endif]-->
</body>
</html>
