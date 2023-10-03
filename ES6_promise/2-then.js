export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'success' });
    } else {
      return (new Error());
    }
    reject(new Error());
    return new Error();
  }).finally(console.log('Got a response from the API'));
}
