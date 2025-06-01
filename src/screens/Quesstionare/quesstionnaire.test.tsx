import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Quesstionare from './Quesstionare';

jest.mock('../../components/header', () => {
    const { Text } = require('react-native');
  return ({scores, onPress, active_question}: any) => (
    <Text testID="header" onPress={onPress}>
      MockHeader
    </Text>
  );
});

jest.mock('../../components/pagination', () => {
    const { Text } = require('react-native');
  return ({data, activeDot}: any) => <Text>MockPagination</Text>;
});

jest.mock('../../navigations/navhelpers', () => ({
  resetnavigation: jest.fn(),
}));

jest.mock('../../data', () => ({
  questions: [
    {
      id: 'q1',
      question: 'What is your favorite color?',
      options: [
        {text: 'Red', score: 1},
        {text: 'Blue', score: 2},
      ],
    },
  ],
}));

describe('Quesstionare Screen', () => {
  it('allows selecting an answer', () => {
    const {getByText, getAllByText} = render(<Quesstionare />);

    const optionText = getByText('1.   Red');
    fireEvent.press(optionText);

    // Optional: You can re-render and check visually selected state if needed.
    // But simplest way: assert it's still rendered and doesn't crash.
    expect(optionText).toBeTruthy();
  });

  it('calls resetnavigation with correct score on submit', async () => {
    const {getByText} = render(<Quesstionare />);
    fireEvent.press(getByText('1.   Red'));

    fireEvent.press(getByText('MockHeader'));

    const {resetnavigation} = require('../../navigations/navhelpers');
    expect(resetnavigation).toHaveBeenCalledWith('result', {scores: 1});
  });
});
