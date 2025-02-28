import dotenv from 'dotenv';

dotenv.config();

// Safer to .env file with API_KEY=<your-api-key>
const apiKey = process.env.API_KEY || '<your-api-key>';

console.log("Hello, world!");