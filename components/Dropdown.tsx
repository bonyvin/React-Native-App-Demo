import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { currentIP } from './Ip';

interface MyData {
  storeLocation: string;
  storeName: string;
  C: string;

}

export let StoreNameFinal = '';
export let dropdownSelectedValue=''
const DropdownComponent = () => {
  const [data, setData] = useState<MyData[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const[dropdownVal,setDropdownVal]=useState(false);
  dropdownSelectedValue=selectedValue;
  const [dropdownStoreName, setDropdownStoreName] = useState('');
  const [dderror, setdderror] = useState('')
  const options = ["Captain","User","Other"]; 

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setDropdownVal(true);
  };
  const handleOptionSelect = (option: string) => {
    setSelectedValue(option);
    setIsDropdownOpen(false);
  };
  return (
    <View  >
      <TouchableOpacity onPress={handleDropdownToggle} style={styles.dropdownShape}>
        <View style={{ flexDirection: 'row', }}>
          <View style={{
            flexDirection: 'row', flexGrow: 1,
            flexShrink: 0,
            flexBasis: 100, alignItems: 'center'
          }} >
            <Text >{selectedValue || 'Select'}
            </Text></View>
          <Icon name='chevron-down' size={23}  onPress={handleDropdownToggle} ></Icon></View>
      </TouchableOpacity>
      {isDropdownOpen && (
        <FlatList style={styles.dropdown}
          data={options}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.dropdownOption}
              onPress={() => handleOptionSelect(item)}
            >
              <Text >{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}</View>

  );
};
const styles=StyleSheet.create({
  dropdownShape: {
    padding: 5,
    zIndex: 1,
    flexDirection: 'row',
    margin: 8,
    marginLeft:0,
    height: 50,
    width: 340,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,

  },
  dropdown: {
    position: 'absolute',
    zIndex: 1,
    top: 55,
    width: 340,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    backgroundColor: 'white',
    fontFamily: 'PlusJakartaSans-Regular',

  },
  dropdownOption: {

    paddingVertical: 10,
    paddingHorizontal: 15,
  },
})
export default DropdownComponent;
// export function handleConfirm;

