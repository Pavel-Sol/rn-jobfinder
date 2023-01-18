/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;

AppRegistry.registerComponent(appName, () => App);
