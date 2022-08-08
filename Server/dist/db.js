"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Clients_1 = require("./entities/Clients");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "127.0.0.1",
    username: "root",
    password: "",
    port: 3306,
    database: "nevectortypeorm",
    entities: [Clients_1.Client],
    logging: true,
    synchronize: true,
});
