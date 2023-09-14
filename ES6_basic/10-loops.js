export default function appendToEachArrayValue(array, appendString) {
    for (let element of array) {
        let new_element = appendString + element
        array[array.indexOf(element)] = new_element
      }

      return array;
    }