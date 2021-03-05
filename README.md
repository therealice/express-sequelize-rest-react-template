# express-sequelize-rest-react-template

## About
A starting point for making an app with Express, Sequelize with Sqlite, REST and react.

## Install
```
npm i
```

## Run
The Sqlite Database is stored in the root as database.sqlite. Any non-existing tables will be created when starting the app.
The build output files are placed in the dist folder.

### Development
Run server and build frontend and listen for code changes for both. Any changes will restart the server and rebuild the frontend.
```
npm run dev
```

### Production
Open your .env file and set NODE_ENV=production. Then build the frontend:
```
npm run build
```

Then start the server:
```
npm run start
```