"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlertComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var models_1 = require("@app/models");
var AlertComponent = /** @class */ (function () {
    function AlertComponent(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(function (alert) {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                _this.alerts = _this.alerts.filter(function (x) { return x.keepAfterRouteChange; });
                // remove 'keepAfterRouteChange' flag on the rest
                _this.alerts.forEach(function (x) { return delete x.keepAfterRouteChange; });
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(function () { return _this.removeAlert(alert); }, 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.alertService.clear(_this.id);
            }
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        var _this = this;
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            alert.fade = true;
            // remove alert after faded out
            setTimeout(function () {
                _this.alerts = _this.alerts.filter(function (x) { return x !== alert; });
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(function (x) { return x !== alert; });
        }
    };
    AlertComponent.prototype.cssClass = function (alert) {
        var _a;
        if (!alert)
            return;
        var classes = ['alert', 'alert-dismissible', 'mt-4', 'container'];
        var alertTypeClass = (_a = {},
            _a[models_1.AlertType.Success] = 'alert-success',
            _a[models_1.AlertType.Error] = 'alert-danger',
            _a[models_1.AlertType.Info] = 'alert-info',
            _a[models_1.AlertType.Warning] = 'alert-warning',
            _a);
        if (alert.type !== undefined) {
            classes.push(alertTypeClass[alert.type]);
        }
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    };
    __decorate([
        core_1.Input()
    ], AlertComponent.prototype, "id");
    __decorate([
        core_1.Input()
    ], AlertComponent.prototype, "fade");
    AlertComponent = __decorate([
        core_1.Component({ selector: 'alert', templateUrl: 'alert.component.html' })
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
