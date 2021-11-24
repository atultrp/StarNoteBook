import NotesContext, {useState} from './notesContext';

const NotesState = (props)=> {

    return (<NotesContext.Provider value={{}}>
        {props.children}
    </NotesContext.Provider>)
}

export default NotesState;