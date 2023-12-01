---
layout: base
title: Compare Cars
permalink: /compare
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Car Comparison</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }
    .comparison-card {
      border: 1px solid #ccc;
      padding: 10px;
      width: 45%;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>

<h1>Car Comparison</h1>

<!-- Dropdown for selecting cars -->
<label for="car1">Select Car 1:</label>
<select id="car1" onchange="compareCars()">
  <option value="" disabled selected>Select Car</option>
  <option value="car1">Car 1</option>
  <option value="car2">Car 2</option>
  <!-- Add options for the rest of the cars -->
</select>

<label for="car2">Select Car 2:</label>
<select id="car2" onchange="compareCars()">
  <option value="" disabled selected>Select Car</option>
  <option value="car1">Car 1</option>
  <option value="car2">Car 2</option>
  <!-- Add options for the rest of the cars -->
</select>

<!-- Container for comparison -->
<div class="container" id="comparisonContainer">
  <div class="comparison-card" id="car1Card">
    <!-- Car 1 details will be displayed here -->
  </div>
  <div class="comparison-card" id="car2Card">
    <!-- Car 2 details will be displayed here -->
  </div>
</div>

<script>
  function compareCars() {
    const car1Selection = document.getElementById("car1").value;
    const car2Selection = document.getElementById("car2").value;

    // Check if both cars are selected
    if (car1Selection && car2Selection && car1Selection !== car2Selection) {
      const car1Details = getCarDetails(car1Selection);
      const car2Details = getCarDetails(car2Selection);

      // Display car details in the comparison cards
      displayCarDetails("car1Card", car1Details);
      displayCarDetails("car2Card", car2Details);
    }
  }

  function getCarDetails(car) {
    // Replace this with actual data for each car
    const carDetails = {
      image: "car_image_url",  // URL to the car image
      name: "Car Name",
      range: "Range",
      price: "Price",
      topSpeed: "Top Speed",
      capacity: "Capacity"
    };

    // Replace with actual data for each car
    // You can fetch this data from a database or an API
    // For simplicity, use placeholder values for now

    return carDetails;
  }

  function displayCarDetails(cardId, details) {
    const card = document.getElementById(cardId);
    card.innerHTML = `
      <img src="${details.image}" alt="${details.name}">
      <h3>${details.name}</h3>
      <p><strong>Range:</strong> ${details.range}</p>
      <p><strong>Price:</strong> ${details.price}</p>
      <p><strong>Top Speed:</strong> ${details.topSpeed}</p>
      <p><strong>Capacity:</strong> ${details.capacity}</p>
    `;
  }
</script>

</body>
</html>
