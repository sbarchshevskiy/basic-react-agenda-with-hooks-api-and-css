
import "components/DayListItem.scss"
import "components/Application.scss";
import "components/InterviewerListItem.scss";
import "components/InterviewerList.scss";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from 'helpers/selectors';


import DayList from "./DayList";
import InterviewerList from "./InterviewerList"
import React, { useState, useEffect } from "react";
import axios from 'axios';


const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}

  });


  const appointments = getAppointmentsForDay(state, state.day);


useEffect(() => {

  setState({
    ...state,
    appointments
  });
}, [])


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
  }

  const interviewers = getInterviewersForDay(state, state.day)

  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    console.log('appointment from ap: ', appointment);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        bookInterview={bookInterview}
        interviewers={interviewers}
        // interview={{student: appointment.interview.student}}
        interview={interview}
      />
    );
  });

  console.log('schedule: ',schedule);

  const dailyAppointments = [];

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

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
          />
        </nav>
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
      </section>

      <section className="schedule">

        {schedule}
        <Appointment id="last" time="1pm" />
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}


