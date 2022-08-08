import { DataSource } from "typeorm";
import { Client } from "./entities/Clients";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  username: "root",
  password: "",
  port: 3306,
  database: "nevectortypeorm",
  entities: [Client],
  logging: true,
  synchronize: true,
});
