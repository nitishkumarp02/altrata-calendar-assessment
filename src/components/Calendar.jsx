import React from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay
} from 'date-fns';

const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function Calendar({ date, children }) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday start
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const rows = [];
  let day = startDate;

  while (day <= endDate) {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const clone = day;
      const isCurrent = isSameMonth(clone, monthStart);
      const isSelected = isSameDay(clone, date);

      days.push(
        <div
          key={clone.toISOString()}
          className={`cell ${!isCurrent ? "outside " : ""}${isSelected ? "selected" : ""}`}
        >
          {format(clone, 'd')}
        </div>
      );

      day = addDays(day, 1);
    }
    rows.push(
      <div key={day.toISOString()} className="grid-row">
        {days}
      </div>
    );
  }

  return (
    <div
      className="calendar"
      role="table"
      aria-label={`Calendar for ${format(monthStart, 'MMMM yyyy')}`}
    >
      <div className="month">{format(monthStart, 'MMMM yyyy')}</div>
      <div className="weekdays" role="row">
        {weekdays.map(w => (
          <div key={w} className="cell" role="columnheader">
            {w}
          </div>
        ))}
      </div>
      <div className="body">{rows}</div>

      {children && (
        <div className="extra-content" style={{ marginTop: "10px", textAlign: "center" }}>
          {children}
        </div>
      )}
    </div>
  );
}
