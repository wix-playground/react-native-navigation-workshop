import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, View, Button} from 'react-native';

export default class ModalScreen extends Component {
  constructor(props) {
    super(props);
    this.onClickDismissModal = this.onClickDismissModal.bind(this);
    this.onClickPush = this.onClickPush.bind(this);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Modal</Text>
        <View>
          <Button title='Dismiss Modal' onPress={this.onClickDismissModal} />
        </View>
      </SafeAreaView>
    );
  }

  onClickDismissModal() {
    // TODO: Implement dismissModal
  }

  onClickPush() {
    // TODO: Implement push screen (use 'rnnworkshop.pushed')
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
