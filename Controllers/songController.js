import express from 'express'
import { songModel } from '../Models/songModel.js'
export const songController = express.Router()

songController.get('/songs', async (req,res) => {
	const data = await songModel.getAllRecords()
	// View - JSON Data
	res.status(200).send(data)
})