import { supabase } from '../Config/config.js'

export class songModel {
	/**
	 * Get All Records
	 * @returns array
	 */
	static getAllRecords = async () => {
		try {
			const { data, error } = await supabase.from('songs').select('title')
			
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
			const { data, error } = await supabase.from('songs').select('title').eq('id', id).single()
			
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
			.from('songs')
			.insert([{
				title: formdata.title,
				content: formdata.content,
				lyrics: formdata.lyrics,
				artist_id: formdata.artist_id
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
				.from('songs')
				.update([{
					title: formdata.title,
					content: formdata.content,
					lyrics: formdata.lyrics,
					artist_id: formdata.artist_id	
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
				.from('songs')
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

