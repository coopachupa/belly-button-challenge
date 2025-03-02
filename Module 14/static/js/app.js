// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field


    // Filter the metadata for the object with the desired sample number


    // Use d3 to select the panel with id of `#sample-metadata`
    d3.json(#sample-metadata).then(function(sample-metadata) {
      console.log(data);
    });

    // Use `.html("") to clear any existing metadata


    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
// Array of names
let names = 

// Slice the first two names
let left = names.slice(0, 2);
// Returns elements at index position 0 and 1, but not 2.
console.log(left);

// Slice the last two names
let right = names.slice(2, 4);
// Returns elements at index position 2 and 3, but not 4.
console.log(right);

    // Render the Bar Chart

    let trace1 = {
      x: 
      y: 
      type: "bar"
  };
  
  // Data trace array
  let data = [trace1];
  
  // Apply a title to the layout
  let layout = {
    title: "Popular Roman gods search results"
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", data, layout);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`
    d3.selectAll("#selDataset").on("change", updatePlotly);

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
