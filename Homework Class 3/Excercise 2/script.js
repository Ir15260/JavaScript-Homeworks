function calculateDogAge(age, toDogYears = true) {
    if (toDogYears) {

        return age * 7;
    } else {

        return age / 7;
    }
}

// Testing the function
console.log("5 human years in dog years:", calculateDogAge(5));
console.log("35 dog years in human years:", calculateDogAge(35, false));
