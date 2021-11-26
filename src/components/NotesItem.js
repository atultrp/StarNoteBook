function NotesItem(props) {
    
    return (
        <div class="card col-md-3 mx-3">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <i class="far fa-edit"></i>
                <i class="far fa-trash-alt mx-3"></i>
            </div>
        </div>
    )
}

export default NotesItem
