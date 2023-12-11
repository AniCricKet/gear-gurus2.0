---
layout: base
title: Cars 2
permalink: /cars2
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

<div id="sorting-statistics"></div>
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
            <img src="images/0.png" alt="Car 1" class="car-image">
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
            <img src="images/1.png" alt="Car 2" class="car-image">
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
            <img src="images/2.png" alt="Car 3" class="car-image">
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
            <img src="images/3.png" alt="Car 4" class="car-image">
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
            <img src="images/4.png" alt="Car 5" class="car-image">
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
            <img src="images/5.png" alt="Car 6" class="car-image">
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
            <img src="images/6.png" alt="Car 7" class="car-image">
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
            <img src="images/7.png" alt="Car 8" class="car-image">
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
            <img src="images/8.png" alt="Car 9" class="car-image">
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
            <img src="images/9.png" alt="Car 10" class="car-image">
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
            <img src="images/10.png" alt="Car 11" class="car-image">
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
            <img src="images/11.png" alt="Car 12" class="car-image">
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
    let carId = 0;
    const carBoxes = document.querySelectorAll('.car-box');

    // Loop through each car box
    carBoxes.forEach((box, index) => {
        // Get the car id from the image alt attribute
        carId = parseInt(box.querySelector('.car-image').alt.split(' ')[1]);

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

    // async function fetchAllCarData() {
    //     const carIds = Array.from({ length: 12 }, (_, index) => index + 1);

    //     const carDataPromises = carIds.map(async (carId) => {
    //         carIndex = parseInt(carId)-1;
            
    //         const url = `http://localhost:8030/api/sortedids/${carIndex}`;

    //         try {
    //             const response = await fetch(url);
    //             const data = await response.json();
    //             alert(data);
    //             return { id: carId, ...data };
    //         } catch (error) {
    //             console.error(`Error fetching data for car ID ${carId}: ${error.message}`);
    //             alert(error.message);
    //             return null;
    //         }
    //     });

    //     return Promise.all(carDataPromises);
    // }
    async function fetchAllCarData() {
    const carIds = Array.from({ length: 12 }, (_, index) => index + 1);

    const carDataPromises = carIds.map(async (carId) => {
        const carIndex = carId - 1;
        const url = `http://localhost:8030/api/sortedids/${carIndex}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(`Data received for car ID ${carId}:`, data);
            return { id: carId, ...data };
        } catch (error) {
            console.error(`Error fetching data for car ID ${carId}:`, error);
            return null;
        }
    });

    try {
        const carDataArray = await Promise.all(carDataPromises);
        console.log("All data fetched successfully:", carDataArray);
        return carDataArray;
    } catch (error) {
        console.error("Error fetching car data:", error);
        return null;
    }
}


    let carIndex = 0;

    function sortPrice() {
        fetchAllCarData().then((carDataArray) => {
            //const sortedCars = carDataArray.slice().sort((a, b) => a.price - b.price);
            const sortedCars = carDataArray;
            //alert(sortedCars);
            carBoxes.forEach((box, index) => {
                //alert("foreach");
                carIndex = sortedCars[index].id - 1;
                const carData = sortedCars[index].car;

                const carStats = box.querySelector('.car-stats');
                const carImage = box.querySelector('.car-image');

                carStats.innerHTML = `
                    <div class="stat">Name: ${carData.name}</div>
                    <div class="stat">Top Speed: ${carData.topspeed} mph</div>
                    <div class="stat">Price: $${carData.price}</div>
                    <div class="stat">Range: ${carData.range} miles</div>
                    <div class="stat">Capacity: ${carData.capacity} people</div>
                `;


                carImage.src = `images/${carIndex}.png`;
                carImage.alt = `Car ${carIndex + 1}`;
            });

            // Update sorting statistics table
            updateSortingStatistics(sortedCars);
        })
        

    }

    function updateSortingStatistics(sortedCars) {
        const sortingStatisticsDiv = document.getElementById('sorting-statistics');
        const sortingStatisticsTable = document.createElement('table');
        // alert(sortedCars[0].bstatistics);
        sortingStatisticsTable.innerHTML = `
            <tr>
                <th>Algorithm</th>
                <th>Iterations</th>
                <th>Comparisons</th>
                <th>Merges/Swaps</th>
                <th>Execution Time (ns)</th>
            </tr>
            <tr>
                <td>Bubble</td>
                <td>${sortedCars[0].bstatistics?.iterations || ''}</td>
                <td>${sortedCars[0].bstatistics?.comparisons || ''}</td>
                <td>${sortedCars[0].bstatistics?.mergesOrSwaps || ''}</td>
                <td>${sortedCars[0].bstatistics?.executionTime || ''}</td>
            </tr>
            <tr>
                <td>Selection</td>
                <td>${sortedCars[0].sstatistics?.iterations || ''}</td>
                <td>${sortedCars[0].sstatistics?.comparisons || ''}</td>
                <td>${sortedCars[0].sstatistics?.mergesOrSwaps || ''}</td>
                <td>${sortedCars[0].sstatistics?.executionTime || ''}</td>
            </tr>
            <tr>
                <td>Insertion</td>
                <td>${sortedCars[0].istatistics?.iterations || ''}</td>
                <td>${sortedCars[0].istatistics?.comparisons || ''}</td>
                <td>${sortedCars[0].istatistics?.mergesOrSwaps || ''}</td>
                <td>${sortedCars[0].istatistics?.executionTime || ''}</td>
            </tr>
            <tr>
                <td>Merge</td>
                <td>${sortedCars[0].mstatistics?.iterations || ''}</td>
                <td>${sortedCars[0].mstatistics?.comparisons || ''}</td>
                <td>${sortedCars[0].mstatistics?.mergesOrSwaps || ''}</td>
                <td>${sortedCars[0].mstatistics?.executionTime || ''}</td>
            </tr>
        `;

        sortingStatisticsDiv.innerHTML = ''; // Clear previous content
        sortingStatisticsDiv.appendChild(sortingStatisticsTable);
    }

    function undoSort() {
        location.reload();
    }
</script>

</body>
</html>