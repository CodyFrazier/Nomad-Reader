const app = require('./app.js');
const db = require('./db');

const PORT = process.env.PORT || 3000;

console.log('calling sync...')
db.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Listening On Port ${ PORT }...`);
    });
})
/*
.catch(ex => console.log(`
Server Error:
  Code : ${ ex.code }   Position: ${ ex.position }

  File: ${ ex.file }    Line: ${ ex.line }

  Routine: ${ ex.routine }
`))
*/;