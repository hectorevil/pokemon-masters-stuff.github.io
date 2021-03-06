import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { resetGrids } from '../../actions/actionCreators';
import { setQueryStringValue } from '../../queryString';

const ResetGridButton = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    setQueryStringValue('grid', []);
    dispatch(resetGrids());
  };

  return (
    <Button variant="outlined" onClick={handleOnClick}>
      Reset
    </Button>
  );
};

export default ResetGridButton;
