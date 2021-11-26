import React, { useContext } from 'react';
import notesContext from '../context/notes/notesContext';


const NotesItem = (props) => {
    const context = useContext(notesContext);
    const { deleteNote } = context;
    const { note } = props;

    return (
        <div className="col-md-3 mx-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt mx-3" onClick={() => { deleteNote(note._id) }} ></i>
                </div>
            </div>
        </div>
    )
}

export default NotesItem
