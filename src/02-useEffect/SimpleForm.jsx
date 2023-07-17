import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Piero',
        email: 'piero@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(() => {
      //console.log("useEffect called");
    }, [])

    useEffect(() => {
      //console.log("form state changed");
    }, [formState])

    useEffect(() => {
     //console.log("email changed");
    }, [email])
    


    return (
        <>
            <h1> Fomulario Simple </h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username" 
                value={ username }
                onChange={ onInputChange }
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="piero@google.com"
                name="email"
                value={ email } 
                onChange={ onInputChange }
            />

            {
                (username === 'Piero2') && <Message />
            }
        </>
    )
}
