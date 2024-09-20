// Function for multiplication of two numbers
function multiplication() {
    // Get the values of the two input fields
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    // Convert values to numbers and multiply them
    let result = Number(first) * Number(second);

    // Check if the result is negative
    if (result < 0) {
        // Display the result in red if it's negative
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color = "red";
    } else {
        // Otherwise, display the result in default color
        document.getElementById("output").innerHTML = String(result);
    }
}

// Function for division of two numbers
function division() {
    // Get the values of the two input fields
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    // Convert values to numbers and divide them
    let result = Number(first) / Number(second);

    // Check if the result is negative
    if (result < 0) {
        // Display the result in red if it's negative
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color = "red";
    } else {
        // Otherwise, display the result in default color
        document.getElementById("output").innerHTML = String(result);
    }
}

// Function for addition of two numbers
function addition() {
    // Get the values of the two input fields
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    // Convert values to numbers and add them
    let result = Number(first) + Number(second);

    // Check if the result is negative
    if (result < 0) {
        // Display the result in red if it's negative
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color = "red";
    } else {
        // Otherwise, display the result in default color
        document.getElementById("output").innerHTML = String(result);
    }
}

// Function for subtraction of two numbers
function subtraction() {
    // Get the values of the two input fields
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    // Convert values to numbers and subtract them
    let result = Number(first) - Number(second);

    // Check if the result is negative
    if (result < 0) {
        // Display the result in red if it's negative
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color = "red";
    } else {
        // Otherwise, display the result in default color
        document.getElementById("output").innerHTML = String(result);
    }
}

// Function for raising the first number to the power of the second
function power() {
    // Get the values of the two input fields
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    // Initialize result to 1 (anything to the power of 0 is 1)
    let result = 1;

    // Multiply result by 'first' 'second' times (power calculation)
    for (let i = 0; i < second; i = i + 1) {
        result = first * result;
    }

    // Check if the result is negative
    if (result < 0) {
        // Display the result in red if it's negative
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color = "red";
    } else {
        // Otherwise, display the result in default color
        document.getElementById("output").innerHTML = String(result);
    }
}

// Function to clear the calculator inputs and result display
function clearCalc() {
    // Clear the values of the two input fields
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";

    // Clear the result display
    document.getElementById("output").innerHTML = "";
}