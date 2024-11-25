import express from 'express'
import { songModel } from '../Models/songModel.js'
export const songController = express.Router()

songController.get('/songs', async (req,res) => {
	const data = await songModel.getAllRecords()
	res.status(200).send(data)
})

songController.get('/songs/:id([0-9]*)', async (req,res) => {
	const data = await songModel.getRecordById(req.params.id)
	res.status(200).send(data)
})

songController.post('/songs', async (req, res) => {
	const data = await songModel.createRecord(req.body)
	res.status(201).send(data)
})

songController.put('/songs', async (req, res) => {
	console.log(req.body);
	
	const data = await songModel.updateRecord(req.body)
	res.status(200).send({ message: 'Record updated' })
})

songController.delete('/songs', async (req, res) => {	
	//console.log(req.body);
	const data = await songModel.deleteRecord(req.body)
	res.status(200).send({ message: 'Record deleted' })
})