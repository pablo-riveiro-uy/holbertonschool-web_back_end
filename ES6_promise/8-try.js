export default function divideFunction(numerator, denominator) {
  let result = 0;
  try {
    if (denominator !== 0) result = numerator / denominator;
    throw (
      new Error('cannot divide by 0')
    );
  } catch (err) {
    console.error(err);
  }
  return result;
}
