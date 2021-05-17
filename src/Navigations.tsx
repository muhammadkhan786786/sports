import SportEventsContainer from './SportEventsContainer';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SportEventDetails from './SportEventDetails';

const AppNavigator = createStackNavigator(
  {
    SportEventsContainer: {
      screen: SportEventsContainer,
      navigationOptions: () => ({
        headerTitle: 'Events',
      }),
    },
    SportEventDetails: {
      screen: SportEventDetails,
      navigationOptions: () => ({
        headerTitle: 'Event Details',
      }),
    },
  },
  {
    defaultNavigationOptions: () => ({
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        color: 'white',
      },
      cardStyle: {
        backgroundColor: 'black',
      },
    }),
  },
);

export default createAppContainer(AppNavigator);
