import React from 'react';
import Result from './Result';
import {useRoute} from '@react-navigation/native';
import {resetnavigation} from '../../navigations/navhelpers';
import {render, fireEvent} from '@testing-library/react-native';

// Mock route to return a score
jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn(),
}));

// Mock navigation helper
jest.mock('../../navigations/navhelpers', () => ({
  resetnavigation: jest.fn(),
}));

// Mock the SVG logo component
jest.mock('../../images/logo.svg', () => 'Applogo');

// Mock custom button component
jest.mock('../../components/Button', () => {
  return ({btnTxt, onPress}: any) => {
    const { Text } = require('react-native');
    return <Text onPress={onPress}>{btnTxt}</Text>;
  };
});

describe('Result Screen', () => {
  beforeEach(() => {
    // Set a default score
    (useRoute as jest.Mock).mockReturnValue({
      params: {
        scores: 9,
      },
    });
  });

  it('renders correctly with the score and risk category', () => {
    const {getByText} = render(<Result />);

    expect(getByText('Questionnaire Result')).toBeTruthy();
    expect(getByText('9')).toBeTruthy(); // score
    expect(getByText('your score')).toBeTruthy();
    expect(getByText('You are in medium risk category')).toBeTruthy();
  });

  it('calls resetnavigation when "Try Again" is pressed', () => {
    const {getByText} = render(<Result />);

    fireEvent.press(getByText('Try Again'));
    expect(resetnavigation).toHaveBeenCalledWith('quesstionare');
  });
});
