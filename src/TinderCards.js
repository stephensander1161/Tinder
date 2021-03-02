import React, { useState, useEffect} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios';

function TinderCards() {

    const [people, setPeople] = useState([]);

     useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/cards');

            setPeople(req.data);

        }

        fetchData();
        
        
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
       // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                 {people.map((person) => (
                     <TinderCard 
                     className="swipe" 
                     key={person.name}
                     preventSwipe={["up", "down"]}
                     onSwipe={(dir) => swiped(dir, person.name)}
                     onCardLeftScreen={() => outOfFrame(person.name)}
                     >

                         <div 
                         style={{  width: '350px', height: '400px',  objectFit: 'cover', backgroundImage: `url(${person.url})`}}
                         className="card">
                         
                         <h3 className="personName">{person.name}</h3>
                         </div>

                     </TinderCard>
               
            ))}



            </div>  
        </div>
    );
}

export default TinderCards
