import React from 'react'
import Notes from './Notes'
import Background1 from './Assets/Background1.svg'
import Background2 from './Assets/Background2.svg'
import Background3 from './Assets/Background3.svg'
import Background4 from './Assets/Background4.svg'
// import Background5 from './Assets/Background5.svg'
// import Background6 from './Assets/Background6.svg'
// import Background7 from './Assets/Background7.svg'
// import Background8 from './Assets/Background8.svg'

const Home = (props) => {
    const { showAlert } = props;
    return (
        <>
            {
                localStorage.getItem('token') ? <Notes showAlert={showAlert} /> : 
                <div className="container">
                    <h1 className="my-4 text-center">Welcome to Star Notebook</h1>
                    <p className="mx-5 text-center lead">Notebooks is the best word processing app for all your works, from taking down quick notes to writing your books, eBooks, organizing your documents and daily tasks.</p>
                    <div className="my-5 row g-3">
                        <div class="card my-4 col-md-3 mx-auto " style={{width: "18rem"}}>
                            <img src={Background4} class="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Register/Login</h5>
                            <p className="card-text lead"><small> The most beautiful note taking app across devices. If you are new in this app then please register your id and enjoy writing notes. And if are the existing user, welcome back!</small></p>
                            </div>
                        </div>
                        <div class="card my-4 col-md-3 mx-auto " style={{width: "18rem"}}>
                            <img src={Background3} class="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Your Notes</h5>
                            <p className="card-text lead"><small> This is the Notebook you'll never lose because it syncs to the cloud and across your devices. It's always backed-up and always up to date.</small></p>
                            </div>
                        </div>
                        <div class="card my-4 col-md-3 mx-auto " style={{width: "18rem"}}>
                            <img src={Background1} class="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Security</h5>
                            <p className="card-text lead"><small> We don't sell your info. We don't do ads. Our business model ensures our ability to act in your best interest while storing and securing your data.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Home
