import express from 'express';
import actorModel from "./actorModel"

const router = express.Router();

router.get('/', (req, res, next) => {
    actorModel.find().then(actors => res.status(200).send(actors).catch(next));
});

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    actorModel.findActorByID(id).then(actors => res.status(200).send(actors).catch(next));
});

export default router;


