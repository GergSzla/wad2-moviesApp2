# Web App Development Assignment 2 
## ReactJS, Express, Mongodb
BSc (Hons) Software Systems Development,
Gergo Szilagyi,
20079738,
Year 4.

# Web App
## Features
-	Discover Movies Page
-	Discover TV Shows Page
-	Trending Actors
-   Authentication via MongoDB
-   MongoDB Storage for:
    - Movies
    - Series
    - Users
    - Actors
- Account Page
- Home Page
- Private Routes To Restrict Pages (Users required to sign in)

## APIs Used
- https://api.themoviedb.org/3/discover/movie (Get Movies)
- https://api.themoviedb.org/3/trending/person (Additional Request: Get Trending Actors)
- https://api.themoviedb.org/3/discover/tv (Additional Request: Get TV Shows) 
- ~~https://api.themoviedb.org/3/movie/${id} (Get Specific Movie)~~ **(Present But Not Used)**
- ~~https://api.themoviedb.org/3/person/${id} (Get Specifc Actor)~~ **(Present But Not Used)**
- ~~https://api.themoviedb.org/3/genre/movie/list (Get Genres)~~ **(Present But Not Used)**
- ~~https://api.themoviedb.org/3/tv/${id} (Get Specific TV Show)~~ **(Present But Not Used)**
- ~~https://api.themoviedb.org/3/movie/${id}/reviews (Get Specific Movie's Reviews)~~ **(Present But Not Used)**

## App
### Registration
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610665125/WAD%202/sc2-register.png)
>This form allows users to register to the app. Registration saves the user data to MongoDB

### Login
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610665126/WAD%202/sc3-login.png)
>This form allows users to login. Login gets user data from MongoDB.

### Home Page (Not Logged In)
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610665124/WAD%202/sc1-homepage_notsignedin.png)
>If the user is not logged in, they are unable to browse thanks to the added private routes. The home page when the user is not logged in will suggest to the user to "Please Sign In".

### Home Page (Logged In)
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610665127/WAD%202/sc4-homepage_loggedin.png)
>If the user is logged in, they will be presented with a home screen, giving them a warm and personal welcome - "Welcome to MovList <name>!"

### Discover Movies
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610665130/WAD%202/sc5-discovermovies.png)
>This page shows twenty movies for the user to discover. These Movies are saved to MongoDB from the TMDB API using the request stated above.

### Discover Series
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610665131/WAD%202/sc6-discoverseries.png)
>This page shows twenty TV Shows for the user to discover. These Series are save to MongoDB from the TMDB API using the request stated above.

### Trending Actors
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610665133/WAD%202/sc7-discoveractors.png)
>This page shows currently Trending Actors. These Actors are save to MongoDB from the TMDB API using the request stated above.

### Account
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610665132/WAD%202/sc8-account.png)
>The account page shows the user's details.

## Data
### Movies Collection
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610665134/WAD%202/sc10-moviesdb.png)
>Movie Data Taken from the TMDB API and save to mongoDB as seen in the image above.

### Series Collection
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610665135/WAD%202/sc11-seriesdb.png)
>Series Data Taken from the TMDB API and save to mongoDB as seen in the image above.

### Actors Collection
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610665133/WAD%202/sc9-actorsdb.png)
>Actors Data Taken from the TMDB API and save to mongoDB as seen in the image above.

## Cards
### Movie 
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610667590/WAD%202/sc13-discovermovies.png)
>Movie Cards show release date, vote_average + total votes, popularity and overview.

### Series
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610667591/WAD%202/sc14-discoverseries.png)
>Series Cards show first air date, vote average + total votes, popularity and overview.

## Actors
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1610667589/WAD%202/sc15-discoveractors.png)
>Actor Cards show their name and popularity.

## Links
- [GitHub](https://github.com/GergSzla/wad2-moviesApp2)
- [YouTube](https://studio.youtube.com/video/SqgKMdk9kHQ/edit)
