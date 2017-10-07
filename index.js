import getType from "jest-get-type";

exports const toBeType => (received, argument) {
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

exports const extend(expect) => {
	expect.extend(wrapped);
};

export default wrapped;
