
import "components/DayListItem.scss"
import "components/Application.scss";
import "components/InterviewerListItem.scss";
import "components/InterviewerList.scss";
import "components/Appointment";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList"
import React, { useState } from "react";


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "3pm",
    interview: {
      student: "Vinny Pooh",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 4,
    time: "5pm",
    interview: {
      student: "Ducky Duck",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 5,
    time: "7pm",
    interview: {
      student: "Snaky Snake",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];


const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];


const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];



export default function Application(props) {

  const [day, setDay] = useState('Monday');
  const [interviewer, setInterviewer] = useState('Sylvia Palmer');

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
            days={days}
            day={day}
            setDay={day => console.log(day)}
          />
        </nav>



        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
      </section>

      <section className="schedule">

        props.appointments.map(app => (
         
        ))

        <li className="interviewers__item">
          <img
            className="interviewers__item-image"
            src="https://i.imgur.com/LpaY82x.png"
            alt="Sylvia Palmer"
          />
        Sylvia Palmer
      </li>

      <InterviewerList
      interviewers={interviewers}
      interviewer={interviewer}
      id={interviewers}
      setInterviewer={interviewer => console.log(interviewer)}
      
      
      />


        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}


