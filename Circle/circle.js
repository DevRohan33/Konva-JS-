const log = console.log;
const stage = new Konva.Stage({
    height: window.innerHeight,
    width : window.innerWidth,
    container : "container",
});
const layer = new Konva.Layer();
stage.add(layer);

const circle = new Konva.Circle({
    x: 200,
    y: 200,
    radius: 90,
    fill : "green",
    stroke : "black",
    strokeWidth : 5,
    dragable : true,
});
layer.add(circle);

const ring = new Konva.Ring({
    x: 450,
    y : 200 ,
    innerRadius: 80 ,
    outerRadius: 100,
    fill: "yellow",
    stroke: "black",
    strokeWidth: 5,
    dragable: true,
}) ;
layer.add(ring);