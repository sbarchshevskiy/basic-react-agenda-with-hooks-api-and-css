import React, { useState, useEffect } from "react";
import axios from 'axios';



export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

 function setDay(day) {
    return setState(prev => ({ ...prev, day:day}))
  }



  function cancelInterview (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null 
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    setState(prev => ({ ...prev, appointments}))
    let days = spotsRemaining(state, appointments) 
    setState(prev => ({ ...prev, days}))
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: interview 
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    setState(prev => ({ ...prev, appointments}))
    let days = spotsRemaining(state, appointments) 
    setState(prev => ({ ...prev, days}))
  }


  const spotsRemaining = function(state, appointments) {

    const updatedDays = state.days.map(day => {
      let numberOfInterviews = 0;
      for (let ap of day.appointments) {
        console.log(ap)
        console.log(appointments)
        if (appointments[ap].interview) {
          numberOfInterviews += 1;

        }
      }
      console.log(numberOfInterviews)
      return {...day, spots: 5 - numberOfInterviews};

    })
    return updatedDays;

  }
 
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')

    ]).then((all) => {
      setState(prev => ({ ...state, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      console.log('days: ', all[0]);
      console.log('appointments: ', all[1]);
      console.log('interviewers', all[2]);
    });
  }, [])


  return { state, setDay, bookInterview, cancelInterview };
}