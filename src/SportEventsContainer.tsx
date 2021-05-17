/**
 * Created By: Muhammad Khan
 * Logic Explanation
 * The container/component logic is implemented here where container component only resolves
 * the data logic while component just handle the UI part doesn't need to know about the
 * data fetching logic.It has the following advantages:
 * 1- Writing snapshot test cases for components would become really easier
 * 2- Data fetching logic would be sparated from UI part
 * Please feel to ask any question
 */

import React, {useEffect, useState} from 'react';
import {getSportEvents, SPORT_EVENT_IDS_URL} from './api/getSportEvents';
import SportEvents from './SportEvents';
import {SportEventTypes} from './types';

export default function SportEventsContainer({navigation}: any): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Array<SportEventTypes> | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function getSportEventsFromApi() {
      const response = await getSportEvents(SPORT_EVENT_IDS_URL);

      if (response) {
        setData(response);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(true);
    }
    getSportEventsFromApi();
  }, []);

  return (
    <SportEvents
      loading={loading}
      data={data}
      error={error}
      navigation={navigation}
    />
  );
}
