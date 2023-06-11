
# TVMaze Project

## Table of Contents

1. [Intro](#intro)
2. [Checklist](#checklist)
3. [Getting started](#getting-started)
4. [Demo](#demo)
5. [Screenshots](#screenshots)

## Intro

This project was developed using [React Native](https://reactnative.dev/) and uses [TypeScript](https://www.typescriptlang.org/).

The project can retrieve information about TV shows, series, and actors from the [TV Maze API](https://www.tvmaze.com/api). 

## Checklist

  #### Mandatory features
[x] List all of the series contained in the API used by the paging scheme provided by the API.
[x] Allow users to search series by name.
[x] The listing and search views must show at least the name and poster image of the series.
[x] After clicking on a series, the application should show the details of the series, showing the following information: name, poster, days and time during the series airs, genres, summary, list of episodes separated by season
[x] After clicking on an episode, the application should show the episode’s information, including: name, number, season, summary, image (if there is one)

#### Bonus (Optional)
[ ] Allow the user to set a PIN number to secure the application and prevent unauthorized users.
[ ] For supported phones, the user must be able to choose if they want to enable fingerprint authentication to avoid typing the PIN number while opening the app.
[x] Allow the user to save a series as a favorite.
[x] Allow the user to delete a series from the favorites list.
[x] Allow the user to browse their favorite series in alphabetical order, and click on one to see its details.
[x] Create a people search by listing the name and image of the person.
[ ] After clicking on a person, the application should show the details of that person, such as: name, image, series they have participated in, with a link to the series details.
[x] Create dark/light theme switch.

## Getting started

Clone the project:

```
$ git clone https://github.com/guilhermemcardoso/tvmazeapp.git
//if you are using SSH:
$ git clone git@github.com:guilhermemcardoso/tvmazeapp.git
```
Access the project folder:
```
$ cd tvmazeapp
```
Install the dependencies
```
$ npm install
//or if you are using yarn
$ yarn
```
Install the pods (via Cocoapods) to complete the linking:
```
$ cd ios && pod install
```
Before running the project locally, we need to configure our .env file. So, create a file in the project's root directory called `.env`. Its content will be something like that:
```
API_URL=https://api.tvmaze.com/
```
Start the metro server in a terminal tab:
```
$ npm run start
//or if you are using yarn
$ yarn start
```
And start the application in another terminal tab:  
```
$ npm run android //to run the android application
//or
$ yarn android

$ npm run ios //to run the ios application
// or
$ yarn ios
```

## Demo

There is a demo.apk inside `demo` directory if anyone wants to test it in an android device or emulator.

## Screenshots
![Android version](https://raw.githubusercontent.com/guilhermemcardoso/tvmazeapp/main/demo/android.png)

![iOS Version](https://raw.githubusercontent.com/guilhermemcardoso/tvmazeapp/main/demo/ios.png)