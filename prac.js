let arr = [1, 2, 1, 3, 2];

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let alreadyCounted = false;

    // Check if element was already counted
    for (let k = 0; k < i; k++) {
        if (arr[i] === arr[k]) {
            alreadyCounted = true;
            break;
        }
    }

    if (alreadyCounted) {
        continue;
    }

    // Count occurrences
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    console.log(arr[i] + " appears " + count + " times");
}