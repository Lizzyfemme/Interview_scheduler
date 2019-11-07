import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

// The InterviewerList function is a component that displays all the InterviewerListItems

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map((interviewer, idx) => (
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={props.interviewer === interviewer.id}
      setInterviewer={event => props.setInterviewer(interviewer)}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>

      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}
