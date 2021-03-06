import fs from 'fs'

const getNotes = () => {
	return "Your notes..."
}

const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNotes = notes.filter((note) => { return note.title === title })


	if(duplicateNotes.length === 0){
		notes.push({
			title,
			body
		})
		saveNotes(notes)
		console.log("New note add")
	}else{
		console.log('Note title taken!')
	}

}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (error) {
		return [] 
	}
}

export {
	getNotes,
	addNote
}