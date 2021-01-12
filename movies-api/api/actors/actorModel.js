import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ActorSchema = new Schema({
    birthday: { type: String },
    known_for_dept: {type:String},
    deathday: {type:String},
    id: { type: Number, required: true, unique: true},
    name: {type: String},
    aka: [{type: String}],
    biography: {type:String},
    popularity: {type: Number},
    place_of_birth: {type: String},
    profile_path: {type: String},
    adult: {type: Boolean},
    imdb_id: {type: String},
    homepage: {type: Boolean}
});

ActorSchema.statics.findActorByID = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Actors', ActorSchema);


