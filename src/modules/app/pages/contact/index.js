import React, { Component } from 'react'
import Layout from '../../../../shared/layout'

import PagePreface from '../../../../shared/pagePreface'
import ContactInfo from './components/contact-info'
import ContactForm from './components/contact-form'

import "./style.scss"

export default class Contact extends Component {
    render() {
        return (
            <Layout>
                <PagePreface context={this.props.context} />

                <main className={`contact-body container ${this.props.context.lang === "ar" ? "reverse text-right" : "text-left"}`}>
                    <ContactInfo context={this.props.context} />

                    <ContactForm context={this.props.context} />
                </main>
            </Layout>
        )
    }
}
