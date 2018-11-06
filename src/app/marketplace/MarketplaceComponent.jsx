import React from "react";
// import PropTypes from 'prop-types';

import { Column, Grid, Row } from "@kyokan/kyokan-ui";

import DMLSiteHeader from "../dml-site-header";
import JobCard from "./jobCard/MarketplaceJobCardComponent";
import Sidebar from "./sidebar/MarketplaceSidebarComponent";
import Topbar from "./topBar/MarketPlaceHeaderComponent";
import Loading from "./loading/MarketplaceLoading";

import { listAlgorithms } from "../algorithms/duck/api";

class Marketplace extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }; // Get the algorithms from algo redux state
  }

  //
  async componentDidMount() {
    // move this into routes => load algos when the app loaded and save it into redux state
    const algorithms = await listAlgorithms();
    this.setState({ data: algorithms.data });
  }

  selectCategory(category) {
    if (category === this.props.selectedCategory) {
      this.props.deselectCategory(category);
    } else {
      this.props.selectCategory(category);
    }
  }

  selectTag(tag) {
    this.props.selectTag("Sentiment Analysis");
  }

  render() {
    return (
      <Grid fluid style={{ padding: 0 }}>
        <DMLSiteHeader
          marketplaceActive
          bounties
          algorithms
          createAlgorithm
          accountDropdown
        />
        <Row nogutter style={{ paddingTop: 32 }}>
          <Column xl={3} offset={{ xl: 1 }}>
            <Sidebar
              selectCategory={this.selectCategory.bind(this)}
              category={this.props.selectedCategory}
            />
          </Column>
          <Column xl={7}>
            <Topbar algorithmCount={this.state.data.length} />
            {this.state.data.length === 0 ? (
              <Loading />
            ) : (
              <Row>
                {this.state.data.map(algorithm => {
                  const fullName = `${
                    algorithm.user.first_name
                      ? algorithm.user.first_name
                      : "Anonymous"
                  } ${
                    algorithm.user.last_name
                      ? algorithm.user.last_name
                      : "Anonymous"
                  }`;
                  return (
                    <JobCard
                      key={algorithm.id}
                      title={algorithm.title}
                      text={algorithm.description}
                      authorName={fullName}
                      authorImg="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350"
                      downloads="41249"
                      averageRating="4.5"
                      totalRatings="62"
                      rewardValue="2"
                    />
                  );
                })}
              </Row>
            )}
          </Column>
        </Row>
      </Grid>
    );
  }
}

Marketplace.propTypes = {};

export default Marketplace;
