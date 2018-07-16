import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class OptionsScreen extends Component {
  constructor(props) {
    super(props);
    this.onClickShowTopBar = this.onClickShowTopBar.bind(this);
    this.onClickSetTopBarTitle = this.onClickSetTopBarTitle.bind(this);
    this.onClickAddTopBarRightButton = this.onClickAddTopBarRightButton.bind(this);
  }

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
          <Button title='show topBar' onPress={this.onClickShowTopBar} />
          <Button title='set topBar title' onPress={this.onClickSetTopBarTitle} />
          <Button title='add topBar right button' onPress={this.onClickAddTopBarRightButton} />
        </View>
      </SafeAreaView>
    );
  }

  onClickShowTopBar() {
    // TODO: show topBar
  }

  onClickSetTopBarTitle() {
    // TODO: change topBar title
  }

  onClickAddTopBarRightButton() {
    // TODO: add topBar right button and trigger an alert on button pressed
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
