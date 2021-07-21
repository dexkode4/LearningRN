import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

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
        style={{...styles.gridItem, ...{backgroundColor: itemData.item.color}}}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
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
