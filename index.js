import express from 'express';
import dotenv from 'dotenv';
import { supabase } from './Config/config.js';
dotenv.config();

const port = process.env.PORT

const app = express();

app.get('/', (req,res) => {
	res.send('Hej verden')
})

app.get('/test', async (req,res) => {	

	try {
		const { data, error } = await supabase.from('questions').select('*')
		if(error) {
			throw error
		}
		console.log(data);
		
	} catch (error) {
		console.log(error)
	}
})

app.get('/about', (req,res) => {
	res.send('Om os')
})

app.listen(port, () => {
	console.log(`Express kører på adressen http://localhost:${port}`)
})