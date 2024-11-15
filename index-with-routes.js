import express from 'express';
import dotenv from 'dotenv';
import { supabase } from './Config/config.js';
import { Student } from './Classes/studentModel.js';
import { songModel } from './Models/songModel.js';
dotenv.config();

const port = process.env.PORT

const app = express();

app.get('/', (req,res) => {
	const student = new Student('Heinz', 'Hansen', 'Mand', 25)
	student.present()
	student.getAge()

	const student1 = new Student('Maria', 'Jensen', 'Kvinde', 30)
	student1.present()
	student1.getAge()

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



app.get('/songs', async (req,res) => {
	const data = await songModel.getAllRecords()
	console.log(data)
})



app.get('/about', (req,res) => {
	res.send('Om os')
})

app.listen(port, () => {
	console.log(`Express kører på adressen http://localhost:${port}`)
})