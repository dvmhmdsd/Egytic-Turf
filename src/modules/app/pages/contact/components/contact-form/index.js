import React, { Component } from 'react'
import translate from '../../../../../../shared/utils/translate'

import "./style.scss"

export default class ContactForm extends Component {
    render() {
        return (
            <section className="contact-form">
                <header className="text-center">
                    <h2 className="section-heading"> {translate("contactForm")} </h2>
                </header>

                <main className="form-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Username</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Phone</label>
                            <input type="phone" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Organization</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="form-group message-textarea">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </main>
            </section>
        )
    }
}
