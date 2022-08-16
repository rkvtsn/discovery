import React from 'react';
import { useAppSelector } from 'store';
import { taskSelector } from 'store/reducers/taskReducer';

const Tasks = () => {
  // const dispatch = useAppDispatch();
  const { active } = useAppSelector(taskSelector);
  return (
    <div>
      <h4>Задачи</h4>
      {active.map((card) => (
        <div key={card.id}>{card.title}</div>
      ))}
    </div>
  );
};

export default Tasks;
