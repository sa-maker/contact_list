import React from 'react'
import renderer from 'react-test-renderer'
import ContactTables from './ContactTables'

test('Contact Tabels displays props', () => {
    const contact_list = {
        a:[
            {
                cell: "(978)-791-7191",
                dob:
                    {
                    age: 63,
                    date: "1958-06-09T01:00:54.445Z"
                    },
                email: "soham.alvarez@example.com",
                gender: "male",
                id:
                    {
                    name: "SSN",
                    value: "427-70-1854",
                    },
                location:
                {
                city: "Scurry",
                coordinates:
                    {
                    latitude: "-73.9227",
                    longitude: "100.5609"
                    },
                country: "United States",
                postcode: 77992,
                state: "Arkansas",
                street:
                    {
                    name: "Saddle Dr",
                    number: 6854
                    },
                timezone:
                    {
                    description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
                    offset: "+5:00"
                    },
                },
                login:
                    {
                    md5: "6ee162c331acdf421056571809277e35",
                    password: "corsair",
                    salt: "mTumJaWd",
                    sha1: "d5a50dcac5daf7783d5596187f3e9f208a032c42",
                    sha256: "72bab94222131e39ca918207cfd814f8754f2ba5e407981803c03093781680a8",
                    username: "bluemouse664",
                    uuid: "4c18143f-c1cf-47e3-8c55-d348cd85b277"
                    },
                name:
                    {
                    first: "Soham",
                    last: "Alvarez",
                    title: "Mr"
                    },
                nat: "FR",
                phone: "(403)-893-6318",
                picture:
                    {
                    large: "https://randomuser.me/api/portraits/men/77.jpg",
                        medium: "https://randomuser.me/api/portraits/med/men/77.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/men/77.jpg"
                    },
                registered:
                    {
                    age: 8,
                    date: "2013-07-28T12:01:07.029Z"
                    }
                }
        ],
        d:[ {
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
        }]
        }

    // contacts, selected, openCard, setOpenCard    
    const setOpenCard = (val)=>{ return val }
    const selected = "a"
    const component = renderer.create(
      <ContactTables contacts={contact_list} selected={selected} openCard='' setOpenCard={setOpenCard} />  
    )

    let ContactTable = component.toJSON()
    expect(ContactTable).toMatchSnapshot()
  })