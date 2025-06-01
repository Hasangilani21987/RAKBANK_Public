import React from 'react';
import Applogo from '../../images/logo.svg';
import {ScoreScreenRouteProp} from './types';
import {width} from '../../helpers/functions';
import {appColors} from '../../helpers/appColors';
import {useRoute} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import AnimatedTextBtn from '../../components/Button';
import {resetnavigation} from '../../navigations/navhelpers';

const getRiskCategory = (score: number) => {
  if (score <= 6) return 'low';
  if (score <= 10) return 'medium';
  return 'high';
};

const handleTryAgain = () => {
  resetnavigation('quesstionare');
};

const Result = () => {
  const {
    params: {scores},
  } = useRoute<ScoreScreenRouteProp>();
  const category = getRiskCategory(scores);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Applogo width="100%" height={60} style={{marginBottom: 30}} />
        <Text style={styles.headerTxt}>Questionnaire Result</Text>
      </View>
      <View style={styles.score_card}>
        <View style={styles.progress_container}>
          <Text style={styles.score_txt}>{scores}</Text>
          <Text
            style={[
              styles.score_txt,
              {fontSize: 12, fontWeight: '500', paddingTop: 8},
            ]}>
            your score
          </Text>
        </View>
        <View style={styles.riskTxt_conatiner}>
          <Text
            style={[
              styles.score_txt,
              {paddingTop: 0, fontSize: 18, textAlign: 'center'},
            ]}>{`You are in ${category} risk category`}</Text>
        </View>
      </View>
      <View style={styles.tryAgain_conatiner}>
        <AnimatedTextBtn
          btnTxt="Try Again"
          onPress={handleTryAgain}
          btnTxtColor={appColors.kWhiteColor}
          btnContainerStyles={styles.tryAgainBtn}
        />
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: appColors.kBgScreenColor,
  },
  headerContainer: {
    marginTop: 20,
    marginHorizontal: 40,
  },
  headerTxt: {
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    color: appColors.kWhiteColor,
  },
  score_card: {
    height: 170,
    marginTop: 80,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    backgroundColor: appColors.kBgCardColor,
    borderColor: appColors.kScoreCardBorderColor,
  },
  progress_container: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 8.75,
    alignItems: 'center',
    borderColor: appColors.KOrangeColor,
  },
  score_txt: {
    fontSize: 22,
    paddingTop: 20,
    fontWeight: '900',
    color: appColors.kWhiteColor,
  },
  riskTxt_conatiner: {
    marginLeft: 20,
    width: width / 3,
  },
  tryAgain_conatiner: {flex: 1, justifyContent: 'center'},
  tryAgainBtn: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 25,
    justifyContent: 'flex-end',
    backgroundColor: appColors.KOrangeColor,
  },
});
