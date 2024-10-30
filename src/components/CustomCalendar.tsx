import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const onDayPress = (day: { dateString: string }) => {
    const date = new Date(day.dateString);
    const isWeekday = date.getDay() !== 0 && date.getDay() !== 6;

    if (isWeekday) {
      setSelectedDate(day.dateString);
      setTimePickerVisible(false);
    } else {
      Alert.alert('Invalid Selection', 'Please select a weekday!');
    }
  };

  const handleConfirm = (date: Date) => {
    const hours = date.getHours();
    setTimePickerVisible(false);
    
    if (hours < 9 || hours > 18) {
      Alert.alert('Invalid Time', 'Please select a time between 9 AM and 6 PM!');
    } else {
      setSelectedTime(date);
    }
  };

  const getFormattedTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate || '']: { selected: true, marked: true },
        }}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={() => setTimePickerVisible(false)}
        is24Hour={false}
        date={selectedTime || new Date()}
      />
      <Text style={styles.text}>
        {selectedTime 
          ? `Selected Date & Time: ${selectedDate} at ${getFormattedTime(selectedTime)}` 
          : selectedDate 
            ? `Selected Date: ${selectedDate}` 
            : 'No Date Selected'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default CustomCalendar;
