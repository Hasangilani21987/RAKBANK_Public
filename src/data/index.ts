import {generateUniqueId} from '../helpers/functions';

const questions: Questions[] = [
  {
    id: generateUniqueId(),
    question: 'How would you describe your investment knowledge?',
    options: [
      {text: 'Novice', score: 1},
      {text: 'Advanced', score: 3},
      {text: 'Intermediate', score: 2},
    ],
  },
  {
    id: generateUniqueId(),
    question: 'Investment Duration',
    options: [
      {text: 'Medium-term (1-5 years)', score: 2},
      {text: 'Short-term (less than 1 year)', score: 1},
      {text: 'Long-term (more than 5 years)', score: 3},
    ],
  },
  {
    id: generateUniqueId(),
    question: 'How comfortable are you with taking risks?',
    options: [
      {text: 'Neutral', score: 3},
      {text: 'Very risk-averse', score: 1},
      {text: 'Very risk-tolerant', score: 5},
      {text: 'Somewhat risk-averse', score: 2},
      {text: 'Somewhat risk-tolerant', score: 4},
    ],
  },
  {
    id: generateUniqueId(),
    question: 'What percentage of your income are you willing to invest?',
    options: [
      {text: '10-25%', score: 2},
      {text: '25-50%', score: 3},
      {text: 'More than 50%', score: 4},
      {text: 'Less than 10%', score: 1},
    ],
  },
  {
    id: generateUniqueId(),
    question:
      'How would you react to a sudden drop in the value of your investments?',
    options: [
      {text: 'Panic and sell immediately', score: 1},
      {text: 'Hold and wait for recovery', score: 3},
      {text: 'Monitor closely and consider selling', score: 2},
      {text: 'See it as a buying opportunity and invest more', score: 4},
    ],
  },
  {
    id: generateUniqueId(),
    question: 'What is your investment goal?',
    options: [
      {text: 'Growth', score: 3},
      {text: 'Steady income', score: 2},
      {text: 'Aggressive growth', score: 4},
      {text: 'Capital preservation', score: 1},
    ],
  },
];

export {questions};
