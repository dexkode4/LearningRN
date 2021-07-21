import React from 'react';
import {CustomButton} from '../components/CustomButton';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Screen} from '../components/Screen';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import { color } from 'react-native-reanimated';


interface IrenderGridItemProps {
    item: {
      id: string;
      title: string;
      color: string;
      screen: string;
    };
  }
  
  
export const HomeScreen: NavigationStackScreenComponent = ({navigation}) => {

    const renderGridItem = (itemData: IrenderGridItemProps) => {
        return (
          <TouchableOpacity onPress={() => {
              navigation.navigate(itemData.item.screen)
              
          }}
          style={{...styles.gridItem, ...{backgroundColor: itemData.item.color}}}>
            <View >
              <Text>{itemData.item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      };

  return (
    // <Screen>
    //   <CustomButton title="Scan" onPress={() => {
    //       navigation.navigate("Scan")
    //   }} />
    //   <CustomButton title="Camera" onPress={() => {
    //       navigation.navigate("Camera")
    //   }} />
    // </Screen>
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};


const styles = StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 15,
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
  });
  