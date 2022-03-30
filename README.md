## OpenSpace SDET Takehome Coding Challenge

This challenge is a part of the hiring process at OpenSpace for the Software Development Engineer in Test position. 

![cypress](https://i.imgur.com/1oavJOB.png)

### The Challenge

**Your mission, should you choose to accept it, is to write some Cypress tests that assert correct behaviors for the MUI DateRangePicker component.**

In addition to implementing the tests, defining the correct behaviors is a part of the challenge. What should we be checking for?

This repo is a simple react boilerplate bootstrapped with [vite](https://vitejs.dev/).

It includes the following major dependencies:

- vite
- react
- eslint
- prettier
- typescript
- [mui (Material UI)](https://mui.com/components)
- [cypress](https://docs.cypress.io/api/commands/and#Syntax)

The app only renders a single MUI DateRangePicker with minimal props and includes one Cypress test.

You are welcome to reference any documentation you wish, and we recommend you look at the Mui documentation for its DateRangePicker: 

https://mui.com/components/date-range-picker/

### Time Limit

Please spend no more than 2-3 hours on this challenge. Just get as much done as you can in that timebox. We are not looking for an exhaustive suite of tests, but at least 2 or 3 solid tests would be great.

You can focus on simple, fundamental functionality or more advanced props usage, your choice.

### Getting Started

- Clone the repo
- From the root of the repo run: `yarn install`
- Start the dev server: `yarn dev`
- Visit `http://localhost:3000` to see the app running
- While the dev server is still running, in a separate terminal run cypress: `yarn test`
- Implement your tests in `cypress/integration/DateRangePicker.spec.ts`

### TypeScript

We prefer you implement your tests in TypeScript, but we also welcome submissions in javascript.
Just implement your tests in `cypress/integration/DateRangePicker.spec.js`
