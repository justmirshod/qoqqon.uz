export const latinToCyrillic = (text) => {
  const latinChars =
    'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z , . ; : ! ? - _ + = ( ) [ ] { } < > @ # $ % & * / \\ | ^ ~';
  const cyrillicChars =
    'а б ц д е ф г ҳ и ж к л м н о п қ р с т у в в х й з А Б Ц Д Е Ф Г Ҳ И Ж К Л М Н О П Қ Р С Т У В В Х Й З   . , : ; ! ? - _ + = ( ) [ ] { } < > @ # $ % & * /  | ^ ~';

  const sortedTextArray = text.split('').map((item, index, arr) => {
    if (arr[index] === 's' && arr[index + 1] === 'h') {
      arr.splice(index + 1, 1);
      return 'ш';
    } else if (arr[index] === 'S' && arr[index + 1] === 'h') {
      arr.splice(index + 1, 1);
      return 'Ш';
    } else if (arr[index] === 'c' && arr[index + 1] === 'h') {
      arr.splice(index + 1, 1);
      return 'ч';
    } else if (arr[index] === 'C' && arr[index + 1] === 'h') {
      arr.splice(index + 1, 1);
      return 'Ч';
    } else if (arr[index] === 'o' && arr[index + 1] === '‘') {
      arr.splice(index + 1, 1);
      return 'ў';
    } else if (arr[index] === 'O' && arr[index + 1] === '‘') {
      arr.splice(index + 1, 1);
      return 'Ў';
    } else if (arr[index] === 'G' && arr[index + 1] === '‘') {
      arr.splice(index + 1, 1);
      return 'Ғ';
    } else if (arr[index] === 'g' && arr[index + 1] === '‘') {
      arr.splice(index + 1, 1);
      return 'ғ';
    } else if (arr[index] === 'y' && arr[index + 1] === 'a') {
      arr.splice(index + 1, 1);
      return 'я';
    } else if (arr[index] === 'Y' && arr[index + 1] === 'a') {
      arr.splice(index + 1, 1);
      return 'Я';
    } else if (arr[index] === 'y' && arr[index + 1] === 'u') {
      arr.splice(index + 1, 1);
      return 'ю';
    } else if (arr[index] === 'Y' && arr[index + 1] === 'u') {
      arr.splice(index + 1, 1);
      return 'Ю';
    } else if (arr[index] === 'y' && arr[index + 1] === 'e') {
      arr.splice(index + 1, 1);
      return 'е';
    } else if (arr[index] === 'Y' && arr[index + 1] === 'e') {
      arr.splice(index + 1, 1);
      return 'Е';
    } else if (arr[index] === 'y' && arr[index + 1] === 'o') {
      arr.splice(index + 1, 1);
      return 'ё';
    } else if (arr[index] === 'Y' && arr[index + 1] === 'o') {
      arr.splice(index + 1, 1);
      return 'Ё';
    }
    return item;
  });

  const result = sortedTextArray
    .map((item, index, arr) => {
      let i = latinChars.split(' ').findIndex((value) => value === item);
      if (i === -1) {
        return item;
      } else {
        return cyrillicChars.split(' ')[i];
      }
    })
    .join('');
  return result;
};

latinToCyrillic('quyosh yelmoqda charaqlab');
