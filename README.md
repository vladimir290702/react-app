# Movie Addict

This is the project i made for the end of the course i participated (React.js) in Softuni.

This application is hosted in [Heroku](https://id.heroku.com/) and can be accessed with the following link [https://movieaddict.herokuapp.com](https://movieaddict.herokuapp.com)

## What Is Used To Build The Applicaiton:

In the project directory, i used:

### `React`

``` bash
$ npx create-react-app my-app
```

JavaScript library for building user interfaces.

### `Firebase`
``` bash
$ npm install firebase
```
Realtime Database

### `TMDB API`

The TMDb API is a resource for any developers that want to integrate movie, TV show and cast data along with posters or movie fan art. themoviedb.org is a free and community edited database.

Visit the official [Website](https://www.themoviedb.org/) and [Documentation](https://developers.themoviedb.org/3)

### `react-youtube and movie-trailer`

``` bash
$ npm install react-youtube
```

``` bash
$ npm install --save movie-trailer
```

React-youtube is simple React component acting as a thin layer over the YouTube IFrame Player API and i used "movie-trailer" to get the right youtube video according to movie title. 

``` Javascript
movieTrailer(data.title)
        .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'))
})
```

### `react-toastify`

``` bash 
$ npm install --save react-toastify
$ yarn add react-toastify
```

this library i used for notifications, because it provides good UI and smooth animations and transitions.

![Notification example](https://user-images.githubusercontent.com/35040146/100596753-851b5e00-3322-11eb-9073-1a50e5adcb53.png)

# Architecture

* public
* src

   * components
   -> folder with more subfolders (each named as the component name), which have javascript and css file in it.
   * contexts
   -> here i keep the auth context.
   * services
   -> this folder keeps different requests to firebase or tmdb api. 

      * App.css
      * App.js
      * firebase.js
      * index.css
      * index.js

## `For the whole application i used functional components, different react techniques such as Context API, React Hooks, External API's!`  