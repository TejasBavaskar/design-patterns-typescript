"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Product//
var Member = /** @class */ (function () {
    function Member() {
    }
    Member.prototype.registration = function () {
        console.log('Registration is done.');
    };
    Member.prototype.notify = function () {
        console.log('Notification sent to email...');
    };
    return Member;
}());
//Concrete Region1-Product1
var MumbaiLifetimeMember = /** @class */ (function (_super) {
    __extends(MumbaiLifetimeMember, _super);
    function MumbaiLifetimeMember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MumbaiLifetimeMember.prototype.policies = function () {
        console.log('Mumbai Lifetime Member Policies....');
    };
    MumbaiLifetimeMember.prototype.discount = function () {
        console.log('Mumbai Lifetime Member discount= 70%');
    };
    return MumbaiLifetimeMember;
}(Member));
//Concrete Region1-Product2
var MumbaiAnnualMember = /** @class */ (function (_super) {
    __extends(MumbaiAnnualMember, _super);
    function MumbaiAnnualMember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MumbaiAnnualMember.prototype.policies = function () {
        console.log('Mumbai Annual Member Policies....');
    };
    MumbaiAnnualMember.prototype.discount = function () {
        console.log('Mumbai Annual Member discount= 50%');
    };
    return MumbaiAnnualMember;
}(Member));
//Concrete Region2-Product1
var NYLifetimeMember = /** @class */ (function (_super) {
    __extends(NYLifetimeMember, _super);
    function NYLifetimeMember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYLifetimeMember.prototype.policies = function () {
        console.log('NY Lifetime Member Policies....');
    };
    NYLifetimeMember.prototype.discount = function () {
        console.log('NY Lifetime Member discount= 60%');
    };
    return NYLifetimeMember;
}(Member));
//Concrete Region2-Product2
var NYAnnualMember = /** @class */ (function (_super) {
    __extends(NYAnnualMember, _super);
    function NYAnnualMember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYAnnualMember.prototype.policies = function () {
        console.log('NY Annual Member Policies....');
    };
    NYAnnualMember.prototype.discount = function () {
        console.log('NY Annual Member discount= 30%');
    };
    return NYAnnualMember;
}(Member));
//Client Using Factory
var MemberManager = /** @class */ (function () {
    function MemberManager() {
    }
    return MemberManager;
}());
var MumbaiManager = /** @class */ (function (_super) {
    __extends(MumbaiManager, _super);
    function MumbaiManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MumbaiManager.prototype.createMembership = function (type) {
        var m;
        if (type === 'lifetime') {
            m = new MumbaiLifetimeMember();
        }
        else if (type === 'annual') {
            m = new MumbaiAnnualMember();
        }
        return m;
    };
    MumbaiManager.prototype.rules = function () {
        console.log('Mumbai Tennis Club Rules');
    };
    return MumbaiManager;
}(MemberManager));
var NYManager = /** @class */ (function (_super) {
    __extends(NYManager, _super);
    function NYManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYManager.prototype.createMembership = function (type) {
        var m;
        if (type === 'lifetime') {
            m = new NYLifetimeMember();
        }
        else if (type === 'annual') {
            m = new NYAnnualMember();
        }
        return m;
    };
    NYManager.prototype.rules = function () {
        console.log('NY Tennis Club Rules');
    };
    return NYManager;
}(MemberManager));
//const mngr = new MumbaiManager();
var mngr = new NYManager();
mngr.rules();
var obj = mngr.createMembership('lifetime');
obj.registration();
obj.policies();
obj.discount();
obj.notify();
