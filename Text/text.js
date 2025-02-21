const log = console.Log;
const stage = new Konva.Stage({
    width: window.innerWidth,
    height: window.innerHeight,
    container: "container",
});
const layer = new Konva.Layer();
stage.add(layer);

const textOne = new Konva.Text({
    x: stage.width() / 2,
    y: 35,
    text: 'SK Rohan Parveag',
    fontSize: 39,
    fontFamily: 'Calibri',
    fill: 'green',
      });
      textOne.offsetX(textOne.width() / 2);

const textTwo = new Konva.Text({
    x: stage.width() / 2,
    y: 90,
    text: "Rohan Parveag\n\nI am a web developer , I love to code and create new things. This is my first project on Konva.js",
    fontSize: 18,
    fontFamily: 'Calibri',
    fill: '#555',
    width: 300,
    padding: 20,
    align: 'center',
      });

      layer.add(textOne);
      
      layer.add(textTwo);
