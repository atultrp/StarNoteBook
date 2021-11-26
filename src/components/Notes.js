import React, { useContext } from 'react';
import NotesItem from './NotesItem';
import notesContext from '../context/notes/notesContext';
import AddNote from './AddNote';


function Notes() {
    const context = useContext(notesContext);
    const { notes, setNotes } = context;
    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your notes</h2>
                {
                    notes.map((note) => {
                        return <NotesItem key={note._id} title={note.title} description={note.description} />
                    })
                }
            </div>
        </>
    )
}

export default Notes
