import React, { useState, useEffect } from "react";
import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-glass.css";

function CalendarEvent(props) {

  useEffect(() => {
    new Calendar({
      id: "#myCal",
      theme: "glass",
      weekdayType: "long-upper",
      monthDisplayType: "long",
      calendarSize: "small",
      layoutModifiers: ["month-left-align"],
      eventsData : [
        {
          start: '2022-04-15T06:00:00',
          end: '2022-04-15T20:30:00',
          name: 'Event 1',
          url: 'https://www.cssscript.com',
          desc: 'Description 1',
        },
        {
          start: '2022-05-15T06:00:00',
          end: '2022-05-15T20:30:00',
          name: 'Event 2',
          url: 'https://www.cssscript.com',
          desc: 'Description 1',
        }
      ],
      dateChanged: (currentDate, eventsData) => {
        console.log("date change", currentDate, eventsData);
      },
      monthChanged: (currentDate, eventsData) => {
        console.log("month change", currentDate, eventsData);
      }
    });
  }
  )
    return (
      <div id="myCal"></div>
    )
  }

export default CalendarEvent;
