import React, {useEffect, useState} from 'react'
import noteService from './Services/notes'
import Note from './Components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  const hook = () => {
    noteService.getAll().then(notes => {setNotes(notes)})
  }

  useEffect(hook, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      body: newNote,
      created: new Date()
    }

    noteService.create(noteObject).then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const remove = (id) => {
    const note = notes.filter(n => n.id === id)
    const noteId = note[0].id
    noteService.remove(noteId)
    setNotes(notes.filter(note => note.id !== noteId))
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} remove={remove} />)}
      </ul>
      <h2>Add new note</h2>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default App