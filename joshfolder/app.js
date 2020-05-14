var datapath = "listings_clean.csv";

d3.csv(datapath).then(function(data) {
    console.log(data);
    drawhistogram(data);
    drawrating(data);
    extractData(data);
    drawmedianchart(data);
    plotsunburst(data);
  });



function drawhistogram (originaldata) {
    // var zipcodes = []
    // originaldata.forEach(d => {zipcodes.push(d['zipcode'])});
    // console.log(zipcodes);

    var prices = []
    originaldata.forEach(d => {
        if (d['zipcode'] === '90210') {
            prices.push(d['price'])};
        });
    // console.log(prices);

    var trace = {
        x: prices,
        type: 'histogram',
        xbins: { 
            size: 50
        },

        opacity: 0.7,

        marker: {
            color:'rgb(249,25,66)',
            // Add boundary line for each bar 
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
              },
        },

        hovertemplate:"Number of Houses: %{y}<extra></extra>"

    };

    var layout = {
        title:{text: 'House Counts vs. Price per Night', font:{family:'Open Sans'}},
        

        hoverlabel: { bgcolor: "rgb(255,215,0)" },

        xaxis: {
            title: {text:'Price per Night', font:{family:'Open Sans'}},

            tickformat: '$',
            tickmode: 'auto',
            rangemode: 'nonnegative',

            // Set a range for defualt displaying
            range:[0,800],
            
            rangeslider: {
                // bgcolor: 'salmon'
                // bordercolor:'red',
                // borderwidth: 3
            }
        },
        
        yaxis: {
            title: {text:'House Counts', font:{family:'Open Sans'}},
            dtick: 5,
            gridcolor: 'darkgray'
        },       
    };
    
    var data = [trace];

    Plotly.newPlot('plotprice', data, layout);
};


function drawrating (originaldata) {
    // var zipcodes = []
    // originaldata.forEach(d => {zipcodes.push(d['zipcode'])});
    // console.log(zipcodes);

    var ratings = []
    originaldata.forEach(d => {
        if (d['zipcode'] === '90210') {
            ratings.push(d['review_scores_rating'])};
        });
    // console.log(ratings);

    var trace = {
        x: ratings,
        type: 'histogram',
        xbins: { 
            // start:0,
            // end:110,
            size: 5
        },

        opacity: 0.7,

        marker: {
            color:'rgb(255,215,0)',
            // Add boundary line for each bar 
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
              }
        },

        hovertemplate:"Number of Houses: %{y}<extra></extra>"

    };

    var layout = {
        title: {text:'Performance Rating', font:{family:'Open Sans'}},

        hoverlabel: { bgcolor: "rgb(249,25,66)" },

        xaxis: {
            // rangeselector: selectorOptions,
            title: {text: 'Score Rating',
            font:{family:'Open Sans'}},
            tickmode: 'auto',
            // showgrid: true,
            // gridcolor: 'black',
            rangemode: 'nonnegative'
        },
        
        yaxis: {
            title: {text: 'House Counts', font:{family:'Open Sans'}},
            dtick: 5,
            gridcolor: 'darkgray'
        },       
    };
    
    var data = [trace];

    Plotly.newPlot('plotrating', data, layout);
};


// Create varibles to hold price data for each group (groupby Room Type and Bedroom #)
var entire_home_0bedroom = []
var entire_home_1bedroom = []
var entire_home_2bedroom = []
var entire_home_3bedroom = []
var entire_home_4bedroom = []
var entire_home_5bedroom = []
var entire_home_6bedroom = []
var entire_home_7bedroom = []
var entire_home_8bedroom = []
var entire_home_9bedroom = []
var entire_home_10bedroom = []
var entire_home_11bedroom = []
var entire_home_12bedroom = []
var entire_home_13bedroom = []
var entire_home_all = []
var entire_home_lists = [entire_home_0bedroom,entire_home_1bedroom,entire_home_2bedroom,entire_home_3bedroom,
entire_home_4bedroom,entire_home_5bedroom,entire_home_6bedroom,entire_home_7bedroom,entire_home_8bedroom,
entire_home_9bedroom,entire_home_10bedroom,entire_home_11bedroom,entire_home_12bedroom,entire_home_13bedroom]

