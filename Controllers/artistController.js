import express from 'express'
import { artistModel } from '../Models/artistModel.js'
export const artistController = express.Router()

artistController.get('/artists', async (req,res) => {
	const data = await artistModel.getAllRecords()
	res.status(200).send(data)
})

artistController.get('/artists/:id([0-9]*)', async (req,res) => {
	const data = await artistModel.getRecordById(req.params.id)
	res.status(200).send(data)
})

artistController.post('/artists', async (req, res) => {
	const data = await artistModel.createRecord(req.body)
	res.status(201).send(data)
})

artistController.put('/artists', async (req, res) => {
	console.log(req.body);
	
	const data = await artistModel.updateRecord(req.body)
	res.status(200).send({ message: 'Record updated' })
})

artistController.delete('/artists', async (req, res) => {	
	//console.log(req.body);
	const data = await artistModel.deleteRecord(req.body)
	res.status(200).send({ message: 'Record deleted' })
})