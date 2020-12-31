export default function manageBand(state = {
  bands: [],
}, action) {
  if (action.type === 'ADD_BAND') {
    // state.bands.push(action.band);
    return {bands: state.bands.concat(action.band)}
  }
  else return state
};
