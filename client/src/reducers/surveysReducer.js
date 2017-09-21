import { FETCH_SURVEYS } from '../actions/types';

export default function(state = [], action) {
  const actions = {
    [FETCH_SURVEYS]: () => action.payload,
    default: () => state
  };

  return (actions[action.type] || actions.default)();
}
