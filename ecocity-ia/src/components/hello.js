import React, { useEffect, useState } from 'react';


export const Hello = () => {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/').then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(jsonResponse => {
            setInitialState(jsonResponse.hello);
        })
    }, [])

    console.log(initialState);
    return (<div>
        {initialState.length > 0 && initialState.map((e, key) => <li key={key}>{e}</li>)}
    </div>
    )
}