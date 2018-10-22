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
  Link,
  Row,
  Status,
  Tabs,
  Text,
  TextArea,
  TextInput,
  VerticalTab,
} from '@kyokan/kyokan-ui';

import DMLBalance from './components/DMLBalance';
import DMLDebitLimit from './components/DMLDebitLimit';

const AccountComponent = (props) => {
  return (
    <Grid>
      <Row>
        <Column xlOffset={2} xl={8}>
          <Box padding={8}>
            <Header>Account Settings</Header>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column xlOffset={2} xl={8}>
          <Box rounded>
            <Tabs>
              <VerticalTab
                title="Edit Profile"
                icon="user"
              >
                <Row>
                  <Column xl={8}>
                    <Box padding={9}>
                      <Row>
                        <Column xl={12}>
                          <Box paddingBottom={6}>
                            <Header>Basic Information</Header>
                          </Box>
                        </Column>
                      </Row>
                      <Row>
                        <Column xl={6}>
                          <Box
                            paddingBottom={5}
                            paddingRight={4}
                          >
                            <TextInput
                              label="First Name"
                              defaultValue={props.firstName}
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
                              defaultValue={props.lastName}
                            />
                          </Box>
                        </Column>
                      </Row>
                      <Row>
                        <Column xl={12}>
                          <Box paddingBottom={5}>
                            <TextInput
                              label="Email Address"
                              errorMessage="Please enter a valid Email Address"
                            />
                          </Box>
                        </Column>
                      </Row>
                      <Row>
                        <Column xl={12}>
                          <Box paddingBottom={5}>
                            <TextArea
                              label="Bio (Optional)"
                              placeholder="Add a small description to your profile"
                            >
                              {props.bio}
                            </TextArea>
                          </Box>
                        </Column>
                      </Row>
                      <Row>
                        <Column xl={12}>
                          <Row>
                            <Column xl={3}>
                              <Button
                                loading={false}
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
                      <Row>
                        <Column xl={12}>
                          <Box verticalMargin={8}>
                            <HorizontalRule />
                          </Box>
                        </Column>
                      </Row>
                      <Row>
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
              >
                <Row>
                  <Column xl={8}>
                    <Box padding={9}>
                      <Row>
                        <Column xl={12}>
                          <Header>DML Balance</Header>
                        </Column>
                      </Row>
                      <Row>
                        <Column xl={12}>
                          <Box verticalMargin={8}>
                            <DMLBalance
                              amount={0}
                              address="0x0860...cd31ee"
                            />
                          </Box>
                        </Column>
                      </Row>
                      <Row>
                        <Column xl={12}>
                          <Box verticalMargin={5}>
                            <Text dark>Not sure how to get DML Tokens?</Text>
                          </Box>
                          <Text>
                            Learn how on our <Link>FAQ Page</Link>.
                          </Text>
                        </Column>
                      </Row>
                      <Row>
                        <Column xl={12}>
                          <Box verticalMargin={8}>
                            <HorizontalRule />
                          </Box>
                        </Column>
                      </Row>
                      <Row>
                        <Column xl={12}>
                          <Box marginBottom={5}>
                            <Header dark>Approved Debit Limit</Header>
                          </Box>
                          <Description>Your debt limit is dynamic. It goes down when charged and needs to be reset once it's spent.</Description>
                        </Column>
                      </Row>
                      <Row>
                        <Column xl={12}>
                          <Box verticalMargin={8}>
                            <DMLDebitLimit />
                          </Box>
                        </Column>
                      </Row>
                      <Row>
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

AccountComponent.propTypes = {};

export default AccountComponent;
