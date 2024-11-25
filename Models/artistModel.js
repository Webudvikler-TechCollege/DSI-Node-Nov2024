import { supabase } from '../Config/config.js'

export class artistModel {
	/**
	 * Get All Records
	 * @returns array
	 */
	static getAllRecords = async () => {
		try {
			const { data, error } = await supabase.from('artists')
				.select('name')
			
			if(error) {
				throw new error
			}
			return data
				
		} catch (error) {
			console.error(error)			
		}
	}

	/**
	 * Get single song by id
	 * @param {uuid} id 
	 * @returns 
	 */
	static getRecordById = async id => {
		try {
			const { data, error } = await supabase
				.from('artists')
				.select('name')
				.eq('id', id).single()
			
			if(error) {
				throw new error
			}
			return data
				
		} catch (error) {
			console.error(error)			
		}

	}

	/**
	 * Create Song
	 * @param {object} formdata 
	 * @returns object with new song
	 */
	static createRecord = async formdata => {
		try {
			const { data, error } = await supabase
			.from('artists')
			.insert([{
				name: formdata.name,
				description: formdata.description,
				image: formdata.image
			}])
 
			if(error) {
				throw error
			}
			return data

			
		} catch (error) {
			console.error(error)			

		}	
	}

	static updateRecord = async formdata => {

		try {
			const { data, error } = await supabase
				.from('artists')
				.update([{
					name: formdata.name,
					description: formdata.description,
					image: formdata.image
				}])
				.eq('id', formdata.id)
				.select()
				.single()

			if(error) {
				throw error
			}
			
			return data

		} catch (error) {
			console.error('error',error)						
		}
	}

	static deleteRecord = async formdata => {
		try {
			const { data, error } = await supabase
				.from('artists')
				.delete()
				.eq('id', formdata.id)

			if(error) {
				throw error
			}
			
			return data
				
		} catch (error) {			
			console.error('error',error)						
		}
	}

}

