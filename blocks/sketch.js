var palette = ["#152A84", "#776EAA", "#201315", "#DB1D6B", "#CDE4CF", "#008460", "#DBE479", "#F1C42F", "#E22733", "#FFFFFF"];

// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
let symmetry = 4;

let angle = 360 / symmetry;

let q; // width and height of one quadrant
let w = 5; // width of a pixel

let availableColors = [];
let backgroundColor;

function setup() {
    createCanvas(100, 100);
    q = width / 2; // width and height of one quadrant
    angleMode(DEGREES);
    noStroke();
}

let t = 0;
function draw() {

    if (t == 200) { // if x seconds have past

        // all colors in the palette are available
        availableColors = [...palette];

        // new background color
        backgroundColor = random(palette);
        fill(backgroundColor);
        rect(0, 0, width, height); // draw background

        translate(width / 2, height / 2); // translate to center

        // remove used color
        const index = availableColors.indexOf(backgroundColor);
        if (index > -1) availableColors.splice(index, 1);

        // new color for pixels from available colors
        fill(random(availableColors))
        for (let i = 0; i < q; i += w) {
            for (let j = 0; j < q; j += w) {
                if (random(1) > 0.5) drawSymmetry(i, j, w, w) // draw random pixels symmetrically
            }
        }
        t = 0;
    }

    t++; // increase time
}

function drawSymmetry(x, y, w, h) {

    for (let s = 0; s < symmetry; s++) {
        rotate(angle);
        rect(x, y, w, h)
        push();
        scale(1, -1);
        rect(x, y, w, h)
        pop();
    }
}
