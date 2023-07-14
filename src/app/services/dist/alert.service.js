"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlertService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var models_1 = require("@app/models");
var AlertService = /** @class */ (function () {
    function AlertService() {
        this.subject = new rxjs_1.Subject();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    AlertService.prototype.onAlert = function (id) {
        if (id === void 0) { id = this.defaultId; }
        return this.subject.asObservable().pipe(operators_1.filter(function (x) { return x && x.id === id; }));
    };
    // convenience methods
    AlertService.prototype.success = function (message, options) {
        this.alert(new models_1.Alert(__assign(__assign({}, options), { type: models_1.AlertType.Success, message: message })));
    };
    AlertService.prototype.error = function (message, options) {
        this.alert(new models_1.Alert(__assign(__assign({}, options), { type: models_1.AlertType.Error, message: message })));
    };
    AlertService.prototype.info = function (message, options) {
        this.alert(new models_1.Alert(__assign(__assign({}, options), { type: models_1.AlertType.Info, message: message })));
    };
    AlertService.prototype.warn = function (message, options) {
        this.alert(new models_1.Alert(__assign(__assign({}, options), { type: models_1.AlertType.Warning, message: message })));
    };
    // main alert method
    AlertService.prototype.alert = function (alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    };
    // clear alerts
    AlertService.prototype.clear = function (id) {
        if (id === void 0) { id = this.defaultId; }
        this.subject.next(new models_1.Alert({ id: id }));
    };
    AlertService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;
