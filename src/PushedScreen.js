import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class PushedScreen extends Component {
  constructor(props) {
    super(props);
    this.onPop = this.onPop.bind(this);
    this.onPush = this.onPush.bind(this);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Pushed screen</Text>
        <View>
          <Button title='Pop screen' onPress={this.onPop} />
          <Button title='Push screen' onPress={this.onPush} />
        </View>
      </SafeAreaView>
    );
  }

  onPop() {
    // TODO: Implement pop screen
  }

  onPush() {
    // TODO: Implement push screen (use the same screen, 'rnnworkshop.pushed')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
