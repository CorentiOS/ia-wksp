const fetch = require('node-fetch');


exports.getAllCities = (req, res, next) => {
    res.json({
        "cityData": [
           {
               "name": "Montpellier",
               "consommation" : 
               [
                   {
                       "annee":2020,
                       "electricite":150000
                   },
                   {
                       "annee" : 2019,
                       "electricite":120000
                   }
               ]
           },
           {
               "name": "Béziers",
               "consommation" : 
               [
                   {
                       "annee":2020,
                       "electricite":100000
                   },
                   {
                       "annee" : 2019,
                       "electricite":68000
                   }
               ]
           }

        ]
    })
};


