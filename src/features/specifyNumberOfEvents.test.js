import { loadFeature, defineFeature } from 'jest-cucumber';
import React from "react";
import { mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('When the user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('the user has opened the app', async () => {
      AppWrapper = await mount(<App />);
      
    });

    when('the user hasn\'t specified a number of events', () => {
      AppWrapper.update();
    });

    then('the user will see a maximum of 32 events onscreen', () => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
});
test('User can change the number of events they want to see', ({ given, when, then }) => {
  given('the user hasn\'t specified a number of events', async () => {
    AppWrapper = await mount(<App />);
  });

  when('the user specifies how many events they want to see', () => {
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', { target: { value: 1 } });
  });

  then('the user will see that number of events when they open the app', () => {
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', { target: { value: 1 } });
    expect(AppWrapper.state('numberOfEvents')).toEqual(1)
  });
});
});