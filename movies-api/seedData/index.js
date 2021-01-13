import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import actorModel from '../api/actors/actorModel';
// import {movies} from './movies.js';
// import {actors} from './actors.js';
import {getMovies,getActors,getSeries} from '../api/tmdb-api'
import seriesModel from '../api/series/seriesModel';

var movies
getMovies().then((m) => {
   movies = m
})

var actors
getActors().then((a) => {
  actors = a
})

var series
getSeries().then((s) => {
  series = s
})


const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
  {
    'username': 'user3',
    'password': 'test3',
  }
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

  // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  try {
    await movieModel.deleteMany();
    await movies.forEach(m => movieModel.create(m));
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

 // deletes all actors documents in collection and inserts test data
 export async function loadActors() {
  console.log('load actor data');
  try {
    await actorModel.deleteMany();
    await actors.forEach(a => actorModel.create(a));
    console.info(`${actors.length} Actors were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Actors Data: ${err}`);
  }
}

// deletes all series documents in collection and inserts test data
export async function loadSeries() {
  console.log('load series data');
  try {
    await seriesModel.deleteMany();
    await series.forEach(s => seriesModel.create(s));
    console.info(`${series.length} Series were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Actors Data: ${err}`);
  }
}