const { tsExternalModuleReference } = require("@babel/types");

[
	{ param1: 1, param2: 2, expected: 3 },
	{ param1: 5, param2: 2, expected: 7 },
	{ param1: 1, param2: 71, expected: 72 },
	{ param1: -11, param2: 23, expected: 12 },
].forEach(({param1, param2, expected}) => {
    test(`${param1} + ${param2} should equal ${expected}`,() => {
        const result = param1 + param2;
        expected(result).toEqual(expected);
    })
});