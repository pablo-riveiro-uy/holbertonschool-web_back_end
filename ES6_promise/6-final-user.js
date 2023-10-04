import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  let result = []
  return new Promise((resolve) => {
    if (resolve) {
      Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((values) => {
        result.push(values.resovle.status);
        result.push(values.reject);
        resolve(
          result,
        ).catch(
          result,
        );
      });
    }
  });
}
