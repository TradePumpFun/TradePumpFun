import dotenv from 'dotenv';
import { PumpApiClient } from 'tradepumpfun';

dotenv.config();

// Safer to .env file with API_KEY=<your-api-key>
const apiKey = process.env.API_KEY || '<your-api-key>';


const client = new PumpApiClient({
    apiKey,
});

client.ping().then(ping => {
    console.log(ping);
}).catch(error => {
    console.error('Error pinging API:', error);
});