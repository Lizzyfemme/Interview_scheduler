

export const getAppointmentsForDay=(state, day) => {
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

 export const getInterview=(state, interview) => {
  if (!interview) {
    return null;
  } else {
    let student = interview.student
    let interviewer = state.interviewers[interview.interviewer]
    let obj = {student, interviewer}  
    return obj;
      }
    } ;
   