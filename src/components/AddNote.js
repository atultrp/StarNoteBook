import React, { useContext, useState } from 'react';
import notesContext from '../context/notes/notesContext';

const Addnote = ()=> {
    const context = useContext(notesContext);
    const { addNote } = context;

    const [note, setNote] = useState({title:"",description:"",tag:"default"});

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]:e.target.value});
    }

    return (
        <>
            <div className="container my-3">
                <h2>Add a note</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" htmlFor="exampleCheck1">Check me </label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Addnote
