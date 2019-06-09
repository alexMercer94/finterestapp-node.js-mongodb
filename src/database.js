const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/finterest', {
        useNewUrlParser: true
    })
    .then(db => {
        console.log(`Database is connected`);
    })
    .catch(err => {
        console.error(err);
    });
