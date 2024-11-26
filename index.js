import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { songController } from './Controllers/songController.js';
import { artistController } from './Controllers/artistController.js';
dotenv.config();
const port = process.env.PORT
const app = express();
app.use(express.urlencoded({ extended: true }))

app.use(cors())
// App Settings som sikrer CORS adgang via browser
app.use((req, res, next) => {
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Credentials', true);
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

// Route til forside
app.get('/', (req,res) => {
	res.send('Velkommen til mit sang API')
})

app.use(songController)
app.use(artistController)

app.listen(port, () => {
	console.log(`Express kører på adressen http://localhost:${port}`)
})