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
//Concrete Product1
var LifetimeMember = /** @class */ (function (_super) {
    __extends(LifetimeMember, _super);
    function LifetimeMember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LifetimeMember.prototype.policies = function () {
        console.log('Lifetime Member Policies....');
    };
    LifetimeMember.prototype.discount = function () {
        console.log('Lifetime Member discount= 70%');
    };
    return LifetimeMember;
}(Member));
//Concrete Product2
var AnnualMember = /** @class */ (function (_super) {
    __extends(AnnualMember, _super);
    function AnnualMember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnualMember.prototype.policies = function () {
        console.log('Annual Member Policies....');
    };
    AnnualMember.prototype.discount = function () {
        console.log('Annual Member discount= 50%');
    };
    return AnnualMember;
}(Member));
//Factory Class
var FactoryMember = /** @class */ (function () {
    function FactoryMember() {
    }
    FactoryMember.createMembership = function (type) {
        var m;
        if (type === 'Lifetime') {
            m = new LifetimeMember();
        }
        else if (type === 'Annual') {
            m = new AnnualMember();
        }
        return m;
    };
    return FactoryMember;
}());
//Client Using Factory
var MemberManager = /** @class */ (function () {
    function MemberManager() {
    }
    MemberManager.prototype.createMembership = function (type) {
        var m = FactoryMember.createMembership(type);
        return m;
    };
    return MemberManager;
}());
var mngr = new MemberManager();
var annualObj = mngr.createMembership('Lifetime');
annualObj.policies();
annualObj.registration();
annualObj.discount();
