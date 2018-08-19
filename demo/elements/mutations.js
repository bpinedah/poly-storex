let GenericMutations = (() => {
  return {
    initStates (state) {
      state.dispatch({
        visibility: {
          summary: false,
          origin: true,
          receiver: false,
          newReceiver: false,
          operation: false,
          confirmOperation: false,
          next: ''
        }
      })
    },
    strategyVisibility (state, payload) {
      let _strategy = {
        summary: false,
        origin: false,
        receiver: false,
        newReceiver: false,
        operation: false,
        confirmOperation: false
      }
      _strategy[payload.visible] = true;
      state.dispatch(_strategy, 'visibility')
    },
    updateNextVisible (state, payload) {
      state.dispatch(payload.next, 'visibility.next')
    }
  }
})();