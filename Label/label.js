const log = console.log;

const stage = new Konva.Stage({
    width: window.innerWidth,
    height: window.innerHeight,
    container: "container",
});

const layer = new Konva.Layer();
stage.add(layer);

const labelOne = new Konva.Label({
    x: 170,
    y: 75,
    opacity: 0.75,
  });

  labelOne.add(
    new Konva.Tag({
      fill: 'black',
      pointerDirection: 'down',
      pointerWidth: 10,
      pointerHeight: 10,
      lineJoin: 'round',
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffsetX: 10,
      shadowOffsetY: 10,
      shadowOpacity: 0.5,
    })
  );

  labelOne.add(
    new Konva.Text({
      text: 'This is first label',
      fontFamily: 'Calibri',
      fontSize: 15,
      padding: 5,
      fill: 'white',
    })
    );

const labelTwo = new Konva.Label({
    x: 75,
    y: 130,
    opacity: 0.75,
        
      });

      labelTwo.add(
        new Konva.Tag({
          fill: 'green',
          pointerDirection: 'left',
          pointerWidth: 25,
          pointerHeight: 28,
          lineJoin: 'round',
        })
      );

      labelTwo.add(
        new Konva.Text({
          text: 'Second Label',
          fontFamily: 'Calibri',
          fontSize: 18,
          padding: 5,
          fill: 'white',
        })
      );

const simpleLabel = new Konva.Label({
    x: 130,
    y: 190,
    opacity: 0.75,
  });

  simpleLabel.add(
    new Konva.Tag({
      fill: 'yellow',
    })
  );

  simpleLabel.add(
    new Konva.Text({
      text: 'Third Label',
      fontFamily: 'Calibri',
      fontSize: 18,
      padding: 5,
      fill: 'black',
    })
  );
  layer.add(labelOne);
  layer.add(labelTwo);
  layer.add(simpleLabel);