/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import PropTypes from 'prop-types';

import {
  AvatarControl,
  Box,
  Button,
  Column,
  Description,
  GitHubOAuth,
  Grid,
  Header,
  HorizontalRule,
  Link as KUILink,
  Row,
  Status,
  Tabs,
  Text,
  TextArea,
  TextInput,
  VerticalTab,
} from '@kyokan/kyokan-ui';

import DMLBalance    from './components/DMLBalance';
import DMLDebitLimit from './components/DMLDebitLimit';
import DMLSiteHeader from '../dml-site-header';

const AccountSettingsComponent = (props) => {
  const isProfile = (!props.match.params.section || props.match.params.section === 'profile');

  return (
    <Grid fluid style={{ padding: 0 }}>
      <DMLSiteHeader
        marketplace
        bounties
        algorithms
        createAlgorithm
        accountDropdown
      />
      <Row nogutter>
        <Column
          xl={8}
          offset={{
            lg: 2,
          }}
        >
          <Box padding={8}>
            <Header>Account Settings</Header>
          </Box>
        </Column>
      </Row>
      <Row nogutter>
        <Column
          xl={8}
          offset={{
            lg: 2,
          }}
        >
          <Box rounded>
            <Tabs
              defaultActiveTabIndex={isProfile ? 0 : 1}
            >
              <VerticalTab
                title="Edit Profile"
                icon="user"
                onTabClick={() => {
                  props.history.push('/account/profile');
                }}
              >
                <Row nogutter>
                  <Column xl={8}>
                    <Box padding={9}>
                      <Row nogutter>
                        <Column xl={12}>
                          <Box paddingBottom={6}>
                            <Header>Basic Information</Header>
                          </Box>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={6}>
                          <Box
                            paddingBottom={5}
                            paddingRight={4}
                          >
                            <TextInput
                              label="First Name"
                              value={props.firstName}
                              data-id="account-input-firstname"
                            />
                          </Box>
                        </Column>
                        <Column xl={6}>
                          <Box
                            paddingBottom={5}
                            paddingLeft={4}
                          >
                            <TextInput
                              label="Last Name"
                              value={props.lastName}
                              data-id="account-input-lastname"
                            />
                          </Box>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={12}>
                          <Box paddingBottom={5}>
                            <TextInput
                              label="Email Address"
                              errorMessage="Please enter a valid Email Address"
                              value={props.email}
                              data-id="account-input-email"
                              disabled
                            />
                          </Box>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={12}>
                          <Box paddingBottom={5}>
                            <TextArea
                              label="Bio (Optional)"
                              placeholder="Add a small description to your profile"
                              data-id="account-input-bio"
                            >
                              {props.bio}
                            </TextArea>
                          </Box>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={12}>
                          <Row nogutter>
                            <Column xl={3}>
                              <Button
                                loading={false}
                                onClick={() => {
                                  const firstName = document.querySelector("[data-id='account-input-firstname']").value;
                                  const lastName  = document.querySelector("[data-id='account-input-lastname']").value;
                                  const email     = document.querySelector("[data-id='account-input-email']").value;
                                  const bio       = document.querySelector("[data-id='account-input-bio']").value;

                                  props.updateUser({
                                    firstName,
                                    lastName,
                                    email,
                                    bio,
                                  });
                                }}
                              >
                                Save Updates
                              </Button>
                            </Column>
                            <Column xl={3}>
                              <Box paddingLeft={4}>
                                <Status success>Saved</Status>
                              </Box>
                            </Column>
                          </Row>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={12}>
                          <Box verticalMargin={8}>
                            <HorizontalRule />
                          </Box>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={12}>
                          <Header>Are you a developer?</Header>
                          <Box
                            marginTop={2}
                            marginBottom={4}
                          >
                            <Description>You can use your Github account and upload Algorithms to the marketplace.</Description>
                          </Box>
                          <GitHubOAuth />
                        </Column>
                      </Row>
                    </Box>
                  </Column>
                  <Column xl={4}>
                    <Box padding={6}>
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
                    </Box>
                  </Column>
                </Row>
              </VerticalTab>
              <VerticalTab
                title="Manage Wallet"
                icon="wallet"
                onTabClick={() => {
                  props.history.push('/account/wallet');
                }}
              >
                <Row nogutter>
                  <Column xl={8}>
                    <Box padding={9}>
                      <Row nogutter>
                        <Column xl={12}>
                          <Header>DML Balance</Header>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={12}>
                          <Box verticalMargin={8}>
                            <DMLBalance
                              amount={0}
                              address="0x0860...cd31ee"
                            />
                          </Box>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={12}>
                          <Box verticalMargin={5}>
                            <Text dark>Not sure how to get DML Tokens?</Text>
                          </Box>
                          <Text>
                            Learn how on our <KUILink>FAQ Page</KUILink>.
                          </Text>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={12}>
                          <Box verticalMargin={8}>
                            <HorizontalRule />
                          </Box>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={12}>
                          <Box marginBottom={5}>
                            <Header dark>Approved Debit Limit</Header>
                          </Box>
                          <Description>Your debt limit is dynamic. It goes down when charged and needs to be reset once it&apos;s spent.</Description>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={12}>
                          <Box verticalMargin={8}>
                            <DMLDebitLimit />
                          </Box>
                        </Column>
                      </Row>
                      <Row nogutter>
                        <Column xl={12}>
                          <Status
                            warning
                          >
                            You need to <b>update your debit limit before making any purchases</b>. This will give us approval to debit your DML balance.
                          </Status>
                        </Column>
                      </Row>
                    </Box>
                  </Column>
                </Row>
              </VerticalTab>
            </Tabs>
          </Box>
        </Column>
      </Row>
    </Grid>
  );
};

AccountSettingsComponent.defaultProps = {
  bio: '',
};

AccountSettingsComponent.propTypes = {
  bio        : PropTypes.string,
  email      : PropTypes.string.isRequired,
  firstName  : PropTypes.string.isRequired,
  history    : PropTypes.object.isRequired,
  lastName   : PropTypes.string.isRequired,
  match      : PropTypes.object.isRequired,
  updateUser : PropTypes.func.isRequired,
};

export default AccountSettingsComponent;
