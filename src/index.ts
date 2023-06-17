import http from 'http';
import { getKoa } from './server';
import * as process from 'process';
import * as dotEnv from 'dotenv';

const port = 4400;

const createServer = async ()=>{
	const app = await getKoa();
	dotEnv.config();
	return http.createServer(app.callback()).listen(process.env.PORT);
}

createServer().then(()=>{
	console.log(`😎server is running hard : ${port}😎`);
}).catch(e=>{
		console.error(e);
	})
