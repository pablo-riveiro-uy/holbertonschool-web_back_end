export default function handleResponseFromAPI(promise) {
  promise.then((resolve) => {
    if (resolve) return { status: 200, body: 'Success' };
  },
  ).catch(
    (err) => {
      if (err) return (new Error)
    })
    .finally(() => console.log('Got a response from the API'));
}
