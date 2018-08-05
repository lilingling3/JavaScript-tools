"use strict";
exports.__esModule = true;
var Baby = /** @class */ (function () {
    function Baby(name) {
        this._name = name;
    }
    Baby.smile = function () {
    };
    // private 私有方法 实例没办法访问 需要定义公共方法
    Baby.prototype.getName = function () {
        return this._name;
    };
    return Baby;
}());
exports.Baby = Baby;
exports.baby = new Baby('new');