var private_room_0bedroom = []
var private_room_1bedroom = []
var private_room_2bedroom = []
var private_room_3bedroom = []
var private_room_4bedroom = []
var private_room_5bedroom = []
var private_room_6bedroom = []
var private_room_7bedroom = []
var private_room_8bedroom = []
var private_room_9bedroom = []
var private_room_10bedroom = []
var private_room_11bedroom = []
var private_room_12bedroom = []
var private_room_13bedroom = []
var private_room_all = []
var private_room_lists = [private_room_0bedroom,private_room_1bedroom,private_room_2bedroom,private_room_3bedroom,
private_room_4bedroom,private_room_5bedroom,private_room_6bedroom,private_room_7bedroom,private_room_8bedroom,
private_room_9bedroom,private_room_10bedroom,private_room_11bedroom,private_room_12bedroom]

var hotel_room_0bedroom = []
var hotel_room_1bedroom = []
var hotel_room_2bedroom = []
var hotel_room_3bedroom = []
var hotel_room_4bedroom = []
var hotel_room_5bedroom = []
var hotel_room_6bedroom = []
var hotel_room_7bedroom = []
var hotel_room_8bedroom = []
var hotel_room_9bedroom = []
var hotel_room_10bedroom = []
var hotel_room_11bedroom = []
var hotel_room_12bedroom = []
var hotel_room_13bedroom = []
var hotel_room_all = []
var hotel_room_lists = [hotel_room_0bedroom,hotel_room_1bedroom,hotel_room_2bedroom,hotel_room_3bedroom,
hotel_room_4bedroom,hotel_room_5bedroom,hotel_room_6bedroom,hotel_room_7bedroom,hotel_room_8bedroom,
hotel_room_9bedroom,hotel_room_10bedroom,hotel_room_11bedroom,hotel_room_12bedroom,hotel_room_13bedroom]

var shared_room_0bedroom = []
var shared_room_1bedroom = []
var shared_room_2bedroom = []
var shared_room_3bedroom = []
var shared_room_4bedroom = []
var shared_room_5bedroom = []
var shared_room_6bedroom = []
var shared_room_7bedroom = []
var shared_room_8bedroom = []
var shared_room_9bedroom = []
var shared_room_10bedroom = []
var shared_room_11bedroom = []
var shared_room_12bedroom = []
var shared_room_13bedroom = []
var shared_room_all = []
var shared_room_list = [shared_room_0bedroom,shared_room_1bedroom,shared_room_2bedroom,shared_room_3bedroom,
shared_room_4bedroom,shared_room_5bedroom,shared_room_6bedroom,shared_room_7bedroom,shared_room_8bedroom,
shared_room_9bedroom,shared_room_10bedroom,shared_room_11bedroom,shared_room_12bedroom,shared_room_13bedroom]

// Create a function to extrac data for each group
function extractData(originaldata) {
    originaldata.forEach(d => {
    if (d['zipcode'] === '90210') {
        if (d['bedrooms'] === '0.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_0bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_0bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_0bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_0bedroom.push(Number(d['price']))};
        };

        if (d['bedrooms'] === '1.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_1bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_1bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_1bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_1bedroom.push(Number(d['price']))};          
        };

        if (d['bedrooms'] === '2.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_2bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_2bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_2bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_2bedroom.push(Number(d['price']))};            
        };

        if (d['bedrooms'] === '3.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_3bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_3bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_3bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_3bedroom.push(Number(d['price']))};            
        };

        if (d['bedrooms'] === '4.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_4bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_4bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_4bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_4bedroom.push(Number(d['price']))};           
        };

        if (d['bedrooms'] === '5.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_5bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_5bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_5bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_5bedroom.push(Number(d['price']))};      
        };

        if (d['bedrooms'] === '6.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_6bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_6bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_6bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_6bedroom.push(Number(d['price']))};        
        };

        if (d['bedrooms'] === '7.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_7bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_7bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_7bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_7bedroom.push(Number(d['price']))};
        };

        if (d['bedrooms'] === '8.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_8bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_8bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_8bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_8bedroom.push(Number(d['price']))};      
        };

        if (d['bedrooms'] === '9.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_9bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_9bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_9bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_9bedroom.push(Number(d['price']))};           
        };

        if (d['bedrooms'] === '10.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_10bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_10bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_10bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_10bedroom.push(Number(d['price']))};         
        };

        if (d['bedrooms'] === '11.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_11bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_11bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_11bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_11bedroom.push(Number(d['price']))};           
        };

        if (d['bedrooms'] === '12.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_12bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_12bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_12bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_12bedroom.push(Number(d['price']))};          
        };

        if (d['bedrooms'] === '13.0') {
            if (d['room_type'] === 'Entire home/apt') {entire_home_13bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Private room') {private_room_13bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Hotel room') {hotel_room_13bedroom.push(Number(d['price']))};
            if (d['room_type'] === 'Shared room') {shared_room_13bedroom.push(Number(d['price']))};           
        };

        if (d['room_type'] === 'Entire home/apt') {entire_home_all.push(Number(d['price']))};
        if (d['room_type'] === 'Private room') {private_room_all.push(Number(d['price']))};
        if (d['room_type'] === 'Hotel room') {hotel_room_all.push(Number(d['price']))};
        if (d['room_type'] === 'Shared room') {shared_room_all.push(Number(d['price']))};

        };
    })
}


