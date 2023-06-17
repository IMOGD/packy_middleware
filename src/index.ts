import http from 'http';
import { getKoa } from './server';

const port = 4400;

const createServer = async ()=>{
	const app = await getKoa();

	return http.createServer(app.callback()).listen(process.env.PORT);
}

createServer().then(()=>{
	console.log(`😎server is running hard : ${port}😎`);
})
	.catch(e=>{
		console.error(e);
	})
