import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PostNavigateScreen} from './screen/PostNavigate/PostNavigate';

// import AppNavigation from './screen/navigate/AppNavigation';
// import {StyleScreen} from './screen/StyleScreen';
// import {HWScreen} from './screen/HWScreen';
// import {FlexScreen} from './screen/Flex/FlexScreen';
// import {FlexDirectionBasics} from './screen/Flex/FlexDirectionBasics';
// import RowGapAndColumnGap from './screen/RowGapAndColumnGap';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <StyleScreen /> */}
      {/* <HWScreen /> */}
      {/* <FlexScreen /> */}
      {/* <RowGapAndColumnGap /> */}
      {/* <AppNavigation /> */}
      <PostNavigateScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#caf9b4',
  },
});
