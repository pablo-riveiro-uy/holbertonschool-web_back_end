export default function handleResponseFromAPI(promise) {
  promise
    .then((resolve) => {
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((reject) => {
      console.log('Got a response from the API');
      return new Error();
    }).finally(() => {
      console.log('Got a response from the API');
    }
    );
}
