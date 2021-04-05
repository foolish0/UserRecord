<%@ page pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${context_defaultt_systitle }</title>

<c:set value="darkblue" var="cssColor"></c:set>

<link href="/resources/easyui/static/${cssColor }/css/base.css" rel="stylesheet">
<link href="/resources/easyui/custom/${cssColor }/uimaker/easyui.css" rel="stylesheet">
<link href="/resources/easyui/custom/${cssColor }/uimaker/icon.css" rel="stylesheet" type="text/css">
<link href="/resources/easyui/static/${cssColor }/css/platform.css" rel="stylesheet">
<link href="/resources/imgs/favicon.ico" mce_href="/resources/imgs/favicon.ico" type="image/x-icon" rel="icon"/>
<link href="/resources/imgs/favicon.ico" rel="shortcut icon"/>
<link href="/resources/css/common.css" rel="stylesheet">
<style>
    .tree-file {
        background: url(/resources/easyui/custom/${cssColor }/uimaker/images/tree_icons.png) no-repeat -208px 0;
    }
</style>