import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: ".env" });
}

export const {
  EXPRESS_PORT = "3000",
  NODE_ENV = "development",
  ORIGIN_DOMAIN = "localhost",
} = process.env;

export const SERVER_PORT = Number(EXPRESS_PORT);
