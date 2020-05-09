var datapath = "listings_clean.csv";

d3.csv(datapath).then(function(data) {
    drawbellchart(data);
    console.log(data);
    // data.forEach(d => {console.log(d['price'])})
  });



function drawbellchart (originaldata) {
    // var zipcodes = []
    // originaldata.forEach(d => {zipcodes.push(d['zipcode'])});
    // // console.log(zipcodes);

    var prices = []
    originaldata.forEach(d => {
        if (d['zipcode'] === '90210') {
            prices.push(d['price'])};
        });
    console.log(prices);

    var trace = {
        x: prices,
        type: 'histogram',
        xbins: { 
            end: 26000, 
            size: 100, 
            start: 0
        }
    };
    
    var data = [trace];

    Plotly.newPlot('plot', data);
    

};








// d3.csv(datapath).then(drawbellchart);



// data_original.then(function(data) {
//   //Add all patient IDs into drowdown menu
//   var select = d3.select("#selDataset")
//   data.names.forEach(patient => {
//     select.append("option").attr("value", patient).text(patient)
//   })

//   //Change data based on patient selected
//   select.on("change", patientSelect);
//   function patientSelect (patient_select) {
//     var patient_id = d3.select(this).property("value");
//     var patient_data = data.samples.filter(d => +d.id === +patient_id)[0]

//     //Draw the charts
//     drawbarchart(patient_data)
//     drawbubblechart(patient_data)
    
//   //Show the samples info in the "Demographic Info"
//   //Select html class "sample-metadata"
//   var selectmetadata = d3.select("#sample-metadata");

//   //Clean the info box
//   selectmetadata.html("");
  
//   //Extract the info in each metadata
//   var result = data.metadata.filter(d => d.id.toString() === patient_id)[0];
//   console.log(result);

//   Object.entries(result).forEach((key) => {   
//     selectmetadata.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
//   });
    
// }
// });


// //Create a function to draw bar chart
// function drawbarchart (pdata) {
//     //Select the top 10 value (values already in descending order in the json)
//     var sample_values = pdata.sample_values.slice(0,10).reverse();
//     var otu_ids = pdata.otu_ids.slice(0,10).reverse().map(id => "OTU " + id);
//     var otu_labels = pdata.otu_labels.slice(0,10).reverse();
    
//     data = [{
//         x: sample_values,
//         y: otu_ids,
//         type: 'bar',
//         orientation: 'h'
//       }];

//       var layout = {  
//           showlegend: false
//       }
//       Plotly.newPlot("bar", data, layout);
    
//     console.log(sample_values)
//     console.log(otu_ids)
//     console.log(otu_labels)
// };


// //Create a function to draw bubble chart
// function drawbubblechart (pdata) {
//   var sample_values = pdata.sample_values;
//   var otu_ids = pdata.otu_ids;
//   var otu_labels = pdata.otu_labels;
  
//   data = [{
//       x: otu_ids,
//       y: sample_values,
//       mode: 'markers',
//       marker: {
//         size: sample_values,
//         color: otu_ids
//       },
//       text: otu_labels
//     }];
    
//     var layout = {  
//         showlegend: false,
//         xaxis: {title: "OTU ID"}
//     }

//     Plotly.newPlot("bubble", data, layout);
// };