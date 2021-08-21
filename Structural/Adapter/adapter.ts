class RoundHole {
  private radius!: number;

  constructor(radius: number) {
      this.radius = radius;
  }

  getRadius() {
      return this.radius;
  }

  fits(peg: RoundPeg): boolean {
      if(peg.getRadius() > this.getRadius()) {
          return false;
      }
      return true;
  }
}

class RoundPeg {
  private radius!: number;

  constructor(radius: number) {
      this.radius = radius;
  }

  getRadius() {
      return this.radius;
  }
}

class SquarePeg {
  private width!: number;

  constructor(width: number) {
      this.width = width;
  }

  getWidth() {
      return this.width;
  }
}

//Adapter
class SquarePegAdapter extends RoundPeg{
  private squarePeg!: SquarePeg;

  constructor(peg: SquarePeg) { //Adaptee Object, here SquarePEg obj
      super(peg.getWidth());
      this.squarePeg = peg;
  }

  getRadius() {
      let result = (Math.sqrt(Math.pow((Math.floor(this.squarePeg.getWidth() / 2)), 2) * 2));
      return result;
  }
}

const roundHole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
roundHole.fits(roundPeg) ? console.log('Yes') : console.log('No');

const squarePeg = new SquarePeg(3);
//roundHole.fits(squarePeg);  //not compatible

const squarePegAdapter = new SquarePegAdapter(squarePeg);
roundHole.fits(squarePegAdapter) ? console.log('Yes') : console.log('No');