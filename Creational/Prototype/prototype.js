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
var Shape = /** @class */ (function () {
    function Shape(obj) {
        this.x = obj === null || obj === void 0 ? void 0 : obj.x;
        this.y = obj === null || obj === void 0 ? void 0 : obj.y;
        this.color = obj === null || obj === void 0 ? void 0 : obj.color;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(circle) {
        var _this = _super.call(this, circle) || this;
        _this.radius = circle === null || circle === void 0 ? void 0 : circle.radius;
        return _this;
    }
    Circle.prototype.clone = function () {
        return new Circle(this);
    };
    return Circle;
}(Shape));
var circleObj = new Circle();
circleObj.x = 2;
circleObj.y = 3;
circleObj.color = 'reed';
circleObj.radius = 10;
var circle2 = circleObj.clone();
console.log('Circle2= ', circle2);
console.log('Circle1= ', circleObj);
