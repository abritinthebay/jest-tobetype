import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import getType from "jest-get-type";

export const toBeType = (received, expected) => {
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

export const extend = (expect) => {
	expect.extend(wrapped);
};

export default wrapped;
