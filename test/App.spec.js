const React = require('react')
const chai = require('chai')
const { expect } = chai
const App = require('../js/App')
const enzyme = require('enzyme')
const { shallow } = enzyme

describe('<App />', () => {
  it('should work with a default export... right?', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<h1>Halp</h1>)).to.be.true
  })
})
