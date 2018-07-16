import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class OverlayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };

    this.registerComponentDidAppear();
    this.registerComponentDidDisappear();
  }

  registerComponentDidAppear() {
    // TODO: Listen to static componentDidAppear listener and call addEvent with the event name ('didAppear') and the event object
  }

  registerComponentDidDisappear() {
    // TODO: Listen to static componentDidDisappear listener and call addEvent with the event name and the event object
  }

  addEvent(eventName, event) {
    event.eventName = eventName;
    this.setState({
      events: [...this.state.events, event]
    });
  }

  render() {
    const events = this.state.events.map((event, idx) =>
      (
        <View key={`${event.componentId}${idx}`}>
          {this.renderEvent(event)}
        </View>
      ));
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Overlay</Text>
        <View style={styles.events}>
          {events}
        </View>
      </ScrollView>
    );
  }

  renderEvent(event) {
    if (event.commandId) {
      return <Text>{`${event.commandId}`}</Text>;
    } else {
      return <Text>{`${event.eventName} | ${event.componentName}`}</Text>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: '#c1d5e0ae',
    flexDirection: 'column'
  },
  events: {
    flexDirection: 'column',
    marginHorizontal: 2
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
