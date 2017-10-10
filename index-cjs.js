const { matcherHint, printExpected, printReceived } = require('jest-matcher-utils');
const getType = require('jest-get-type');

const toBeType = (received, expected) => {
	const type = getType(received);
	const pass = type === expected;
	const message = pass
		? () =>
			matcherHint('.not.toBeType', 'value', 'type') +
			'\n\n' +
			`Expected value to be of type:\n` +
			`  ${printExpected(expected)}\n` +
			`Received:\n` +
			`  ${printReceived(received)}\n`
		: () =>
			matcherHint('.toBeType', 'value', 'type') +
			'\n\n' +
			`Expected value to be of type:\n` +
			`  ${printExpected(expected)}\n` +
			`Received:\n` +
			`  ${printReceived(received)}\n` +
			`type:\n` +
			`  ${printReceived(type)}`;

	return { pass, message }
};

const wrapped = {
	toBeType
};

const extend = (expect) => {
	expect.extend(wrapped);
};

exports.toBeType = toBeType;
exports.extend = extend;
exports.default = wrapped; // es6 compat
module.exports = wrapped;
