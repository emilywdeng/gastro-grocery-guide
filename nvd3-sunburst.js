// Create chart without labels
if (screen.width < 768) {
    //initialize variables for mobile
    var width = $("#myChart").width();
    var height = $(window).width();

    //set width and height of svg
    $("#test1").height(height);
    $("#test1").width(width);

    // Maintian an instance of the chart
    var chart;

    // Maintain an Instance of the SVG selection with its data
    var chartData;

    //create chart with properties
    nv.addGraph(function() {
        chart = nv.models.sunburstChart();
        chart.color(d3.scale.category20b().range())
        .groupColorByParent(false)
        .height(height)
        .width(width)
        .showLabels(false)
        .labelFormat(function (d){ return d.name;});
        chart.tooltip.contentGenerator(function (d) {
            if (d.data.fodmap != null) {
                return "<table> <tr> <th>"+d.data.name+"</th> <th></th> </tr> <tr> <td>FODMAP: </td> <td>"+d.data.fodmap+"</td> </tr> </table>";
            }
            return "<table> <tr> <th>"+d.data.name+"</th> </tr> </table>"});
        // Assign the SVG selction
        chartData = d3.select('#test1').datum(getData());
        chartData.transition().duration(500).call(chart);

        //update chart on window resize
        nv.utils.windowResize(chart.update);
        return chart;
    });
} else { //create chart with labels
    //initialize variables for laptops and larger
    var width = $("#myChart").width();
    var height = $(window).height();

    //set width and height of svg
    $("#test1").height(height);
    $("#test1").width(width);

    // Maintian an instance of the chart
    var chart;

    // Maintain an Instance of the SVG selection with its data
    var chartData;

    //create chart with labels
    nv.addGraph(function() {
        chart = nv.models.sunburstChart();
        chart.color(d3.scale.category20b().range())
        .groupColorByParent(false)
        .height(height)
        .width(width)
        .showLabels(true)
        .labelFormat(function (d){ return d.name;});
        chart.tooltip.contentGenerator(function (d) {
            if (d.data.fodmap != null) {
                return "<table> <tr> <th>"+d.data.name+"</th> <th></th> </tr> <tr> <td>FODMAP: </td> <td>"+d.data.fodmap+"</td> </tr> </table>";
            }
            return "<table> <tr> <th>"+d.data.name+"</th> </tr> </table>"});

        // Assign the SVG selction
        chartData = d3.select('#test1').datum(getData());
        chartData.transition().duration(500).call(chart);

        //update chart on window resize
        nv.utils.windowResize(chart.update);
        return chart;
    });
}

function update(state, season) {
    var data = getData(state, season);

    // Update the SVG with the new data and call chart
    chartData.datum(data).transition().duration(500).call(chart);
    //update chart
    nv.utils.windowResize(chart.update);
};


