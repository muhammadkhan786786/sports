/**
 * Created by: Muhammad Khan
 * Explaination
 * getSportEvents function would be called from the frontend with SPORT_EVENT_IDS_URL as a parameter.
 * To get the sport event details, two network calls are required that's why two functions named getSportEventIDs
 *  and getSupportEventDetails have been declared to make the the code more Understandable and cleaner instead of adding
 * whole logic in one function. Additionally,In this way our functions would be properly tested while writing the test cases.
 * getSportEvents would resolve the eventsIDs first by calling the getSportEventIDs function and after that it will call
 *  getSupportEventDetails function to get the event details.
 *  I try my level best to handle any unexpected error while making the request to server by adding different "If"
 * conditions and wrapping them with a try/catch block.
 * try/catch block could be have been added on root level (i.e getSportEvents function) but I think it would make
 * the debugging process is hard and slow if any error occurs. That's why they are adding on the leaf functions so that we
 * can easily find out which function is actually causing the issue.
 * Please feel free to ask questions if you have any confusion.
 * Thank you
 */

import fetch from 'node-fetch';
import {SportEventTypes} from '../types';

export const SPORT_EVENT_IDS_URL =
  'https://api.smarkets.com/v3/popular/event_ids/sport/football/';
export const SPORT_EVENT_DETAILS_URL = 'https://api.smarkets.com/v3/events/';

export const getSportEventIDs = async (url: string): Promise<string | null> => {
  try {
    const response = await fetch(url, {method: 'GET'});
    if (response.status === 200) {
      const responseBody = await response.json();
      const eventIDs = responseBody.popular_event_ids;
      return eventIDs.toString();
    }
    return null;
  } catch (error) {
    console.log('Error in getSportEventIDs function: ', error); // eslint-disable-line no-console
    return null;
  }
};

export const getSupportEventDetails = async (
  eventIDs?: string,
): Promise<Array<SportEventTypes> | null> => {
  if (!eventIDs) {
    return null;
  }
  try {
    const response = await fetch(`${SPORT_EVENT_DETAILS_URL}${eventIDs}/`, {
      method: 'GET',
    });
    if (response.status === 200) {
      const responseBody = await response.json();
      return responseBody.events;
    }
    return null;
  } catch (error) {
    console.log('Error in getSupportEventDetails function: ', error); // eslint-disable-line no-console
    return null;
  }
};

export const getSportEvents = async (
  url: string,
): Promise<Array<SportEventTypes> | null> => {
  const eventIDs = await getSportEventIDs(url);
  if (!eventIDs) {
    return null;
  }

  const sportEventDetails = await getSupportEventDetails(eventIDs);
  if (!sportEventDetails) {
    return null;
  }

  return sportEventDetails;
};
