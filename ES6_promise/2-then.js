export default function handleResponseFromAPI(promise) {
  promise.then(
    (resolve) => {
      if (resolve) console.log(resolve);
      return ({ status: 200, body: 'Success' });
    },
    (reject) => {
      if (reject) console.log(reject);
      return new Error;
    },
  ).finally(() => {
    console.log('Got a response from the API');
  });
}
