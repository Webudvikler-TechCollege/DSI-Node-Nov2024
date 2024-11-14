import { supabase } from '../Config/config.js'

export class songModel {
    static getAllRecords = async () => {
		try {
			const { data, error } = await supabase.from('songs').select('title')
			if (error) {
				throw error
			}
			return data
		} catch(error) {
			console.log('error', error)
		}
	}
}