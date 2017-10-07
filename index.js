export const toBeType = (received, argument) => {
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

export const extend = (expect) => {
	expect.extend(wrapped);
};

export default wrapped;
