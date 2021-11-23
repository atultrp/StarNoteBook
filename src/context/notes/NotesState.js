import NotesContext from './notesContext';

const NotesState = (props)=> {
    const state = {
    "name": "Atul Tripathi",
    "class": "10C"
    }

    return (<NotesContext.Provider value={state}>
        {props.children};
    </NotesContext.Provider>)
}

export default NotesState;