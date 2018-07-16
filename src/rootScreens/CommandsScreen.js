import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class CommandsScreen extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Commands'
        }
      }
    }
  }

  constructor(props) {
    super(props);
    this.onClickPush = this.onClickPush.bind(this);
    this.onClickShowModal = this.onClickShowModal.bind(this);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.root}>
          <Button title='Push screen' onPress={this.onClickPush} />
          <Button title='Show modal' onPress={this.onClickShowModal} />
        </View>
      </SafeAreaView>
    );
  }

  onClickPush() {
    // TODO: Implement push (use 'rnnworkshop.pushed' component)
  }

  onClickShowModal() {
    // TODO: Implement showModal (use 'rnnworkshop.modal' component)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
