import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/Sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We haven't focues on anything yet</Text>;

  const renderItem = ({item} )=> <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we haved focus on</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />   
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:spacing.md,
  },
  item:{
    fontSize:fontSizes.md,
    color: colors.white,
    paddingTop:spacing.sm,

  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
