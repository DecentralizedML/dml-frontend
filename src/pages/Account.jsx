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
          <Column xlOffset={3} xl={6}>
            <Header>Account Settings</Header>
          </Column>
        </Row>
        <Row>
          <Column xlOffset={3} xl={6}>
            <Tabs>
              <VerticalTab
                title="Edit Profile"
                icon="user"
              >
                <Row>
                  <Column xl={8}>
                    <Row>
                      <Column xl={12}>
                        <Header>Basic Information</Header>
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={6}>
                        <TextInput
                          label="First Name"
                        />
                      </Column>
                      <Column xl={6}>
                        <TextInput
                          label="Last Name"
                        />
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={12}>
                        <TextInput
                          label="Email Address"
                          errorMessage="Please enter a valid Email Address"
                        />
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={12}>
                        <TextArea
                          label="Bio (Optional)"
                          placeholder="Add a small description to your profile"
                        >
                        </TextArea>
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={12}>
                        <Button
                          loading={false}
                        >
                          Save Updates
                        </Button>
                        <Status
                          text="Saved"
                          success
                        />
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={12}>
                        <HorizontalRule />
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={12}>
                        <Header>Are you a developer?</Header>
                        <Description>You can use your Github account and upload Algorithms to the marketplace.</Description>
                        <GitHubOAuth />
                      </Column>
                    </Row>
                  </Column>
                  <Column xl={4}>
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
                icon="wallet"
              >
                <Row>
                  <Column xl={8}>
                    <Row>
                      <Column xl={12}>
                        <Header>DML Balance</Header>
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={12}>
                        <DMLBalance />
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={12}>
                        <Text dark>Not sure how to get DML Tokens?</Text>
                        <Text>
                          Learn how on our <Link>FAQ Page</Link>.
                        </Text>
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={12}>
                        <HorizontalRule />
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={12}>
                        <Header>Approved Debit Limit</Header>
                        <Description>Your debt limit is dynamic. It goes down when charged and needs to be reset once it's spent.</Description>
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={12}>
                        <DMLDebitLimit />
                      </Column>
                    </Row>
                    <Row>
                      <Column xl={12}>
                        <Status
                          info
                        >
                          You need to <b>update your debit limit before making any purchases</b>. This will give us approval to debit your DML balance.
                        </Status>
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </VerticalTab>
            </Tabs>
          </Column>
        </Row>
      </Grid>
    );
  }
}

export default connect(
  (state) => state,
  (dispatch) => ({}),
)(Account);
