import NotesContext from './notesContext';
import { useState } from 'react';

const NotesState = (props) => {

    const host = "http://localhost:4000";

    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial)

    // Adding new note
    const addNote = async (title, description, tag) => {

        // API Call
        const url = `${host}/api/notes/addnotes`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5YjNiNDU2MzY4ZjYzZTY5NDU2ODU1In0sImlhdCI6MTYzNzU2MzI3N30.OvHnBKL255UL1d7CRS3CRFm1t0XL5MFYZF-6bv0SlM8'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = response.json();

        // Add Logic
        const note = {
            "_id": "619c710900csdjk3e321f3d92b43",
            "user": "619b3b456j368f63e69456855",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-11-23T04:41:45.852Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    // Get all notes
    const getAllNote = async () => {

        // API Call
        const url = `${host}/api/notes/getnotes`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5YjNiNDU2MzY4ZjYzZTY5NDU2ODU1In0sImlhdCI6MTYzNzU2MzI3N30.OvHnBKL255UL1d7CRS3CRFm1t0XL5MFYZF-6bv0SlM8'
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    // Deleting a note
    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    // Editing a note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const url = `${host}/api/notes/updatenotes/${id}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5YjNiNDU2MzY4ZjYzZTY5NDU2ODU1In0sImlhdCI6MTYzNzU2MzI3N30.OvHnBKL255UL1d7CRS3CRFm1t0XL5MFYZF-6bv0SlM8'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = response.json();

        // Edit Logic
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (<NotesContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getAllNote }}>
        {props.children}
    </NotesContext.Provider>)
}

export default NotesState;