"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const Heroes_1 = __importDefault(require("./models/Heroes"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb+srv://smiller342:Newuser_2021@rest.mtzh7.mongodb.net/heroproject?retryWrites=true&w=majority");
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Database connected successfully");
});
app.post('/addhero', async (req, res) => {
    const name = req.body.name;
    const realName = req.body.realName;
    const gender = req.body.gender;
    const age = req.body.age;
    const description = req.body.description;
    const img = req.body.img;
    const speed = req.body.speed;
    const strength = req.body.strength;
    const hp = req.body.hp;
    const abl = req.body.abl;
    const hero = new Heroes_1.default({ name: name, realName: realName, gender: gender, age: age, description: description, img: img, speed: speed, strength: strength, hp: hp, abl: abl });
    await hero.save();
    res.send(hero);
});
app.get('/read', async (_req, res) => {
    Heroes_1.default.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});
app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await Heroes_1.default.findByIdAndRemove(id).exec();
    res.send("Item deleted.");
});
app.put('/update', async (req, res) => {
    const newRealName = req.body.newRealName;
    const newGender = req.body.newGender;
    const newAge = req.body.newAge;
    const newDescription = req.body.newDescription;
    const newImg = req.body.newImg;
    const id = req.body.id;
    try {
        await Heroes_1.default.findById(id, (_error, heroToUpdate) => {
            heroToUpdate.realName = newRealName;
            heroToUpdate.gender = newGender;
            heroToUpdate.age = Number(newAge);
            heroToUpdate.description = newDescription;
            heroToUpdate.img = newImg;
            heroToUpdate.save();
        });
    }
    catch (err) {
        console.log(err);
    }
    res.send('Updated!');
});
app.put('/updateattributes', async (req, res) => {
    const newSpeed = req.body.newSpeed;
    const newStrength = req.body.newStrength;
    const newHp = req.body.newHp;
    const newAbl = req.body.newAbl;
    const id = req.body.id;
    try {
        await Heroes_1.default.findById(id, (_error, heroToUpdate) => {
            heroToUpdate.speed = Number(newSpeed);
            heroToUpdate.strength = Number(newStrength);
            heroToUpdate.hp = Number(newHp);
            heroToUpdate.abl = newAbl;
            heroToUpdate.save();
        });
    }
    catch (err) {
        console.log(err);
    }
    res.send('Updated!');
});
app.listen(3001, () => {
    console.log("You are connected");
});
//# sourceMappingURL=index.js.map