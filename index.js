import express from 'express';
import dotenv from 'dotenv';
import { songController } from './Controllers/songController.js';
dotenv.config();
const port = process.env.PORT
const app = express();

// Route til forside
app.get('/', (req,res) => {
	res.send('Velkommen til mit sang API')
})

app.use(songController)

app.listen(port, () => {
	console.log(`Express kører på adressen http://localhost:${port}`)
})