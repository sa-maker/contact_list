import React from 'react'
import renderer from 'react-test-renderer'
import ContactOpen from './ContactOpen'

test('Open Card displays props', () => {
    const contact = {
        cell: "06-71-59-27-17",
        dob:
            {
            age: 47,
            date: "1974-02-20T11:49:23.706Z"
            },
        email: "mahe.denis@example.com",
        gender: "male",
        id:
            {
            name: "INSEE",
            value: "1NNaN49601880 02",
            },
        location:
        {
        city: "Poitiers",
        coordinates:
            {
            latitude: "38.6251",
            longitude: "130.8095"
            },
        country: "France",
        postcode: 86468,
        state: "Haute-Corse",
        street:
            {
            name: "Rue de L'Abbé-Groult",
            number: 5576
            },
        timezone:
            {
            description: "Newfoundland",
            offset: "-3:30"
            },
        },
        login:
            {
            md5: "8f1c76c5276a83396cf84c3f2a9ef116",
            password: "1124",
            salt: "8EtZcWrv",
            sha1: "9eee9c7a0fe78b6deaabb91c124b09d5fa6037e1",
            sha256: "02daba5c550410f9752d181bab4c4448d3ce4a17e86f498ca05662a386c956b2",
            username: "lazykoala877",
            uuid: "8cf9b01b-2c35-4350-a118-596393206060"
            },
        name:
            {
            first: "Mahé",
            last: "Denis",
            title: "Mr"
            },
        nat: "FR",
        phone: "01-50-11-99-83",
        picture:
            {
            large: "https://randomuser.me/api/portraits/men/51.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/51.jpg"
            },
        registered:
            {
            age: 18,
            date: "2003-07-16T22:15:49.503Z"
            }
        }
    const setOpenCard = jest.fn()

    const component = renderer.create(
      <ContactOpen contact={contact} setOpenCard={setOpenCard} />  
    )

    let OpenCard = component.toJSON()
    expect(OpenCard).toMatchSnapshot()
  })

