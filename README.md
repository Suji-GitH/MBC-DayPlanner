# MBC-unit2

## Application & Repository Link

###### [Application Link](https://suji-gith.github.io/MBC-DayPlanner/DayPlanner.html)

###### [Repository Link](https://github.com/Suji-GitH/MBC-DayPlanner/)

## Content
- [Overview](#Overview)
- [Acceptance Criteria](#AcceptanceCriteria)
- [UI/UX & Application Screens](#UI/UX&ApplicationScreens)
    - [UI/UX Consideration](#UI/UXConsideration)
    - [App Screenshots](#AppScreenshots)
- [Credits](#Credits)
- [Testing](#Testing)

## Overview

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## AcceptanceCriteria

GIVEN I am using a daily planner to create a schedule <br>
WHEN I open the planner <br>
THEN the current day is displayed at the top of the calendar <br>
WHEN I scroll down <br>
THEN I am presented with timeblocks for standard business hours <br>
WHEN I view the timeblocks for that day <br>
THEN each timeblock is color coded to indicate whether it is in the past, present, or future <br>
WHEN I click into a timeblock <br>
THEN I can enter an event <br>
WHEN I click the save button for that timeblock <br>
THEN the text for that event is saved in local storage <br>
WHEN I refresh the page <br>
THEN the saved events persist <br>

## UI/UX&ApplicationScreens

###### UI/UXConsideration

Main UI/UX consideration applied is instead of having multiple save button for each time block pop up modal is used the enter the task event. 

###### AppScreenshots

Calendar Landing Page
<img src = "./assets/img/ScreenShots/Calendar-Landing-Page.jpg">
Colour coordination for Past(), Present(), Future()
<img src = "./assets/img/ScreenShots/Past-Present-Future.jpg">
Saving times block item
<img src = "./assets/img/ScreenShots/Modal-Popup.jpg">

## Credits

    - Bootstrap
    - Google Fonts
    - Favicon.io 
    - jQuery
    - Moment.js 
    - Font Awesome

## Testing

When User is presented with Daily Planner page:

- Current day is displayed at the top of the calendar.

- There are text box with labelled with standard business hours.

- Each time block is color coded to indicate past, present and future. 

When User clicks on the time block, the user is presented with pop up modal containing:

- "Enter Text:" title.

- Input text area. 

- Close and Add Button. 

When User clicks the close button, the pop up modal is closed. 

When User clicks the Add button:

- User input is saved in local storage. 

- The input in the text area is cleared.

- The pop up modal is closed. 

When User has submitted a input through the pop up modal, the inputted text is displayed in the correct time block. 

When user refreshes the page the time block tasks present.
    
