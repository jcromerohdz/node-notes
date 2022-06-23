import chalk from 'chalk'
import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
import { getNotes, addNote } from './notes.js'


const argv = yargs(process.argv.slice(2)) 
	.command({
		command: 'add',
		desc: 'Create a Note',
		builder:{
			title: {
				desc: 'Note Title',
				demandOption: true,
				type: 'string'
			},
			body: {
				desc: 'Note Body',
				demandOption: true,
				type: 'string'
			}
		},
		handler: (argv) => {
			addNote(argv.title, argv.body)
		}
	})
	.command('remove', 'Delete a Note', () => {}, (argv) => {
    console.log('Deleting a Note')
  })
	.command('list', 'List Of Notes', () => {}, (argv) => {
    console.log('List of notes')
  })
	.command('read', 'Read a Note', () => {}, (argv) => {
    console.log('Reading a Note')
  })
	.version('1.0.0')
  .argv
