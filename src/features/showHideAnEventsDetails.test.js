import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import React from "react";
import { mount, shallow } from 'enzyme';
import { mockData } from '../mock-data';
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('user hasn\'t clicked an event', () => {

    });
    
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });
    
    then('the user will see events as collapsed', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(0);
    });
});

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the user hasn\'t clicked an event', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the user clicks an event show details button', () => {
      AppWrapper.update();
      AppWrapper.find('.show-details').at(0).simulate('click');
    });

    then('the user will see the event details', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(1);
    });
});



  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the user has clicked an event', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.show-details').at(0).simulate('click');
      expect(AppWrapper.find('.extra-details')).toHaveLength(1);
    });

    when('the user clicks the event collapse button', () => {
      AppWrapper.find('.hide-details').at(0).simulate('click');
    });

    then('the user will see the event details collapse out of view', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(0);
    });
  });  
});