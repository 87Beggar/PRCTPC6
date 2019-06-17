const jsonfile = require('jsonfile')
const file = 'freguesias-metadata.xlsx.json'

jsonfile.readFile(file)
    .then(obj => {
        freguesias = obj.d; 
        
        console.log("\n### FREGUESIAS ###\n");
        freguesias.forEach (freg =>{
            if (freg!=undefined) { 
                var freguesia = "";
                freguesia += ":Ff" + freg.dicofre + " a owl:NamedIndividual, :Freguesia;\n";
                freguesia += "\t:nome \"" + freg.freguesia.toUpperCase() + "\";\n";
                freguesia += "\t:pertenceCidade \"" + freg.concelho.toUpperCase() + "\";\n";
              
                console.log(freguesia)
            }
        })      
    })
    .catch(error => console.error(error))

  