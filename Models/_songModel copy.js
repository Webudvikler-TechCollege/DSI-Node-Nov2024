import { supabase } from '../Config/config.js'

export class songModel {
	// Static method to get all records from the songs table
	// This method is called from the index.js file

	/**
	 * Get all records
	 * @returns array
	 */
    static getAllRecords = async () => {
		try {
			const { data, error } = await supabase
				.from('songs')
				.select('title, artists(name, albums(title))')
			if (error) {
				throw error
			}
			return data
		} catch(error) {
			console.log('error', error)
		}
	}

	/**
	 * Function for get single
	 * @param {number} id 
	 * @returns data object
	 */
	static getRecordById = async id => {
		try {
			const { data, error } = await supabase
				.from('songs')
				.select('*')
				.eq('id', id)
				.single()
			if (error) {
				throw error
			}
			return data
		} catch(error) {
			console.log('error', error)
		}
	}


	/**
	 * Create Record
	 * @param {object} formdata 
	 * @returns data object
	 */
	static createRecord = async formdata => {
		try {
			const { data, error } = await supabase
				.from('songs')
				.insert([
					{
						title: formdata.title,
						content: formdata.content,
						lyrics: formdata.lyrics,
						artist_id: formdata.artist_id
					}
				])
				.select()
				.single()
			if (error) {
				throw error
			}
			return data
		} catch(error) {
			console.log('error', error)
		}
	}

	/**
	 * Update Record
	 * @param {object} formdata 
	 * @returns data object
	 */
	static updateRecord = async formdata => {
		try {
			const { data, error } = await supabase
				.from('songs')
				.update([
					{
						title: formdata.title,
						content: formdata.content,
						lyrics: formdata.lyrics,
						artist_id: formdata.artist_id
					}
				])
				.eq('id', formdata.id)
				.select()
				.single()
			if (error) {
				throw error
			}
			return data
		} catch(error) {
			console.error('error', error)
		}
	}

	/**
	 * Delete Record
	 * @param {object} formdata 
	 * @returns 
	 */
	static deleteRecord = async formdata => {
		try {
			const { data, error } = await supabase
				.from('songs')
				.delete()
				.eq('id', formdata.id)

			if(error) {
				throw error;				
			} else {
				return { message: 'Deleted file ok' }
			}

		} catch (error) {
			console.error(error)
		}
	}

}