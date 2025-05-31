import React from 'react';
import {questions} from '../data';
import AnimatedTextBtn from './Button';
import Applogo from '../images/logo.svg';
import {appColors} from '../helpers/appColors';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  onPress: () => void;
  active_question: number;
  scores: Record<string, number>;
}

const Header = ({onPress, active_question, scores}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Applogo width="100%" height={60} style={{marginBottom: 30}} />
      <Text style={styles.headerTxt}>Risk Profile Questionnaire</Text>
      <View style={styles.header_question}>
        <Text style={[styles.headerTxt, {fontSize: 16, marginTop: 20}]}>
          {`Q.${active_question + 1}`}{' '}
          <Text style={[styles.headerTxt, {fontSize: 14, fontWeight: '400'}]}>
            {`/ ${questions.length}`}
          </Text>
        </Text>
        <AnimatedTextBtn
          btnTxt="Submit"
          onPress={onPress}
          btnTxtColor={appColors.kWhiteColor}
          disableBtn={Object.keys(scores || {}).length === questions.length}
          disableBtnStyles={
            Object.keys(scores || {}).length === questions.length
              ? styles.btnConatiner
              : [styles.btnConatiner, {opacity: 0.3}]
          }
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
  header_question: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  headerBtn: {
    padding: 15,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: appColors.KOrangeColor,
  },
  btnConatiner: {
    padding: 15,
    borderWidth: 2,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor: appColors.KOrangeColor,
  },
});
