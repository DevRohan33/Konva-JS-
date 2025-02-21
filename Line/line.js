const log = console.log;

const stage = new Konva.Stage({
    width: window.innerWidth,
    height: window.innerHeight,
    container: "container",
});

const layer = new Konva.Layer();
stage.add(layer);

const redline = new Konva.Line({
    points: [73, 70, 340, 23, 450, 60, 500, 20],
    stroke: "red",
    strokeWidth: 5,
    lineCap: "round",
    lineJoin: "round",
    draggable: true,
});

const greenline = new Konva.Line({
    points: [73, 70, 340, 23, 450, 60, 500, 20],
    stroke: "green",
    strokeWidth: 5,
    lineCap: "round",
    lineJoin: "round",
    dash : [15, 7],
    draggable: true,
});

const blueline = new Konva.Line({
    points: [73, 70, 340, 23, 450, 60, 500, 20],
    stroke: "blue",
    strokeWidth: 5,
    lineCap: "round",
    lineJoin: "round",
    dash : [15, 7, 2, 7],
    draggable: true,
});

redline.move({
    x: 0,
    y: 5,
});
blueline.move({
    x: 0,
    y: 55,
});
greenline.move({
    x: 0,
    y: 105,
});

layer.add(redline);
layer.add(greenline);
layer.add(blueline);