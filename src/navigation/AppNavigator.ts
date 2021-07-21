import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { CameraScreen } from '../screens/CameraScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ScanScreen } from '../screens/QrScannerScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Scan: ScanScreen,
    Camera: CameraScreen
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);