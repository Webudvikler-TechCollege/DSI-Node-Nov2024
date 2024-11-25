import express from 'express';
import dotenv from 'dotenv';
import { songController } from './Controllers/songController.js';
import { artistController } from './Controllers/artistController.js';
dotenv.config();
const port = process.env.PORT
const app = express();

app.use(express.urlencoded({ extended: true }))

// Route til forside
app.get('/', (req,res) => {
	res.send('Velkommen til mit sang API')
})

app.use(songController)
app.use(artistController)

app.listen(port, () => {
	console.log(`Express kører på adressen http://localhost:${port}`)
})