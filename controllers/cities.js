const fetch = require('node-fetch');


exports.getAllCities = (req, res, next) => {
    res.json({

        "montpellier":{
     
           "quartiers":{
     
              "mosson":[{
     
                 "consommation_electrique":{
     
                    "annee":{
     
                       "2019":[{
     
                          "janvier":"5352",
     
                          "fevrier":"5165",
     
                          "mars":"5062",
     
                          "avril":"4252",
     
                          "mai":"4152",
     
                          "juin":"4048",
     
                          "juillet":"4552",
     
                          "aout":"4749",
     
                          "septembre":"4652",
     
                          "octobre":"4432",
     
                          "novembre":"4590",
     
                          "decembre":"4978"
     
                       }],
     
                       "2020":[{
     
                          "janvier":"5442",
     
                          "fevrier":"5235",
     
                          "mars":"4986",
     
                          "avril":"4188",
     
                          "mai":"4089",
     
                          "juin":"3987",
     
                          "juillet":"4483",
     
                          "aout":"4677",
     
                          "septembre":"4582",
     
                          "octobre":"4365",
     
                          "novembre":"4521",
     
                          "decembre":"4903"
     
                       }]
     
                    }
     
                 }
     
              }],
              "croix_d_argent" : [{
               "consommation_electrique":{
     
                  "annee":{
   
                     "2019":[{
   
                        "janvier":"5352",
   
                        "fevrier":"5165",
   
                        "mars":"5062",
   
                        "avril":"4252",
   
                        "mai":"4152",
   
                        "juin":"4048",
   
                        "juillet":"4552",
   
                        "aout":"4749",
   
                        "septembre":"4652",
   
                        "octobre":"4432",
   
                        "novembre":"4590",
   
                        "decembre":"4978"
   
                     }],
   
                     "2020":[{
   
                        "janvier":"5442",
   
                        "fevrier":"5235",
   
                        "mars":"4986",
   
                        "avril":"4188",
   
                        "mai":"4089",
   
                        "juin":"3987",
   
                        "juillet":"4483",
   
                        "aout":"4677",
   
                        "septembre":"4582",
   
                        "octobre":"4365",
   
                        "novembre":"4521",
   
                        "decembre":"4903"
   
                     }]
   
                  }
   
               }
              }]
              
     
           }
     
        }
     
     })
};


