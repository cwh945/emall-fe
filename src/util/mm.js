'use strict'
var Hogan = require('hogan');
var conf = {
    serverHost:''
};

var _mm = {
    request : function(param){
        var _this = this;
        $.ajax({
            type : param.method || 'get',
            url : param.url || '',
            dataType : param.type || 'json',
            data : param.data || '',
            success : function(res){
                if(0 === res.status){
                    typeof param.success === 'function'&&param.success(res.data,res.msg);
                }
                else if(10 === res.status){
                    _this.doLogin();
                }
                else if(1 === reg.status){
                    typeof param.error === 'function'&&param.error(res.msg);                    
                }
            },
            error : function(err){
                typeof param.error === 'function'&&param.error(err.statusText);                
            }
        });
    },
    // 获取服务器地址
    getServerUrl : function(path){
        return conf.serverHost + path;
    },
    // 获取URL参数
    getUrlParam : function(name){
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]):null;
    },
    // 渲染html模板
    renderHtml : function(htmlTemplate,data){
        var template = Hogan.compile(htmlTemplate),
        result = template.render(data);
        return result;
    },
    //成功提示
    successTips : function(msg){
        alert(msg || '操作成功!');
    },
    //失败提示
    errorTips : function(msg){
        alert(msg || '操作失败!');
    },
    validate : function(value,type){
        var value = $.trim(value);
        // 非空验证
        if('require' === type){
            return !!value;
        }
        // 手机号验证
        if('phone' === type){
            return /^1\d{10}$/.test(value);
            //是否以1开头，后面10位长度
        }
        // 邮箱格式验证
        if('email' === type){
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    },
    // 跳转登录
    doLogin : function(){
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    //返回首页
    goHome : function(){
        window.location.href = './index.html';
    }
};

module.exports = _mm;