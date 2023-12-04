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
        }
        .car-box {
            width: 30%; /* Adjusted width for 4 boxes in a row */
            margin: 10px;
            padding: 5px;
            background-color: #333;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            text-align: center;
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
    </style>
</head>
<body>



<div class="container">
    <!-- Dropdown for sorting -->
    <div class="sort-dropdown">
        <label for="sort-by">Sort by:</label>
        <select id="sort-by">
            <option value="sortingstat" disabled>Statistic to Sort By</option>
            <option value="name">Name</option>
            <option value="topspeed">Top Speed</option>
            <option value="price">Price</option>
            <option value="range">Range</option>
            <option value="capacity">Capacity</option>
        </select>
    </div>
    <div class="models">
        <!-- Car Box 1 -->
        <div class="car-box">
            <img src="car1.jpg" alt="Car 1" class="car-image">
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
            <img src="car2.jpg" alt="Car 2" class="car-image">
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
            <img src="car3.jpg" alt="Car 3" class="car-image">
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
            <img src="car4.jpg" alt="Car 4" class="car-image">
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
            <img src="car5.jpg" alt="Car 5" class="car-image">
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
            <img src="car6.jpg" alt="Car 6" class="car-image">
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
            <img src="car7.jpg" alt="Car 7" class="car-image">
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
            <img src="car8.jpg" alt="Car 8" class="car-image">
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
            <img src="car9.jpg" alt="Car 9" class="car-image">
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
            <img src="car10.jpg" alt="Car 10" class="car-image">
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
            <img src="car11.jpg" alt="Car 11" class="car-image">
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
            <img src="car12.jpg" alt="Car 12" class="car-image">
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
    // Get all the car boxes
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
                    <div class="stat">Top Speed: ${data.topspeed}</div>
                    <div class="stat">Price: $${data.price}</div>
                    <div class="stat">Range: ${data.range} miles</div>
                    <div class="stat">Capacity: $${data.capacity}</div>
                `;
            })
            .catch(error => console.error('Error:', error));
    });
</script>


</body>
</html>

</body>
</html>
