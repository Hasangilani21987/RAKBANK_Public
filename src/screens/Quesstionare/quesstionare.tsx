import {questions} from '../../data';
import Header from '../../components/header';
import {appColors} from '../../helpers/appColors';
import React, {useCallback, useState} from 'react';
import {height, width} from '../../helpers/functions';
import AnimatedTextBtn from '../../components/Button';
import {
  View,
  Text,
  FlatList,
  ViewToken,
  Pressable,
  StyleSheet,
  ScrollView,
  ListRenderItem,
} from 'react-native';

const viewabilityConfig = {
  itemVisiblePercentThreshold: 50,
};

const Quesstionare = () => {
  const [activeDot, setActiveDot] = useState<number | null>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const handleAnswers = (questionId: string, score: number) => {
    setAnswers({...answers, [questionId]: score});
  };

  const renderQuestions: ListRenderItem<Questions> = ({item}) => {
    const Options = item.options;
    return (
      <View style={styles.question_item_container}>
        <Text style={styles.question_txt}>{item.question}</Text>
        <ScrollView
          nestedScrollEnabled={true}
          style={{minHeight: height / 3}}
          showsVerticalScrollIndicator={true}>
          {Options.map((option, index) => (
            <Pressable
              key={item.id + option.text}
              style={[
                styles.option_container,
                {
                  backgroundColor:
                    answers[item.id] === option.score
                      ? appColors.KOrangeColor
                      : appColors.kBgScreenColor,
                },
              ]}
              onPress={() => handleAnswers(item.id, option.score)}>
              <Text style={styles.option_txt}>{`${index + 1}.   ${
                option.text
              }`}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  };

  const handleVieweableItemsChanged = useCallback(
    ({viewableItems}: {viewableItems: ViewToken<Questions>[]}) => {
      setActiveDot(viewableItems[0]?.index);
    },
    [activeDot],
  );

  const onSubmitPress = () => {
    const totalScore = Object.values(answers).reduce(
      (acc, curr) => acc + curr,
      0,
    );

    // Navigate to Result screen with Total Score
  };

  return (
    <View style={styles.container}>
      <Header
        scores={answers}
        onPress={onSubmitPress}
        active_question={activeDot!}
      />
      <View style={styles.question_container}>
        <FlatList
          horizontal
          pagingEnabled
          data={questions}
          renderItem={renderQuestions}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="handled"
          viewabilityConfig={viewabilityConfig}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={handleVieweableItemsChanged}
        />
      </View>
      <View style={styles.pagination_container}>
        <AnimatedTextBtn
          btnTxt="Previous"
          onPress={() => {}}
          disableBtn={activeDot !== 0}
          btnTxtColor={appColors.kWhiteColor}
          disableBtnStyles={
            activeDot !== 0
              ? styles.prevBtnStyles
              : [styles.prevBtnStyles, {opacity: 0.2}]
          }
        />
        <AnimatedTextBtn
          btnTxt="Next"
          onPress={() => {}}
          btnTxtColor={appColors.kWhiteColor}
          disableBtn={activeDot !== questions.length - 1}
          disableBtnStyles={
            activeDot !== questions.length - 1
              ? styles.nxtBtnStyles
              : [styles.nxtBtnStyles, {opacity: 0.2}]
          }
        />
      </View>
    </View>
  );
};

export default Quesstionare;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: appColors.kBgScreenColor,
  },
  question_container: {
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: appColors.kBgCardColor,
  },
  prevBtnStyles: {
    padding: 16,
    borderWidth: 2,
    borderRadius: 16,
    width: width / 3,
    alignItems: 'center',
    borderColor: appColors.KOrangeColor,
    backgroundColor: appColors.kBgScreenColor,
  },
  nxtBtnStyles: {
    padding: 16,
    borderRadius: 16,
    width: width / 4,
    alignItems: 'center',
    backgroundColor: appColors.KOrangeColor,
  },
  question_item_container: {
    width: width,
    paddingTop: 40,
    paddingHorizontal: 25,
  },
  question_txt: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: appColors.kWhiteColor,
  },
  option_container: {
    padding: 14,
    marginTop: 15,
    borderRadius: 8,
  },
  option_txt: {
    fontSize: 18,
    color: appColors.kWhiteColor,
  },
  pagination_container: {
    flex: 0.2,
    flexDirection: 'row',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    backgroundColor: appColors.kBgCardColor,
  },
});
