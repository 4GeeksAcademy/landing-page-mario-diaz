import React from "react";

const Jumbotron = () => {
    return (
        <div>
            <div className="jumbotron-hero m-4 bg-transparent text-white">
                <div className="jumbotron-content container-fluid text-center">
                    <h1 className="display-5 fw-bold">The Ultimate Planetary Escape</h1>
                    <p className="mx-auto col-md-8 fs-4">Embark on an extraordinary journey to the cosmos and explore the unique wonders of our inhabited neighboring worlds.
                        From the floating resorts of Saturn to the icy peaks of Pluto, your next unforgettable adventure awaits across the stars.</p>
                    <button className="btn btn-primary btn-lg mt-3" type="button">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;