/** @format */

import {Navigation} from 'react-native-navigation';
import TopLevelScreen from './src/rootScreens/LayoutScreen';
import CommandsScreen from './src/rootScreens/CommandsScreen';
import OptionsScreen from './src/rootScreens/OptionsScreen';
import EventsScreen from './src/rootScreens/EventsScreen';

import ModalScreen from './src/ModalScreen';
import PushedScreen from './src/PushedScreen';

Navigation.registerComponent('rnnworkshop.topLevel', () => TopLevelScreen);
Navigation.registerComponent('rnnworkshop.commands', () => CommandsScreen);
Navigation.registerComponent('rnnworkshop.options', () => OptionsScreen);
Navigation.registerComponent('rnnworkshop.events', () => EventsScreen);

Navigation.registerComponent('rnnworkshop.modal', () => ModalScreen);
Navigation.registerComponent('rnnworkshop.pushed', () => PushedScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    bottomTab: {
      iconColor: '#04536C',
      selectedIconColor: '#FF4652',
      textColor: '#04536C',
      selectedTextColor: '#FF4652',
      fontFamily: 'HelveticaNeue-Italic',
      fontSize: 13
    }
  });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
          stack: {
            children: [{
              component: {
                name: 'rnnworkshop.topLevel',
                options: {
                  bottomTab: {
                    text: 'Layout',
                    icon: require('./img/two.png')
                  }
                }
              }
            }]
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: 'rnnworkshop.commands',
                options: {
                  bottomTab: {
                    text: 'Commands',
                    icon: require('./img/two.png')
                  }
                }
              }
            }]
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: 'rnnworkshop.options',
                options: {
                  bottomTab: {
                    text: 'Styling',
                    icon: require('./img/two.png')
                  }
                }
              }
            }]
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: 'rnnworkshop.events',
                options: {
                  bottomTab: {
                    text: 'Events',
                    icon: require('./img/two.png')
                  }
                }
              }
            }]
          }
        }]
      }
    }
  });
});