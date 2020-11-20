import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import * as tf from '@tensorflow/tfjs';
export const ElectricityChart = ({nameCity, dataQuartier}) => {

  const arrayBecauseTheyCanTknowtomakeacorrectJSONFILE = Object.values(dataQuartier.consommation_electrique.annee);

  const consommationElectrique2019 = arrayBecauseTheyCanTknowtomakeacorrectJSONFILE[0];
  const consommationElectrique2020 = arrayBecauseTheyCanTknowtomakeacorrectJSONFILE[1];


  let data2019 = Object.keys(consommationElectrique2019).map(key => consommationElectrique2019[key]);
  let data2020 = Object.keys(consommationElectrique2020).map(key => consommationElectrique2020[key]);


  const mytab2019= consommationElectrique2019
const mytab2020= consommationElectrique2020

const numAverage = (a) => {
  var b = a.length,
      c = 0, i;
  for (i = 0; i < b; i++){
      c += Number(a[i]);
  }
  return c/b;
}

const getJsonValue = (tab) => {
  let average = []
  for(var k in tab){
    
    average.push(tab[k])
  }
  var value = numAverage(average)
  return value
}

const Average2019 = getJsonValue(mytab2019)
const Average2020 = getJsonValue(mytab2020)

const consoEnergy = [Average2019, Average2020]
const dataTensor = tf.tensor([consoEnergy[0], consoEnergy[1]])

const predict = (dataTensor, diffBetweenYear) => {
    diffBetweenYear = tf.tensor([diffBetweenYear, 0.1])
    var prediction = dataTensor.dot(diffBetweenYear)

    return prediction
  }
const prediction = predict(dataTensor,  Average2020 / Average2019 );


const roundPrediction = Math.round(prediction.dataSync());

console.log(roundPrediction);
var moyenneElec = (dataTensor.dataSync()[0] + dataTensor.dataSync()[1]) / 2;


console.log
(`L'estimation de l'année en éléctricitée est de ${moyenneElec} la prediction est de :  ${prediction.dataSync()}`)

    const data = {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        datasets: [
          {
            label: `Consommation d\'électricité du quartier de ${nameCity} en 2019 en MW`,
            data: data2019,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: `Consommation d\'électricité du quartier de ${nameCity} en 2020 en MW`,
            data: data2020,
            fill: false,
            backgroundColor: 'rgb(150, 99, 200)',
            borderColor: 'rgba(150, 99, 200, 0.2)',
          },
          {
            label: `Estimation faite par l'IA sur la consommation d\'électricité du quartier de ${nameCity} en 2021 en MW`,
            data: [roundPrediction,roundPrediction,roundPrediction,roundPrediction,roundPrediction,roundPrediction,roundPrediction,roundPrediction,roundPrediction,roundPrediction,roundPrediction,roundPrediction],
            fill: false,
            backgroundColor: 'rgb(0, 99, 200)',
            borderColor: 'rgba(0, 99, 200, 0.2)',
          },
        ],
      }


      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
    
            },
          ],
        },
      }
    return (
        <>
        <div className='header'>
        <h1 className='title'>Consommation d'électricité du quartier {nameCity}</h1>
      </div>
      <Line data={data} options={options} />

    </>
        
    )
}

