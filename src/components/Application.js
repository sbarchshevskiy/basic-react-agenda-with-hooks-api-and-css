
import "components/DayListItem.scss"
import "components/Application.scss";
import "components/InterviewerListItem.scss";
import "components/InterviewerList.scss";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from 'helpers/selectors';
import  useApplicationData from '../hooks/useApplicationData';

import DayList from "./DayList";
import InterviewerList from "./InterviewerList"
import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function Application(props) {

  // comes from helper functions
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();


  const appointments = getAppointmentsForDay(state, state.day);
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
        cancelInterview={cancelInterview}
        interviewers={interviewers}
        interview={interview}
      />
    );
  });

  console.log('schedule: ',schedule);



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


