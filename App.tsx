/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
export * from 'react-native-vision-camera';

function PermissionsPage() {
  const {requestPermission} = useCameraPermission();
  useEffect(() => {
    requestPermission();
  }, [requestPermission]);
  return (
    <View>
      <Text>Give Permissions</Text>
    </View>
  );
}

function NoCameraDeviceError() {
  return (
    <View>
      <Text>No Device</Text>
    </View>
  );
}

function App() {
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();

  if (!hasPermission) {
    return <PermissionsPage />;
  }
  if (device == null) {
    return <NoCameraDeviceError />;
  }
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}
export default App;
