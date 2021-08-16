var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
    }
    CarBuilder.prototype.setCarType = function (carType) {
        this.carType = carType;
    };
    CarBuilder.prototype.setEngine = function (engine) {
        this.engine = engine;
    };
    CarBuilder.prototype.setTyres = function (num) {
        this.tyres = num;
    };
    CarBuilder.prototype.setSeats = function (num) {
        this.seats = num;
    };
    CarBuilder.prototype.getCarResult = function () {
        console.log('Car Build: ', this.carType, this.engine, this.tyres, this.seats);
    };
    return CarBuilder;
}());
var CarManualBuilder = /** @class */ (function () {
    function CarManualBuilder() {
    }
    CarManualBuilder.prototype.setCarType = function (carType) {
        this.carType = carType;
    };
    CarManualBuilder.prototype.setEngine = function (engine) {
        this.engine = engine;
    };
    CarManualBuilder.prototype.setTyres = function (num) {
        this.tyres = num;
    };
    CarManualBuilder.prototype.setSeats = function (num) {
        this.seats = num;
    };
    CarManualBuilder.prototype.getCarResult = function () {
        console.log('******** Manual**********');
        console.log('Type of Car= ', this.carType);
        console.log('Type of Engine= ', this.engine);
        console.log('Num of tyres= ', this.tyres);
        console.log('Num of seats= ', this.seats);
    };
    return CarManualBuilder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.makeSportsCar = function (builder) {
        builder.setCarType('Sports');
        builder.setEngine('Petrol');
        builder.setTyres(4);
        builder.setSeats(2);
    };
    Director.prototype.makeSUVCar = function (builder) {
        builder.setCarType('Sports');
        builder.setEngine('Diesel');
        builder.setTyres(8);
        builder.setSeats(4);
    };
    return Director;
}());
//Client---->
var director = new Director();
var carBuilder = new CarBuilder();
//director.makeSportsCar(carBuilder);
director.makeSUVCar(carBuilder);
carBuilder.getCarResult();
var carManual = new CarManualBuilder();
//director.makeSportsCar(carManual);
director.makeSUVCar(carManual);
carManual.getCarResult();
