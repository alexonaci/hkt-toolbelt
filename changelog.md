# Changelog

## 0.21.1

- Add support for negative start indices in `List.Splice`.

## 0.21.0

- Improve ability to compose type-level functions
  - Add `$N` operator for uncurried type-level function application.
  - Add `Kind.Curry` and `Kind.Uncurry` to support argument lifting.
- Add various natural number operations:
  - Add `NaturalNumber.ModuloBy` with swapped arguments.
  - Add `NaturalNumber.IsLessThan`.
- Add `Combinator.Collate` for theoretical / pedagogical purposes.
- Add `NaturalNumberTheory.Factorial`.
- Add `NaturalNumberTheory.FizzBuzz` and `NaturalNumberTheory.FizzBuzzSequence`.

## 0.20.1

- Add `DigitList.FromString` for parsing digit lists from strings.
- Add `Number.Compare` for type-level numeric comparison.

## 0.20.0

- Add various advanced `List` methods.
  - Add `Concat`, `Repeat`, `ShiftN`, `PopN`, `Slice`, `Splice`, `Flatten`
  - Add `FlattenN`, `DigitList.ToNumber`
- **[Breaking]** Renamed prior `List.Slice` utility to `List.ShiftN`.

## 0.19.3

- Make `String.Join` more composable with other list types.

## 0.19.2

- Improve `NaturalNumber.Multiply` and `Combinator.FixSequence` performance.

## 0.19.1

- Add `Kind.Reify` for reifying a higher-order type to a value-level type.
- Add `Type.Infer` for inferring a narrow type in a parameter context.

## 0.19.0

- **[Breaking]** Complete overhaul of all modules, more consistent `$` usage.

## 0.18.1

- Add `NaturalNumber.Compare` for comparing natural numbers.

## 0.18.0

- Add various numeric comparison types.
  - Add `DigitList.Compare` for comparing digit list magnitude.
  - Add `Digit.Compare` for comparing single-digit magnitude.
- Add various parser combinators.
  - Add `Parser.Many1` for parsing one or more elements.
  - Add `Parser.Optional` for parsing an optional element.
- Introduce `Stress` module for common stress-testing types.

## 0.17.1

- Introduce various other `Parser` combinators.
  - Add `Parser.Run` for state management.
  - Add `Parser.Map` for mapping over the result of a parser.
  - Add `Parser.Letter` and `Parser.Letters` for parsing letters.
  - Add `Parser.ObjectSequence` for better result extraction.
- Add `Object.Emplace` and `Object.Merge` methods.
- Increase performance of various string and list utilities.

## 0.17.0

- Introduce `Parser` module for parser combinators.
  - Add `Parser.String` for parsing string literals.
  - Add `Parser.Choice` for parsing alternatives.
  - Add `Parser.Sequence` for parsing sequences.
- Add `List.Slice<N>` method, to remove the first N elements from a list.
- Add `String.Slice` method.

## 0.16.1

- Fix division bug that led to rare incorrect results for
  `NaturalNumber.Divide`.

## 0.16.0

- Introduce `NaturalNumberTheory` module for abstract natural number theory.
  - Add `NaturalNumberTheory.Collatz`
  - Add `NaturalNumberTheory.CollatzSequence` for generating hailstorm numbers.
- Add `Combinator.FixSequence` for fixed-point iteration of a sequence.
- Add `NaturalNumber.DivideBy`, for argument swapping of `NaturalNumber.Divide`.

## 0.15.1

- Fix `String.Join` bug that did not properly handle one-tuple elements.

## 0.15.0

- Add `List.Length` method.
- Add `List.Times` method, which constructs the tuple from 0 to N - 1.
- Add `NaturalNumber.Divide` and `NaturalNumber.Modulo` methods.
- Add `NaturalNumber.IsEven` and `NaturalNumber.IsOdd` methods.
- Add various digit-list level division methods.

## 0.14.0

- Add `NaturalNumber.Multiply` method.
- **[Breaking]** Change return type of natural arithmetic to numbers instead of
  strings.

## 0.13.2

- Add `NaturalNumber.Increment` and `NaturalNumber.Decrement` methods.
- Add `NaturalNumber.Subtract` method.

## 0.13.1

- Add `List.Reduce` method.

## 0.13.0

- Add `Number`, `NaturalNumber`, `Digit`, and `DigitList` modules.
- Add `Type.IsNever` method.
- Add `Union.Length` method.

## 0.12.0

- **[Breaking]** Switch default package export from '$' to entire module.
- **[Breaking]** Remove deprecated `Conditional.SubtypeOf` in favor of
  `Conditional.Extends`.
- **[Breaking]** Remove `Kind` namespace-class merging in favor of `Kind.Kind`.
- Add support for deep subpath imports.
  - e.g. `import { StartsWith } from "hkt-toolbelt/string/starts-with"`

## 0.11.0

- Add `String.ToUpper` and `String.ToLower` methods.
- Add `Object.MapKeys` and `Object.MapValues` methods.

## 0.10.0

- Add `Conditional.If` hk-type for type-level control flow.
- Add `String.IsString` hk-level predicate.
- Add `Type`, `Union`, and `Object` core components.

## 0.9.0

- Fix a type resolution issue for `Conditional.Extends` hk-type.
- Strengthen hk-level type check for `Combinator.ApplySelf` hk-type.
- Optimize string and list utilities via tail-call optimization.

## 0.8.1

- Introduce `Conditional.Extends` utility type.
- Deprecate alias `Conditional.SubtypeOf` in favor of `Conditional.Extends`.

## 0.8.0

- Add `String.Tail`, `String.Init`, and `String.Reverse` hk-types.

## 0.7.0

- Optimize string splitting routine in `String.IsTemplate` using tail-call
  optimization.
- Add `String.First` and `String.Last` kinds.

## 0.6.1

- Publish updated npm readme.

## 0.6.0

- Add `String.Join`, `String.Split`, and `String.IsTemplate` kinds.
- Add `List.IsVariadic` kind.

## 0.5.1

- Fix bug with `Test.Expect` in checking equality between two `never` types.
- Publish improved docs on npm.

## 0.5.0

- Allow alternative subpath imports, e.g. `hkt-toolbelt/string`.

## 0.4.1

- Fix internal import paths and build process for package types.

## 0.4.0

- Add shorthand `$$` pipe-application operator.
- Add `Boolean.Or` for `||` HKT-level operator.
- Add `Combinator.Self` and `Combinator.ApplySelf` combinators.
- Add `Kind.Pipe` left-to-right composition.
- Add `List.First`, `List.Some`, `List.Reverse` tuple utilities.
- Improve `Test.Expect` error messages to use ᛰ for strict type equality.

## 0.3.0

- Add `String.Append` and `String.Prepend` types.
- Improve `Test.Expect` behavior and error messages.

## 0.2.1

- Rename `Kind.Input` to `Kind.InputOf` and `Kind.Output` to `Kind.OutputOf`.

## 0.2.0

- Add HKT-level composability check for `Kind.Compose`.

## 0.1.0

- First experimental release.
- Introduce `Boolean`, `Cast`, `Conditional`, `Function`, `Kind`, `List`,
  `String`, and `Test` core components.
