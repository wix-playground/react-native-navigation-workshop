import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class EventsScreen extends Component {
  constructor(props) {
    super(props);
    this.onClickShowOverlay = this.onClickShowOverlay.bind(this);
  }

  static get options() {
    return {
      topBar: {
        visible: false,
        animate: false
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Options</Text>
        <View>
          <Button title='showOverlay' onPress={this.onClickShowOverlay} />
        </View>
      </SafeAreaView>
    );
  }

  onClickShowOverlay() {
    Navigation.showOverlay({
      component: {
        name: 'rnnworkshop.overlay',
        options: {
          overlay: {
            interceptTouchOutside: false
          }
        }
      }
    });
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
