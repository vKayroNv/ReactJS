import Loading from './Loading'
import { useEffect, useCallback} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getGists } from '../../store/selectors'
import { getAllGists } from '../../store/gists'
import { Button, Container } from '@mui/material';
import GistElement from '../GistElement'

export default function Gists() {

  const dispatch = useDispatch();
  const { gists, error, loading } = useSelector(getGists, shallowEqual);

  const requestGists = () => {
    dispatch(getAllGists());
  };

  useEffect(() => {
    requestGists();
  }, []);

  const renderGist = useCallback((gist) => <GistElement key={gist.id} gist={gist} />, []);

  if (loading) {
    return  <Loading /> ;
  }
  if (error) {
    return (
      <Container className="center-screen">
        <h3>Error: {error}</h3 >
        <Button onClick={requestGists}>Retry</Button>
      </Container> 
    );
  }
  return(
    <Container maxWidth="xl">
      {gists.map(renderGist)}
    </Container>
  );
}