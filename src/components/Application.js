import React, { useState, Fragment } from "react";
import "components/Application.scss";
import Appointment from "components/Appointment/index.js"
import DayList from "components/DayList";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "11pm",
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "12pm",
    interview: {
      student: "Bruce Ban ner",
      interviewer: { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" }
    }
  },
  {
    id: 5,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 6,
    time: "1pm",
    interview: {
      student: "Jessica Jones",
      interviewer: {
        id: 3,
        name: "Mildred Nazir",
        avatar: "https://i.imgur.com/T2WwVfS.png"
      }
    }
  }
];

export default function Application(props) {
  const [day, setDay] = useState("Monday");
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
  const appoint = appointments.map(appointment => (

    <Appointment

      id={appointment.id}
      time={appointment.time}
      interview={appointment.interview}
    />
  ));

 
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
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
    {appoint}
      </section>
    </main>
  );
      
}

