// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.samples;

    // Create a variable that filters the samples for the object with the desired sample number.
    var resultSamples = samples.filter((sampleObj => sampleObj.id == sample));

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var resultMetadata = data.metadata.filter((metadataObj => metadataObj.id == sample));

    // Create a variable that holds the first sample in the array.
    var results = resultsSamples[0];
  

    // 2. Create a variable that holds the first sample in the metadata array.
    var metadata = resultMetadata[0];
    

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = results.otu_ids;
    var otu_labels = results.otu_labels;
    var sample_values = results.sample_values;


    // 3. Create a variable that holds the washing frequency.
    var wfreq = parsInt(metadata.wfreq);
   
    // Create the yticks for the bar chart.
    var yticks = otu_ids.slice(0,10).map(x => `OTU ID ${x}`).reverse();
    //console.log(yticks);

    var xticks = sample_values.slice(0,10).reverse();
    //console.log(xticks);

    var text_labels = otu_labels.slice(0,10).reverse();
    //console.log(otu_labels);
    

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar", barData, barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
   
    
    // 4. Create the trace for the gauge chart.
    var trace3 = {
      domain: {x:[0,1], y:[0,1]},
      value : wfreq,
      title: { title: "<h3> Belly Button Washing Frequency </h3> <br><p> Scrubs Per Week </p>"},
      type: "indicator",
      mode: "gauge+number",
      guage: { 
        axis:{range:[null, 10]},
        bar: {color:"black"},
        steps: [{range:[0,2], color: "red"}, {range:[2,4], color:"orange"}, {range: [4,6], color:"yellow"}, {range: [6,8], color:"yellowgreen"}, {range: [8,10], color: "green"} ]
      }
    };

    var gaugeData = [trace3];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 600, height: 500, margin : {t: 0, b:0}
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
