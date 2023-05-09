const { useParams } = require('react-router-dom');

export const Subbreeds = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   HTTP запрос, если нужно
  // }, [])
  // })
  
  return <div>Subbreeds: {dogId}</div>;
};