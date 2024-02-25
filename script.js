
const bmiText = document.getElementById('bmi');
const descText = document.getElementById('desc');
const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e){
e.preventDefault();
const weight = parseFloat(form.weight.value);
const height = parseFloat(form.height.value);


    // Check if the input values are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // Convert height to meters
    var heightInMeters = height / 100;

    // Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    var bmi = weight / (heightInMeters * heightInMeters);
    const desc = interpretBMI(bmi);
    // Display the calculated BMI
    bmiText.textContent = bmi.toFixed(2);
    descText.innerHTML = `Your are <Strong>${desc}</Strong>`;
    bmiText.className = desc;
}
    function interpretBMI(bmi){
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }    
}

