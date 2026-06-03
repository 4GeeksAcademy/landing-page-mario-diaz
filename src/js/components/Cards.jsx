import React from "react"

const Cards = () => {
    return (
        <div className="d-flex justify-content-around m-4">

            <div className="card" style={{width: "18rem"}}>
                <img src="https://spaceplace.nasa.gov/all-about-jupiter/sp/jupiter_auroras.sp.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Jupiter</h5>
                        <p className="card-text">With a volume large enough to hold over 1,300 Earths, Jupiter is so massive that it contains more than twice the matter of all the other planets in the solar system combined.</p>
                        <a href="#" className="btn btn-primary">Book Flight</a>
                    </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="https://static01.nyt.com/newsgraphics/2017/09/14/cassini-saturn-images/assets/images/storm-PIA12826-640.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Saturn</h5>
                        <p className="card-text">Although it is the second-largest planet in our solar system, Saturn is so light and has such a low density that it could actually float if you placed it in a giant bathtub.</p>
                        <a href="#" className="btn btn-primary">Book Flight</a>
                    </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="https://static01.nyt.com/images/2023/04/04/multimedia/23sci-uranus-01-vftp/23sci-uranus-01-vftp-mediumSquareAt3X.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Uranus</h5>
                        <p className="card-text">Uranus is the only planet in our solar system that rotates completely on its side, making it look like a rolling ball as it orbits the Sun.</p>
                        <a href="#" className="btn btn-primary">Book Flight</a>
                    </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:510,cw:1312,ch:1312,q:80,w:1312/PezBzd9Fehsq9XWgWMauVV.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Neptune</h5>
                        <p className="card-text">Neptune is the farthest planet from the Sun in our solar system, and it is the fourth-largest planet by diameter.</p>
                        <a href="#" className="btn btn-primary">Book Flight</a>
                    </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="https://spaceplace.nasa.gov/all-about-pluto/sp/pluto_new_horizons.sp.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Pluto</h5>
                        <p className="card-text">Pluto is smaller than Earth's moon, and it takes 248 Earth years to complete just one single orbit around the Sun.</p>
                        <p className="card-text">Still a planet in our hearts.</p>
                        <a href="#" className="btn btn-primary">Book Flight</a>
                    </div>
            </div>

        </div>
    )
}

export default Cards