function getData(state, season) {
    if (state === "pa" && season === "fall"){
        return [{
            "name": "Fall Produce in PA",
            "children": [
                {
                 "name": "Vegetables",
                 "children": [
                 {"name": "Beets", "size": 500, "fodmap": "Low (Fructans)"},
                 {"name": "Broccoli", "size": 500, "fodmap": "Low (Fructans, Galactans, Polyols)"},
                 {"name": "Cabbage", "size": 500, "fodmap": "Low (Polyols)"},
                 {"name": "Carrots", "size": 500, "fodmap": "Low"},
                 {"name": "Cauliflower", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Celery", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Lettuce", "size": 500, "fodmap": "Low"},
                 {"name": "Mushrooms", "size": 500, "fodmap": "High (Fructans, Polyols)"},
                 {"name": "Potatoes", "size": 500, "fodmap": "Illegal"},
                 {"name": "Pumpkins", "size": 500, "fodmap": "Low"},
                 {"name": "Squash", "size": 500, "fodmap": "Low"},
                 {"name": "Tomatoes", "size": 500, "fodmap": "Low"},
                 {"name": "Turnips", "size": 500, "fodmap": "Illegal (Polyols)"}
                 ]
             },
             {
                 "name": "Fruit",
                 "children": [
                 {"name": "Apples", "size": 500, "fodmap": "High (Fructose, Polyols)"},
                 {"name": "Blueberries", "size": 500, "fodmap": "Low (Fructans)"},
                 {"name": "Cantaloupe", "size": 500, "fodmap": "Low"},
                 {"name": "Grapes", "size": 500, "fodmap": "Low"},
                 {"name": "Pears", "size": 500, "fodmap": "High (Fructose, Polyols)"}
                 ]
             }
             ]
         }];
    }
    if (state === "pa" && season === "winter"){
        return [{
            "name": "Winter Produce in PA",
            "children": [
                {
                 "name": "Vegetables",
                 "children": [
                 {"name": "Beets", "size": 500, "fodmap": "Low (Fructans)"},
                 {"name": "Cabbage", "size": 500, "fodmap": "Low (Polyols)"},
                 {"name": "Carrots", "size": 500, "fodmap": "Low"},
                 {"name": "Celery", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Lettuce", "size": 500, "fodmap": "Low"},
                 {"name": "Mushrooms", "size": 500, "fodmap": "High (Fructans, Polyols)"},
                 {"name": "Potatoes", "size": 500, "fodmap": "Illegal"},
                 {"name": "Pumpkins", "size": 500, "fodmap": "Low"},
                 {"name": "Winter Squash", "size": 500, "fodmap": "Low"},
                 {"name": "Tomatoes", "size": 500, "fodmap": "Low"},
                 {"name": "Turnips", "size": 500, "fodmap": "Illegal (Polyols)"}
                 ]
             },
             {
                 "name": "Fruit",
                 "children": [
                 {"name": "Apples", "size": 500, "fodmap": "High (Fructose, Polyols)"}
                 ]
             }
             ]
         }];
    }
    if (state === "ca" && season === "fall"){
        return [{
            "name": "Fall Produce in CA",
            "children": [
                {
                 "name": "Vegetables",
                 "children": [
                 {"name": "Beets", "size": 500, "fodmap": "Low (Fructans)"},
                 {"name": "Broccoli", "size": 500, "fodmap": "Low (Fructans, Galactans, Polyols)"},
                 {"name": "Brussel Sprouts", "size": 500, "fodmap": "Low (Fructans, Galactans, Polyols)"},
                 {"name": "Cabbage", "size": 500, "fodmap": "Low (Polyols)"},
                 {"name": "Cauliflower", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Celery", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Corn", "size": 500, "fodmap": "Illegal (Starch)"},
                 {"name": "Cucumbers", "size": 500, "fodmap": "Low"},
                 {"name": "Eggplant", "size": 500, "fodmap": "Low"},
                 {"name": "Lettuce", "size": 500, "fodmap": "Low"},
                 {"name": "Mushrooms", "size": 500, "fodmap": "High (Fructans, Polyols)"},
                 {"name": "Okra", "size": 500, "fodmap": "Illegal (Fructans)"},
                 {"name": "Onions", "size": 500, "fodmap": "High (Fructans)"},
                 {"name": "Peppers", "size": 500, "fodmap": "Low"},
                 {"name": "Pumpkins", "size": 500, "fodmap": "Low"},
                 {"name": "Squash", "size": 500, "fodmap": "Low"},
                 {"name": "Sweet Potatoes", "size": 500, "fodmap": "Illegal (Polyols, Starch)"},
                 {"name": "Tomatoes", "size": 500, "fodmap": "Low"}
                 ]
             },
             {
                 "name": "Fruit",
                 "children": [
                 {"name": "Apples", "size": 500, "fodmap": "High (Fructose, Polyols)"},
                 {"name": "Blueberries", "size": 500, "fodmap": "Low (Fructans)"},
                 {"name": "Cantaloupe", "size": 500, "fodmap": "Low"},
                 {"name": "Figs", "size": 500, "fodmap": "High (Fructans)"},
                 {"name": "Grapes", "size": 500, "fodmap": "Low"},
                 {"name": "Honeydew", "size": 500, "fodmap": "Moderate (Fructans)"},
                 {"name": "Lemons", "size": 500, "fodmap": "Low"},
                 {"name": "Nectarines", "size": 500, "fodmap": "High (Fructans, Polyols)"},
                 {"name": "Oranges", "size": 500, "fodmap": "Low"},
                 {"name": "Peaches", "size": 500, "fodmap": "High (Fructans, Polyols)"},
                 {"name": "Pears", "size": 500, "fodmap": "High (Fructose, Polyols)"},
                 {"name": "Plums", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Pomegranates", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Tangerines", "size": 500, "fodmap": "Low"},
                 {"name": "Watermelon", "size": 500, "fodmap": "High (Fructans, Fructose, Polyols)"},
                 ]
             }
             ]
         }];
    }
    if (state === "ca" && season === "winter"){
        return [{
            "name": "Winter Produce in CA",
            "children": [
                {
                 "name": "Vegetables",
                 "children": [
                 {"name": "Beets", "size": 500, "fodmap": "Low (Fructans)"},
                 {"name": "Broccoli", "size": 500, "fodmap": "Low (Fructans, Galactans, Polyols)"},
                 {"name": "Brussel Sprouts", "size": 500, "fodmap": "Low (Fructans, Galactans, Polyols)"},
                 {"name": "Cabbage", "size": 500, "fodmap": "Low (Polyols)"},
                 {"name": "Carrots", "size": 500, "fodmap": "Low"},
                 {"name": "Cauliflower", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Celery", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Lettuce", "size": 500, "fodmap": "Low"},
                 {"name": "Green Peas", "size": 500, "fodmap": "High (Galactans)"},
                 {"name": "Mushrooms", "size": 500, "fodmap": "High (Fructans, Polyols)"},
                 {"name": "Onions", "size": 500, "fodmap": "High (Fructans)"},
                 {"name": "Peppers", "size": 500, "fodmap": "Low"},
                 {"name": "Pumpkins", "size": 500, "fodmap": "Low"},
                 {"name": "Radishes", "size": 500, "fodmap": "Low"},
                 {"name": "Spinach", "size": 500, "fodmap": "Low (Fructans)"},
                 {"name": "Squash", "size": 500, "fodmap": "Low"},
                 {"name": "Sweet Potatoes", "size": 500, "fodmap": "Illegal (Polyols, Starch)"}
                 ]
             },
             {
                 "name": "Fruit",
                 "children": [
                 {"name": "Apples", "size": 500, "fodmap": "High (Fructose, Polyols)"},
                 {"name": "Grapefruit", "size": 500, "fodmap": "High (Fructans)"},
                 {"name": "Grapes", "size": 500, "fodmap": "Low"},
                 {"name": "Lemons", "size": 500, "fodmap": "Low"},
                 {"name": "Oranges", "size": 500, "fodmap": "Low"},
                 {"name": "Pears", "size": 500, "fodmap": "High (Fructose, Polyols)"},
                 {"name": "Pomegranates", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Tangelos", "size": 500, "fodmap": "Low"},
                 {"name": "Tangerines", "size": 500, "fodmap": "Low"}
                 ]
             }
             ]
         }];
    }

    // DEFAULT
        return [{
            "name": "Fall Produce in PA",
            "children": [
                {
                 "name": "Vegetables",
                 "children": [
                 {"name": "Beets", "size": 500, "fodmap": "Low (Fructans)"},
                 {"name": "Broccoli", "size": 500, "fodmap": "Low (Fructans, Galactans, Polyols)"},
                 {"name": "Cabbage", "size": 500, "fodmap": "Low (Polyols)"},
                 {"name": "Carrots", "size": 500, "fodmap": "Low"},
                 {"name": "Cauliflower", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Celery", "size": 500, "fodmap": "High (Polyols)"},
                 {"name": "Lettuce", "size": 500, "fodmap": "Low"},
                 {"name": "Mushrooms", "size": 500, "fodmap": "High (Fructans, Polyols)"},
                 {"name": "Potatoes", "size": 500, "fodmap": "Illegal"},
                 {"name": "Pumpkins", "size": 500, "fodmap": "Low"},
                 {"name": "Squash", "size": 500, "fodmap": "Low"},
                 {"name": "Tomatoes", "size": 500, "fodmap": "Low"},
                 {"name": "Turnips", "size": 500, "fodmap": "Illegal (Polyols)"}
                 ]
             },
             {
                 "name": "Fruit",
                 "children": [
                 {"name": "Apples", "size": 500, "fodmap": "High (Fructose, Polyols)"},
                 {"name": "Blueberries", "size": 500, "fodmap": "Low (Fructans)"},
                 {"name": "Cantaloupe", "size": 500, "fodmap": "Low"},
                 {"name": "Grapes", "size": 500, "fodmap": "Low"},
                 {"name": "Lemons", "size": 500, "fodmap": "Low"},
                 {"name": "Oranges", "size": 500, "fodmap": "Low"},
                 {"name": "Pears", "size": 500, "fodmap": "High (Fructose, Polyols)"}
                 ]
             }
             ]
         }];
}

// Update the CHART
$('#state').on('change', function() {
    console.log($("#state").val());
    console.log($("#season").val());
    //when PA and Fall are selected
    if ($("#state").val() === "pa" && $("#season").val() === "fall") {
        update("pa", "fall");
    }
    //when PA and Winter are selected
    if ($("#state").val() === "pa" && $("#season").val() === "winter") {
        update("pa", "winter");
    }
    //when CA and Fall are selected
    if ($("#state").val() === "ca" && $("#season").val() === "fall") {
        update("ca", "fall");
    }
    //when CA and Winter are selected
    if ($("#state").val() === "ca" && $("#season").val() === "winter") {
        update("ca", "winter");
    }
    //default
    if ($("#state").val() === "default" && $("#season").val() === "fall") {
        update("pa", "fall");
    }
    if ($("#state").val() === "default" && $("#season").val() === "winter") {
        update("pa", "winter");
    }
    if ($("#state").val() === "pa" && $("#season").val() === "default") {
        update("pa", "fall");
    }
    if ($("#state").val() === "ca" && $("#season").val() === "default") {
        update("ca", "fall");
    }
});

$('#season').on('change', function() {
    console.log($("#state").val());
    console.log($("#season").val());
    //when PA and Fall are selected
    if ($("#state").val() === "pa" && $("#season").val() === "fall") {
        update("pa", "fall");
    }
    //when PA and Winter are selected
    if ($("#state").val() === "pa" && $("#season").val() === "winter") {
        update("pa", "winter");
    }
    //when CA and Fall are selected
    if ($("#state").val() === "ca" && $("#season").val() === "fall") {
        update("ca", "fall");
    }
    //when CA and Winter are selected
    if ($("#state").val() === "ca" && $("#season").val() === "winter") {
        update("ca", "winter");
    }
    //default
    if ($("#state").val() === "default" && $("#season").val() === "fall") {
        update("pa", "fall");
    }
    if ($("#state").val() === "default" && $("#season").val() === "winter") {
        update("pa", "winter");
    }
    if ($("#state").val() === "pa" && $("#season").val() === "default") {
        update("pa", "fall");
    }
    if ($("#state").val() === "ca" && $("#season").val() === "default") {
        update("ca", "fall");
    }
});