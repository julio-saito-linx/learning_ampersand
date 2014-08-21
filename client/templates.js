(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root === 'undefined' || root !== Object(root)) {
        throw new Error('templatizer: window does not exist or is not an object');
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><div class="navbar navbar-inverse navbar-fixed-top"><div class="container"><div class="navbar-header"><button type="button" data-toggle="collapse" data-target=".navbar-collapse" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="/" class="navbar-brand">body(view)</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav"><li class="active"><a href="/">home</a></li><li><a href="/users">users</a></li><li><a href="/users/1">users/1</a></li><li><a href="/um">um</a></li><li><a href="/dois">dois</a></li><li><a href="/tres">três</a></li></ul><p href="#" role="user-name" class="navbar-text navbar-right">some-user</p></div></div></div><div class="container"><div role="page-container" class="main"></div></div></body>';
    };

    // includes/user.jade compiled template
    templatizer["includes"]["user"] = function tmpl_includes_user() {
        return '<tr><td><span role="user-fullName-item"></span></td><td><a role="action-user-view" class="btn btn-default">View</a></td><td><a role="action-delete-user" class="btn btn-default">Delete</a></td></tr>';
    };

    // pages/home.jade compiled template
    templatizer["pages"]["home"] = function tmpl_pages_home() {
        return "<!DOCTYPE html><section><h1>HOME PAGE</h1><p>This is home</p></section>";
    };

    // pages/person_detail.jade compiled template
    templatizer["pages"]["person_detail"] = function tmpl_pages_person_detail() {
        return '<div class="detail"><h1>Person Name</h1><p class="lead">His full name</p></div>';
    };

    // pages/um_dois_tres.jade compiled template
    templatizer["pages"]["um_dois_tres"] = function tmpl_pages_um_dois_tres() {
        return '<h1>Mudando as rotas!!<p><a href="/um">um</a></p><p><a href="/dois">dois</a></p><p><a href="/tres">tres</a></p></h1>';
    };

    // pages/user_create.jade compiled template
    templatizer["pages"]["user_create"] = function tmpl_pages_user_create() {
        return '<section class="page user-create"><h1>Create a new user</h1><form role="user-form"><fieldset role="field-container"></fieldset><button type="submit" class="btn btn-primary">Save</button></form></section>';
    };

    // pages/user_view.jade compiled template
    templatizer["pages"]["user_view"] = function tmpl_pages_user_view() {
        return '<section class="page user-view"><img role="user_avatar" width="50" height="50"/><p role="user_fullname"></p><p role="user_awesomeness"></p></section>';
    };

    // pages/users_list.jade compiled template
    templatizer["pages"]["users_list"] = function tmpl_pages_users_list() {
        return '<!DOCTYPE html><section><h1>Users</h1><div class="users-list"><table role="users-list" class="table table-striped"></table></div></section>';
    };

    return templatizer;
}));