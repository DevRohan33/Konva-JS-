const log = console.log;

const stage = new Konva.Stage({
    width: window.innerWidth,
    height: window.innerHeight,
    container: "container",
});

const layer = new Konva.Layer();
stage.add(layer);

const bolb= new Konva.Line({
    points: [73, 70, 340, 23, 450, 60, 500, 20, 580, 80],
    fill: "red",
    stroke : "black",
    strokeWidth : 5,
    closed : true,
    tension : 0.5,
    draggable: true,
});
layer.add(bolb);