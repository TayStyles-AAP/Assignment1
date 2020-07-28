import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Test"
        onPress={() => Alert.alert('Button 1')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Hi"
        color="#f194f"
        onPress={() => Alert.alert('Button 2')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Locked Button"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <View style={styles.fixToText}>
        <Button
          title="Left"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;