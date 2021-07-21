import React from 'react';
import RNFS from 'react-native-fs';
import {Text, StyleSheet, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import { CustomButton } from '../../components/CustomButton';

export const CameraScreen = () => {
  const [{cameraRef}, {takePicture}] = useCamera();

  const captureHandle = async () => {
    try {
        const data = await  takePicture();
        console.log(data)
        const filePath = data.uri;
      
        const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
        RNFS.moveFile(filePath, newFilePath)
            .then(() => {

                console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
                Alert.alert('Success', JSON.stringify(newFilePath));
            })
            .catch(error => {
                console.log(error);
            })
    } catch (error) {
        console.log(error)
    }
  }

  return (
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.cameraPreview}
        captureAudio={false}
        >
            <CustomButton title="Capture" onPress={() => captureHandle()}/>
        </RNCamera>

  );
};

const styles = StyleSheet.create({
  cameraPreview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20
  },
});
