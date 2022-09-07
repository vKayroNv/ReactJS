import Loading from './Loading'
import { useEffect, useCallback} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getGists } from '../../store/selectors'
import { getAllGists } from '../../store/thunks'
import { List, ListItem, Button, Container } from '@mui/material';

export default function Gists() {

  const dispatch = useDispatch();
  const { gists, error, loading } = useSelector(getGists, shallowEqual);

  const requestGists = () => {
    dispatch(getAllGists());
  };

  useEffect(() => {
    requestGists();
  },[]);

  const renderGist = useCallback((gist) => <ListItem key={gist.id}>{gist.description}</ListItem>, []);

  if (loading) {
    return  <Loading /> ;
  }
  if (error) {
    return (
      <Container>
        <h3>Error: {error}</h3 >
        <Button onClick={requestGists}>Retry</Button>
      </Container> 
    );
  }
  return <List>{gists.map(renderGist)}</List>;
}