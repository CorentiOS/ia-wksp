var tf = require('@tensorflow/tfjs-node')
var fs = require('fs');
var monJson = JSON.parse(fs.readFileSync('./json/quartiers.json', 'utf8'));

mytab2019= monJson.montpellier.quartiers.mosson.consommation_electrique.annee['2019']
mytab2020= monJson.montpellier.quartiers.mosson.consommation_electrique.annee['2020']

mytabGaz2019= monJson.montpellier.quartiers.mosson.consommation_gaz.annee['2019']
mytabGaz2020= monJson.montpellier.quartiers.mosson.consommation_gaz.annee['2020']

function numAverage(a) {
  var b = a.length,
      c = 0, i;
  for (i = 0; i < b; i++){
      c += Number(a[i]);
  }
  return c/b;
}

function getJsonValue(tab){
  let average = []
  for(var k in tab){
    
    average.push(tab[k])
  }
  var value = numAverage(average)
  return value
}

Average2019 = getJsonValue(mytab2019)
Average2020 = getJsonValue(mytab2020)
Average2019Gaz = getJsonValue(mytabGaz2019)
Average2020Gaz = getJsonValue(mytabGaz2020)

const consoEnergy = [Average2019, Average2020]
const consoGaz = [Average2019Gaz, Average2020Gaz]

const data = tf.tensor([consoEnergy[0], consoEnergy[1]])
const data1 = tf.tensor([consoGaz[0], consoGaz[1]])

  function predict(data, diffBetweenYear) {
    diffBetweenYear = tf.tensor([diffBetweenYear, 0.1])
    var prediction = data.dot(diffBetweenYear)

    return prediction
  }
const prediction = predict(data,  Average2020 / Average2019 )
const predictionGaz = predict(data1, Average2020Gaz / Average2019Gaz)

var moyenneElec = (data.dataSync()[0] + data.dataSync()[1]) / 2
var moyenneGaz = (data1.dataSync()[0] + data1.dataSync()[1]) / 2

console.log
(`L'estimation de l'année en éléctricitée est de ${moyenneElec} la prediction est de :  ${prediction.dataSync()}`)

console.log
(`L'estimation de l'année en Gaz est de ${moyenneGaz} la prediction est de :  ${predictionGaz.dataSync()}`)