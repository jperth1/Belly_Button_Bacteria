const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

//retrieve the first element in the array
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));
//retrieve the full name of the first element in the array
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
//retrieve the latitude of hte first element in the array
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));
//Use map() to print only the latitude and longitude coordinates of each SpaceX launch station. 
d3.json(url).then(spaceXResults => console.log(spaceXResults.map()))