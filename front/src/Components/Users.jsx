import { useEffect, useState } from 'react';

const Users = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const preResult = await fetch('/api');
    const { data } = await preResult.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map(({ id, label }) => (
          <li key={id}>{label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
