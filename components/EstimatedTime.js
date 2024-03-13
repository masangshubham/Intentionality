import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';


export default function EstimatedTime() {
 const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
 } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      option: "", // Assuming you want to add an option for the buttons
    },
 });

 const onSubmit = (data) => console.log(data);

 // Function to handle button press and update the form value
 const handleButtonPress = (value) => {
    setValue('option', value); // Update the form value
 };

 return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Last name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />

      {/* Circle buttons for selecting options */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.circleButton} onPress={() => handleButtonPress('Option 1')}>
          <Text style={styles.buttonText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={() => handleButtonPress('Option 2')}>
          <Text style={styles.buttonText}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={() => handleButtonPress('Option 3')}>
          <Text style={styles.buttonText}>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={() => handleButtonPress('Option 4')}>
          <Text style={styles.buttonText}>Option 4</Text>
        </TouchableOpacity>
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
 },
 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
 },
 circleButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
 },
 buttonText: {
    color: '#fff',
    fontSize: 16,
 },
});
