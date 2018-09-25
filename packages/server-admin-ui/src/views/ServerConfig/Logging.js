import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from 'reactstrap'

function fetchLogfileList () {
  fetch(`/logfiles/`, {
    credentials: 'include'
  })
    .then(response => response.json())
    .then(logfileslist => {
      logfileslist.sort()
      this.setState({ logfileslist, hasData: true })
    })
}

class Settings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasData: false
    }

    this.fetchLogfileList = fetchLogfileList.bind(this)
  }

  componentDidMount () {
    this.fetchLogfileList()
  }




  render () {
    return (
      this.state.hasData && (
        <div className='animated fadeIn'>
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Log files</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/listgroup/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <ListGroup>
                {this.state.logfileslist.map((logfile, i) =>
                  <ListGroupItem key={i}>
                    <a href={`/logfiles/${logfile}`}>{logfile}</a>
                  </ListGroupItem>)}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <ul>
        
        </ul>
        </div>
      )
    )
  }
}

export default connect()(Settings)
