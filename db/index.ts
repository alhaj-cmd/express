import { Pool } from "pg";
import config from "../src/config";

export const pool = new Pool({
  connectionString: config.Connection_string
})

export const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      email VARCHAR(50) UNIQUE NOT NULL,
      password VARCHAR(50) NOT NULL,
      is_active BOOLEAN DEFAULT true, 
      age INT,

      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
      
      )
      `)

    console.log("Database conneted sucessfully")
  }
  catch (error) {
    console.log(error);
  }
};