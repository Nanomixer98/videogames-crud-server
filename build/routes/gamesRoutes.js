"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControlles_1 = require("../controllers/gamesControlles");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesControlles_1.gamesController.list);
        this.router.get('/:id', gamesControlles_1.gamesController.getOne);
        this.router.post('/', gamesControlles_1.gamesController.create);
        this.router.put('/:id', gamesControlles_1.gamesController.update);
        this.router.delete('/:id', gamesControlles_1.gamesController.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
