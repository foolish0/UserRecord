<!-- login -->
<%@ page pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <%@include file="_head.jsp" %>
    <link href="/resources/easyui/static/green/css/login/login.css" rel="stylesheet">
    <style type="text/css">
        body {
            overflow: auto;
        }

        body.default .login-hd .logo {
            background: url(${systemconfig.logo}) no-repeat;
            background-size: 130px;
        }
    </style>
</head>
<body class="default">
<div class="login-hd">
    <div class="left-bg"></div>
    <div class="right-bg"></div>
    <div class="hd-inner">
        <span class="logo"></span>
        <span class="split"></span>
        <span class="sys-name">
            ${systemconfig.title }
        </span>
    </div>
</div>
<div class="login-bd" style="background-image: url(${systemconfig.loginBg});">
    <div class="bd-inner">
        <div class="inner-wrap">
            <div class="lg-zone">
                <div class="lg-box">
                    <div class="lg-label">
                        <h4>用户登录</h4>
                    </div>
                    <div id="errDiv" style="display:none" class="alert alert-error">
                        <i class="iconfont">&#xe62e;</i>
                        <span id="err">请输入账号/手机号</span>
                    </div>

                    <form id="nameloginForm">
                        <div class="lg-username input-item clearfix">
                            <i class="iconfont">&#xe60d;</i>
                            <input type="text" id="name_name" placeholder="账号/手机号" value="admin">
                        </div>
                        <div class="lg-password input-item clearfix">
                            <i class="iconfont">&#xe634;</i>
                            <input type="password" id="name_pwd" placeholder="请输入密码" value="admin">
                        </div>
                        <div class="lg-check clearfix">
                            <div class="input-item">
                                <i class="iconfont">&#xe633;</i>
                                <input type="text" id="name_code" placeholder="验证码">
                            </div>
                            <!-- <span class="check-code">XD34F</span> -->
                            <img class="check-code" id="checkCode" alt="验证码" src="/Login/checkCode.dhtml"
                                 onclick="changeValidateCode()" style="cursor:pointer;"/>
                        </div>
                        <div class="tips clearfix">
                            <!-- <label><input type="checkbox" checked="checked">记住用户名</label> -->
                            <a href="javascript:;" class="register" style="float: left;margin-left: 40px;"
                               onclick="changeForm('phone')">手机号登录</a>
                            <a href="javascript:;" class="register" onclick="changeForm('pwd')">忘记密码？</a>
                            <!-- <a href="javascript:;" class="register">立即注册</a> -->
                        </div>
                        <div class="enter">
                            <a href="javascript:;" class="purchaser" onClick="submitName()">登录</a>
                            <!-- <a href="javascript:;" class="supplier" onClick="javascript:window.location='main.html'">供应商登录</a> -->
                        </div>
                    </form>

                    <form id="phoneloginForm" style="display:none">
                        <div class="lg-username input-item clearfix">
                            <i class="iconfont">&#xe60d;</i>
                            <input type="text" id="phone_phone" placeholder="手机号">
                        </div>
                        <div class="lg-check clearfix">
                            <div class="input-item">
                                <i class="iconfont">&#xe633;</i>
                                <input type="text" id="phone_code" placeholder="验证码">
                            </div>
                            <span class="check-code" style="cursor:pointer"
                                  onclick="getPhoneValidCode(this,'phone_phone')">获取验证码</span>
                        </div>
                        <div class="tips clearfix">
                            <a href="javascript:;" class="register" style="float: left;margin-left: 40px;"
                               onclick="changeForm('name')">账号密码登录</a>
                            <!-- <a href="javascript:;" class="register">立即注册</a> -->
                        </div>
                        <div class="enter">
                            <a href="javascript:;" class="purchaser" onClick="submitPhone()">登录</a>
                            <!-- <a href="javascript:;" class="supplier" onClick="javascript:window.location='main.html'">供应商登录</a> -->
                        </div>
                    </form>

                    <form id="pwdForm" style="display:none">
                        <div class="lg-username input-item clearfix">
                            <i class="iconfont">&#xe60d;</i>
                            <input type="text" id="pwd_phone" placeholder="手机号">
                        </div>
                        <div class="lg-check clearfix">
                            <div class="input-item">
                                <i class="iconfont">&#xe633;</i>
                                <input type="text" id="pwd_code" placeholder="验证码">
                            </div>
                            <span class="check-code" style="cursor:pointer"
                                  onclick="getPhoneValidCode(this,'pwd_phone')">获取验证码</span>
                        </div>

                        <div class="lg-username input-item clearfix">
                            <i class="iconfont">&#xe60d;</i>
                            <input type="text" id="pwd_pwd" placeholder="新密码">
                        </div>
                        <div class="tips clearfix">
                            <a href="javascript:;" class="register" style="float: left;margin-left: 40px;"
                               onclick="changeForm('name')">账号密码登录</a>
                            <!-- <a href="javascript:;" class="register">立即注册</a> -->
                        </div>
                        <div class="enter">
                            <a href="javascript:;" class="purchaser" onClick="resetPwd()">提交</a>
                            <!-- <a href="javascript:;" class="supplier" onClick="javascript:window.location='main.html'">供应商登录</a> -->
                        </div>

                    </form>
                </div>
            </div>
            <div class="lg-poster"></div>
        </div>
    </div>
</div>
<div class="login-ft">
    <div class="ft-inner">
        <!-- <div class="about-us">
        <a href="javascript:;">关于我们</a>
        <a href="javascript:;">法律声明</a>
        <a href="javascript:;">服务条款</a>
        <a href="javascript:;">联系方式</a>
    </div> -->
        <div class="address">
            <pre>${systemconfig.right }</pre>
        </div>
    </div>
</div>
<%@include file="_script.jsp" %>
<script type="text/javascript" src="/resources/js/page/login.js?${_version_}"></script>
</body>
</html>