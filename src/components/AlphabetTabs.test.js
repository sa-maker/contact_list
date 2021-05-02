import React from 'react'
import renderer from 'react-test-renderer'
import AlphabetTabs from './AlphabetTabs'

test('Open Card displays props', () => {
    const contact_list = {
        a: [1,2,3],
        b: [],
        c: [2451, 447],
        d: ['a','s','d']
        }

    const selected = 'a'
    const setSelected = (val)=>{ return val }

    const component = renderer.create(
      <AlphabetTabs contacts={contact_list} selected={selected} setSelected={setSelected} />  
    )

    let testTabs = component.toJSON()
    expect(testTabs).toMatchSnapshot()
  })