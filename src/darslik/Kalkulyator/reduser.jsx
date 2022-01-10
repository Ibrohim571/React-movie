export default function reduser(state, {type, payload}) {
  if(type == "ADDNUMBER") {
    return{
      ...state,
      natija: state.natija + (+payload.id)
    }
  }
  else {
    return state
  }
}
