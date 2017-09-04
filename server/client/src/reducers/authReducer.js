export default function(state, action) {
  const actions = {
    default: () => []
  };

  return (actions[action.type] || actions.default)();
}
