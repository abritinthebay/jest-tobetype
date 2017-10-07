import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

export const toBeType => (received, expected) {
	const initialType = typeof received;
	const type = initialType === "object" ? Array.isArray(received) ? "array" : initialType : initialType;

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

exports const extend(expect) => {
	expect.extend(wrapped);
};

export default wrapped;
