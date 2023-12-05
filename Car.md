---
layout: base
title: Cars
permalink: /cars
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Stats Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .models {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            max-width: 1200px;
            margin: 20px auto;
            transition: transform 0.3s ease-in-out;
        }
        .car-box {
            width: 30%; /* Adjusted width for 4 boxes in a row */
            margin: 10px;
            padding: 5px;
            background-color: #333;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            text-align: center;
            transition: transform 0.3s ease-in-out;
        }
        .car-image {
            max-width: 100%;
            height: auto;
            border-radius: 4px;
        }
        .car-stats {
            margin-top: 15px;
        }
        .stat {
            margin: 5px;
            padding: 8px;
            background-color: #3498db;
            color: #fff;
            border-radius: 4px;
        }
        .car-brand {
            margin: auto;
            width: 50%;
            /* padding: 10px; */
        }
        .sort-method {
            font-size: 20px;
        }
        .sort-buttons {
            font-size: 20px;
        }
        /* Add this style to your existing styles */
        .card-transition {
            transition: transform 0.3s ease-in-out;
        }
    </style>
</head>
<body>


<div class="sort-method">
    <label>Sort by algorithm:</label>
    <input type="radio" name="algorithm" value="bubble" id="bubble"> <label for="bubble">Bubble</label>
    <input type="radio" name="algorithm" value="selection" id="selection"> <label for="selection">Selection</label>
    <input type="radio" name="algorithm" value="insertion" id="insertion"> <label for="insertion">Insertion</label>
    <input type="radio" name="algorithm" value="merge" id="merge"> <label for="merge">Merge</label>
</div>
<div class="sort-buttons">
    <label for="sort-by">Sort by price:</label>
    <button onclick="sortPrice()">Sort</button>
    <button onclick="undoSort()">Undo</button>
</div>
<div id="swap-counter" class="swap-counter"></div>
<div class="container">
    <div class="models">
        <!-- Car Box 1 -->
        <div class="car-box">
            <img src="images/bmw_x7.png" alt="Car 1" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
        <!-- Car Box 2 -->
        <div class="car-box">
            <img src="images/bmw_8.png" alt="Car 2" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
        <!-- Car Box 3 -->
        <div class="car-box">
            <img src="images/bmw_i7.png" alt="Car 3" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
    </div>
    <div class="models">
        <!-- Car Box 4 -->
        <div class="car-box">
            <img src="images/tesla_3.png" alt="Car 4" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
        <!-- Car Box 5 -->
        <div class="car-box">
            <img src="images/tesla_s.png" alt="Car 5" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
        <!-- Car Box 6 -->
        <div class="car-box">
            <img src="images/tesla_x.png" alt="Car 6" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
    </div>
    <div class="models">
        <!-- Car Box 7 -->
        <div class="car-box">
            <img src="images/toyota_camry.png" alt="Car 7" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
        <!-- Car Box 8 -->
        <div class="car-box">
            <img src="images/toyota_sienna.png" alt="Car 8" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
        <!-- Car Box 9 -->
        <div class="car-box">
            <img src="images/toyota_prius.png" alt="Car 9" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
    </div>
    <div class="models">
        <!-- Car Box 10 -->
        <div class="car-box">
            <img src="images/honda_crv.png" alt="Car 10" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
        <!-- Car Box 11 -->
        <div class="car-box">
            <img src="images/honda_accord.png" alt="Car 11" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
        <!-- Car Box 12 -->
        <div class="car-box">
            <img src="images/honda_odyssey.png" alt="Car 12" class="car-image">
            <div class="car-stats">
                <div class="stat">Name: XYZ</div>
                <div class="stat">Top Speed: 2023</div>
                <div class="stat">Price: $25,000</div>
                <div class="stat">Range: 30,000 miles</div>
                <div class="stat">Capacity: $25,000</div>
            </div>
        </div>
    </div>
</div>

