const client = require('./client');

const sync = async() => {
    const SQL = `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        DROP TABLE IF EXISTS books;
        DROP TABLE IF EXISTS users;

        CREATE TABLE users (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            username VARCHAR(100) NOT NULL UNIQUE,
            email VARCHAR(100),
            password VARCHAR(32) NOT NULL,
            role VARCHAR(10) DEFAULT 'USER',
            CHECK (char_length(username) > 0)
        );

        CREATE TABLE books (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            "bookTitle" VARCHAR(200) DEFAULT 'No Title',
            author VARCHAR(100) DEFAULT 'Anonymous',
            "coverArt" VARCHAR(1000),
            description VARCHAR(2000), 
            "releaseInfo" JSON,
            "chapterList" JSON NOT NULL,
            foreward VARCHAR(1000),
            "cpRight" VARCHAR(500),
            afterward VARCHAR(1000)
        );
    `;
    await client.query(SQL);
};

module.exports = {
    sync
};