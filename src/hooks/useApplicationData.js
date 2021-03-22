import React, { useState, useEffect } from "react";
import axios from 'axios';



export default function useApplicationData(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  function cancelInterview (id, interview) {

    if ({...state.appointment[id]} 
      && {interview : {interview}}) {
      return null;
    } 
    return id;
  }


  const spotsRemaining = function(numberOfSpots, appointments, appointmentId, days) {
     
    for (let day in days) {
      if (cancelInterview(appointments[appointments])) {


      }
    }

  }




  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    console.log('id and interview ',id, interview);

    axios.put(`http://localhost:8001/api${id}`)
    .then((resolve) => {
      setState(({ ...state }))

    })
  }





  useEffect(() => {
    Promise.all([
      // 0: Object { id: 1, name: "Monday", spots: 4, … }​​
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


  return { bookInterview, cancelInterview, useEffect, spotsRemaining };
}