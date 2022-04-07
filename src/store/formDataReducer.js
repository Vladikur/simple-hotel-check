const defaultState = {
  formData: {},
}

const NEW_DATA = "NEW_DATA"

export const formData = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_DATA:
      return {...state, formData: action.payload}
    default:
      return state
  }
}

export const newFormDataAction = (payload) => ({type: NEW_DATA, payload})