// Create a function to calculate the median for given array
function getMedian(values) {

    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}

// Create a function to calculte the median for each group and then draw a bar chart
function drawmedianchart (originaldata) {
    // Calculte the median for each group
    var entire_home_medians = []
    entire_home_lists.forEach(d => {entire_home_medians.push(getMedian(d))});

    var private_room_medians = []
    private_room_lists.forEach(d => {private_room_medians.push(getMedian(d))});

    var hotel_room_medians = []
    hotel_room_lists.forEach(d => {hotel_room_medians.push(getMedian(d))});

    var shared_room_medians = []
    shared_room_list.forEach(d => {shared_room_medians.push(getMedian(d))});

    // Create a groupped bar chart to show "Entire House", "Private Room" and etc. in one same chart
    var data = [{
        // Values for "Entire House"
        x: entire_home_medians.length,
        y: entire_home_medians,
        type: "bar",
        xaxis: 'x1',
        marker: {color: '#2779A7'},
        hovertemplate:"%{x} Bedrooms: %{y} / Night",
        name: 'Entire House'
    },

    // Values for "Private Room
    {
        x: private_room_medians.length,
        y: private_room_medians,
        type: "bar",
        xaxis: 'x2',     
        marker: {color: '#DF6C4F'},
        hovertemplate:"%{x} Bedrooms: %{y} / Night",
        name: 'Private Room'
    },

    // Values for "Hotel Room
    {
        x: hotel_room_medians.length,
        y: hotel_room_medians,
        type: "bar",
        xaxis: 'x3',
        marker: {color: '#ECD06F'},
        hovertemplate:"%{x} Bedrooms: %{y} / Night",
        name: 'Hotel Room'
    },

    // Values for "Shared Room
    {
        x: shared_room_medians.length,
        y: shared_room_medians,
        type: "bar",
        xaxis: 'x4',
        marker: {color: '#49C5B6'},
        hovertemplate:"%{x} Bedrooms: %{y} / Night",
        name: 'Shared Room'
    }
    ];

    // Create layout for each individual bar chart
    var layout = {
        title: {text:'Median Price for Each Room Type & Number of Bedrooms',
            font:{family:'Open Sans'}},

    yaxis: {
        title: {text:'Price per Night', font:{family:'Open Sans'}},
        autorange: true,
        tickformat: '$'},
    xaxis: {
        // Domain is for how much space the individual chart takes
        domain: [0, 0.35],
        // tickvals:[0,2,4,6,8,10,12],
        // ticktext:['0 BR','2 BR','4 BR','6 BR','8 BR','10 BR','12 BR'],
        dtick: 2,
        anchor: 'x1', 
        title: {text:'Entire House', font:{family:'Open Sans'}}
    },
    xaxis2: {
        domain: [0.4, 0.65],
        dtick: 2,
        anchor: 'x2', 
        title: {text:'Private Room', font:{family:'Open Sans'}}
    },
    xaxis3: {
        domain: [0.7, 0.825],
        dtick: 2,
        anchor: 'x3', 
        title: {text:'Hotel Room', font:{family:'Open Sans'}}
    },
    xaxis4: {
        domain: [0.875, 1.0],
        dtick: 2,
        anchor: 'x4', 
        title: {text:'Shared Room',font: {family:'Open Sans'}}
    }
    }

    Plotly.newPlot('plotcategory', data, layout);
}


