if (screen.width < 992) {
    //initialize variables for mobile
    var width = $("#myChart").width();
    var height = $(window).width();

    //set width and height of svg
    $("#test1").height(height);
    $("#test1").width(width);

    var chart;

    //create chart without labels
    nv.addGraph(function() {
        chart = nv.models.sunburstChart();
        chart.color(d3.scale.category10().range())
        .id("pa_fall")
        .groupColorByParent(false)
        .height(height)
        .width(width)
        .mode("value");
        chart.tooltip.contentGenerator(function (d) {
            if (d.data.fodmap != null) {
                return "<table> <tr> <th>"+d.data.name+"</th> <th></th> </tr> <tr> <td>FODMAP: </td> <td>"+d.data.fodmap+"</td> </tr> </table>";
            }
            return "<table> <tr> <th>"+d.data.name+"</th> </tr> </table>"});
            chart.tooltip.contentGenerator(function (d) {
            return "HELLO WORLD!"; });
        d3.select("#test1")
        .datum(getData())
        .call(chart);
        nv.utils.windowResize(chart.update);
        return chart;
    });
} else {
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
        // d3.select("#test1")
        // .datum(getData())
        // .call(chart);

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

    // //change color
    // if (season === "winter") {
    //     chart.color(["#1a2944", "#2da7c7", "#56acba", "#98c4c9", "#cbd5d2"]);
    // }
    // if (season === "fall") {
    //     chart.color(["#6E352C", "#CF5230", "#F59A44", "#E3C598", "#8A6E64", "#6E612F"]);
    // }

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
                 {"name": "Cauliflower", "size": 500, "fodmap": "Low"},
                 {"name": "Black Beans", "size": 500, "fodmap": "Low"},
                 {"name": "Tomatoes", "size": 500, "fodmap": "Low"},
                 {"name": "Carrots", "size": 500, "fodmap": "Low"},
                 {"name": "Zucchini", "size": 500, "fodmap": "Low"}
                 ]
             },
             {
                 "name": "Fruit",
                 "children": [
                 {"name": "Cherries", "size": 500, "fodmap": "Low"},
                 {"name": "Apples", "size": 500, "fodmap": "Low"},
                 {"name": "Oranges", "size": 500, "fodmap": "Low"},
                 {"name": "Lemons", "size": 500, "fodmap": "Low"}
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
                 {"name": "Cauliflower", "size": 500, "fodmap": "Low"},
                 {"name": "Black Beans", "size": 500, "fodmap": "Low"},
                 {"name": "Tomatoes", "size": 500, "fodmap": "Low"},
                 {"name": "Carrots", "size": 500, "fodmap": "Low"},
                 {"name": "Zucchini", "size": 500, "fodmap": "Low"}
                 ]
             },
             {
                 "name": "Fruit",
                 "children": [
                 {"name": "Cherries", "size": 500, "fodmap": "Low"},
                 {"name": "Apples", "size": 500, "fodmap": "Low"},
                 {"name": "Oranges", "size": 500, "fodmap": "Low"},
                 {"name": "Lemons", "size": 500, "fodmap": "Low"}
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
                 {"name": "Cauliflower", "size": 500, "fodmap": "Low"},
                 {"name": "Black Beans", "size": 500, "fodmap": "Low"},
                 {"name": "Tomatoes", "size": 500, "fodmap": "Low"},
                 {"name": "Carrots", "size": 500, "fodmap": "Low"},
                 {"name": "Zucchini", "size": 500, "fodmap": "Low"}
                 ]
             },
             {
                 "name": "Fruit",
                 "children": [
                 {"name": "Cherries", "size": 500, "fodmap": "Low"},
                 {"name": "Apples", "size": 500, "fodmap": "Low"},
                 {"name": "Oranges", "size": 500, "fodmap": "Low"},
                 {"name": "Lemons", "size": 500, "fodmap": "Low"}
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
                 {"name": "Cauliflower", "size": 500, "fodmap": "Low"},
                 {"name": "Black Beans", "size": 500, "fodmap": "Low"},
                 {"name": "Tomatoes", "size": 500, "fodmap": "Low"},
                 {"name": "Carrots", "size": 500, "fodmap": "Low"},
                 {"name": "Zucchini", "size": 500, "fodmap": "Low"}
                 ]
             },
             {
                 "name": "Fruit",
                 "children": [
                 {"name": "Cherries", "size": 500, "fodmap": "Low"},
                 {"name": "Apples", "size": 500, "fodmap": "Low"},
                 {"name": "Oranges", "size": 500, "fodmap": "Low"},
                 {"name": "Lemons", "size": 500, "fodmap": "Low"}
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
                 {"name": "Cauliflower", "size": 500, "fodmap": "Low"},
                 {"name": "Black Beans", "size": 500, "fodmap": "Low"},
                 {"name": "Tomatoes", "size": 500, "fodmap": "Low"},
                 {"name": "Carrots", "size": 500, "fodmap": "Low"},
                 {"name": "Zucchini", "size": 500, "fodmap": "Low"}
                 ]
             },
             {
                 "name": "Fruit",
                 "children": [
                 {"name": "Cherries", "size": 500, "fodmap": "Low"},
                 {"name": "Apples", "size": 500, "fodmap": "Low"},
                 {"name": "Oranges", "size": 500, "fodmap": "Low"},
                 {"name": "Lemons", "size": 500, "fodmap": "Low"}
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