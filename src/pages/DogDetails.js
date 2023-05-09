// import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   HTTP запрос, если нужно
  // }, [])
  // })

  return (
    <>
      <h1>DogDetails: {dogId}</h1>;
      <ul>
        <li>
          <Link to="subbreeds">Подпороды</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
    </>
  );
};

export default DogDetails;