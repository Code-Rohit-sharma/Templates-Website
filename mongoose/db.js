const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/templates", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connection successully");
}).catch((err) => {
    console.log(err);
});