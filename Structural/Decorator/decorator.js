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
var FileSource = /** @class */ (function () {
    function FileSource() {
    }
    FileSource.prototype.write = function (data) {
        this.fileData = data;
    };
    FileSource.prototype.read = function () {
        return this.fileData;
    };
    return FileSource;
}());
var Decorator = /** @class */ (function () {
    function Decorator(obj) {
        this.dataSource = obj;
    }
    Decorator.prototype.write = function (data) {
        this.dataSource.write(data);
    };
    Decorator.prototype.read = function () {
        return this.dataSource.read();
    };
    return Decorator;
}());
var EncryptionDecorator = /** @class */ (function (_super) {
    __extends(EncryptionDecorator, _super);
    function EncryptionDecorator(obj) {
        return _super.call(this, obj) || this;
    }
    EncryptionDecorator.prototype.write = function (data) {
        data = "/1234ABCD1234/" + data + "/1234ABCD1234/";
        _super.prototype.write.call(this, data);
    };
    EncryptionDecorator.prototype.read = function () {
        return _super.prototype.read.call(this);
    };
    return EncryptionDecorator;
}(Decorator));
var file = new FileSource();
var encryptFeat = new EncryptionDecorator(file);
encryptFeat.write("My name is Tejas.");
var data = encryptFeat.read();
console.log(data);
