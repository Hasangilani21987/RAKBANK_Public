import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Result: {scores: number};
};

export type ScoreScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;
