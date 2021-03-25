import React from "react";

export function getAppointmentsForDay(state, day) {

  const aptsForDay = state.days.find(findDay => findDay.name === day)

  if (aptsForDay === undefined){
    return [];
  } else {
    const appointments = aptsForDay.appointments.map(aptId =>
      state.appointments[aptId])
      return appointments;
  }
}

export function getInterview(state, interview) {
  if(interview !== null) {
    const interviewerId = interview.interviewer;
    const specificInterviewer = state.interviewers[interviewerId];
    const specificStudent = interview.student;

    const resultObject = {
      interviewer: specificInterviewer,
      student: specificStudent
    }
    return resultObject;

  } else {
    return null;
  }

}

export function getInterviewersForDay(state, day) {

  const aptsForDay = state.days.find(findDay => findDay.name === day)


  if (aptsForDay === undefined){
    return [];
  } else {
    const interviewers = aptsForDay.interviewers.map(aptId =>
      state.interviewers[aptId])

      return interviewers;
  }
}

