# Introduction

This is a project build in React according to a set of requirements that is listed in this document. The aim it to build a list of contacts.

## Live version

You can view the live demo here:
https://sa-maker.github.io/contact_list/index.html

## Behavior

- The contacts should be grouped in tabs.
- When clicking on a contact, its card should be displayed.
- When clicking on the close button of a card, it should disappear.
- While a contact card is being displayed, if another contact is clicked, the first clicked contact card should disappear.

## Next steps

- Implement Bootstap or Tailwind to allow better maintenance across multiple developers and improve the site's responsiveness
- Implement Redux (or similar) for better state management across components i.e. the 'selected' and 'openCard' variables in ContactList.js
- Make the naming international. The tabs are only applicable to the western names, it needs to extend to international names. This could be fixed with the contactListConfig.json 'tabs' variable. As it is the current system ignores all names that does not fit into the 26 western tabs list

## Responsiveness

The site is currently variably responsive. If the flow of the top menu structure is not adequate, a better solution can be devised using a different menu system, something like a drop-down or a carousel, but this will be done after a discussion with the UXUI designer

## Build process

The following process assumes that there are unfamiliar or new technologies to the developer/team.
(For a pure test driven solution the test would have been developed before the functionality was coded.)

1. Research the best code structure for the project
2. Initiate a code-base
3. Determine what technologies required are new, or unclear
4. Build a proof of concept, showcasing the new or unclear technologies
5. Flesh out the proof of concept into a functional system and remove all unwanted code and logic (this might require a rework or 'start from scratch' approach)
6. Ensure that the layout ad hears to the UI design
7. Update the tests and the documentation
8. Test the system
9. build and deploy the final code

## Documentation

For this project the documentation can be found in the README.md file as well in the Documentation folder on the main directory of the project.

## Unit testing

For this project basic snapshot testing was implemented on the components and unit testing on the helper functions

# Requirements

## Technologies

- The assignment has to be built using React.
- You can use regular JavaScript or TypeScript.
- Please do not use frameworks like Bootstrap or Tailwindcss, we would like to see your own work.

## Structure

- If you need to, you can base your assignment on the attached file.

## Styles

- Feel free to use any of the latest CSS features.

## Functionality

- The functionality of your assignment should use the configuration provided on the attached file.
- The contacts of your application have to be retrieved from http://randomuser.me API.

## Browsers

- The application has to run successfully on latest Chrome and Firefox.

## Design

Feel free to change any part of the design as long as the functionality remains the same.
