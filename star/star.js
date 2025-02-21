const log = console.log;

const stage = new Konva.Stage({
    height: window.innerHeight, 
    width: window.innerWidth,
    container: "container",
});

const layer = new Konva.Layer();
stage.add(layer);

const star = new Konva.Star({
    x: 100,
    y: 100,
    fill: "blue",
    outerRadius: 70,
    innerRadius: 30,
    stroke: "black",
    shadowColor: "black",
    shadowBlur: 10,
    draggable: true,
});

layer.add(star);
layer.draw();
