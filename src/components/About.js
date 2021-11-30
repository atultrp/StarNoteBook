// import React, {useContext} from 'react';
// import notesContext from '../context/notes/notesContext';


import React from 'react'
// import { useState } from 'react'

const About = (props) => {
    return (
        <>
            <div className="container">
                <h1 className="mt-3 bd-title text-center">About Us</h1>
                <p className="lead text-center mb-3">
                    Learn more about the <strong>Star Notebook</strong>, who created this, what's its features are and what techs are included.
                </p>
                <div>
                    <h2 className="my-3">Introduction</h2>
                    <p className="lead ">
                        Basically, <strong>Star Notebook</strong> is the best word processing app for all your works, from taking down quick notes to writing your books, eBooks, organizing your documents and daily tasks. This is the Notebook you'll never lose because it syncs to the cloud and across your devices. It's always backed-up and always up to date.
                    </p>
                    <p className="lead">
                        We don't sell your info. We don't do ads. Our business model ensures our ability to act in your best interest while storing and securing your data. No one have access to read, update and delete. Only logged in person can perform CRUD (means create, read, update, delete) only on their notes.
                    </p>
                    <p className="lead">
                        The most beautiful note taking app across devices. If you are new in this app then please register your id and enjoy writing notes. And if are the existing user, welcome back!
                    </p>
                </div>
                <div>
                    <h2 className="my-3">Tech Included</h2>
                    <p className="lead ">
                        <ul className="row g-3">
                            <div className="col">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </div>

                            <div className="col">
                                <li>Bootstrap</li>
                                <li>React</li>
                                <li>React Router</li>
                            </div>

                            <div className="col">
                                <li>Context API</li>
                                <li>NodeJs</li>
                                <li>Mongodb</li>
                            </div>
                        </ul>
                    </p>
                </div>
                <div>
                    <h2 className="my-3">Creator</h2>
                    <p className="lead">
                        Hey there, I'm <strong>Atul Tripathi</strong> from India.
                        My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
                        <br />
                        I am also an <strong>open-source</strong> enthusiast and maintainer. I learned a lot from the open-source community and I love how <strong>collaboration and knowledge sharing</strong> happened through open-source.
                    </p>
                </div>
                <br />
                <div>
                    <h2 className="my-3">Some Lines from Creator</h2>
                    <ul>
                        <li>
                            <figure>
                                <blockquote className="blockquote">
                                    <p className="lead">
                                        A person can ruin or succeed you, but it all depends on you what you wants to be. So always choose your best, because that's your life and you have to be perfect for yourself.
                                    </p>
                                </blockquote>
                                <figcaption className="blockquote-footer text-end">
                                    Atul Tripathi
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <blockquote className="blockquote">
                                    <p className="lead">
                                        If you find a person who actually cares you, don't leave him/her because he/she is the one who really wants to give you the real happiness.
                                    </p>
                                </blockquote>
                                <figcaption className="blockquote-footer text-end">
                                    Atul Tripathi
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <blockquote className="blockquote">
                                    <p className="lead">
                                        Always remember that, the right time never comes because right time in present to do something for yourself is now. So, use it and do your best to achieve your goals.
                                    </p>
                                </blockquote>
                                <figcaption className="blockquote-footer text-end">
                                    Atul Tripathi
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="my-3">Last but not Least!</h2>
                    <p className="lead">
                        How to reach me - If you are still reading then you should visit my accounts (in footer section) and say hello to me.
                        <p className="lead mt-3">
                            Created by using coding skills with love 💙️ by - <a href="https://github.com/atultrp">
                                <button type="button" class="btn btn-dark">Atul Tripathi</button>
                            </a>
                        </p>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About