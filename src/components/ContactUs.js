import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let pageData = this.props.pageData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me to chat!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email me:
                  {pageData.emailId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}