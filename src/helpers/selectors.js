const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5]
    }
  ]
}

console.log(state.days);


const testFunction = function(state, day){

  const days = state.days;

  for (let day in state) {
    console.log(state[day]);
  }


}

console.log(testFunction(state, "Monday"));