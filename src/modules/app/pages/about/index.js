import React, { Component } from 'react'
import Layout from '../../../../shared/layout'
import PagePreface from '../../../../shared/pagePreface'
import AboutContent from './components/content-item'

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <PagePreface context={this.props.context} />
                <AboutContent context={this.props.context} />
            </Layout>
        )
    }
}
