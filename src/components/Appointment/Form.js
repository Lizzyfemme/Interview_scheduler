import React, { useState } from "react";
import Button from "../Button";
import InterviewerList from "../InterviewerList";

// The Form function is the Component allows interview data to be created edited or deleted

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || {});
  function reset() {
    setName("");
    setInterviewer(null);
  }
  function cancel() {
    reset();
    props.onCancel();
  }

  console.log("inside form", props);
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="Enter Student Name"
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer.id}
          interview={props.interview ? props.interview : null}
          setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={() => props.onSave(name, interviewer.id)}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
