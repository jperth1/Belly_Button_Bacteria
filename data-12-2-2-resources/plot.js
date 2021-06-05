console.log(cityGrowths);
//Sort the city's by population in desecending order
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
// var sortedCities = cityGrowths.sort((a,b) => b-a);

//Select the top five cities by population
var topSevenCities = sortedCities.slice(0,7);

//Create array with top five City Names
var topSevenCityNames = topSevenCities.map(city =>city.City);
//console.log(topFiveCityNames);
//Create an array with top five city populations
var topSevenCityGrowths = topSevenCities.map(city =>parseInt(city.Increase_from_2016));
//console.log(topFiveCityGrowths);

//Create the Bar Chart
var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growting Cities",
    xaxis: {title : "City"},
    yaxis: {title: "Population Growth 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);