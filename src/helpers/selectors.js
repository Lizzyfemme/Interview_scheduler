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
