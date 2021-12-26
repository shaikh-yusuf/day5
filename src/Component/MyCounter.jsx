import React, {useState} from "react";
import {Button} from "react-bootstrap"

export const MyCounter = () => {
    const [ counter, setCounter]= useState(0);
    return( 
    <div>
    <Button disabled={!(counter<10)} onClick={()=> counter<10 && setCounter(counter +1)}>+</Button>
     <h1>{counter}</h1>
     <Button disabled={!(counter>0)} onClick={()=> counter>0 && setCounter(counter - 1)}>-</Button>
     </div>
     );
};
