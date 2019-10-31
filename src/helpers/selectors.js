export default function getAppointmentsForDay(state, day) {
  const appointments = [];
  const filteredDays = state.days.find(dayReturn => dayReturn.name === day);
  
  if (!filteredDays){
    return [];
  }

  for (let id of filteredDays.appointments){
    appointments.push(state.appointments[id])
  }
  return appointments;
  }



  export function getInterview(state, interview) {
    console.log(state);
    console.log(interview);
    
    return null;

//     const interviews = {};

//     const filteredInterview = state.interviewer.find(interviewReturn=> interviewReturn.id === interview);

//     if (!filteredInterview){
//       return [];
//     }
//     for (let id of filteredInterview.interviews){
//       interviews.push(state.interview[id])
//     }
// return interviews;
  }