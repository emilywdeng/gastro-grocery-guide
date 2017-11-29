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
        chart.color(["#1a2944", "#2da7c7", "#56acba", "#98c4c9", "#cbd5d2"])
        .id("pa_winter")
        .groupColorByParent(false)
        .height(height)
        .width(width)
        .mode("value");
        chart.tooltip.contentGenerator(function (d) {
            if (d.data.fodmap != null) {
                return "<table> <tr> <th>"+d.data.name+"</th> <th></th> </tr> <tr> <td>FODMAP: </td> <td>"+d.data.fodmap+"</td> </tr> </table>";
            }
            return "<table> <tr> <th>"+d.data.name+"</th> <th></th> </tr> <tr> <td>Count: </td> <td>"+d.data.children.length+"</td> </tr> </table>"});
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

    var chart;

    //create chart with labels
    nv.addGraph(function() {
        chart = nv.models.sunburstChart();
        chart.color(["#1a2944", "#2da7c7", "#56acba", "#98c4c9", "#cbd5d2"])
        .id("pa_winter")
        .groupColorByParent(false)
        .height(height)
        .width(width)
        .showLabels(true)
        .labelFormat(function (d){ return d.name;})
        .mode("value");
        chart.tooltip.contentGenerator(function (d) {
            if (d.data.fodmap != null) {
                return "<table> <tr> <th>"+d.data.name+"</th> <th></th> </tr> <tr> <td>FODMAP: </td> <td>"+d.data.fodmap+"</td> </tr> </table>";
            }
            return "<table> <tr> <th>"+d.data.name+"</th> <th></th> </tr> <tr> <td>Count: </td> <td>"+d.data.children.length+"</td> </tr> </table>"});
        d3.select("#test1")
        .datum(getData())
        .call(chart);
        nv.utils.windowResize(chart.update);
        return chart;
    });
}




function getData() {
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
