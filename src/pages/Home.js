import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Page from "../Components/Page";

class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <p className="intro">
                My story begins in the sweltering July of 1984. That's when I
                came into this world, screaming about clouds and uptimes. After
                spending the first few days of my life lecturing the doctors at
                the hospital in the many ways they could make their workflows
                more efficient, they were happy to have me leave the hospital.
                "Good Luck!" they told my parents as they swaddled me into a
                little Aaron burrito and packed me away into their car.
              </p>
            </Col>
          </Row>
        </Grid>
        <Page pageName="">
          <Col xs={12}>
            <p>
              Fast forward to the new millenia and the only thing that has
              changed is the audience I have.
            </p>
            <p>
              I enjoy building and scaling highly available web services and
              platforms.
            </p>
            <p>
              As companies build new applications the focus is often on getting
              to market quickly, as the demand for a new application grows the
              need to scale is critical. Optimizing and re-architecting makes
              scaling possible. This is where I come in.
            </p>
            <p>
              I started solving complex computer system issues back in high
              school. Clear Channel hired me when I was only 19 to lead the
              engineering effort behind migrating a critical business
              application from SCO Unix to Redhat Enterprise Linux. For most
              people this kind of legacy system migration would be an absolute
              nightmare, due to both the age of the technology and the sheer
              scope of the project. I identified the project’s dependencies and
              then re-architected the system to create a fully supported
              platform. The net result avoided lost revenue by limiting system
              downtime.
            </p>
            <p>
              At Modulus I worked with the Development and Ops teams to reduce
              the monthly AWS spend by 60% by identifying redundancies,
              misconfigurations and waste. With better accounting for our cloud
              provider spend we were able to extend the runway for the product.
            </p>
            <p>
              I spent a year working with the Solutions Marketing team at
              Progress to address shortcomings for the Developer audience. This
              experience helped me to become more product focused and more
              prepared for bringing new products to market.
            </p>
          </Col>
        </Page>
      </div>
    );
  }
}

export default Home;
