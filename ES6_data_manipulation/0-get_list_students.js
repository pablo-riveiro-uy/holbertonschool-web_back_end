export default function getListStudents() {
  const result = [];
  const obj1 = {
    FirstName: 'Guillaume',
    id: 1,
    location: 'San Francisco',
  };
  const obj2 = {
    FirstName: 'James',
    id: 2,
    location: 'Columbia',
  };
  const obj3 = {
    FirstName: 'Serena',
    id: 5,
    location: 'San Francisco',
  };

  result.push({
    id: obj1.id,
    FirstName: obj1.FirstName,
    location: obj1.location,
  });
  result.push({
    id: obj2.id,
    FirstName: obj2.FirstName,
    location: obj2.location,
  });
  result.push({
    id: obj3.id,
    FirstName: obj3.FirstName,
    location: obj3.location,
  });

  return result;
}
