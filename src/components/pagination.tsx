import React from 'react';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../helpers/appColors';

type PaginatedDotsTypes = {
  data: Questions[];
  activeDot: number | null | undefined;
};

const PaginatedDots = ({data, activeDot}: PaginatedDotsTypes) => {
  return (
    <View style={styles.pagination}>
      {data.map((item, index) => (
        <View
          key={item.id}
          style={[
            styles.dot,
            activeDot === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

export default PaginatedDots;

const styles = StyleSheet.create({
  pagination: {
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: appColors.KOrangeColor,
  },
  inactiveDot: {
    backgroundColor: appColors.kWhiteColor,
  },
});
