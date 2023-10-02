export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
  }).then((resolve) => {
    resolve({ status: 200, body: 'Success' });
  }).catch(() => new Error());
}
