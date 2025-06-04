# Sorter Exam Specification

## Introduction

In this exam, you will demonstrate your understanding of the **Bubble Sort** algorithm by implementing and visualizing it in code. You are expected to display both the unsorted (randomized) and sorted states of an array using a bar chart.

## Coding Tasks

### Minimum Requirements

Your implementation **must** fulfill the following:

1. **Global Array Declaration**

   * Declare an array (preferably as a global variable) to hold a sequence of numbers.

2. **Array Initialization**

   * On program startup, fill the array with consecutive numbers starting at 1 up to an upper limit (e.g., 30).
   * The upper limit should be **easily adjustable** (e.g., by changing a constant).
   * The array values must be in a **random order** (shuffled).

3. **Bar Chart Visualization**

   * Draw a bar chart representing the numbers in the array.
   * The order of the bars in the chart must correspond to the order of numbers in the array (i.e., if the array is `[5, 1, 8]`, the bar chart shows bars for 5, 1, and 8 in that order).
   * Example (**numbers above bars not required at this stage**):

     ![Shuffled bar chart](./shuffled.png)

4. **Sorting on Key Press**

   * When the **space bar** is pressed:

     * Apply the Bubble Sort algorithm to sort the array **in ascending order**.
     * You **must implement Bubble Sort yourself**—do not use built-in or library sort functions.
     * After sorting, **update the bar chart** to reflect the sorted array.

     Example:

     ![Sorted bar chart](./sorted.png)

### Advanced Requirements

To earn full points, **additionally implement** the following features:

1. **Function Extraction**

   * Place your Bubble Sort code in a **separate function** (not directly inside event handlers or the main logic).

2. **Number Labels**

   * Draw the value of each number **above its respective bar**, as shown in the images above.

3. **Repeated Sorting & Shuffling**

   * After the array is sorted:

     * If the user presses the space bar again, re-randomize (shuffle) the array.
     * This allows users to **alternate between sorting and shuffling** by repeatedly pressing the space bar.

## Quality Criteria

Your code should adhere to these standards:

* **Avoid “magic numbers”**: Use named constants for important values (e.g., array size, bar width).
* **Minimize global variables**: Keep variables with limited scope local to functions when possible.
* **No code duplication**: Factor out repeated logic into reusable functions.
