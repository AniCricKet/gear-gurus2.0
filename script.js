async function compareSortingAlgorithms(algorithm) {
    const data = generateRandomData(10); // Adjust size as needed

    const result = await sortData(algorithm, data);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>${algorithm.toUpperCase()} Sort Results</h2>
        <p>Iterations: ${result.iterations}</p>
        <p>Comparisons: ${result.comparisons}</p>
        <p>Swaps: ${result.swaps}</p>
    `;
}

async function sortData(algorithm, data) {
    const response = await fetch(`/sort/${algorithm}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

function generateRandomData(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}
