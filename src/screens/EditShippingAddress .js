import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Color} from './Colors';

const EditShippingAddress = () => {
  return (
    <View style={{flex: 1, backgroundColor: Color.white}}>
      <ScrollView>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Pin Code</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Address</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>City</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>State</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Phone Number</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={[styles.buttonStyle, {backgroundColor: Color.red}]}>
            <Text style={{color: Color.white, fontSize: 18}}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonStyle, {backgroundColor: Color.primary}]}>
            <Text style={{color: Color.white, fontSize: 18}}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditShippingAddress;

const styles = StyleSheet.create({
  inputWrapper: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.borderColor,
    backgroundColor: Color.white,
    width: '100%',
    height: 40,
    padding: 5,
    elevation: 3,

    shadowColor: Color.black,
  },
  inputTitle: {
    fontSize: 15,
    color: Color.gray,
    marginBottom: 5,
    fontWeight: '500',
  },
  btnWrapper: {
    marginHorizontal: 30,
    marginVertical: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
