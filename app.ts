import dotenv from 'dotenv';
import Server from './models/server';


//Confgurar dot.env
dotenv.config();

const server = new Server();


server.listen();