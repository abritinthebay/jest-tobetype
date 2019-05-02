# ToBeType
A [Jest](https://facebook.github.io/jest/) matcher that allows you to test the expected type of a value.

## Usage
Use it like any other matcher. For example:

```javascript
expect("").toBeType("string");
expect({}).toBeType("object");
expect(1).toBeType("number");
expect([]).toBeType("array");
expect(() => {}).toBeType("function");

// also works with Promises
expect(Promise.resolve([])).resolves.toBeType("array");
```
It's that easy, enjoy!

## Why?

Have you ever been frustrated doing this for every test when you just want to check the type of a value?

```javascript
	expect(typeof foo).toBe("string");
```

Or, worse, if you're testing the result of a Promise?

```javascript
	expect(fooPromise
		.then(data => typeof data))
		.resolves.toBe("object");
```

It's not *hard* to write this boilerplate but it *is* annoying. Strangely Jest specifically doesn't include any easy shorthand for this.

Well it does now.

## Installation

Simple install to your project like so:

```shell
npm i jest-tobetype --save-dev
```

Then include in your tests either in the test file you want *or* in the setup files for Jest.

The simplest way is:

```javascript
import toBeType from "jest-tobetype";
expect.extend(toBeType);
```

This is *probably* all you'll need to do if you're not doing anything special but if you want more options - read one.

If you have multiple extensions you are doing you may want to just import the function directly, eg:

```javascript
import {toBeType} from "jest-tobetype";
expect.extend({
	toBeType,
	someOtherThing,
	// and so on
});
```

and if you have a need for it you can also do this:

```javascript
import {extend} from "jest-tobetype";
extend(expect);
```

Though that's there mostly just because I like functional programming.

(Note: if you use the setup files make sure to extend in `setupTestFrameworkScriptFile` as `extend` is not available in `setupFiles`).
