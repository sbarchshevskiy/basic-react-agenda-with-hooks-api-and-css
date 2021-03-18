
import "components/DayListItem.scss"
import "components/Application.scss";
import "components/InterviewerListItem.scss";
import "components/InterviewerList.scss";
import Appointment from "components/Appointment";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList"
import React, { useState, useEffect } from "react";
import axios from 'axios';



// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "3pm",
//     interview: {
//       student: "Vinny Pooh",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 4,
//     time: "5pm",
//     interview: {
//       student: "Ducky Duck",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "7pm",
//     interview: {
//       student: "Snaky Snake",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   }
// ];




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

  const dailyAppointments = [];

  // dailyAppointments.map(appointment => )

  // const setDays = (days) => {
  //   setState({...state, days})
  // }

  Promise.all([
    axios.get('http://localhost:8001/api/days')
    
  ]).then((all) => {
    console.log(all[0]); // first
    console.log(all[1]); // second
    console.log(all[2]); // third
  
    const [first, second, third] = all;
  
    console.log(first, second, third);
  });


  useEffect(() => {
    axios
      .get('http://localhost:8001/api/days')
      // .then(res => setDays(res.data))

  }, []);

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

        {
          dailyAppointments.map(appointment => (
            <Appointment
            id={appointment.id}
            time={appointment.time}
            interview={appointment.interview}
            />

          ))
        }


       
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}


