const toBeType = require("../index-cjs.js");

describe("testing extended expect", () => {
	expect.extend(toBeType);
	it("tests normal types correctly", () => {
		expect("").toBeType("string");
		expect({}).toBeType("object");
		expect(1).toBeType("number");
		expect(false).toBeType("boolean");
		expect(Symbol('foobar')).toBeType("symbol");
		expect(() => {}).toBeType("function");
	});
	it("tests other types correctly", () => {
		expect([]).toBeType("array");
		expect(/foobar/).toBeType("regexp");
		expect(new RegExp('foobar')).toBeType("regexp");
		expect(null).toBeType("null");
		expect(undefined).toBeType("undefined");
		expect(new Map()).toBeType("map");
		expect(new Set()).toBeType("set");
		expect(new Date()).toBeType("date");
	});
	it("works with promises", () => {
		return expect(Promise.resolve([])).resolves.toBeType("array");
	});
});
