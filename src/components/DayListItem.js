import React from "react";
import "components/DayListItem.scss";
import classnames from "classnames";

//The formatSpots function is that changes the way the spot are displayed in the left pane

const formatSpots = function(spots) {
  if (spots === 2) {
    return "2 spots remaining";
  } else if (spots === 1) {
    return "1 spot remaining";
  } else if (spots <= 0) {
    return "no spots remaining";
  } else {
    return spots;
  }
};

// The DayListItem is a component that displays the day of the week and the number of spots available

export default function DayListItem(props) {
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
