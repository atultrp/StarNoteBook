import React, { useContext, useEffect } from 'react';
import NotesItem from './NotesItem';
import notesContext from '../context/notes/notesContext';
import AddNote from './AddNote';


const Notes = () => {
    const context = useContext(notesContext);
    const { notes, getAllNote } = context;

    useEffect(() => {
        getAllNote();
        // eslint-disable-next-line
    }, [])

    const updateNote = (note)=>{

    }

    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your notes</h2>
                {notes.map((note) => {
                    return <NotesItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
