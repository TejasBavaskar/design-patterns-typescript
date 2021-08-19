interface DataSource {
  write(data: string): void;
  read(): string;
}

class FileSource implements DataSource {
  private fileData!: string;
  write(data: string): void {
    this.fileData = data;
  }
  read(): string {
    return this.fileData;
  }
}

class Decorator implements DataSource {
  private dataSource!: DataSource;
  constructor(obj: DataSource) {
    this.dataSource = obj;
  }
  write(data: string): void {
    this.dataSource.write(data);
  }
  read(): string {
    return this.dataSource.read();
  }
}

class EncryptionDecorator extends Decorator {
  constructor(obj: DataSource) {
    super(obj);
  }

  write(data: string): void {
    data = "/1234ABCD1234/" + data + "/1234ABCD1234/";
    super.write(data);
  }
  read(): string {
    return super.read();
  }
}

const file = new FileSource();
const encryptFeat = new EncryptionDecorator(file);
encryptFeat.write("My name is Tejas.");
let data = encryptFeat.read();
console.log(data);
