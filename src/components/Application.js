
import "components/DayListItem.scss"
import "components/Application.scss";
import "components/InterviewerListItem.scss";
import "components/InterviewerList.scss";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from 'helpers/selectors';
import  useApplicationData from '../hooks/useApplicationData';

import DayList from "./DayList";
import React from "react";


export default function Application(props) {

  // comes from helper functions
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  // comes from selectors.js
  const appointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);



  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
        interviewers={interviewers}
        interview={interview}
      />
    );
  });


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
            setDay={setDay}
          />
        </nav>
      </section>

      <section className="schedule">

        {schedule}
        <Appointment id="last" time="5pm" />
      </section>
    </main>
  );
}


