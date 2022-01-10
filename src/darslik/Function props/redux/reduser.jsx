import { SportsCricket } from "@material-ui/icons"

const reduser = (state, {type}) => {
  if(type == "START") {
    return{
      ...state,
      isCouting: true
    }
  }

  if(type == 'STOP') {
    return{
      ...state,
      isCouting: false
    }
  }

  if(type == 'RESET') {
    return{
      ...state,
      count: 0
    }
  }

  if(type == 'TICK') {
    return{
      ...state,
      count: state.count + 1
    }
  }

  return state
}

export default reduser