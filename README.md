# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and used for learn k8s.

## Available Scripts

In the project directory, you can run:

### `docker-compose up`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `docker-compose build` 

If you change files outside `src` folder you need to re-build the image and then run `docker-compose up`

### `docker build -t create-react-app:<version> .`

Builds the app for production Docker image with `version` as its tag.

### `docker run -p 3000:80 create-react-app:<version>` 

Open [http://localhost:3000](http://localhost:3000) to test production image and see if it can work as expected.

### `docker push create-react-app:<version>`

Push docker image to docker hub. (Guarantee you have logon the correct account).

