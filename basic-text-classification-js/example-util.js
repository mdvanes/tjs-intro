export function compareExample(predictImdb) {
  // For this input: '1,591,202,14,31,6,717,10,10,2,2,5,4,360,7,4,177,5760,394,354,4,123,9,1035,1035,1035,10,10,13,92,124,89,488,7944,100,28,1668,14,31,23,27,7479,29,220,468,8,124,14,286,170,8,157,46,5,27,239,16,179,2,38,32,25,7944,451,202,14,6,717,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0'
  // Encoded version of this: <START> please give this one a miss br br <UNK> <UNK> and the rest of the cast rendered terrible performances the show is flat flat flat br br i don't know how michael madison could have allowed this one on his plate he almost seemed to know this wasn't going to work out and his performance was quite <UNK> so all you madison fans give this a miss
  const example = ['1', '591', '202', '14', '31', '6', '717', '10', '10', '2', '2', '5', '4', '360', '7', '4', '177', '5760', '394', '354', '4', '123', '9', '1035', '1035', '1035', '10', '10', '13', '92', '124', '89', '488', '7944', '100', '28', '1668', '14', '31', '23', '27', '7479', '29', '220', '468', '8', '124', '14', '286', '170', '8', '157', '46', '5', '27', '239', '16', '179', '2', '38', '32', '25', '7944', '451', '202', '14', '6', '717', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];

  const exampleAsText = 'please give this one a miss br br <UNK> <UNK> and the rest of the cast rendered terrible performances the show is flat flat flat br br i don\'t know how michael madison could have allowed this one on his plate he almost seemed to know this wasn\'t going to work out and his performance was quite <UNK> so all you madison fans give this a miss';
  // Encode the text with metadata.word_index and see if the result is equal to `example`
  const encodedExampleAsText = predictImdb.encodeReview(exampleAsText);
  console.assert(example.join('-') === encodedExampleAsText.join('-'));

  const result = predictImdb.predict(exampleAsText, '0', 'my example');
  console.log('compareExample: ', result);
  return result;
}
