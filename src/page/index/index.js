/*
* @Author: Administrator
* @Date:   2017-12-07 15:18:57
* @Last Modified by:   cwh945
* @Last Modified time: 2017-12-07 22:00:59
*/
'use strict';
var _mm = require('util/mm.js');
var html = '<div>{{data}}</div>';
var data = {
    data : 123
}
console.log(_mm.renderHtml(html,data));