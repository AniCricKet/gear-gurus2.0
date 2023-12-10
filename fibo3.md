---
layout: base
title: ART
permalink: /art
---
<body>
    <h1>Fibonacci Art</h1>
    <button onclick="generateFibonacci()">Generate Fibonacci</button>
    <p id="fibonacciResult"></p>
    <p id="executionTime"></p>

    <script>
        function generateFibonacci() {
            const startTime = performance.now();

            fetch('http://127.0.0.1:8030/api/fibonacci/generate')
                .then(response => response.text())
                .then(data => {
                    const endTime = performance.now();
                    const executionTime = endTime - startTime;

                    document.getElementById('fibonacciResult').innerText = data;
                    document.getElementById('executionTime').innerText = `Execution Time: ${executionTime} milliseconds`;
                })
                .catch(error => console.error('Error:', error));
        }
    </script>
</body>
</html>