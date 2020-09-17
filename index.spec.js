const assertEquals = require('./index')

var complexObject1 = {
  propA: 1,
  propB: {
    propA: [1, { propA: 'a', propB: 'b' }, 3],
    propB: 1,
    propC: 2
  }
};
var complexObject1Copy = {
  propA: 1,
  propB: {
    propA: [1, { propA: 'a', propB: 'b' }, 3],
    propB: 1,
    propC: 2
  }
};
var complexObject2 = {
  propA: 1,
  propB: {
    propB: 1,
    propA: [1, { propA: 'a', propB: 'c' }, 3],
    propC: 2
  }
};
var complexObject3 = {
  propA: 1,
  propB: {
    propA: [1, { propA: 'a', propB: 'b' }, 3],
    propB: 1
  }
};

describe('assertEquals', () => {
  it('doesnt throw when 2 strings that are equal are compared', () => {
    expect(() => assertEquals('abc', 'abc')).not.toThrow()
  })

  it('throws when two different strings are compared', () => {

    expect(() => assertEquals('abcef', 'abc')).toThrow('Expected "abcef" found "abc"')
  })

  it('throws when presented with an array compared against an object', () => {
    expect(() => assertEquals(['a'], {0: 'a'})).toThrow('Expected type Array but found type Object')
  })

  it('doesnt throw when two equal arrays are compared', () => {
    expect(() => assertEquals(['a', 'b', 'c'], ['a', 'b', 'c'])).not.toThrow()
  })

  it('throws when two arrays of different length are compared', () => {
    expect(() => assertEquals(['a', 'b'], ['a', 'b', 'c'])).toThrow('Expected array length 2 but found 3')
  })

  it('doesnt throw when two objects that are the same structure are compared', () => {
    expect(() => assertEquals(complexObject1, complexObject1Copy)).not.toThrow()
  })

  it('throws when 2 different objects are compared with the same structure but a nested key is different', () => {
    expect(() => assertEquals(complexObject1, complexObject2)).toThrow('Expected propB.propA[1].propB "b" but found "c"')
  })

  it('throws when 2 different objects are compared where the actual is missing a key', () => {
    expect(() => assertEquals(complexObject1, complexObject3)).toThrow('Expected propB.propC but was not found')
  })

  it('throws when null is compared with an empty object', () => {
    expect(() => assertEquals(null, {})).toThrow('Expected type Null but found type Object')
  })
})