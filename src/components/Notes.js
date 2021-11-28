import React, { useContext, useEffect, useRef, useState } from 'react';
import NotesItem from './NotesItem';
import notesContext from '../context/notes/notesContext';
import AddNote from './AddNote';
// import UpdateNote from './UpdateNote';


const Notes = () => {
    const context = useContext(notesContext);
    const { notes, getAllNote, editNote } = context;

    // Fetching all notes

    useEffect(() => {
        getAllNote();
        // eslint-disable-next-line
    }, [])

    // For Update

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", tag: "" });

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <>
            <AddNote />
            <div>
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="my-3 row g-3">
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="etitle" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} minLength={5} required onChange={onChange} />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="etag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                    </div>
                                    <div className="mb-3 col-12">
                                        <label htmlFor="edescription" className="form-label">Description</label>
                                        <textarea type="text" className="form-control" id="edescription" name="edescription" rows="3" value={note.edescription} minLength={5} required onChange={onChange} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your notes</h2>
                <div className="container mx-2">
                    {notes.length === 0 && 'No notes to display.'}
                </div>
                {notes.map((note) => {
                    return <NotesItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
