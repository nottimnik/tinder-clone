import React, { useState } from 'react';
import './TinderCarts.css';
import TinderCard from 'react-tinder-card';

function TinderCarts() {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fam12.akamaized.net%2Fmed%2Fcnt%2Fuploads%2F2018%2F09%2Fskynews-elon-musk-weed_4414031.jpg&f=1&nofb=1'
        },
        {
            name: 'Lil Peep',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flab.fm%2Fwp-content%2Fuploads%2F2018%2F09%2Flil-peep-moscow-russia-2017-credit-hurricanehank-shutterstock%40800x600-696x522.jpg&f=1&nofb=1'
        },
        {
            name: 'Kurt Cobain',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdirestraitsblog.com%2Fwp-content%2Fuploads%2F2017%2F02%2Fkurt_cobain_by_moni_kaa5-d614he8.jpg&f=1&nofb=1'
        },
        {
            name: 'Tai Lopez',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.uObsl_e4QWimCIOxjYaPIgHaHa%26pid%3DApi&f=1'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }

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
                            style={{ backgroundImage: `url(${person.img})` }}
                            className="card"
                        >
                            <h2>{person.name}</h2>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCarts
