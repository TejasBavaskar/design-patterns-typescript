var RealImage = /** @class */ (function () {
    function RealImage(fname) {
        this.img = fname;
        this.loadFromDisk();
    }
    RealImage.prototype.loadFromDisk = function () {
        console.log("Loading from disk...");
    };
    RealImage.prototype.displayImage = function () {
        console.log("Showing Original Image= " + this.img);
    };
    return RealImage;
}());
var ProxyImage = /** @class */ (function () {
    function ProxyImage(fname) {
        this.img = fname;
    }
    ProxyImage.prototype.displayImage = function () {
        console.log("Proxy process checking...");
        if (this.isImageCached()) {
            console.log("Image NOT cached");
            this.realImage = new RealImage(this.img);
        }
        else {
            console.log("Image already cached");
        }
        this.realImage.displayImage();
    };
    ProxyImage.prototype.isImageCached = function () {
        return this.realImage === undefined ? true : false;
    };
    return ProxyImage;
}());
var imgObj = new ProxyImage("abc.png");
imgObj.displayImage(); //image will be loaded from disk
console.log("----------------------------");
imgObj.displayImage(); //image will not load from disk but returns the cached image
