import { Type, Kind, DigitList } from "..";

type _$trim2<A extends DigitList.DigitList> = A extends [
  "0",
  ...infer Rest extends DigitList.DigitList
]
  ? _$trim2<Rest>
  : A;

export type _$trim<
  A extends DigitList.DigitList,
  TRIM extends DigitList.DigitList = _$trim2<A>,
  OUTPUT extends DigitList.DigitList = TRIM extends [] ? ["0"] : TRIM
> = OUTPUT;

export interface Trim extends Kind.Kind {
  f(x: Type._$cast<this[Kind._], DigitList.DigitList>): _$trim<typeof x>;
}
