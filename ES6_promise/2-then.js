export default function handleResponseFromAPI(promise) {
  return new Promise((resolve) => {
    if (promise) {
      resolve({ status: 200, body: 'success' });
    } else {
      return (new Error());
    }

    return (new Error());
  }).finally(console.log('Got a response from the API'));
}
