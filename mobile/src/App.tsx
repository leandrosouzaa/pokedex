import 'react-native-gesture-handler';

import React from 'react';

import {StatusBar} from 'react-native';

import AppRoutes from './routes/app.routes';

const App: React.FC = () => (
   <>
      <StatusBar
         backgroundColor="transparent"
         translucent
         barStyle="dark-content"
      />
      <AppRoutes />
   </>
);

export default App;
