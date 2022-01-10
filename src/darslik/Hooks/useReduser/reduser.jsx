
const reduser = (state, action) => {
  const limitGRP = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
  const qadam = 10

  switch(action.type) {
    case "qizilD":
      return {
        ...state,
        r: limitGRP(state.r + qadam)
      };
      case "qizilI":
      return {
        ...state,
        r: limitGRP(state.r - qadam)
      };
      case "yashilD":
      return {
        ...state,
        g: limitGRP(state.g + qadam)
      };
      case "yashilI":
      return {
        ...state,
        g: limitGRP(state.g - qadam)
      };
      case "kukD":
      return {
        ...state,
        b: limitGRP(state.b + qadam)
      };
      case "kukI":
      return {
        ...state,
        b: limitGRP(state.b - qadam)
      };
      default: 
        return state
  }
}

export default reduser