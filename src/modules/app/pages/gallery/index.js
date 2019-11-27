import React, { Component } from 'react'
import Layout from '../../../../shared/layout'
import PagePreface from '../../../../shared/pagePreface'
import translate from '../../../../shared/utils/translate'

import "./style.scss"
import GalleryContainer from './components/gallery-container'

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <PagePreface context={this.props.context} />

                <main className="gallery-body">
                    <header className="text-center">
                        <h2 className="section-heading"> {translate("galleryHeading")} </h2>
                        <span className="heading-break"></span>
                    </header>

                    <GalleryContainer />
                </main>
            </Layout>
        )
    }
}
