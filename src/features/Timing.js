import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timingButton}>
      {[1, 5, 10, 15].map((time) => (
        <RoundedButton
          key={time}
          style={styles.singletimingButton}
          size={75}
          title={String(time)}
          onPress={() => onChangeTime(time)}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  singletimingButton: {
    margin: 10,
  },
});
