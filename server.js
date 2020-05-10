const app = require('./app.js');
const db = require('./db');

const PORT = process.env.PORT || 3000;

db.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Listening On Port ${ PORT }...`);
    });
});