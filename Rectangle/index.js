const log = console.log;

const stage = new Konva.Stage({
    width: window.innerWidth,
    height: window.innerHeight,
    container: "container",
});

const layer = new Konva.Layer();
stage.add(layer);

const rect = new Konva.Rect({
    x: 50,
    y: 50,
    fill: "red",
    height: 100,
    width: 200,
    stroke : "black",
    strokeWidth : 5,
    draggable: true,
});

layer.add(rect);
layer.draw();
