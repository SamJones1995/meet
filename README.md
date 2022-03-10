Meet is a serverless, progressive web application built with React and test-driven-development technique. It will use the Google Calendar API to fetch upcoming events. Below 
are the user stores and scenarios for the app:

USER STORIES
Feature 1: 
As a user I should be able to filter events by city so that I can view only events in the city I specify

Feature 2:
As a user I should be able to expand and collapse event details so that I can see more or less details about an event 

Feature 3:
As a user I should be able to specify the number of events I see onscreen so that I can have a view that meets my preference

Feature 4:
As a user I should be able to view cached events offline so that I have at least some functionality even when away from a connection

Feature 5:
As a user I should be able to see a chart showing events in each city so that I can get an idea of where things are happening before I 
search for a specific city

SCENARIOS
Feature 1: Filter events by city
Scenario 1: When a user hasn't searched for a city, show upcoming events for all cities
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

Feature 2: Show/Hide an event's details
Scenario 1: An event element is collapsed by default 
Given user hasn't clicked an event
When the user opens the app
Then the user will see events as collapsed 

Scenario 2: User can expand an event to see its details
Given the user hasn't clicked an event
When the user clicks an event show details button
Then the user will see the event details

Scenario 3: User can collapse an event to hide its details
Given the user has clicked an event 
When the user clicks the event collapse button
Then the user will see the event details collapse out of view

Feature 3: Specify Number of Events
Scenario 1: When the user hasn't specified a number, 32 is the default number
Given the user hasn't specified a number of events 
When the user opens the app
Then the user will see a maximum of 32 events onscreen

Scenario 2: User can change the number of events they want to see
Given the user hasn't specified a number of events
When the user specifies how many events they want to see
Then the user will see that number of events when they open the app

Feature 4: Use the App Offline
Scenario 1: Show cached data when there is no internet connection
Given the user is offline
When the user opens the app
Then the user will see cached event data

Scenario 2: Show error when user changes the settings(city, time range)
Given the user is offline
When the user tries to change settings
Then the user will receive an error

Feature 5: Data Visualization
Scenario 1: Show a chart with the number of upcoming events in each city
Given the user hasn't specified a city
When the user views the home page
Then the user will be presented with a chart that shows the upcoming events in each city
