interface Builder {
  setCarType(carType: string): void;
  setEngine(engine: string): void;
  setTyres(num: number): void;
  setSeats(num: number): void;
}

class CarBuilder implements Builder {
  carType!: string;
  engine!: string;
  tyres!: number;
  seats!:number;

  setCarType(carType: string): void {
    this.carType = carType;
  }
  setEngine(engine: string): void {
    this.engine = engine;
  }
  setTyres(num: number): void {
    this.tyres = num;
  }
  setSeats(num: number): void {
    this.seats = num;
  }

  getCarResult(): void {
    console.log('Car Build: ', this.carType, this.engine, this.tyres, this.seats);
  }
}

class CarManualBuilder implements Builder {
  carType!: string;
  engine!: string;
  tyres!: number;
  seats!:number;

  setCarType(carType: string): void {
    this.carType = carType;
  }
  setEngine(engine: string): void {
    this.engine = engine;
  }
  setTyres(num: number): void {
    this.tyres = num;
  }
  setSeats(num: number): void {
    this.seats = num;
  }

  getCarResult(): void {
    console.log('******** Manual**********');
    console.log('Type of Car= ',this.carType);
    console.log('Type of Engine= ',this.engine);
    console.log('Num of tyres= ',this.tyres);
    console.log('Num of seats= ',this.seats);
  }
}

class Director {
  makeSportsCar(builder: Builder) {
    builder.setCarType('Sports');
    builder.setEngine('Petrol');
    builder.setTyres(4);
    builder.setSeats(2);
  }

  makeSUVCar(builder: Builder) {
    builder.setCarType('Sports');
    builder.setEngine('Diesel');
    builder.setTyres(8);
    builder.setSeats(4);
  }
}

//Client---->
const director = new Director();
const carBuilder = new CarBuilder();

//director.makeSportsCar(carBuilder);
director.makeSUVCar(carBuilder);
carBuilder.getCarResult();

const carManual = new CarManualBuilder();
//director.makeSportsCar(carManual);
director.makeSUVCar(carManual);
carManual.getCarResult();
