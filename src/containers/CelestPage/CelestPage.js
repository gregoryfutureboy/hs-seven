import React, { Component } from 'react';
import * as contentful from 'contentful';
import Hero from './Hero/Hero';
import KmtSection from './KmtSection/KmtSection';


class CelestPage extends Component {

  state = {
    contentCelest: [],
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
    for(let item of response.items) {
      if (item.fields.heroTitle === 'Celest') {
        this.setState({
          contentCelest: [item],
        })
      }
    }
    console.log(this.state.contentCelest[0].fields.sectionImage.fields.file.url)
  }

  render() {
    return (
      this.state.contentCelest.map(
        ({ fields}, id) => 
          <div>
            <Hero key={id} content={fields} />
            <KmtSection key={id} content={fields} />
          </div>
      )
    )
  }
}

export default CelestPage;