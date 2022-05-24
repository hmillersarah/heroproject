//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const HeroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    realName: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    speed: {
        type: Number,
        required: false
    },
    strength: {
        type: Number,
        required: false
    },
    hp: {
        type: Number,
        required: false
    },
    abl: {
        type: String,
        required: false
    },
});

const HeroModel = mongoose.model('heroes', HeroSchema);

module.exports = HeroModel;

export = HeroModel;