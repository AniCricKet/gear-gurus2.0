---
layout: base
title: F-ART
permalink: /art
---
<script src="https://cdn.tailwindcss.com"></script>
<div class="w-full max-w-md mx-auto">

  <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mb-4">
  </button>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
    <div class="flex flex-col space-y-1.5 p-6">
      <h3 class="text-2xl font-semibold leading-none tracking-tight">Fibonacci Art</h3>
      <p class="text-sm text-muted-foreground">Generated artwork based on the Fibonacci sequence.</p>
    </div>
    <div class="p-6">
      <div id="art" class="w-full h-[300px] bg-gray-200 flex items-center justify-center">
        <p class="text-gray-500">Your art will be generated here...</p>
      </div>
    </div>
    <div class="p-6 flex justify-between items-center">
      <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3" onclick="generateFibonacci()">
        Generate
      </button>
    </div>
  </div>
</div>
<script>
  function generateFibonacci() {
      let imageHolder = document.getElementById("art");
      let image = document.createElement("img");
      image.src = "http://127.0.0.1:8030/api/fibo/generate#" + new Date().getTime();
      imageHolder.innerHTML = "";
      imageHolder.appendChild(image);
   }
</script>