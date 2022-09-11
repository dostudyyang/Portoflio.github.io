import React from 'react'
import { Timeline, Modal } from 'antd'

import TimelineItem from './TimelineItem'
import { getGithubRepos } from '../utils/fetchHelper'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            src: '',
            repos: []
        }
        this.showModal = this.showModal.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    showModal(e) {
        this.setState({
            visible: true,
            src: e.currentTarget.getAttribute("data-src")  //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    getTimelineItemsNode( username ) {
      getGithubRepos( username )
        .then( info => this.setState({ repos: info.data }))
    }

    componentDidMount(){
      this.getTimelineItemsNode( "dostudyyang" )
    }

    render() {
      let nodes = this.state.repos.map( items => (<TimelineItem key={items.id}
          name={items.name}
          description={items.description}
          html_url={items.html_url} />
      ) );

      return (
          <div className="project-container">
              <h1 className="project-title">Projects</h1>
              <div className="project-content">
                  <Timeline pending={<a href="https://github.com/dostudyyang" target="_blank" className="item-title">More projects in Github(click here)</a>}>
                    { nodes }
                  </Timeline>
              </div>
              <Modal title="" footer="" width="80%"
                  visible={this.state.visible}
                  onCancel={this.handleCancel}>
                  <div className="big-img">
                      <img src={this.state.src} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                  </div>
              </Modal>
          </div>
      )
    }
}
