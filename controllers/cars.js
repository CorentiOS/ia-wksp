const fetch = require('node-fetch');


exports.searchCars2 = (req, res, next) => {

    fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=vehicules-commercialises&q=&sort=puissance_maximale&facet=marque&facet=' +
    'modele_utac&facet=carburant&refine.marque=LAMBORGHINI&refine.modele_utac=GALLARDO&refine.carburant=Essence')
    .then(res => res.json())
    .then(json => {
        res.json(json);
    })
};


