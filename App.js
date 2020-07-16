// import React, { Component } from 'react';
// import { Text, View , Button, Alert} from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Hello, world!</Text>
//         <Button
//           title="Press me"
//           onPress={() => Alert.alert('Simple Button pressed')}
//         />
//       </View>
      
//     );
//   }
// }

import React from 'react';
import AppStack from './src/screens';

const App = () => {
  return (
    <AppStack />
  );
};


export default App;