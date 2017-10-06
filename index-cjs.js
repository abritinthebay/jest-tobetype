const toBeType = (received, argument) => {
	const initialType = typeof received;
	const type = initialType === "object" ? Array.isArray(received) ? "array" : initialType : initialType;
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
