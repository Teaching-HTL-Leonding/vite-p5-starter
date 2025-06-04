import p5 from 'p5';

const ARRAY_SIZE = 50;

let numbers: number[] = [];
let isSorted: boolean = false;

const p = new p5((sketch: p5) => {
  sketch.setup = setup;
  sketch.draw = draw;
  sketch.keyPressed = keyPressed;
});

function setup() {
  p.createCanvas(800, 400);
  generateRandomArray();
  p.noLoop();
}

function draw() {
  p.background('white');
  drawNumbers();
}

function generateRandomArray() {
  // Generate numbers 1 to ARRAY_SIZE
  numbers = [];
  for (let i = 1; i <= ARRAY_SIZE; i++) {
    numbers.push(i);
  }

  // Shuffle the array randomly
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
  }

  isSorted = false;
}

function drawNumbers() {
  const barWidth = p.width / numbers.length;

  for (let i = 0; i < numbers.length; i++) {
    const barHeight = (numbers[i] / ARRAY_SIZE) * (p.height - 50);
    const x = i * barWidth;
    const y = p.height - barHeight;

    // Color bars differently based on sort state
    if (isSorted) {
      p.fill('green');
    } else {
      p.fill('red');
    }

    p.stroke('black');
    p.rect(x, y, barWidth - 1, barHeight);

    // Draw the number on top of each bar
    p.fill('black');
    p.textAlign(p.CENTER);
    p.textSize(10);
    p.text(numbers[i].toString(), x + barWidth / 2, y - 5);
  }
}

function bubbleSort() {
  const n = numbers.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        // Swap elements
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
        swapped = true;
      }
    }

    // If no swaps were made, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  isSorted = true;
}

function keyPressed() {
  if (p.key === ' ') {
    if (isSorted) {
      // If currently sorted, shuffle the array
      generateRandomArray();
    } else {
      // If currently shuffled, sort the array
      bubbleSort();
    }

    p.redraw();
  }
}
