function assertEquals(expected, actual) {
    if (expected === null || actual === null || expected === undefined || actual === undefined) {
       if (expected !== actual) {
           throw new Error(`Error:Assertion failed! Expected ${expected} but got ${actual}`)
       }
         return true;
    }
    if(expected, actual){
        if (expected.length !== actual.length) {
            throw new Error(`Error:Assertion failed! Expected ${expected} but got ${actual}`);
        }
    }
    
    if (Array.isArray(expected) && Array.isArray(actual)) {
        assertArrayEquals(expected, actual);
    } else {
        if (typeof expected === 'function' && typeof actual === 'function') {
            if (expected.toString() !== actual.toString()) {
                throw new Error(`Error:Assertion failed! Expected ${expected} but got ${actual}`)
            }
            return true;
        };

        if (!Object.is(expected, actual)) {
                throw new Error(`Error:Assertion failed! Expected ${expected} but got ${actual}`)
        }
    }
    
    return true;
};

function assertArrayEquals(expected, actual) {
    if (expected.length !== actual.length) {
        throw new Error(`Error:Assertion failed! Expected ${expected} but got ${actual}`)
    }

    let iteratedArrays=false;

    for (let i = 0; i < expected.length; i++) {
        iteratedArrays= true;
        if (!Object.is(expected[i],actual[i])) {
            throw new Error(`Error:Assertion failed! Expected ${expected} but got ${actual}`)
        }
    }

    return;
}


module.exports = assertEquals;
