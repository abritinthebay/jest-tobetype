const getType = require('jest-get-type');

const toBeType = (received, argument) => {
	const type = getType(received);
	return type === argument ? {
		message: () => `expected ${received} to be type ${argument}`,
		pass: true
	} : {
		message: () => `expected ${received} to be type ${argument}`,
		pass: false
	};
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
