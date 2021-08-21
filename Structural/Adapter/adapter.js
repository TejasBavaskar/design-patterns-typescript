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
var RoundHole = /** @class */ (function () {
    function RoundHole(radius) {
        this.radius = radius;
    }
    RoundHole.prototype.getRadius = function () {
        return this.radius;
    };
    RoundHole.prototype.fits = function (peg) {
        if (peg.getRadius() > this.getRadius()) {
            return false;
        }
        return true;
    };
    return RoundHole;
}());
var RoundPeg = /** @class */ (function () {
    function RoundPeg(radius) {
        this.radius = radius;
    }
    RoundPeg.prototype.getRadius = function () {
        return this.radius;
    };
    return RoundPeg;
}());
var SquarePeg = /** @class */ (function () {
    function SquarePeg(width) {
        this.width = width;
    }
    SquarePeg.prototype.getWidth = function () {
        return this.width;
    };
    return SquarePeg;
}());
var SquarePegAdapter = /** @class */ (function (_super) {
    __extends(SquarePegAdapter, _super);
    function SquarePegAdapter(peg) {
        var _this = _super.call(this, peg.getWidth()) || this;
        _this.squarePeg = peg;
        return _this;
    }
    SquarePegAdapter.prototype.getRadius = function () {
        var result = (Math.sqrt(Math.pow((Math.floor(this.squarePeg.getWidth() / 2)), 2) * 2));
        return result;
    };
    return SquarePegAdapter;
}(RoundPeg));
var roundHole = new RoundHole(5);
var roundPeg = new RoundPeg(5);
roundHole.fits(roundPeg) ? console.log('Yes') : console.log('No');
var squarePeg = new SquarePeg(3);
//roundHole.fits(squarePeg);  //not compatible
var squarePegAdapter = new SquarePegAdapter(squarePeg);
roundHole.fits(squarePegAdapter) ? console.log('Yes') : console.log('No');
