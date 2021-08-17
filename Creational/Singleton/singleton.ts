class Database {
  private static instance: Database;
  private count!: number;
  private constructor() {
    console.log('In constructor');
  }

  public static getInstance() {
    if(!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }

  public query(q: string) {
    console.log(`Database execyuting query= ${q}`);
  }

  public setCount(x: number) {
    this.count = x;
  }

  public getCount() {
    return this.count;
  }
}

const db1 = Database.getInstance();
db1.query('fetch user names...');
db1.setCount(5);
console.log('Count= ', db1.getCount());

const db2 = Database.getInstance();
db2.query('Update user name');
db2.setCount(10)

console.log('Count= ', db1.getCount());
