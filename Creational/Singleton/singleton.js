var Database = /** @class */ (function () {
    function Database() {
        console.log('In constructor');
    }
    Database.getInstance = function () {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    };
    Database.prototype.query = function (q) {
        console.log("Database execyuting query= " + q);
    };
    Database.prototype.setCount = function (x) {
        this.count = x;
    };
    Database.prototype.getCount = function () {
        return this.count;
    };
    return Database;
}());
var db1 = Database.getInstance();
db1.query('fetch user names...');
db1.setCount(5);
console.log('Count= ', db1.getCount());
var db2 = Database.getInstance();
db2.query('Update user name');
db2.setCount(10);
console.log('Count= ', db1.getCount());