function plotsunburst (originaldata) {
    var ids = [
        'Entire Home','Entire Home - 0 Bedroom','Entire Home - 1 Bedroom','Entire Home - 2 Bedroom','Entire Home - 3 Bedroom',
        'Entire Home - 4 Bedroom','Entire Home - 5 Bedroom','Entire Home - 6 Bedroom','Entire Home - 7 Bedroom',
        'Entire Home - 8 Bedroom','Entire Home - 9 Bedroom','Entire Home - 10 Bedroom','Entire Home - 11 Bedroom',
        'Entire Home - 12 Bedroom','Entire Home - 13 Bedroom',

        'Private Room','Private Room - 0 Bedroom','Private Room - 1 Bedroom','Private Room - 2 Bedroom',
        'Private Room - 3 Bedroom','Private Room - 4 Bedroom','Private Room - 5 Bedroom','Private Room - 6 Bedroom',
        'Private Room - 7 Bedroom','Private Room - 8 Bedroom','Private Room - 9 Bedroom','Private Room - 10 Bedroom',
        'Private Room - 11 Bedroom','Private Room - 12 Bedroom','Private Room - 13 Bedroom',

        'Hotel Room','Hotel Room - 0 Bedroom','Hotel Room - 1 Bedroom','Hotel Room - 2 Bedroom','Hotel Room - 3 Bedroom',
        'Hotel Room - 4 Bedroom','Hotel Room - 5 Bedroom','Hotel Room - 6 Bedroom','Hotel Room - 7 Bedroom',
        'Hotel Room - 8 Bedroom','Hotel Room - 9 Bedroom','Hotel Room - 10 Bedroom','Hotel Room - 11 Bedroom',
        'Hotel Room - 12 Bedroom','Hotel Room - 13 Bedroom',

        'Shared Room','Shared Room - 0 Bedroom','Shared Room - 1 Bedroom','Shared Room - 2 Bedroom','Shared Room - 3 Bedroom',
        'Shared Room - 4 Bedroom','Shared Room - 5 Bedroom','Shared Room - 6 Bedroom','Shared Room - 7 Bedroom',
        'Shared Room - 8 Bedroom','Shared Room - 9 Bedroom','Shared Room - 10 Bedroom','Shared Room - 11 Bedroom',
        'Shared Room - 12 Bedroom','Shared Room - 13 Bedroom']

    var labels = [
        'Entire Home','0 Bedroom','1 Bedroom','2 Bedroom','3 Bedroom','4 Bedroom','5 Bedroom','6 Bedroom',
        '7 Bedroom','8 Bedroom','9 Bedroom','10 Bedroom','11 Bedroom','12 Bedroom','13 Bedroom',

        'Private Room','0 Bedroom','1 Bedroom','2 Bedroom','3 Bedroom','4 Bedroom','5 Bedroom','6 Bedroom',
        '7 Bedroom','8 Bedroom','9 Bedroom','10 Bedroom','11 Bedroom','12 Bedroom','13 Bedroom',

        'Hotel Room','0 Bedroom','1 Bedroom','2 Bedroom','3 Bedroom','4 Bedroom','5 Bedroom','6 Bedroom',
        '7 Bedroom','8 Bedroom','9 Bedroom','10 Bedroom','11 Bedroom','12 Bedroom','13 Bedroom',

        'Shared Room','0 Bedroom','1 Bedroom','2 Bedroom','3 Bedroom','4 Bedroom','5 Bedroom','6 Bedroom',
        '7 Bedroom','8 Bedroom','9 Bedroom','10 Bedroom','11 Bedroom','12 Bedroom','13 Bedroom']
    
    var parents = [
        "", "Entire Home", "Entire Home", "Entire Home","Entire Home","Entire Home","Entire Home","Entire Home",
        "Entire Home","Entire Home","Entire Home","Entire Home","Entire Home","Entire Home","Entire Home",

        "","Private Room","Private Room","Private Room","Private Room","Private Room","Private Room","Private Room",
        "Private Room","Private Room","Private Room","Private Room","Private Room","Private Room","Private Room",

        "","Hotel Room","Hotel Room","Hotel Room","Hotel Room","Hotel Room","Hotel Room","Hotel Room","Hotel Room",
        "Hotel Room","Hotel Room","Hotel Room","Hotel Room","Hotel Room","Hotel Room",

        "","Shared Room","Shared Room","Shared Room","Shared Room","Shared Room","Shared Room","Shared Room",
        "Shared Room","Shared Room","Shared Room","Shared Room","Shared Room","Shared Room"
    ]

    var values = [
        entire_home_all.length,entire_home_0bedroom.length,entire_home_1bedroom.length,entire_home_2bedroom.length,
        entire_home_3bedroom.length,entire_home_4bedroom.length,entire_home_5bedroom.length,entire_home_6bedroom.length,
        entire_home_7bedroom.length,entire_home_8bedroom.length,entire_home_9bedroom.length,entire_home_10bedroom.length,
        entire_home_11bedroom.length,entire_home_12bedroom.length,entire_home_13bedroom.length,

        private_room_all.length,private_room_0bedroom.length,private_room_1bedroom.length,private_room_2bedroom.length,
        private_room_3bedroom.length,private_room_4bedroom.length,private_room_5bedroom.length,private_room_6bedroom.length,
        private_room_7bedroom.length,private_room_8bedroom.length,private_room_9bedroom.length,private_room_10bedroom.length,
        private_room_11bedroom.length,private_room_12bedroom.length,private_room_13bedroom.length,

        hotel_room_all.length,hotel_room_0bedroom.length,hotel_room_1bedroom.length,hotel_room_2bedroom.length,
        hotel_room_3bedroom.length,hotel_room_4bedroom.length,hotel_room_5bedroom.length,hotel_room_6bedroom.length,
        hotel_room_7bedroom.length,hotel_room_8bedroom.length,hotel_room_9bedroom.length,hotel_room_10bedroom.length,
        hotel_room_11bedroom.length,hotel_room_12bedroom.length,hotel_room_13bedroom.length,

        shared_room_all.length,shared_room_0bedroom.length,shared_room_1bedroom.length,shared_room_2bedroom.length,
        shared_room_3bedroom.length,shared_room_4bedroom.length,shared_room_5bedroom.length,shared_room_6bedroom.length,
        shared_room_7bedroom.length,shared_room_8bedroom.length,shared_room_9bedroom.length,shared_room_10bedroom.length,
        shared_room_11bedroom.length,shared_room_12bedroom.length,shared_room_13bedroom.length]

    // console.log(values)

    var trace = {
        type: 'sunburst',
        ids: ids,
        labels: labels,
        parents: parents,
        values: values,
        outsidetextfont: {size: 20, color: "#377eb8"},
        leaf: {opacity: 0.4},
        marker: {line: {width: 2}},
        branchvalues: 'total',
        // hovertemplate: "%{labels}",
        text: ['Total:' + entire_home_all.length,"","","","","","","","","","","","","","",
        'Total:' + private_room_all.length]
    }

    var layout = {
        title: {text:'House Count for Each Room Type', font:{family:'Open Sans'}},
        sunburstcolorway:[
            "rgb(249,25,66)","rgb(255,215,0)","#2779A7","#49C5B6"],
        // margin: {l: 0, r: 0, b: 0, t: 0},
        // width: 500,
        // height: 500
      };

    data = [trace]

    Plotly.newPlot('plotsunburst', data, layout);
}





