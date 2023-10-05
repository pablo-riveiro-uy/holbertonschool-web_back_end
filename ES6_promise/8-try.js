export default function divideFunction(numerator, denominator) {
  let result;
  try {
    result = numerator / denominator;
    throw (
      new Error('cannot divide by 0')
    );
  } catch (err) {
    console.error(err);
  }
  return result;
}
