
export const handleFulfilled = (state, action, payload) => {
  console.log('handleFulfilled')
    state.isLoading = false;
    state.error = null;
  };
  
export const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  };
  
export const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
  };
  

  