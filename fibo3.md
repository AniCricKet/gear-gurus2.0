---
layout: base
title: Fibonacci Calculator & Sorting Benchmarks
permalink: /Fibo
---

<head>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      text-align: center;
      margin: 20px;
    }

    h1, h2 {
      color: #333;
    }

    label {
      font-size: 18px;
      margin-right: 10px;
    }

    input {
      padding: 5px;
      font-size: 16px;
    }

    button {
      padding: 8px 16px;
      font-size: 16px;
      cursor: pointer;
    }

    p {
      font-size: 18px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>Fibonacci Calculator & Sorting Benchmarks</h1>
  <label for="inputNumber">Enter a number: </label>
  <input type="number" id="inputNumber" min="0">
  <button onclick="performOperations()">Calculate & Benchmark</button>
  <p id="result"></p>

  <script>
    function performOperations() {
      const inputElement = document.getElementById('inputNumber');
      const resultElement = document.getElementById('result');

      const n = parseInt(inputElement.value);

      if (isNaN(n) || n < 0) {
        resultElement.textContent = 'Please enter a non-negative integer.';
        return;
      }

      const fibNumber = fibonacci(n);
      resultElement.textContent = `Fibonacci(${n}) = ${fibNumber}`;

      benchmarkSortingAlgorithms();
    }

    function fibonacci(n) {
      if (n <= 1) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }

    function benchmarkSortingAlgorithms() {
      const sortingResultsElement = document.getElementById('result');

      const arrayToSort = generateRandomArray(1000);

      const bubbleSortTime = benchmarkSort(bubbleSort, arrayToSort.slice());
      const selectionSortTime = benchmarkSort(selectionSort, arrayToSort.slice());
      const quickSortTime = benchmarkSort(quickSort, arrayToSort.slice());

      sortingResultsElement.innerHTML = `
        <strong>Bubble Sort:</strong> ${bubbleSortTime} milliseconds<br>
        <strong>Selection Sort:</strong> ${selectionSortTime} milliseconds<br>
        <strong>Quick Sort:</strong> ${quickSortTime} milliseconds
      `;
    }

    function generateRandomArray(size) {
      const array = [];
      for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 1000));
      }
      return array;
    }

    function benchmarkSort(sortFunction, arrayToSort) {
      const startTime = performance.now();
      sortFunction(arrayToSort);
      const endTime = performance.now();
      return endTime - startTime;
    }

    function bubbleSort(arr) {
      const n = arr.length;
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    }

    function selectionSort(arr) {
      const n = arr.length;
      for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }

    function quickSort(arr) {
      if (arr.length <= 1) return arr;
      const pivot = arr[arr.length - 1];
      const left = [];
      const right = [];

      for (let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
      }

      return [...quickSort(left), pivot, ...quickSort(right)];
    }
  </script>
</body>
</html>
