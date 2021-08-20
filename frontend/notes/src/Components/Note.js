import React from 'react'

const Note = ({note, remove}) => {
    return (
        <div>
            <li>{note.body} <button onClick={()=>remove(note.id)}>delete</button></li>
        </div>
    )
}

export default Note