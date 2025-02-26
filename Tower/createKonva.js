var stage = new Konva.Stage({
    container: 'container',
    width: 600,
    height: 800,
});

var layer = new Konva.Layer();
stage.add(layer);

// Tower position & dimensions
let baseWidth = 150;  
let topWidth = 60; 
let sectionHeight = 60;
let startX = 200;
let startY = 50;
let sections = 12;

// Function to interpolate width as tower expands downward
function getSectionWidth(sectionIndex) {
    return topWidth + (sectionIndex / (sections - 1)) * (baseWidth - topWidth);
}

// Function to draw a tower section
function drawSection(sectionIndex) {
    let width = getSectionWidth(sectionIndex);
    let nextWidth = getSectionWidth(sectionIndex + 1);

    let x1 = startX + (baseWidth - width) / 2;
    let x2 = startX + (baseWidth - nextWidth) / 2;
    let y1 = startY + sectionIndex * sectionHeight;
    let y2 = y1 + sectionHeight;

    let group = new Konva.Group();

    // Main structure
    let rect = new Konva.Line({
        points: [x1, y1, x1 + width, y1, x2 + nextWidth, y2, x2, y2, x1, y1], // Outline
        stroke: 'black',
        strokeWidth: 2,
        closed: true
    });

    // Diagonal cross-bracing
    let line1 = new Konva.Line({
        points: [x1, y1, x2 + nextWidth, y2],
        stroke: 'black',
        strokeWidth: 2,
    });

    let line2 = new Konva.Line({
        points: [x1 + width, y1, x2, y2],
        stroke: 'black',
        strokeWidth: 2,
    });

    group.add(rect, line1, line2);
    layer.add(group);
}

// Function to add section labels
function addSectionLabel(text, x, y) {
    let label = new Konva.Text({
        x: x,
        y: y,
        text: text,
        fontSize: 14,
        fontFamily: 'Arial',
        fill: 'black',
    });
    layer.add(label);
}

// Function to draw a highlighted section (red/green)
function drawHighlightedSection(sectionIndex, color) {
    let width = getSectionWidth(sectionIndex);
    let nextWidth = getSectionWidth(sectionIndex + 1);

    let x1 = startX + (baseWidth - width) / 2;
    let x2 = startX + (baseWidth - nextWidth) / 2;
    let y1 = startY + sectionIndex * sectionHeight;
    let y2 = y1 + sectionHeight;

    let highlight = new Konva.Line({
        points: [x1, y1, x1 + width, y1, x2 + nextWidth, y2, x2, y2, x1, y1],
        stroke: color,
        strokeWidth: 4,
        closed: false,
    });

    layer.add(highlight);
}

// Function to add BOM Notes (Green & Red Boxes)
function addBOMNote(x, y, text, borderColor) {
    let rect = new Konva.Rect({
        x: x,
        y: y,
        width: 170,
        height: 59,
        stroke: borderColor,
        strokeWidth: 4,
        cornerRadius: 5,
    });

    let label = new Konva.Text({
        x: x + 10,
        y: y + 10,
        width: 137,
        text: text,
        fontSize: 14,
        fontFamily: 'Arial',
        fill: 'black',
        align: 'center',
    });

    layer.add(rect, label);
}

// Draw tower sections
for (let i = 0; i < sections; i++) {
    drawSection(i);
    addSectionLabel(`Section ${sections - i}`, startX - 100, startY + i * sectionHeight + 20);
}

// Add height labels at top & bottom
addSectionLabel("+60.00", startX + baseWidth + 10, startY);
addSectionLabel("+0.00", startX + baseWidth + 10, startY + sections * sectionHeight);

// Draw red-highlighted sections (Replace)
drawHighlightedSection(2, 'red');
drawHighlightedSection(3, 'red');
drawHighlightedSection(4, 'red');

// Draw green-highlighted section (Add)
drawHighlightedSection(7, 'green');

// Add BOM Notes on Right
addBOMNote(startX + 170, startY + 100, "Add the new members highlighted in green (see BOM)", 'green');
addBOMNote(startX + 170, startY + 195, "Replace the members highlighted in red (see BOM)", 'red');

layer.draw();
