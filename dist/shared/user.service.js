"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService() {
    }
    return UserService;
}());
exports.UserService = UserService;
var UserCanLoadGuard = (function () {
    function UserCanLoadGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserCanLoadGuard.prototype.canLoad = function (route) {
        if (this.userService.loginUser) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    UserCanLoadGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [UserService, router_1.Router])
    ], UserCanLoadGuard);
    return UserCanLoadGuard;
}());
exports.UserCanLoadGuard = UserCanLoadGuard;
var UserCanDeactivateGuard = (function () {
    function UserCanDeactivateGuard() {
    }
    UserCanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    UserCanDeactivateGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserCanDeactivateGuard);
    return UserCanDeactivateGuard;
}());
exports.UserCanDeactivateGuard = UserCanDeactivateGuard;
//# sourceMappingURL=user.service.js.map