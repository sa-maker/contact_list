import {tabeliseList} from './dataHelpers'

describe('the Contact_list ', () => {
    const objList = [
        {name: {first: 'Bob', last: 'Anderson'}},
        {name: {first: 'Lucy', last: 'Smith'}}
    ]
    const tabs = ["a", "s", "t"]
    const testlist = tabeliseList(objList, tabs)
    const expected = {
        a: [{name: {first: 'Bob', last: 'Anderson'}}], 
        s: [{name: {first: 'Lucy', last: 'Smith'}}],
        t: []
    }

    test('are in the correct format', ()=>{
        expect(testlist).toEqual(expected)
    } )
  
  });