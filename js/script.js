document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const triangleForm = document.getElementById("triangleForm");
    const resultsSection = document.getElementById("results");
    const areaResult = document.getElementById("areaResult");
    const perimeterResult = document.getElementById("perimeterResult");

    calculateButton.addEventListener("click", function () {
        const base = parseFloat(document.getElementById("base").value);
        const height = parseFloat(document.getElementById("height").value);

        if (isNaN(base) || isNaN(height)) {
            alert("Harap masukkan angka yang valid untuk panjang alas dan tinggi.");
            return;
        }

        const area = 0.5 * base * height;
        const perimeter = base + 2 * Math.sqrt((height ** 2) + ((base / 2) ** 2));

        areaResult.textContent = area.toFixed(2);
        perimeterResult.textContent = perimeter.toFixed(2);

        resultsSection.style.display = "block";
    });
});
