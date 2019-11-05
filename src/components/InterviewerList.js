import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem"

export default function InterviewerList(props) {
  
  // console.log("inside interviewerlist", props.interview.interviewer.id);
  const interviewers = props.interviewers.map((interviewer, idx) => (
    <InterviewerListItem
    key={interviewer.id}
    name = {interviewer.name}
    avatar={interviewer.avatar}
    selected={props.interview && interviewer.id === props.interview.interviewer.id ? interviewer.id : null}
    setInterviewer={event => props.setInterviewer(interviewer)}
    />
    ));
    return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>

    <ul className="interviewers__list">{interviewers}</ul>
    </section>
    )};

