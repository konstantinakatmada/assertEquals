
# Fluidly home and pairing test



## Terms of the exercise

* Please do not use external libraries.
* We expect you should be able to get the requirements below implemented within an hour. 
* We will implement assertEquals for Object comparison together in the remote pairing session, so if you want to plan for this in your approach you are welcome to do so
* You may use online resources to assist you with specific techniques, syntax etc. but please do not just copy code.
* Please don't share this exercise with any third party


## The challenge

The aim of the exercise is to demonstrate your problem solving and understanding of JavaScript by implementing something found in every unit testing tool - an "assertEquals" method.

* Fill in the "assertEquals" function such that it will correctly compare the passed "expected" vs "actual" parameters.
* You may add more functions.
* Credit will be given for approach, correctly identifying "failed" assertEquals, clean, testable code and coding style.
* The set of tests provided isn't exhaustive - there are cases that they don't handle.


## Assert Equal Requirements list

| Expected   |      Actual      |  Result |
|----------|:-------------:|------:|
| "abc" |  "abc" | Function does not throw error |
| "abcef" |  "abc" | Throws error with message 'Expected "abcef" but found "abc"' |
| ['a'] |  {0: 'a'} | Throws error with message 'Expected type Array but found type Object'' |
| ['a', 'b', 'c'] |  ['a', 'b', 'c'] | Function does not throw error |
| ['a', 'b'] |  ['a', 'b', 'c'] | Throws error with message 'Expected array length 2 but found 3' |