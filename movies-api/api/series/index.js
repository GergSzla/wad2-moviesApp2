import express from 'express';
import {getReqSeriesReviews} from '../tmdb-api';
import seriesModel from "./seriesModel"

const router = express.Router();

router.get('/', ( req, res, next) => {
    seriesModel.find().then(series => res.status(200).send(series).catch(next));
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  seriesModel.findBySeriesID(id).then(tv => res.status(200).send(tv).catch(next));
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getReqSeriesReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

export default router;
