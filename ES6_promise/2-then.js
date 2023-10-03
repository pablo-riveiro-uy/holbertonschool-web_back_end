export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'success' });
    }
    const newError = new Error();
    if (promise === newError) {
      reject(Object.create(Error.prototype));
    }
  }).finally(console.log('Got a response from the API'));
}
