const ArrayManipulation = require("../modules/ArrayManipulation");

const data = [
  { name: "Steve Jobs", age: 18, skills: ["html", "css", "javascript"] },
  { name: "Bill Gates", age: 24, skills: ["html", "javascript", "php"] },
  { name: "Son Masayoshi", age: 30, skills: ["html", "typescript", "python"] },
  { name: "Yukihiro Matz", age: 36, skills: ["html", "css", "javascript", "ruby"] },
];

let keys = []; // 取得したいデータ
let conditions = []; //　取得条件(キー, 閾値)
let expected;

describe("ArrayManipulation", () => {
  test("get PersonsName who's age under30", () => {
    const ArrayManipulationInstance = new ArrayManipulation();
    keys = ["name"];
    conditions = { key: "age", threshold_value: 30 };
    expected = ["Steve Jobs", "Bill Gates"];
    const result = ArrayManipulationInstance.getUserNamebyAgeCondition(
      data,
      keys,
      conditions
    );
    expect(result).toEqual(expected);
  });

  test("get adds All Persons Age who have css skills", () => {
    const ArrayManipulationInstance = new ArrayManipulation();
    keys = ["age"];
    conditions = ["skills", "css"];
    expected = 54;
    expect(
      ArrayManipulationInstance.getUsersAddsAgebySkillsCondition(
        data,
        keys,
        conditions
      )
    ).toEqual(expected);
  });
});
