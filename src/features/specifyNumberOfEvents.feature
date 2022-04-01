Feature: Specify Number of Events 

Scenario: When the user hasn't specified a number, 32 is the default number 
Given the user has opened the app
When the user hasn't specified a number of events
Then the user will see a maximum of 32 events onscreen

Scenario: User can change the number of events they want to see 
Given the user hasn't specified a number of events 
When the user specifies how many events they want to see 
Then the user will see that number of events when they open the app