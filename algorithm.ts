// - Algorithm: Bubble Sort
const bubbleSort = (arr: number[]): number[] => {
  // Loop through all elements in the array
  for (let i = 0; i < arr.length; i++) {
    // Loop through all elements in the array
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Compare the current element with the next element
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

// - Algorithm: Selection Sort
const selectionSort = (arr: number[]): number[] => {
  // Loop through all elements in the array
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    // Loop through all elements in the array
    for (let j = i + 1; j < arr.length; j++) {
      // Find the minimum element in the array
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // Swap the current element with the minimum element
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
};

//- Algorithm: Insertion sort
const insertionSort = (arr: number[]): number[] => {
  // Loop through all elements in the array
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    // Compare the current element with the previous elements
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return arr;
};

// - Algorithm: Merge Sort
const merge = (left: number[], right: number[]): number[] => {
  let result: number[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift() as number);
    } else {
      result.push(right.shift() as number);
    }
  }
  return result.concat(left, right);
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

// - Algorithm: Quick Sort
const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const right = arr.filter((x) => x > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
};
