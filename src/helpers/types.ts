type Questions = {
  id: string;
  question: string;
  options: Options[];
};

type Options = {
  text: string;
  score: number;
};