// function price_groupby_bedroom(data) {
//     var onebedroomprice = []
//     var twobedroomprice = []
//     var threebedroomprice = []
//     var fourbedroomprice = []
//     var fivebedroomprice = []
//     var sixbedroomprice = []
//     var sevenbedroomprice = []
//     var eightbedroomprice = []
//     var ninebedroomprice = []
//     var tenbedroomprice = []
//     var elvbedroomprice = []
//     var twlbedroomprice = []
//     var thtbedroomprice = []

//     var dic = {onebedroomprice, twobedroomprice, threebedroomprice, fourbedroomprice, fivebedroomprice, sixbedroomprice,
//     sevenbedroomprice, eightbedroomprice, ninebedroomprice, tenbedroomprice, elvbedroomprice, twobedroomprice, threebedroomprice}

//     data.forEach(r => {
//         if (r['bedrooms'] === '1.0') {
//           onebedroomprice.push(r['price'])
//         };

//         if (r['bedrooms'] === '2.0') {
//             twobedroomprice.push(r['price'])
//         };
        
//         if (r['bedrooms'] === '3.0') {
//             threebedroomprice.push(r['price'])
//         };

//         if (r['bedrooms'] === '4.0') {
//             fourbedroomprice.push(r['price'])
//         };

//         if (r['bedrooms'] === '5.0') {
//             fivebedroomprice.push(r['price'])
//         };
        
//         if (r['bedrooms'] === '6.0') {
//             sixbedroomprice.push(r['price'])
//         };

//         if (r['bedrooms'] === '7.0') {
//             sevenbedroomprice.push(r['price'])
//         };

//         if (r['bedrooms'] === '8.0') {
//             eightbedroomprice.push(r['price'])
//           };
        
//         if (r['bedrooms'] === '9.0') {
//             ninebedroomprice.push(r['price'])
//         };

//         if (r['bedrooms'] === '10.0') {
//             tenbedroomprice.push(r['price'])
//         };

//         if (r['bedrooms'] === '11.0') {
//             elvbedroomprice.push(r['price'])
//         };
        
//         if (r['bedrooms'] === '12.0') {
//             twlbedroomprice.push(r['price'])
//         };

//         if (r['bedrooms'] === '13.0') {
//             thtbedroomprice.push(r['price'])
//         };
//     });
//     // console.log(dic);
//     return dic;
    
// }