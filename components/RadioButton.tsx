// RadioButton.tsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { RadioButtonProps } from '@types/RadioButton.types';

const RadioButton: React.FC<RadioButtonProps> = ({ options, selectedOption, onSelect }) => {
  return (
    <View>
      {options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => onSelect(option)}>
          <Text style={{ marginVertical: 5 }}>
            {selectedOption === option ? '🔘' : '⚪'} {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;
