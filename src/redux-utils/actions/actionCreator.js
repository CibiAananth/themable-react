import { createAction } from '@reduxjs/toolkit';

const actionCreator = ({ type, payload, meta }) => {
  const action = createAction(type)({ ...payload });
  action.meta = meta;
  return action;
};

export default actionCreator;
