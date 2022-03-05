# BOOKMARKS APP

## Requirements

- Node version >= 12 or download nvm and run `nvm use 12`
- If you are using VSCode install PostCSS Language Support Plugin to avoid VSCode warnings

In the project directory, you can run:
### `npm install`

Install the dependencies
### `npm start`

Runs the app in the development mode.

## Bonus Points

# MYSQL queries:

- Creazione della tabella della lista bookmarks :
### `CREATE TABLE bookmarks (
    id nvarchar(4),
    name varchar(30),
    link varchar(30),
    PRIMARY KEY (id)
);`

- Lettura di tutti i record presenti nella tabella bookmarks
`SELECT * FROM bookmarks;`

- Creazione di un record all'interno della tabella bookmarks:
``
