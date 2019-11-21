export const getAppointmentsForDay = (state, day) => {
  const appointments = [];
  const filteredDays = state.days.find(dayReturn => dayReturn.name === day);

  if (!filteredDays) {
    return [];
  }

  for (let id of filteredDays.appointments) {
    appointments.push(state.appointments[id]);
  }
  return appointments;
};

export const getInterviewersForDay = (state, day) => {
  const filteredDay = state.days.find(dayCheck => dayCheck.name === day);

  if (!filteredDay) return [];

  return filteredDay.interviewers.map(interviewID => {
    return state.interviewers[interviewID];
  });
};

export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  } else {
    let student = interview.student;
    let interviewer = state.interviewers[interview.interviewer];
    let obj = { student, interviewer };
    return obj;
  }
};
