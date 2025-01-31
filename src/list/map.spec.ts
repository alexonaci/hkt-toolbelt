import { $, Conditional, Function, List, Test } from "hkt-toolbelt";

type Map_Spec = [
  /**
   * Map can execute conditionals over tuples.
   */
  Test.Expect<
    $<$<List.Map, $<Conditional.Equals, "foo">>, ["foo", "bar"]>,
    [true, false]
  >,

  /**
   * Empty input corresponds to empty output.
   */
  Test.Expect<$<$<List.Map, $<Conditional.Equals, "foo">>, []>, []>,

  /**
   * Non-tuple input emits a compiler error
   */
  // @ts-expect-error
  $<List.Map<Function.Identity>, number>,

  /**
   * Mapping over identity results in the same tuple.
   */
  Test.Expect<
    $<$<List.Map, Function.Identity>, ["foo", "bar"]>,
    ["foo", "bar"]
  >,

  /**
   * Mapping over constant results in a tuple solely composed of such elements.
   */
  Test.Expect<
    $<$<List.Map, $<Function.Constant, "foo">>, ["foo", "bar"]>,
    ["foo", "foo"]
  >
];
