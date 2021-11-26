import NotesContext from './notesContext';
import { useState } from 'react';

const NotesState = (props) => {

    const notesInitial = [
        {
            "_id": "619c6eac22cfae2b088acde1",
            "user": "619b3b456368f63e69456855",
            "title": "Hey Life!",
            "description": "This is the beginning of my wonderful life and what about you?",
            "tag": "goodlife",
            "date": "2021-11-23T04:31:40.524Z",
            "__v": 0
        },
        {
            "_id": "619c6e38ac22cfae2b088acde1",
            "user": "619b3b456368f63e69456855",
            "title": "Hey Life!",
            "description": "This is the beginning of my wonderful life and what about you?",
            "tag": "goodlife",
            "date": "2021-11-23T04:31:40.524Z",
            "__v": 0
        },
        {
            "_id": "619c6eac22cfae2b08838acde1",
            "user": "619b3b456368f63e69456855",
            "title": "Hey Life!",
            "description": "This is the beginning of my wonderful life and what about you?",
            "tag": "goodlife",
            "date": "2021-11-23T04:31:40.524Z",
            "__v": 0
        },
        {
            "_id": "619c386eac22cfae2b088acde1",
            "user": "619b3b456368f63e69456855",
            "title": "Hey Life!",
            "description": "This is the beginning of my wonderful life and what about you?",
            "tag": "goodlife",
            "date": "2021-11-23T04:31:40.524Z",
            "__v": 0
        },
        {
            "_id": "619c6eac2382cfae2b088acde1",
            "user": "619b3b456368f63e69456855",
            "title": "Hey Life!",
            "description": "This is the beginning of my wonderful life and what about you?",
            "tag": "goodlife",
            "date": "2021-11-23T04:31:40.524Z",
            "__v": 0
        },
        {
            "_id": "619c710900c3e321f3d92b43",
            "user": "619b3b456368f63e69456855",
            "title": "Day-2",
            "description": "This is the beginning of my wonderful life and what about you?",
            "tag": "goodlife",
            "date": "2021-11-23T04:41:45.852Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    // Adding new note
    const addNote = () => {

    }

    // Deleting a note
    const deleteNote = () => {

    }

    // Editing a note
    const editNote = () => {

    }

    return (<NotesContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
        {props.children}
    </NotesContext.Provider>)
}

export default NotesState;