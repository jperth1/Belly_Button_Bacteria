// open JSON from external data file 
d3.json("samples.json").then(data => console.log(data));

//Extract only the wfreq  of each person in the array

//d3.json("samples.json").then(function(data){wfreq = data.metadata.map(person => person.wfreq);
//console.log(wfreq);
//});

//Sort wfreq array in descending order

//d3.json("samples.json").then(function(data){wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
//console.log(wfreq);
//});

// Use filer() to Delete null values from sorted wfreq

//d3.json("samples.json").then(function(data){wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
//filteredWfreq = wfreq.filter(element => element != null);
//console.log(filteredWfreq);
//});

//Use Object.entries()and forEach() to print all the metadata
// of the first person in the samples.json() dataset (ID 940).

//d3.json("samples.json").then(function(data){
    //firstPerson = data.metadata[0];
    //Object.entries(firstPerson).forEach(([key,value]) =>
    //{console.log(key + ': ' + value);});
//});