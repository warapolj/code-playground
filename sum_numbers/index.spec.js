const { sumArr } = require("./");

// arr = [1,2,3,4,5], target = 9   คำตอบ: true   เพราะมี sub-array [2,3,4] ที่สมาชิกรวมกันได้ 9
// arr = [1,2,3,4,5], target = 8   คำตอบ: false เพราะไม่มี sub-array ไหนที่รวมกันได้ 8
// arr = [11,9,7,5,3,2], target = 9  คำตอบ: true เพราะมี sub-array [9] ที่สมาชิกรวมกันได้ 9
// arr = [11,9,7,5,3,2], target = 22  คำตอบ: false เพราะไม่มี sub-array ไหนที่รวมกันได้ 22
// arr = [5,1,3,8,10], target = 11  คำตอบ: true เพราะมี sub-array [3,8] ที่สมาชิกรวมกันได้ 11
// arr = [5,1,3,8,10], target = 7  คำตอบ: false เพราะไม่มี sub-array ไหนที่รวมกันได้ 7

test("1. should return true", function () {
  const result = sumArr([1,2,3,4,5], 9);
  expect(result).toEqual(true);
});
test("2. should return false", function () {
  const result = sumArr([1,2,3,4,5], 8);
  expect(result).toEqual(false);
});
test("3. should return true", function () {
  const result = sumArr([11,9,7,5,3,2], 9);
  expect(result).toEqual(true);
});
test("4. should return false", function () {
  const result = sumArr([11,9,7,5,3,2], 22);
  expect(result).toEqual(false);
});
test("5. should return true", function () {
  const result = sumArr([5,1,3,8,10], 11);
  expect(result).toEqual(true);
});
test("6. should return false", function () {
  const result = sumArr([5,1,3,8,10], 7);
  expect(result).toEqual(false);
});


