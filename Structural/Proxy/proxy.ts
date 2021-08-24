interface Image {
  displayImage(): void;
}

class RealImage implements Image {
  private img!: string;
  constructor(fname: string) {
    this.img = fname;
    this.loadFromDisk();
  }

  loadFromDisk() {
    console.log("Loading from disk...");
  }

  displayImage(): void {
    console.log("Showing Original Image= " + this.img);
  }
}

class ProxyImage implements Image {
  private img!: string;
  private realImage!: RealImage;

  constructor(fname: string) {
    this.img = fname;
  }

  displayImage(): void {
    console.log("Proxy process checking...");
    if (this.isImageCached()) {
      console.log("Image NOT cached");
      this.realImage = new RealImage(this.img);
    } else {
      console.log("Image already cached");
    }
    this.realImage.displayImage();
  }

  isImageCached(): boolean {
    return this.realImage === undefined ? true : false;
  }
}

const imgObj = new ProxyImage("abc.png");
imgObj.displayImage();    //image will be loaded from disk

console.log("----------------------------");

imgObj.displayImage();    //image will not load from disk but returns the cached image
