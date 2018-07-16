import React, {Component} from 'react';
import {Image, StyleSheet, Text, SafeAreaView, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class LayoutScreen extends Component {
  constructor(props) {
    super(props);
    this.onClickSetRootWithStack = this.onClickSetRootWithStack.bind(this);
    this.onClickSetRootWithBottomTabs = this.onClickSetRootWithBottomTabs.bind(this);
    this.onClickSetRootWithSideMenu = this.onClickSetRootWithSideMenu.bind(this);
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
        <Image source={require('../../img/rnnlogo.png')} />
        <Text style={styles.welcome}>Top Level API</Text>
        <View>
          <Button title='setRoot with stack' onPress={this.onClickSetRootWithStack} />
          <Button title='setRoot with bottom tabs' onPress={this.onClickSetRootWithBottomTabs} />
          <Button title='setRoot with side menu' onPress={this.onClickSetRootWithSideMenu} />
        </View>
      </SafeAreaView>
    );
  }

  onClickSetRootWithStack() {
    // TODO: setRoot with stack layout
    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: 'rnnworkshop.pushed'
            }
          }]
        }
      }
    });
  }

  onClickSetRootWithBottomTabs() {
    // TODO: setRoot with bottomTabs layout
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              component: {
                name: 'rnnworkshop.pushed',
                options: {
                  bottomTab: {
                    text: 'Layout',
                    icon: require('../../img/two.png')
                  }
                }
              }
            },
            {
              component: {
                name: 'rnnworkshop.pushed',
                options: {
                  bottomTab: {
                    text: 'Layout',
                    icon: require('../../img/two.png')
                  }
                }
              }
            }]
        }
      }
    });
  }

  onClickSetRootWithSideMenu() {
    // TODO: setRoot with sideMenu layout
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: 'rnnworkshop.pushed'
            }
          },
          center: {
            component: {
              name: 'rnnworkshop.pushed'
            }
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