<script>
    let swapCounter = 0;
    const carBoxes = document.querySelectorAll('.car-box');

    // Loop through each car box
    carBoxes.forEach((box, index) => {
        // Get the car id from the image alt attribute
        const carId = box.querySelector('.car-image').alt.split(' ')[1];

        // Make a GET request to the API
        fetch(`http://localhost:8030/api/car/${carId}`)
            .then(response => response.json())
            .then(data => {
                // Get the car stats div
                const carStats = box.querySelector('.car-stats');

                // Update the stats with the data from the API
                carStats.innerHTML = `
                    <div class="stat">Name: ${data.name}</div>
                    <div class="stat">Top Speed: ${data.topspeed} mph</div>
                    <div class="stat">Price: $${data.price}</div>
                    <div class="stat">Range: ${data.range} miles</div>
                    <div class="stat">Capacity: ${data.capacity} people</div>
                `;
            })
            .catch(error => console.error('Error:', error));
    });

    let priceArray = [];

    function displaySwapCounter() {
        const swapCounterElement = document.createElement('div');
        swapCounterElement.textContent = `Swaps: ${swapCounter}`;
        document.body.appendChild(swapCounterElement);
    }

    async function fetchAllCarPrices() {
        const carIds = Array.from({ length: 12 }, (_, index) => index + 1);

        // Map each car ID to a promise that fetches its price
        const pricePromises = carIds.map(async (carId) => {
            const url = `http://localhost:8030/api/car/${carId}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                // Assuming the response has a 'price' property
                const carPrice = data.price;

                priceArray.push(carPrice);
            } catch (error) {
                console.error(`Error fetching data for car ID ${carId}: ${error.message}`);
            }
        });

        // Wait for all promises to resolve
        await Promise.all(pricePromises);
    }

    function sortPrice() {
        priceArray = [];
        sortedArray = [];

        fetchAllCarPrices().then(() => {
            const selectedAlgorithm = document.querySelector('input[name="algorithm"]:checked').value;
	        console.log("Original Array", priceArray);
	        if (selectedAlgorithm === 'merge') {
	            sortedArray = mergeSort(priceArray);
	            console.log("Sorted array using Merge Sort:", sortedArray);
	        } else {
	            console.log("Selected sorting algorithm is not supported yet.");
	        }

	        const sortedCarBoxes = Array.from(carBoxes).sort((a, b) => {
	            const priceA = parseFloat(a.querySelector('.stat:nth-child(3)').textContent.split('$')[1].replace(/,/g, ''));
	            const priceB = parseFloat(b.querySelector('.stat:nth-child(3)').textContent.split('$')[1].replace(/,/g, ''));
	            return sortedArray.indexOf(priceA) - sortedArray.indexOf(priceB);
	        });

	        // Apply transition class to enable smooth animation
	        sortedCarBoxes.forEach((box, index) => {
	            box.classList.add('card-transition');
	        });

	        const container = document.querySelector('.container');
	        container.innerHTML = '';
	        for (let i = 0; i < sortedCarBoxes.length; i += 3) {
	            const row = document.createElement('div');
	            row.classList.add('models');
	            row.innerHTML = sortedCarBoxes.slice(i, i + 3).map(box => box.outerHTML).join('');
	            container.appendChild(row);
	        }

	        // Trigger reflow to apply the transition class
	        container.offsetHeight;

	        // Remove the transition class to prevent unwanted transitions during subsequent updates
	        sortedCarBoxes.forEach((box, index) => {
	            box.classList.remove('card-transition');
	        });

	        fetchAllCarPrices();
	    });
	}

    function mergeSort(priceArray) {
        if (priceArray.length <= 1) {
            return priceArray;
        }

        // Split the array into two halves
        const middle = Math.floor(priceArray.length / 2);
        const leftHalf = priceArray.slice(0, middle);
        const rightHalf = priceArray.slice(middle);

        // Recursively sort each half
        const leftSorted = mergeSort(leftHalf);
        const rightSorted = mergeSort(rightHalf);

        // Merge the sorted halves
        return merge(leftSorted, rightSorted);
        }

        function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        // Compare elements from left and right arrays and merge them
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
                swapCounter++;
            }
        }

        // If there are remaining elements in left or right array, append them
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    function undoSort() {
        location.reload();
    }
</script>

</body>
</html>
