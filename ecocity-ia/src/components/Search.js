import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { ElectricityChart } from './ElectricityChart';
import fetch from 'node-fetch'


export const Search = () => {
    const [nomQuartier, setNomQuartier] = useState('');
    const [quartierData, setQuartierData] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/api/montpellier/${nomQuartier}`)
            .then(res => res.json())
            .then(json => {
                setQuartierData(json);
            })
    }, [nomQuartier])




    return (
        <>
            <label for="searchBar">Entrer le nom du quartier</label>
            <input type="text" id="searchBar" value={nomQuartier} onChange={e => setNomQuartier(e.target.value)}></input>

            <Button>Envoyer</Button>
            {quartierData !== undefined &&  <ElectricityChart nameCity={nomQuartier} dataQuartier={quartierData}></ElectricityChart>}
        </>
    )

}