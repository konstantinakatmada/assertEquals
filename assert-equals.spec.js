const assertEquals = require('./assert-equals')

describe('assertEquals', () => {

  describe('when expected and actual are the same boolean', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(true, true)).not.toThrow()
    })
  })

  describe('when expected and actual are different booleans', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals(true, false)).toThrow()
    })
  })

  describe('when expected and actual are the same array', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals([1, 2, 3], [1, 2, 3])).not.toThrow()
    })
  })
  describe('when expected and actual are different arrays', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals([1, 2, 3, 4, 5], [1, 2, 4])).toThrow()
    })
  })
  describe('when expected and actual are the same object', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals({ a: 1, b: 2 }, { a: 1, b: 2 })).not.toThrow()
    })
  })
  describe('when expected and actual are different objects', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals({ a: 1, b: 2 }, { a: 1, b: 3 })).toThrow()
    })
  })
  describe('when expected and actual are the same null', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(null, null)).not.toThrow()
    })  
  })
  describe('when expected and actual are different null', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals(null, undefined)).toThrow()
    })
  })

  describe('when expected and actual are the same undefined', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(undefined, undefined)).not.toThrow()
    })
  })
  describe('when expected and actual are different undefined', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals(undefined, null)).toThrow()
    })
  })
  describe('when expected and actual are the same NaN', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(NaN, NaN)).not.toThrow()
    })
  })
  describe('when expected and actual are different NaN', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals(NaN, 1)).toThrow()
    })
  })
  describe('when expected and actual are the same function', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(() => {}, () => {})).not.toThrow()
    })
  })
  describe('when expected and actual are different functions', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals(() => {}, () => {return 1})).toThrow()
    })
  })
  describe('when expected and actual are the same symbol', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(Symbol('abc'), Symbol('abc'))).not.toThrow()
    })    
  })
  describe('when expected and actual are different symbols', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals(Symbol('abc'), Symbol('abcd'))).toThrow()
    })  
  })
  describe ('when expected and actual are the same bigInt', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(1n, 1n)).not.toThrow()
    })  
  })
    describe ('when expected and actual are different bigInt', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals(1n, 2n)).toThrow()
    })  
  })
  describe('when expected and actual are the same float', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(1.1, 1.1)).not.toThrow()
    })
  })
  describe('when expected and actual are different floats', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals(1.1, 1.2)).toThrow()
    })
  })

  describe('when expected and actual are the same string', () => {  
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
    })  
  })
  describe('when expected and actual are different strings', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals('abc', 'abcd')).toThrow()
    })  
  })

  describe('when expected and actual are the same integer', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(1, 1)).not.toThrow()
    })  
  })  

  describe('when expected and actual are different integers', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals(1, 2)).toThrow()
    })  
  })

  describe('when expected and actual are the same string', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
    })
  })

  describe('when expected and actual are different strings', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals('abc', 'abcd')).toThrow()
    })
  })

  describe('when expected is a boolean and actual is a float', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals(true, 1.2)).toThrow()
    })
  })

  describe('when expected is an array and actual is a string', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals([1, 2, 3], 'abc')).toThrow()
    })
  })

  describe('when expected isn an object and actual is a function', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals({ a: 9, b: 7 }, (nameFunction) => {return true;})).toThrow()
    }
    )
  })

  describe('when expected is a null and actual is an undefined', () => {
    it('returns throwing an error', () => {
      expect(() => assertEquals(null, undefined)).toThrow()
    }
    )
  })


  
})
