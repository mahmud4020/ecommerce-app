import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import {Color} from './Colors';
import RangeSlider from 'react-native-range-slider';

const SearchFilter = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  return (
    <ScrollView
      style={{
        padding: 10,
        flex: 1,
        backgroundColor: Color.white,
      }}>
      <View style={{marginVertical: 10}}>
        <SearchBar placeholder="Search here" style={styles.searchBar} />
      </View>

      <Text>Pricing</Text>

      <Text>Min: {minValue}</Text>
      <Text>Max: {maxValue}</Text>
      <RangeSlider
        min={0}
        max={100}
        step={1}
        low={minValue}
        high={maxValue}
        onValueChanged={(low, high) => {
          setMinValue(low);
          setMaxValue(high);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: Color.lightgray,
  },
  slider: {
    width: '100%',
    height: 40,
    marginTop: 10,
  },
});

export default SearchFilter;
