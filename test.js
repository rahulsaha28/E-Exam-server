import { objToArrayCompair } from "./utils/helper.js";

const obj = [
  {
    id: 1,
    ans: 1,
  },
  {
    id: 2,
    ans: 1,
  },
  {
    id: 3,
    ans: 3,
  },
  {
    id: 4,
    ans: 1,
  },
  {
    id: 5,
    ans: 2,
  },
];

console.log(
  objToArrayCompair(obj, [undefined, undefined, undefined, null, null]).filter(
    (item) => {
      return item == false;
    }
  ).length
);
