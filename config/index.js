import dotenv from 'dotenv';

dotenv.config();

export const {
    APP_PORT,
    HOST,
    USER,
    PASSWORD,
    DBNAME,
    REDIS_URL
} = process.env;