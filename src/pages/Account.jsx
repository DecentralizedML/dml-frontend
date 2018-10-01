import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  AvatarControl,
  Button,
  Column,
  Description,
  GitHubOAuth,
  Grid,
  Header,
  HorizontalRule,
  Link,
  Row,
  Status,
  Tabs,
  Text,
  TextArea,
  TextInput,
  VerticalTab,
} from 'kyokan-ui';

import DMLBalance from '../components/DMLBalance';
import DMLDebitLimit from '../components/DMLDebitLimit';

class Account extends Component {
  /*
  shouldComponentUpdate (nextProps) {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

//  JSON.stringify(this.props)

  render () {
    return (
      <Grid>
        <Row>
          <Header>Account Settings</Header>
        </Row>
        <Row>
          <Tabs>
            <VerticalTab
              title="Edit Profile"
              icon=""
            >
              <Row>
                <Column>
                  <Row>
                    <Header>Basic Information</Header>
                  </Row>
                  <Row>
                    <Column>
                      <TextInput
                        label="First Name"
                      />
                    </Column>
                    <Column>
                      <TextInput
                        label="Last Name"
                      />
                    </Column>
                  </Row>
                  <Row>
                    <TextInput
                      label="Email Address"
                      errorMessage="Please enter a valid Email Address"
                    />
                  </Row>
                  <Row>
                    <TextArea
                      label="Bio (Optional)"
                      placeholder="Add a small description to your profile"
                    >
                    </TextArea>
                  </Row>
                  <Row>
                    <Button
                      loading={false}
                    >
                      Save Updates
                    </Button>
                    <Status
                      text="Saved"
                      success
                    />
                  </Row>
                  <Row>
                    <HorizontalRule />
                  </Row>
                  <Row>
                    <Header>Are you a developer?</Header>
                    <Description>You can use your Github account and upload Algorithms to the marketplace.</Description>
                    <GitHubOAuth />
                  </Row>
                </Column>
                <Column>
                  <Header>Profile Photo</Header>
                  <AvatarControl
                    instruction="Upload .jpg or .png images, with a max size of 512KB."
                    errorMessage="You can only upload images up to 512KB in size."
                    uploadButtonText="Upload Image"
                    removeButtonText="Remove Image"
                    loadingButtonText="Uploading..."
                    loading={false}
                    status="success"
                    statusMessage="Image uploaded"
                  />
                </Column>
              </Row>
            </VerticalTab>
            <VerticalTab
              title="Manage Wallet"
              icon=""
            >
              <Row>
                <Header>DML Balance</Header>
              </Row>
              <Row>
                <DMLBalance />
              </Row>
              <Row>
                <Text dark>Not sure how to get DML Tokens?</Text>
                <Text>
                  Learn how on our <Link>FAQ Page</Link>.
                </Text>
              </Row>
              <Row>
                <HorizontalRule />
              </Row>
              <Row>
                <Header>Approved Debit Limit</Header>
                <Description>Your debt limit is dynamic. It goes down when charged and needs to be reset once it's spent.</Description>
              </Row>
              <Row>
                <DMLDebitLimit />
              </Row>
              <Row>
                <Status
                  info
                >
                  You need to <b>update your debit limit before making any purchases</b>. This will give us approval to debit your DML balance.
                </Status>
              </Row>
            </VerticalTab>
          </Tabs>
        </Row>
      </Grid>
    );
  }
}

export default connect(
  (state) => state,
  (dispatch) => ({}),
)(Account);
