import React, { Component, Fragment } from 'react';
import * as contentful from 'contentful';

import Hero from './Hero/Hero';

class Landing extends Component {

  state = {
    contentLanding: [],
  }

  client = contentful.createClient({
    space: 'k5ilxhor6opo',
    accessToken: '821b2dfbfbe7025170318a4fd55ffdbfab6cf6ba856cb2159c51857eaa72f679'
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()
  
  setPosts = response => {
    for (let item of response.items) {
      if (item.fields.heroTitle === 'human.space') {
        this.setState({
          contentLanding: [item],
        })
      }
    }
  }

  render() {
    return (
      this.state.contentLanding.map(({fields}, id) => <Hero key={id} content={fields} />)
    )
  }
}

export default Landing;