import React, { useContext, useState } from 'react';
import notesContext from '../context/notes/notesContext';


function Addnote() {
    const context = useContext(notesContext);
    const { addNote } = context;

    return (
        <>
            <div className="container my-3">
                <h2>Add a note</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="password" className="form-control" id="desc" name="desc" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" htmlFor="exampleCheck1">Check me </label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={onClick}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Addnote
