import { useState } from 'react';
import { Button, TextField, Container, Checkbox, FormControlLabel } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux'
import { changeUsername } from '../../store/usernameActions';
import { changeAnswerphoneState } from '../../store/answerphoneActions';

export default function Profile() {

  const dispatch = useDispatch();

  const [tempUsername, setTempUsername] = useState(useSelector((state) => state.username.value));
  const [tempAnswerphone, setTempAnswerphone] = useState(useSelector((state) => state.answerphone.value));

  const tempChangeUsername = input => {
    setTempUsername(input);
  }
  const tempChangeAnswerphone = () => {
    setTempAnswerphone(!tempAnswerphone);
  }

  return(
    <>
      <br/>
      <Container>
        <TextField autoFocus fullWidth label="Ваше имя" variant="filled" value={tempUsername} onChange={event => tempChangeUsername(event.target.value)} inputProps={{style: {color: "white"}}} />
          <FormControlLabel control={<Checkbox checked={tempAnswerphone} onChange={event => tempChangeAnswerphone()} />} label="Включить автоответчик" />
        <Button fullWidth variant="contained" onClick={() => { 
          dispatch(changeUsername(tempUsername));
          dispatch(changeAnswerphoneState(tempAnswerphone))
          alert('Изменения сохранены');
        }}>Сохранить</Button>
      </Container>
    </>
  );
}