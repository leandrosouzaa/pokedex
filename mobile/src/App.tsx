import React from 'react';

import {StatusBar} from 'react-native';
import {Home} from './screens';

const App: React.FC = () => (
   <>
      <StatusBar
         backgroundColor="transparent"
         translucent
         barStyle="dark-content"
      />
      <Home />
   </>
);

export default App;
