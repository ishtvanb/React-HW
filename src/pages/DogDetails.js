import { Suspense } from 'react';
import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const DogDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  const { dogId } = useParams();

  // useEffect(() => {
  //   HTTP запрос, если нужно
  // }, [])
  // })

  return (
    <>
      <h1>DogDetails: {dogId}</h1>;
      <Link to={backLinkLocationRef.current}>Назад  к странице коллекции</Link>
      <ul>
        <li>
          <Link to="subbreeds">Подпороды</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;