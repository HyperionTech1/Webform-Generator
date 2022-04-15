
import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layout'
import Options from './Options'
import { webform, webOptions } from '../store.js'

export default class extends Component {

  state = {
    webOptions,
    wOption: {}
  }

  getOptionsByCategory() {
    return Object.entries(
      this.state.webOptions.reduce((webOptions, wOption) => {
        const { webform } = wOption 

        webOptions[webform] = webOptions[webform]
          ? [...webOptions[webform], wOption]
          : [wOption]

        return webOptions
      }, {})
    )
  }

  handleOptionSelected = id => {
    this.setState(({ webOptions }) => ({
      wOption: webOptions.find(opt => opt.id === id)
    }))
  }

  render() {
    const webOptions = this.getOptionsByCategory(),
      { wOption } = this.state

    return <Fragment>
      <Header/>

      <Options
        wOption = {wOption}
        webOptions = {webOptions}
        onSelect = {this.handleOptionSelected}
      />

      <Footer
        webform = {webform}
      />
    </Fragment>
  }

}
