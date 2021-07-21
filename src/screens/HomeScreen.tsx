import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {Screen} from '../components/Screen';

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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(itemData.item.screen);
        }}
        style={{...styles.gridItem,...{backgroundColor: itemData.item.color}}}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
      <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} style={styles.homeScreen} />
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    // backgroundColor:'#e0e0e0'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
