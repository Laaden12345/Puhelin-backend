const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length == 3) {
    const password = process.argv[2];
    const url = `mongodb+srv://lassi:${password}@cluster0-rfz63.mongodb.net/test?retryWrites=true&w=majority`;
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('phonebook:');

    Person.find({})
        .then((persons) => {
            persons.forEach((person) => {
                console.log(`${person.name} ${person.number}`);
            });
            mongoose.connection.close();
        })
        .catch((error) => console.log(error));
} else if (process.argv.length == 5) {
    const password = process.argv[2];
    const name = process.argv[3];
    const number = process.argv[4];

    const url = `mongodb+srv://lassi:${password}@cluster0-rfz63.mongodb.net/test?retryWrites=true&w=majority`;

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    const person = new Person({
        name: name,
        number: number,
    });

    person.save().then((response) => {
        console.log(`added ${person.name} number ${person.number} to phonebook`);
        mongoose.connection.close();
    });
} else {
    console.log('usage: node mongo.js <password> "<name>" <number>');
    process.exit(1);
}
