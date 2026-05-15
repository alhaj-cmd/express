import dotenv from "dotenv";
import path from "path";
// import { Connection } from "pg";
dotenv.config({
    path:path.join(process.cwd(), ".env")
});

const config ={
    Connection_string:process.env.CONNECTIONSTRING as string,
    port: process.env.PORT
};

export default config;