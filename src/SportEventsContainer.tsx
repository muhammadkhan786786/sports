import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
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
