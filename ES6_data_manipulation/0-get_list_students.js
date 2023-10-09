export default function getListStudents() {
  const result = [];
  const obj1 = {
    firstName: 'Guillaume',
    id: 1,
    location: 'San Francisco',
  };
  const obj2 = {
    firstName: 'James',
    id: 2,
    location: 'Columbia',
  };
  const obj3 = {
    firstName: 'Serena',
    id: 5,
    location: 'San Francisco',
  };

  result.push({
    id: obj1.id,
    firstName: obj1.firstName,
    location: obj1.location,
  });
  result.push({
    id: obj2.id,
    firstName: obj2.firstName,
    location: obj2.location,
  });
  result.push({
    id: obj3.id,
    firstName: obj3.firstName,
    location: obj3.location,
  });

  return result;
}
