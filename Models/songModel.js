import { supabase } from '../Config/config.js'

export class songModel {
	// Static method to get all records from the songs table
	// This method is called from the index.js file

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

	
}