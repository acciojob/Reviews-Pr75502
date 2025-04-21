import React, { useState } from "react";
import persons from "../data/data";


function Review() {
    const [id, setId] = useState(1)
    function handlePrev() {
        if (id > 1) {
            setId(id-1)
        }
    }
    function handleNext() {
        if (id < persons.length) {
            setId(id+1)
        }
    }
    function handleRandom() {
        let randomId = Math.floor(Math.random() * persons.length) + 1
        setId(randomId)
    }


    const currentPerson = persons.find(person => person.id === id)
    return (
        <div>
           

            <div key={currentPerson.id} className="review">
                <h4 className="author">{currentPerson.name}</h4>
                <p className="job">{currentPerson.job}</p>
                <p className="info">{currentPerson.text}</p>
                <img className="person-img" src={currentPerson.image} />

                </div>
        
            <button className="prev-btn"
            onClick={handlePrev}
            >Previous</button>
            <button className="next-btn"
            onClick={handleNext}
            >Next</button>
            <button className="random-btn"
            onClick={handleRandom}
            >surprise me</button>

        </div>
    )
}
export default Review