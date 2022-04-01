Feature: Show/Hide an event's details 

Scenario: An event element is collapsed by default 
Given user hasn't clicked an event 
When the user opens the app 
Then the user will see events as collapsed

Scenario: User can expand an event to see its details 
Given the user hasn't clicked an event 
When the user clicks an event show details button 
Then the user will see the event details

Scenario: User can collapse an event to hide its details 
Given the user has clicked an event 
When the user clicks the event collapse button 
Then the user will see the event details collapse out of view