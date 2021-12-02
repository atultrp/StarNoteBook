import NotesContext from './notesContext';
import { useState } from 'react';

const NotesState = (props) => {

    const host = "http://localhost:4000";

    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial)

    // Adding new note
    const addNote = async (title, description, tag) => {

        // API Call

        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });

        // Add Logic
        const note = await response.json();
        setNotes(notes.concat(note));
    }

    // Get all notes
    const getAllNote = async () => {

        // API Call
        const response = await fetch(`${host}/api/notes/getnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json);
    }

    // Deleting a note
    const deleteNote = async (id) => {
        // API Call

        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = response.json();
        console.log(json);

        // Delete Logic
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    // Editing a note
    const editNote = async (id, title, description, tag) => {
        // API Call

        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
        console.log(json);

        // Edit Logic

        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (<NotesContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getAllNote }}>
        {props.children}
    </NotesContext.Provider>)
}

export default NotesState;