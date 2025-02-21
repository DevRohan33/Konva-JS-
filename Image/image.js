const log = console.log;

const stage = new Konva.Stage({
    width: window.innerWidth,
    height: window.innerHeight,
    container: "container",
});

const layer = new Konva.Layer();
stage.add(layer);

const firstImg = new Image();
firstImg.src = "first.jpg";
firstImg.onload = function () {
    const img = new Konva.Image({ 
        x: 170,
        y: 100,
        image: firstImg,
        width: 200,
        height: 200,
    });
    layer.add(img);
    layer.draw();
};

const secondImg = new Image();
secondImg.src = "second.avif";
secondImg.onload = function () {
    const img = new Konva.Image({ 
        x: 100,
        y: 350,
        image: secondImg,
        width: 380,
        height: 200,
        draggable: true,
    });
    layer.add(img);
    layer.draw();
};

Konva.Image.fromURL("https://thenerddaily.com/reasons-to-watch-anime",
    function (image) {
        image.setAttrs({
            x: 300,
            y: 100,
            width: 200,
            height: 200,
        });
        layer.add(image);
        layer.draw();
});