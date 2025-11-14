# 📅React Calendar Component — Altrata Front-End Engineer Assessment

## This project implements a **reusable calendar component** as part of the Altrata technical assessment.

## Features

- Accepts a `date` prop to render the calendar for that month and year.
- Displays:
  - Month and Year in the first row.
  - Days of the week (Sun–Sat) in the second row.
  - All dates aligned correctly within a grid.
- Highlights the given date.
- Marks dates outside the current month with a faded style.

## Test Coverage Summary

The calendar component is validated with unit tests using **Vitest** and **@testing-library/react**.

- Confirms correct rendering of **month and year**.
- Verifies all **weekday headers** appear.
- Checks that the **given date is highlighted**.
- Ensures **month start and end dates** are correctly displayed.
- Validates **outside-month days** are marked with the `.outside` class.

**All 5 tests passed successfully**, confirming accurate rendering and component reusability.

### Additional Improvement — Dynamic Date Selection

Although the original instructions only required rendering the calendar for a **fixed `date` prop**,  
I implemented an **enhancement** that allows the user to dynamically change the date at runtime.

In the UI, a simple **date picker input** (`<input type="date" />`) lets users select any date.  
The calendar component automatically updates and highlights the newly selected date without refreshing the page.

This improvement demonstrates flexibility in the component design — it can now render **any month and year** dynamically based on user input.

> Note: The instructions did not mention adding interactivity, so I initially used a hardcoded date (`new Date(2022, 9, 3)`) for testing and demonstration.  
> Later, I enhanced the project to make it dynamic for a better user experience.
