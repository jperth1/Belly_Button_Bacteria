//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
// var drinks = ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"];
// var percentOrdered = [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6];
// var trace = {
    //x: drinks,
    //y: percentOrdered,
    //type: "bar"
//};

//var data = [trace]
//var layout = {
    //title : "Popular Nonalcholic Drunks",
    //xaxis : {title: "Drinks"},
    //yaxis : {title: "Percentage of Drinks Ordered"}
//};


//Plotly.newPlot("plotArea", data, layout);

//Practice Scatter plot with Plotly

var trace1 = {
    x: [1,2,3,4],
    y: [10,15,13,17],
    mode: "markers",
    type: "scatter"
};
var trace2 = {
    x: [2,3,4,5],
    y: [16,5,11,9],
    mode: "lines",
    type: "scatter"
};
var trace3 = {
    x: [1,2,3,4],
    y: [12,9,15,12],
    mode: "lines+markers",
    type: "scatter"
};
var data = [trace1, trace2, trace3];
var layout = {
    title: "Teams",
    xaxis: {title: "Number of Teams"} ,
    yaxis: {title: "Number of Wins"}
};

Plotly.newPlot("plotArea", data, layout);