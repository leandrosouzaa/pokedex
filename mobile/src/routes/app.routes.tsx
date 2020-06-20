import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Home, Detail} from '../screens';

const StackRouter = createSharedElementStackNavigator();

const Routes: React.FC = () => {
   return (
      <NavigationContainer>
         <StackRouter.Navigator initialRouteName="Home" headerMode="none">
            <StackRouter.Screen name="Home" component={Home} />
            <StackRouter.Screen
               name="Detail"
               sharedElementsConfig={(route) => {
                  const {data} = route.params;
                  return [
                     {
                        id: `pokemon-photo-${data.id}`,
                        animation: 'move',
                     },
                  ];
               }}
               component={Detail}
            />
         </StackRouter.Navigator>
      </NavigationContainer>
   );
};

export default Routes;
