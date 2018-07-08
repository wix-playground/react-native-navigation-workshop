import React, {Component} from 'react';
import {Image, StyleSheet, Text, SafeAreaView, View, Button} from 'react-native';

export default class OptionsScreen extends Component {
  static get options() {
    return {
      topBar: {
        visible: false
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Options</Text>
        <View>
          <Button title='setRoot with stack' onPress={this.onClickPush} />
        </View>
      </SafeAreaView>
    );
  }

  onClickPush() {

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
