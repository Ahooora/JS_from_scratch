const {
  printFullName,
  printFullNameFromArrayOfArrays,
  countSpecificCharacter,
  getRandomItemFromArray,
  shuffleMyArray,
  reverseNum,
  countVowel,
  checkPalindrome,
  getFactorial,
} = require('.');

describe('Functions tests', () => {
  test('1. printFullName should return "John Doe"', () => {
    const testSample = ['John', 'Doe'];
    console.log(`1. Testing sample is: `, JSON.stringify(testSample, null, 4));

    expect(printFullName(testSample)).toEqual('John Doe');
  });

  test('2. printFullName should return ["Julia Robert", "John Doe", ...]', () => {
    const testSample = [
      ['Julia', 'Robert'],
      ['John', 'Doe'],
    ];
    console.log(`2. Testing sample is: `, JSON.stringify(testSample, null, 4));
    expect(printFullNameFromArrayOfArrays(testSample)).toMatchObject([
      'Julia Robert',
      'John Doe',
    ]);
  });

  test('3. expect the correct result from countSpecificCharacter', () => {
    const testSample = 'Without functions, we fucked up!';
    console.log(`3. Testing sample is: ${testSample}`);

    expect(countSpecificCharacter(testSample, 'u')).toEqual(4);
  });

  test('4. getRandomItemFromArray should return random item', () => {
    const testSample = ['John', 'Doe', '3', 'Hello world!', '5'];
    console.log(`4. Testing sample is: ${testSample}`);
    expect(
      testSample.includes(getRandomItemFromArray(testSample))
    ).toBeTruthy();
  });

  test('5. shuffleMyArray return shuffled array', () => {
    const testSample = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => num.toString());
    console.log(`5. Testing sample is: ${testSample}`);

    function pick(words) {
      var random = Math.floor(Math.random() * (testSample.length - 1));
      return words[random];
    }

    expect(pick(shuffleMyArray(testSample))).toMatch(
      new RegExp(testSample.join('|'))
    );
  });

  test('6. reverse number', () => {
    const testSample = 123;
    console.log(`6. Testing sample is: ${testSample}`);
    expect(reverseNum(testSample)).toBe(321);
  });

  test('7. count vowel letter', () => {
    const testSample = 'The NEMESIS is Umbrella creation';
    console.log(`7. Testing sample is: ${testSample}`);

    expect(countVowel(testSample)).toEqual(12);
  });

  test('8. check palindrome of the following words "bannana", "racecar", "madam"', () => {
    const testSample = ['bannana', 'racecar', 'madam'];
    console.log(`8. Testing samples are: ${testSample.join(' - ')}`);

    for (let i = 0; i < testSample.length; i++) {
      if (i === 0) {
        expect(checkPalindrome(testSample[i])).toBeFalsy();
      } else {
        expect(checkPalindrome(testSample[i])).toBeTruthy();
      }
    }
  });

  test('9. factorial of 5 is equal 120', () => {
    const testSample = 5;
    console.log(`9. Testing sample is: 5`);

    expect(getFactorial(testSample)).toEqual(120);
  });
});
