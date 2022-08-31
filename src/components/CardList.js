import React from "react";
import Card from "./Card";
import { robots } from "./robots";

const CardList = ({robots}) => {
    return (
        <div>
            {
             robots.map((user, i) => {
                return (<Card 
                            key={i} 
                            id={user.id} 
                            name={user.name} 
                            email={user.email}
                        ></Card>
                
                );
            })
        }
        </div>
    )
}

export default CardList;