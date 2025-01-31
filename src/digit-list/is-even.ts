import { Type, Kind, Digit, DigitList } from "..";

export type _$isEven<
  T extends DigitList.DigitList,
  LAST extends Digit.Digit = DigitList._$last<T>
> = LAST extends Digit.Zero | "2" | "4" | "6" | "8" ? true : false;

export interface IsEven extends Kind.Kind {
  f(x: Type._$cast<this[Kind._], DigitList.DigitList>): _$isEven<typeof x>;
}
