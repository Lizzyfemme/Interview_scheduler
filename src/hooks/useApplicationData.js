import { useEffect, useReducer } from "react";
import axios from "axios";
import "components/Application.scss";

export default function useApplicationData() {
  const SET_DAY = "SET_DAY";
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_INTERVIEW = "SET_INTERVIEW";

  function reducer(state, action) {
    switch (action.type) {
      case SET_DAY:
        return {
          ...state,
          day: action.value
        };
      case SET_APPLICATION_DATA:
        return {
          ...state,
          days: action.value.days,
          appointments: action.value.appointments,
          interviewers: action.value.interviewers
        };
      case SET_INTERVIEW: {
        let change = 1;
        if (action.interview) {
          change = -1;
        }
        //identify which day to change
        const newSpots = state.days.map(day => {
          if (state.day === day.name) {
            //update
            return { ...day, spots: day.spots + change };
          }
          return day;
        });
        const appointment = {
          ...state.appointments[action.id],
          interview: action.interview && { ...action.interview }
        };

        const appointments = {
          ...state.appointments,
          [action.id]: appointment
        };

        return { ...state, appointments, days: newSpots };
      }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ]).then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: {
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }
      });
    });
  }, []);
  console.log("STATE", state);
  const setDay = day => dispatch({ type: SET_DAY, value: day });

  // The bookInterview function saves the data input for an interview to the database

  function bookInterview(id, interview) {
    return axios
      .put(`/api/appointments/${id}`, {
        interview: {
          student: interview.student,
          interviewer: interview.interviewer
        }
      })
      .then(() => {
        dispatch({ type: "SET_INTERVIEW", id, interview });
      });
  }

  // The deleteInterview function removes an interview from the database

  function deleteInterview(id) {
    return axios.delete(`/api/appointments/${id}`).then(() => {
      dispatch({ type: "SET_INTERVIEW", id, interview: null });
    });
  }

  return { state, setDay, deleteInterview, bookInterview };
}
