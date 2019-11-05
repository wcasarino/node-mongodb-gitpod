const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wcasarino:MamiKa@cluster0-uxn81.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB is connected'))
    .catch(e => console.log(e));
