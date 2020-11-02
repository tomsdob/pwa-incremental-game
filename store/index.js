export const state = {
  resources: {
    wood: {
      name: 'wood',
      icon: '🌲',
      amount: localStorage.getItem('wood') || '200',
      perSecond: 10,
      capacity: 1000,
    },
    clay: {
      name: 'clay',
      icon: '🧱',
      amount: localStorage.getItem('clay') || '200',
      perSecond: 8,
      capacity: 1000,
    },
  },
  player: {
    name: 'Tauruid',
  },
}
export const mutations = {
  incrementResource(state, resource) {
    // Iterating over the resources object to find if the resource
    // from increment method matches
    Object.keys(state.resources).forEach(function (key) {
      let stateResource = state.resources[key]
      // If it matches the resource in store, increment it
      if (stateResource.name === resource) {
        stateResource.amount++
        // Checking if is in browser, if so, add resource to local storage
        if (process.browser) {
          localStorage.setItem(stateResource.name, stateResource.amount)
        } else {
          console.log(
            "The game is not in a browser and therefore can't be saved!"
          )
        }
      }
    })
  },
}
export const getters = () => {}
