/* eslint-disable react/button-has-type */
import React from 'react';
import { useHistory } from 'react-router';
import routes from 'RouterView/routes';
import { useAppDispatch, useAppSelector } from 'store';
import { init } from 'store/reducers/boardReducer';

const Index = () => {
  const history = useHistory();
  const daysLeft = useAppSelector((state) => state.board.daysLeft);
  const dispatch = useAppDispatch();

  const launchNewGame = () => {
    dispatch(init());
    history.push(routes.dashboard.path);
  };

  const continueGame = () => {
    history.push(routes.dashboard.path);
  };

  return (
    <div>
      {daysLeft}
      <button onClick={launchNewGame}>New Game</button>
      <button onClick={continueGame}>Continue</button>
    </div>
  );
};

export default Index;
