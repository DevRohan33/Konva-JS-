const log = console.log;

const stage = new Konva.Stage({
    width: window.innerWidth,
    height: window.innerHeight,
    container: "container",
});

const layer = new Konva.Layer();
stage.add(layer);

const hexagon = new Konva.RegularPolygon({
    x: 200,
    y: 200,
    sides: 6,
    radius: 70,
    fill: "yellow",
    stroke : "black",
    strokeWidth : 5,
    draggable: true,
});

layer.add(hexagon);