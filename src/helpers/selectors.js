

export const getAppointmentsForDay = (state, day) => {
  const appointments = [];
  const filteredDays = state.days.find(dayReturn => dayReturn.name === day);

  if (!filteredDays) {
    return [];
  }

  for (let id of filteredDays.appointments) {
    appointments.push(state.appointments[id])
  }
  return appointments;
}

export const getInterviewersForDay = (state, day) => {
  const interviewers = [];
  const filteredDay = state.days.find(dayCheck => dayCheck.name === day)
  // console.log("gIBD", state.days, day, filteredDay);
  if (!filteredDay) return interviewers;
  for (let id of filteredDay.interviewers) {
    interviewers.push(state.interviewers[id])
  }
  // console.log("gIBD 2", interviewers);
  return interviewers;
}



export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  } else {
    let student = interview.student
    let interviewer = state.interviewers[interview.interviewer]
    let obj = { student, interviewer }
    return obj;
  }
};
