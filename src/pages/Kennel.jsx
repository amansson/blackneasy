import React, { useState, useEffect } from 'react';
import Meetup from '../components/Meetup';

const Kennel = () => {
    const [showKennel1, setKennel1] = useState(true);
    const [showKennel2, setKennel2] = useState(true);
    const [showKennel3, setKennel3] = useState(true);

    useEffect(() => {
        
      });

    const toggleKennel1 = () => {
        setKennel2(false);
        setKennel3(false);
    }
    
    const toggleKennel2 = () => {
        setKennel1(false);
        setKennel3(false);
    }
    
    const toggleKennel3 = () => {
        setKennel1(false);
        setKennel2(false);
    }

    const toggleAll = () => {        
        setKennel1(true);
        setKennel2(true);
        setKennel3(true);
    }

    console.log(showKennel1);
    console.log(showKennel2);
    console.log(showKennel3);
    
    return (
        <div className="wrapper cards-kennel">
            { showKennel1 ? 
                <div onClick={toggleKennel1} >
                    <Meetup meetup={"kennel2"} image={"https://res.cloudinary.com/blackneasy/image/upload/v1595575455/kennel/1/184_xvaqe8.jpg"} caption={"Kennel Träff 1"} toggleAll={toggleAll}/>
                </div>
            : ""}
            { showKennel2 ? 
                <div onClick={toggleKennel2} >
                    <Meetup meetup={"kennel2"} image={"https://res.cloudinary.com/blackneasy/image/upload/v1595575455/kennel/1/184_xvaqe8.jpg"} caption={"Kennel Träff 2"} toggleAll={toggleAll}/>
                </div>
            : ""}
            { showKennel3 ? 
                <div onClick={toggleKennel3} >
                    <Meetup meetup={"kennel2"} image={"https://res.cloudinary.com/blackneasy/image/upload/v1595575455/kennel/1/184_xvaqe8.jpg"} caption={"Kennel Träff 3"} toggleAll={toggleAll}/>
                </div>
            : ""}
        </div>
    )
}

export default Kennel;
