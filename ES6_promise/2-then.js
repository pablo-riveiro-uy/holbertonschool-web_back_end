export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'success' });
    }
    const newError = new Error();
    if (typeof (promise) === typeof (newError)) {
      reject(Object.create(Error.prototype));
    }
    if (typeof (promise) === typeof (newError)) { return new Error(); } return new Error();
  }).finally(console.log('Got a response from the API'));
}
