import React from 'react';

import {
  StyleSheet,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';

export const ScanScreen = () => {
  const onSuccess = (e: BarCodeReadEvent) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

    return (
      <QRCodeScanner
        onRead={onSuccess}
        cameraProps={{ flashMode: RNCamera.Constants.FlashMode.auto }}
      />
    );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
