const mongoose = require('mongoose');
const Db = process.env.mongoDb
console.log(Db)
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(Db);
    console.log('it is connected to database');
}
