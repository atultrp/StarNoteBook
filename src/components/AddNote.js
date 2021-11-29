import React, { useContext, useState } from 'react';
import notesContext from '../context/notes/notesContext';

const Addnote = (props)=> {
    const context = useContext(notesContext);
    const { addNote } = context;

    const [note, setNote] = useState({title:"",description:"",tag:""});

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"",description:"",tag:""});
        props.showAlert("Note Added Successfully","success");
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]:e.target.value});
    }

    return (
        <>
            <div className="container my-3">
                <h2>Add a note</h2>
                <form className="my-3 row g-3">
                    <div className="mb-3 col-md-8">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" minLength={5} required onChange={onChange} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                    </div>
                    <div className="mb-3 col-12">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea type="text" className="form-control" id="description" name="description" rows="3" value={note.description} minLength={5} required onChange={onChange} />
                    </div>
                    <div className="col-md-2">
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Addnote
