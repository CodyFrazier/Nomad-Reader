# Nomad-Reader
An online reader for those on the go. Full stack development project for practicing and reinforcing my skills.

Setup :

On command line: 

<pre>npm i</pre>

In db folder:
- Create a file called client.js with the following code:
- -postgres user and password not required on mac systems (the text within the url in { } brackets)
- -Set postgres user = the user you wish to access the database with
- -Password should be that users psql password-- not a login
- -The user needs to be a superuser in order for the program to run
- - -This is due to the uuid extension failing to instantiate because of permissions
<pre>
const { Client } = require('pg');

const client = new Client(process.env.DATABASE_URL || 'postgres://{ PostgresUser:password@ }localhost/nomad_db');

client.connect();

module.exports = client;
</pre>

Technologies :
- React
- Babel
- Webpack
- Express
- NodeJS
- PG (PostgreSQL)
- axios
- React-Router
