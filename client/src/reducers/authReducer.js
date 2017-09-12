import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  const actions = {
    [FETCH_USER]: () => action.payload || false,
    default: () => state
  };

  return (actions[action.type] || actions.default)();
}
