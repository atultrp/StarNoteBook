import React, { useContext } from 'react';
import notesContext from '../context/notes/notesContext';


const NotesItem = (props) => {
    const context = useContext(notesContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <>
            {/* <UpdateNote/> */}
            <div className="col-md-3 mx-3">
                <div className="card my-3">
                    <div className="card-body">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {note.tag}
                        </span>
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="far fa-edit" onClick={() => { updateNote(note) }}></i>
                        <i className="far fa-trash-alt mx-3" onClick={() => {
                            deleteNote(note._id)
                            props.showAlert("Note Deleted Successfully", "success");
                        }} ></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesItem
