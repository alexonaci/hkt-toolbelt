<a href="https://github.com/poteat/hkt-toolbelt#readme">
  <img src=https://raw.githubusercontent.com/poteat/hkt-toolbelt/main/docs/logo.jpeg>
</a>

<br>
<br>

<p align="center">
  <a href="https://www.npmjs.com/package/hkt-toolbelt">
    <img src=https://img.shields.io/npm/v/hkt-toolbelt?color=green>
  </a>
  <img src=https://img.shields.io/github/actions/workflow/status/poteat/hkt-toolbelt/build.yml?branch=main>
  <img src=https://img.shields.io/github/repo-size/poteat/hkt-toolbelt>
  <br>
  <img src=https://img.shields.io/npm/dw/hkt-toolbelt>
  <img src=https://img.shields.io/github/license/poteat/hkt-toolbelt>
  <a href="https://code.lol">
    <img src=https://img.shields.io/badge/blog-code.lol-blue>
  </a>
</p>

<p align="center">
  <i>Functional and composable type utilities</i>
</p>

---

This library provides type-level utilities across many domains that may be mapped and combined in a functional way, using higher-kinded types.

Write robust, type-safe software with the benefit of composable and compile-time efficient types.

We aim to support hundreds of kind categories, including **List**, **Boolean**, **String**, **Function**, and more. We also provide a set of combinators for composing types.

<p align="right">
<b>Translations</b>
<br>
  <a href="https://github.com/poteat/hkt-toolbelt#readme">
    <img src="https://img.shields.io/badge/docs-english-blue">
  </a>
  <a href="./docs/readme.chinese.md">
    <img src="https://img.shields.io/badge/-中文-blue">
  </a>
</p>

## Installation

```bash
> npm install hkt-toolbelt
```

## Usage

In short, **`hkt-toolbelt`** let's you go from this:

```ts
/**
 * Remove all non-numeric elements from a tuple.
 */
type FilterNum<T extends unknown[]> = T extends [infer Head, ...infer Tail]
  ? Head extends number
    ? [Head, ...FilterNum<Tail>]
    : FilterNum<Tail>
  : [];
```

To this:

```ts
import { $, List, Conditional } from "hkt-toolbelt";

type FilterNum = $<List.Filter, $<Conditional.Extends, number>>;
```

**`hkt-toolbelt`** let's you express advanced types in a readable way, via composition of higher-kinded primitives.

### Kind Apply with $

You apply your kinds to an input with the `$` operator:

```ts
type Result = $<FilterNum, [1, "x", 2, "y", 3]>; // [1, 2, 3]
```

### Subpath Imports

You can also optionally import subpaths.

```ts
import { $ } from "hkt-toolbelt";
import { Filter } from "hkt-toolbelt/list";
import { Extends } from "hkt-toolbelt/conditional";

type FilterNum = $<Filter, $<Extends, number>>;
```

## What is a HKT?

> **> HKT stands for "higher-kinded type"**

Typescript has two _different_ constructions: types, and generics.

- **type**: An compile-time expression that is used to describe a value.
- **generic**: A 'template' type that can be instantiated with one or more type arguments, and resolves to a type.

Generics are not first-class citizens in Typescript - you cannot reference them without immediately supplying all of their type arguments. You can't pass in generics as arguments to other generics, or return them. This is a limitation of the language.

**`hkt-toolbelt` introduces two additional constructions:**

- **kind**: A compile-time expression that is used to describe a type, and is parameterized such that it may be applied to an argument type.
- **generic kind**: A generic type that returns a kind.

We apply kinds to types using the `$<kind, type>` generic.

Using kinds allows us to represent new types that are not possible with generics alone. For example: the narrow composition of generic functions.

As well, for even types that are representible using generics, we can use kinds to provide a more ergonomic API and elegant implementation.

> **Note on Terminology**
> Technically, using the word **_kind_** like this is incorrect. However, always mentioning 'higher-kinded type' is cumbersome, so we use **'kind'** as shorthand.
>
> In some places we use 'hk-type' instead, which is more correct.

## Guides

We have additional resources to help you get started with `hkt-toolbelt`, that go in depth on the concepts and usage.

- **[[Custom Kinds]](./docs/guides/custom-kinds.md)** - How do I create my own higher kinded types?
- **[[Kind Constraints]](./docs/guides/kind-constraints.md)** - How do I constrain a hk-type's input?
- **[[HK-Type Encoding]](./docs/guides/hk-type-encoding.md)** - Details on the internal encoding.

## Similar Projects

- _Inspired by [ts-toolbelt](https://www.npmjs.com/package/ts-toolbelt)_
- _Awesome TS learning resource: [type-challenges](https://github.com/type-challenges/type-challenges)_
- _Value-level utilities: [lodash](https://lodash.com)_

## Table of Contents

> **Note:** Many examples are out of date, as many higher-kinded types have been modified to be more partially applicable.
>
> Generally, types such as `List.Filter<Fn>` are now `$<List.Filter, Fn>`.

- [API](#api)
  - [Basic Utilities](#basic-utilities)
    - [$\<F, X\>](#f-x)
    - [$$\<FX, X\>](#fx-x)
    - [Cast\<A, B\>](#casta-b)
  - [Boolean Types](#boolean-types)
    - [Boolean.And\<X\>](#booleanandx)
    - [Boolean.Or\<X\>](#booleanorx)
    - [Boolean.Not](#booleannot)
  - [Combinator Types](#combinator-types)
    - [Combinator.Self](#combinatorself)
    - [Combinator.ApplySelf](#combinatorapplyself)
  - [Conditional Types](#conditional-types)
    - [Conditional.Equals\<A\>](#conditionalequalsa)
    - [Conditional.Extends\<A\>](#conditionalextendsa)
    - [If\<P, T, E\>](#ifp-t-e)
  - [Function Types](#function-types)
    - [Function](#function)
    - [Function.Constant\<A\>](#functionconstanta)
    - [Function.Identity](#functionidentity)
  - [Kind Types](#kind-types)
    - [Kind\<F\>](#kindf)
    - [Kind.Composable\<FX\>](#kindcomposablefx)
    - [Kind.Compose\<FX\>](#kindcomposefx)
    - [Kind.Pipe\<FX\>](#kindpipefx)
    - [Kind.\_](#kind_)
  - [List Types](#list-types)
    - [List.Map\<F\>](#listmapf)
    - [List.Find\<F\>](#listfindf)
    - [List.Filter\<F\>](#listfilterf)
    - [List.Append\<F\>](#listappendf)
    - [List.First\<T\>](#listfirstt)
    - [List.Last\<T\>](#listlastt)
    - [List.Pair\<T\>](#listpairt)
    - [List.Every\<T\>](#listeveryt)
    - [List.Some\<T\>](#listsomet)
    - [List.Reverse\<T\>](#listreverset)
    - [List.IsVariadic](#listisvariadic)
  - [Object Types](#object-types)
    - [Object.Keys\<F\>](#objectkeysf)
    - [Object.Values\<F\>](#objectvaluesf)
    - [Object.MapKeys\<F\>](#objectmapkeysf)
    - [Object.MapValues\<F\>](#objectmapvaluesf)
    - [Object.DeepMap\<F\>](#objectdeepmapf)
    - [Object.Paths](#objectpaths)
    - [Object.At\<K\>](#objectatk)
    - [Object.AtPath\<P\>](#objectatpathp)
  - [String Types](#string-types)
    - [String.StartsWith\<S\>](#stringstartswiths)
    - [String.EndsWith\<S\>](#stringendswiths)
    - [String.Includes\<S\>](#stringincludess)
    - [String.Append\<S\>](#stringappends)
    - [String.Prepend\<S\>](#stringprepends)
    - [String.IsTemplate](#stringistemplate)
    - [String.Join\<S\>](#stringjoins)
    - [String.Split\<S\>](#stringsplits)
    - [String.First](#stringfirst)
    - [String.Last](#stringlast)
    - [String.Tail](#stringtail)
    - [String.Init](#stringinit)
    - [String.Replace\<From, To\>](#stringreplacefrom-to)
    - [String.Reverse](#stringreverse)
    - [String.IsString](#stringisstring)
    - [String.ToUpper](#stringtoupper)
    - [String.ToLower](#stringtolower)
  - ["`Type`" Types](#type-types)
    - [Type.Display](#typedisplay)
    - [Type.ValueOf](#typevalueof)
  - [Union Types](#union-types)
    - [Union.ToIntersection](#uniontointersection)
    - [Union.ToTuple](#uniontotuple)

# API

The curried nature of the functions in this library is intended to be utilized to compose types using point-free style. In this respect, API types will first take in 'operations' and then the data to be operated on.

All higher-order types take in one argument, to support currying and point-free style. The `$` operator applies a parameter value to a higher-order type.

## Basic Utilities

### $<F, X>

The `$` operator is used to apply a higher-kinded-type function to a type. It is equivalent to the `F<A>` syntax in TypeScript.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.Append<" world">, "hello">; // "hello world"
```

### $$<FX, X>

The `$$` operator is used to apply a pipeline of kinds to a designated input type. This is a syntactic sugar for the `$` and `Kind.Pipe` operators, to avoid the need for explicitly calling `Kind.Pipe`.

`Kind.Pipe` composes kinds from left-to-right.

@see `$`
@see `Kind.Pipe`

```ts
import { $$, Kind, String } from "hkt-toolbelt";

type Result = $$<[String.Append<" world">, String.Append<"!">], "hello">; // "hello world!"
```

### Cast<A, B>

The `Cast` type is used to cast a type to another type. It is equivalent to the `A as B` syntax in TypeScript. For subtle cases.

```ts
import { Cast } from "hkt-toolbelt";

type Result = Cast<"hello", string>; // "hello"
```

## Boolean Types

### Boolean.And\<X>

The `And` type takes in a boolean and returns a function that takes in another boolean and returns the result of the two booleans being `&&`'d together.

```ts
import { $, Boolean } from "hkt-toolbelt";

type Result = $<Boolean.And<true>, false>; // false
```

### Boolean.Or\<X>

The `Or` type takes in a boolean and returns a function that takes in another boolean and returns the result of the two booleans being `||`'d together.

```ts
import { $, Boolean } from "hkt-toolbelt";

type Result = $<Boolean.Or<true>, false>; // true
```

### Boolean.Not

The `Not` type takes in a boolean and returns the opposite boolean.

```ts
import { $, Boolean } from "hkt-toolbelt";

type Result = $<Boolean.Not, true>; // false
```

## Combinator Types

### Combinator.Self

The `Self` kind returns itself. This means it can be applied with $ infinitely.

```ts
import { $, Combinator } from "hkt-toolbelt";

type Result = $<$<Combinator.Self, "foo">, "foo">; // Combinator.Self
```

### Combinator.ApplySelf

The `ApplySelf` kind takes in a kind, and applies that kind to itself. This can be used to model recursion for higher-order types.

```ts
import { $, Combinator } from "hkt-toolbelt";

type Result = $<Combinator.ApplySelf, Function.Identity>; // Function.Identity
```

## Conditional Types

### Conditional.Equals\<A>

The `Equals` type is used to check if a type is equal to another type. It is equivalent to the `A extends B ? (B extends A ? true : false) : false` syntax in TypeScript.

`Equals` returns a higher-kinded-type function that takes a type and returns a boolean.

```ts
import { $, Conditional } from "hkt-toolbelt";

type Result = $<$<Conditional.Equals, "foo">, "bar">; // false
```

### Conditional.Extends\<A>

The `Extends` type is used to check if a type is a subtype of another type. It is equivalent to the `A extends B ? true : false` syntax in TypeScript.

The first type passed in is the supertype, and the second type passed in is the subtype.

`Extends` returns a higher-kinded-type function that takes a type and returns a boolean.

```ts
import { $, Conditional } from "hkt-toolbelt";

type Result = $<$<Conditional.Extends, string>, "bar">; // true
```

### If<P, T, E>

The `If` type is used to conditionally return a type. It is equivalent to the `P<X> extends true ? T<X> : E<X>` syntax in TypeScript, but can be supplied with its argument `X` in a point-free style.

`If` takes in a predicate, a true type, and a false type. It returns a higher-kinded-type function that takes in a type and returns the result of the associated branch.

```ts
import { $, Conditional } from "hkt-toolbelt";

type Result = $<
  Conditional.If<
    Conditional.Equals<"foo">,
    String.Append<"bar">,
    String.Append<"baz">
  >,
  "foo"
>; // "foobar"
```

This is a hk-type used to designate type-level control flow.

## Function Types

### Function

The `Function` type is a supertype of all functions, i.e. all functions are a subtype of `Function`. It is not a kind and cannot be applied.

### Function.Constant\<A>

The `Constant` type takes in a type and returns a function that takes in any type and returns the original type. It ignores its applied input and always returns the configured type.

```ts
import { $, Function } from "hkt-toolbelt";

type Result = $<$<Function.Constant, "foo">, number>; // "foo"
```

### Function.Identity

The `Identity` type takes in a type and returns the same type, on the higher-kinded-type level.

```ts
import { $, Function } from "hkt-toolbelt";

type Result = $<Function.Identity, "foo">; // "foo"
```

## Kind Types

### Kind\<F>

The `Kind` type denotes a type function that may be applied to a type using `$`.

The Kind type can optionally be provided a function type to increase the specificity of its internal parameter and return types. This is used to create new kinds.

### Kind.Composable\<FX>

The `Composable` type checks whether a tuple of kinds are composable. A tuple of kinds is composable if the output of kind $N$ is a subtype of the input of kind $N-1$.

```ts
import { $, Kind, String } from "hkt-toolbelt";

type Result = $<Kind.Composable, [String.Append<"bar">, String.Append<"foo">]>; // true
```

### Kind.Compose\<FX>

The `Compose` type takes in a tuple of type functions, and composes them into one type function.

`Compose` checks that the tuple of kinds is composable, and returns a higher-kinded-type function that takes in a type and returns the result of the composition.

`Compose` executes functions from right to left, i.e. the last function in the tuple is executed first - as is traditional in mathematics.

```ts
import { $, Kind, String } from "hkt-toolbelt";

type Result = $<Kind.Compose<[String.Append<"bar">, String.Append<"foo">]>, "">; // "foobar"
```

### Kind.Pipe\<FX>

The `Pipe` type takes in a tuple of type functions, and pipes them into one type function. This operates from left to right, i.e. the first function in the tuple is executed first. This is the opposite order of `Compose`.

`Pipe` is often more intuitive for programmers since it reads in order of execution. This is what `$$` uses internally.

```ts
import { $, Kind, String } from "hkt-toolbelt";

type Result = $<Kind.Pipe<[String.Append<"foo">, String.Append<"bar">]>, "">; // "foobar"
```

### Kind.\_

The `_` type represents the 'unique placeholder type' used in type functions before application. `Kind._` is used by `$` for application.

## List Types

### List.Map\<F>

The `Map` function takes in a type function, and returns a higher kinded type that takes in a tuple type. It applies the given type function over every element in the tuple.

```ts
import { $, List, String } from "hkt-toolbelt";

type Result = $<List.Map<String.Append<"bar">>, ["foo", "baz"]>; // ["foobar", "bazbar"]
```

### List.Find\<F>

The `Find` function takes in a type function, then a tuple, and returns the first tuple element for which the finder function returns `true`. If no such element exists, `Find` returns `never`.

```ts
import { $, List, String } from "hkt-toolbelt";

type Result = $<List.Find<String.StartsWith<"foo">>, ["bar", "foobar"]>; // "foobar"
```

### List.Filter\<F>

The `Filter` function takes in a type function, and a tuple, and returns a tuple in-order of the input tuple, whereby only elements for which the filter function returns `true` remain in the resultant tuple.

```ts
import { $, List, String } from "hkt-toolbelt";

type Result = $<List.Filter<String.StartsWith<"foo">>, ["bar", "foobar"]>; // ["foobar"]
```

### List.Append\<F>

The `Append` function takes in a type, and a tuple, and applies the type such that it is appended to the end of the provided tuple.

```ts
import { $, List } from "hkt-toolbelt";

type Result = $<List.Append<"bar">, ["foo", "baz"]>; // ["foo", "baz", "bar"]
```

### List.First\<T>

The `First` function takes in a tuple, and returns the first element of the tuple.

```ts
import { $, List } from "hkt-toolbelt";

type Result = $<List.First, ["foo", "bar"]>; // "foo"
```

### List.Last\<T>

The `Last` function takes in a tuple, and returns the last element of the tuple. In the case of tuples with variadic elements, the variadic element is properly handled, even if it's infix.

```ts
import { $, List } from "hkt-toolbelt";

type Result = $<List.Last, ["foo", "bar", "baz"]>; // "baz"
```

### List.Pair\<T>

The `Pair` function takes in a tuple, and returns a tuple of tuples, where each tuple is a pair of the original tuple's elements, in order. e.g. `[1, 2, 3]` becomes `[[1, 2], [2, 3]]`.

```ts
import { $, List } from "hkt-toolbelt";

type Result = $<List.Pair, [1, 2, 3]>; // [[1, 2], [2, 3]]
```

For variadic tuples, the variadic element is handled via introducing unions to represent the possible combinations of variadic pair elements.

### List.Every\<T>

The `Every` function takes in a predicate function, and a tuple, and returns `true` if every element in the tuple satisfies the predicate function, and `false` otherwise.

```ts
import { $, List, Conditional } from "hkt-toolbelt";

type Result = $<List.Every<Conditional.Extends<number>>, [1, 2, 3]>; // true
```

### List.Some\<T>

The `Some` function takes in a predicate function, and a tuple, and returns `true` if at least one element in the tuple satisfies the predicate function, and `false` otherwise.

```ts
import { $, List, Conditional } from "hkt-toolbelt";

type Result = $<List.Some<Conditional.Extends<string>>, [1, 2, 3]>; // false
```

### List.Reverse\<T>

The `Reverse` function takes in a tuple, and returns a tuple with the elements in reverse order.

This kind properly handles variadic tuple types, e.g. `[1, 2, ...string[]]` becomes `[...string[], 2, 1]`.

```ts
import { $, List } from "hkt-toolbelt";

type Result = $<List.Reverse, [1, 2, 3]>; // [3, 2, 1]
```

### List.IsVariadic

The `IsVariadic` type takes in a tuple, and returns `true` if the tuple is variadic, and `false` otherwise.

We consider a tuple to be variadic if it has an indeterminate length.

```ts
import { List } from "hkt-toolbelt";

type Result = List.IsVariadic<[1, 2, 3]>; // false
```

## Object Types

### Object.Keys\<F>

The `Keys` function takes in an object type, and returns a tuple of the keys of the object.

```ts
import { $, Object } from "hkt-toolbelt";

type Result = $<Object.Keys, { foo: string; bar: number }>; // ["foo", "bar"]
```

### Object.Values\<F>

The `Values` function takes in an object type, and returns a tuple of the values of the object.

```ts
import { $, Object } from "hkt-toolbelt";

type Result = $<Object.Values, { foo: string; bar: number }>; // [string, number]
```

### Object.MapKeys\<F>

The `MapKeys` function takes in a type function, and an object type, and returns an object type with the keys of the original object type mapped by the given type function.

```ts
import { $, Object, String } from "hkt-toolbelt";

type Result = $<Object.MapKeys<String.Append<"bar">>, { foo: string }>; // { foobar: string }
```

### Object.MapValues\<F>

The `MapValues` function takes in a type function, and an object type, and returns an object type with the values of the original object type mapped by the given type function.

```ts
import { $, Object, String } from "hkt-toolbelt";

type Result = $<Object.MapValues<String.Append<"bar">>, { foo: "foo" }>; // { foo: "foobar" }
```

### Object.DeepMap\<F>

The `DeepMap` function takes in a type function, and an object type, and returns an object type where every value in the object is mapped by the given type function.

```ts
import { $, Object, String } from "hkt-toolbelt";

type Result = $<
  Object.DeepMap<String.Append<"bar">>,
  { name: { first: "foo"; last: "bar" } }
>; // { name: { first: "foobar"; last: "barbar" } }
```

### Object.Paths

The `Paths` type takes in an object type, and returns a tuple of tuples, where each tuple is a path to a value in the object.

```ts
import { $, Object } from "hkt-toolbelt";

type Result = $<Object.Paths, { name: { first: "foo"; last: "bar" } }>; // [["name", "first"], ["name", "last"]]
```

### Object.At\<K>

The `At` function takes in a key, and an object type, and returns the value at the given key in the object.

```ts
import { $, Object } from "hkt-toolbelt";

type Result = $<Object.At<"name">, { name: "foo" }>; // "foo"
```

### Object.AtPath\<P>

The `AtPath` function takes in a path, and an object type, and returns the value at the given path in the object.

```ts
import { $, Object } from "hkt-toolbelt";

type Result = $<
  Object.AtPath<["name", "first"]>,
  { name: { first: "foo"; last: "bar" } }
>; // "foo"
```

## String Types

### String.StartsWith\<S>

The `StartsWith` function takes in a string literal and returns whether or not it starts with the given prefix, returning `true` or `false` as appropriate.

All strings _start with_ `string`, so `StartsWith<string>` will return true for all subsequent string types.

However, `string` starts with no particular prefix, so `$<StartsWith<"f">, string>` will result in false. All strings start with the empty string, as well.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.StartsWith<"foo">, "foobar">; // true
```

### String.EndsWith\<S>

The `EndsWith` function takes in a string literal and returns whether or not it ends with the given suffix, returning `true` or `false` as appropriate.

@see `String.StartsWith`

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.EndsWith<"bar">, "foobar">; // true
```

### String.Includes\<S>

The `Includes` function takes in a string literal and returns whether or not it is a substring of the given string, returning `true` or `false` as appropriate.

@see `String.StartsWith`

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.Includes<"foo">, "barfoobar">; // true
```

### String.Append\<S>

The `Append` function takes in a string literal and returns a higher-kinded-type function that takes in a string and returns the result of appending the string literal to the end of the string.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.Append<"bar">, "foo">; // "foobar"
```

### String.Prepend\<S>

The `Prepend` function takes in a string literal and returns a higher-kinded-type function that takes in a string and returns the result of prepending the string literal to the beginning of the string.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.Prepend<"foo">, "bar">; // "foobar"
```

### String.IsTemplate

The `IsTemplate` function takes in a string and returns whether or not it is a template literal, returning `true` or `false` as appropriate.

A string is considered to be a template literal if it cannot be reduced to a literal string, i.e. if it contains `${string}` within it.

This is a potentially expensive type operation.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.IsTemplate, `foo${string}`>; // true
```

### String.Join\<S>

The `Join` function takes in a string literal and returns a higher-kinded-type function that takes in a tuple of strings and returns the result of joining the strings in the tuple with the string literal acting as the separator.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.Join<" ">, ["foo", "bar", "baz"]>; // "foo bar baz"
```

`Join` can handle template literal strings as well, and will properly handle the template literal's embedded expressions. In the case of variadic tuple input, we resolve the join to `string`. String unions are supported for both the separator and the tuple elements.

### String.Split\<S>

The `Split` function takes in a string literal and returns a higher-kinded-type function that takes in a string and returns a tuple of strings, where the original string is split on the string literal.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.Split<" ">, "foo bar baz">; // ["foo", "bar", "baz"]
```

`Split` can handle template literal strings as well, and will properly handle the template literal's embedded expressions. However, all string literal delimiters result in `string[]` as the split result. String unions are supported for both the separator and the tuple elements.

### String.First

> **"If ya ain't `[First]`, you're `[Last]`"** - _Ricky Bobby_

The `First` function takes in a string and returns the first character of the string.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.First, "foo">; // "f"
```

### String.Last

The `Last` function takes in a string and returns the last character of the string.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.Last, "foo">; // "o"
```

### String.Tail

The `Tail` function takes in a string and returns the string with the first character removed.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.Tail, "foobar">; // "oobar"
```

### String.Init

The `Init` function takes in a string and returns the string with the last character removed.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.Init, "foobar">; // "fooba"
```

### String.Replace\<From, To>

The `Replace` generic, given two 'From' and 'To' types that represent a string to replace, and a string to replace it with, returns a higher-kinded-type that takes in a string and returns the result of replacing all instances of the 'From' string with the 'To' string.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.Replace<"foo", "bar">, "foo foo foo">; // "bar bar bar"
```

### String.Reverse

The `Reverse` function takes in a string and returns the string with the characters in reverse order.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.Reverse, "foobar">; // "raboof"
```

### String.IsString

The `IsString` function takes in a type and returns whether or not it is a string, returning `true` or `false` as appropriate.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.IsString, "foobar">; // true
```

### String.ToUpper

The `ToUpper` function takes in a string and returns the string with all characters converted to uppercase.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.ToUpper, "foobar">; // "FOOBAR"
```

### String.ToLower

The `ToLower` function takes in a string and returns the string with all characters converted to lowercase.

```ts
import { $, String } from "hkt-toolbelt";

type Result = $<String.ToLower, "FOOBAR">; // "foobar"
```

## "`Type`" Types

### Type.Display

The `Display` function takes in a type and attempts to force the Typescript compiler to display the resolved type in IDEs and other tools.

This is a useful internal tool to ensure resultant types remain legible.

```ts
import { $, Type } from "hkt-toolbelt";

type Result = $<Type.Display, "foobar">; // "foobar"
```

### Type.ValueOf

The `ValueOf` function takes in a type and returns the associated union value of the type, a higher-kinded equivalent to the `T[keyof T]` operator.

```ts
import { $, Type } from "hkt-toolbelt";

type Result = $<Type.ValueOf, { foo: "bar" }>; // "bar"
```

## Union Types

### Union.ToIntersection

The `ToIntersection` function takes in a union type and returns the intersection of all the types in the union.

```ts
import { $, Union } from "hkt-toolbelt";

type Result = $<Union.ToIntersection, { foo: "bar" } | { bar: "bar" }>; // { foo: "bar"; bar: "bar" }
```

### Union.ToTuple

The `ToTuple` function takes in a union type and returns a tuple of all the types in the union.

```ts
import { $, Union } from "hkt-toolbelt";

type Result = $<Union.ToTuple, { foo: "bar" } | { bar: "bar" }>; // [{ foo: "bar" }, { bar: "bar" }]
```
