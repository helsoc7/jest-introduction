const shallowObject = require('./shallowObject')

test('Create a clone of the object parameter', () => {
    const myObj = { person: "Hackerman", number: 42 }
    expect(shallowObject(myObj)).toEqual(myObj)
})