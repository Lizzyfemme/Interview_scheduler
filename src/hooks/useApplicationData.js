import  { useState, useEffect  } from "react";
import axios from "axios";
import "components/Application.scss";


export default function useApplicationData() {



const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {}
});


useEffect(() => {
  Promise.all([
    Promise.resolve(axios.get(`/api/days`)),
    Promise.resolve(axios.get(`/api/appointments`)),
    Promise.resolve(axios.get(`/api/interviewers`))
  ]).then((all) => {
    setState(prev => ({ days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
  })
}, []);


 const setDay = day => setState({ ...state, day });

function deleteInterview(id, interview) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  }

 const appointments = {
  ...state.appointments,
 [id]: appointment
}

  return axios.delete(`/api/appointments/${id}`, interview)
  .then(() => {
    
      delete appointments[id]
    setState(prev => ({
        ...state,
    })
  )})
  }


  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    }
  
  const appointments = {
    ...state.appointments,
    [id]: appointment
  }

  
  return axios.put(`/api/appointments/${id}`, {interview: {student: interview.student, interviewer: interview.interviewer.id }})
    .then(() => {
      setState({
        ...state,
        appointments
      })
    })
}
return {state, setDay, deleteInterview, bookInterview}
}