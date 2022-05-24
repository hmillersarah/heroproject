"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const HeroSchema = new mongoose_1.default.Schema({
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
const HeroModel = mongoose_1.default.model('heroes', HeroSchema);
module.exports = HeroModel;
module.exports = HeroModel;
//# sourceMappingURL=Heroes.js.map