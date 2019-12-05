import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import 'react-native-gesture-handler';

// import
import {
  Container,
  View,
  Content,
  Text,
  Form,
  Item,
  Input,
  Switch,
  Textarea,
  CheckBox,
  Button,
  Header,
  Icon,
  Footer,
} from 'native-base';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isSwitchOn: false,
      mainpage: true,
      companyinfo: false,
      legalinfo: false,
      termpage: false,
      finalpage: false,
      checkbox: false,
      importerText: true,
      exporterText: false,
    };
  }

  showHeading = () => {
    if (this.state.isSwitchOn === onValueChange) {
      alert('hello');
    }
  };
  showCompanyInfo = () => {
    if (this.state.mainpage === true && this.state.companyinfo === false) {
      this.setState({mainpage: false, companyinfo: true});
    }
  };

  showLegal = () => {
    if (
      this.state.mainpage === false &&
      this.state.companyinfo === true &&
      this.state.legalinfo === false
    ) {
      this.setState({mainpage: false, companyinfo: false, legalinfo: true});
    }
  };

  showTerm = () => {
    if (
      this.state.mainpage === false &&
      this.state.companyinfo === false &&
      this.state.legalinfo === true &&
      this.state.termpage === false
    ) {
      this.setState({
        mainpage: false,
        companyinfo: false,
        legalinfo: false,
        termpage: true,
      });
    }
  };
  showFinal = () => {
    if (
      this.state.mainpage === false &&
      this.state.companyinfo === false &&
      this.state.legalinfo === false &&
      this.state.termpage === true &&
      this.state.finalpage === false
    ) {
      this.setState({
        mainpage: false,
        companyinfo: false,
        legalinfo: false,
        termpage: false,
        finalpage: true,
      });
    }
  };

  backtomainpage = () => {
    if (this.state.mainpage === false && this.state.companyinfo === true) {
      this.setState({mainpage: true, companyinfo: false});
    } else {
      this.setState({companyinfo: true});
    }
  };

  backtocompanyinfo = () => {
    if (this.state.companyinfo === false && this.state.legalinfo === true) {
      this.setState({companyinfo: true, legalinfo: false});
    }
  };

  backtolegalpage = () => {
    if (this.state.termpage === true) {
      this.setState({
        termpage: false,
        mainpage: false,
        companyinfo: false,
        legalinfo: true,
      });
    }
  };

  backtotermpage = () => {
    if (this.state.finalpage === true) {
      this.setState({
        mainpage: false,
        companyinfo: false,
        legalinfo: false,
        finalpage: false,
        termpage: true,
      });
    }
  };

  showBar = () => {
    if (this.state.finalpage === true) {
      this.setState({
        mainpage: false,
        companyinfo: false,
        legalinfo: false,
        finalpage: false,
        termpage: false,
      });
    }
  };

  textChange = () => {
    if (this.state.isSwitchOn === false) {
      this.setState({exporterText: true, importerText: false});
    } else {
      this.setState({exporterText: false, importerText: true});
    }
  };

  render() {
    const buttonTextStyle = {
      backgroundColor: '#039174',
      width: 100,
      borderRadius: 3,
      marginLeft: -19,
      marginRight: -27,
      marginBottom: -17,
    };
    const btnTextColor = {
      color: 'white',
      textAlign: 'center',
    };

    return (
      <Container style={styles.container}>
        <Header noShadow style={{backgroundColor: 'white'}}>
          <Button transparent>
            <Icon
              name="menu"
              style={{fontSize: 32, color: '#039174', marginRight: 280}}
            />
          </Button>
        </Header>

        <Content>
          {this.state.importerText ? (
            <View>
              <Text style={styles.headingText}>Register as an Importer </Text>
            </View>
          ) : null}

          {this.state.isSwitchOn ? (
            <View>
              <Text style={styles.headingText}>Register as an Exporter </Text>
            </View>
          ) : null}

          <View style={{flex: 1, flexDirection: 'row-reverse', marginTop: 10}}>
            {this.state.isSwitchOn ? (
              <Text style={styles.exporter}>Exporter</Text>
            ) : (
              <Text style={styles.exporter}>Importer</Text>
            )}

            <Switch
              style={styles.switch}
              value={this.state.isSwitchOn}
              onValueChange={isSwitchOn => {
                this.setState({isSwitchOn});
                this.textChange();
              }}
            />
          </View>

          <View style={{flex: 1, width: 330, marginLeft: 14}}>
            <ProgressSteps
              borderStyle="outset"
              borderWidth={3}
              progressBarColor="#686868"
              completedProgressBarColor="#039174"
              completedStepIconColor="#039174"
              labelColor="black"
              activeLabelColor="#039174"
              activeStepIconBorderColor="#039174">
              <ProgressStep
                nextBtnStyle={buttonTextStyle}
                nextBtnTextStyle={btnTextColor}
                onNext={() => this.showCompanyInfo()}
                label="General ">
                <View>
                  {this.state.mainpage ? (
                    <Form>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="First Name"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Last Name"
                        />
                      </Item>

                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Email"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Password"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Confirm Password"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="User Name"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Phone"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Designation"
                        />
                      </Item>
                    </Form>
                  ) : null}
                </View>
              </ProgressStep>

              <ProgressStep
                nextBtnStyle={buttonTextStyle}
                nextBtnTextStyle={btnTextColor}
                previousBtnStyle={buttonTextStyle}
                previousBtnTextStyle={btnTextColor}
                onNext={() => this.showLegal()}
                label="Company"
                onPrevious={() => this.backtomainpage()}>
                {/* company info page*/}

                <View>
                  {this.state.companyinfo ? (
                    <Form>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Company Name"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Business/Industry Type"
                        />
                      </Item>

                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Landline"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Tax Number"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Company Tax Number"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Chamber Number"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Manufacturer Number"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Company Site"
                        />
                      </Item>
                    </Form>
                  ) : null}
                </View>
              </ProgressStep>

              <ProgressStep
                nextBtnStyle={buttonTextStyle}
                nextBtnTextStyle={btnTextColor}
                previousBtnStyle={buttonTextStyle}
                previousBtnTextStyle={btnTextColor}
                onNext={() => this.showTerm()}
                label="Legal"
                onPrevious={() => this.backtocompanyinfo()}>
                {/* legal info page */}
                <View>
                  {this.state.legalinfo ? (
                    <Form>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Bill"
                        />
                      </Item>
                      <Item regular style={styles.input}>
                        <Input
                          style={{
                            paddingBottom: 6,
                            height: 40,
                            paddingLeft: 30,
                          }}
                          placeholder="Verify documents"
                        />
                      </Item>
                    </Form>
                  ) : null}
                </View>
              </ProgressStep>

              <ProgressStep
                nextBtnStyle={buttonTextStyle}
                nextBtnTextStyle={btnTextColor}
                previousBtnStyle={buttonTextStyle}
                previousBtnTextStyle={btnTextColor}
                onNext={() => this.showFinal()}
                label="Agreement"
                onPrevious={() => this.backtolegalpage()}>
                {/* term and codition page */}

                <View>
                  {this.state.termpage ? (
                    <Form>
                      <Text style={styles.heading}>Terms and Conditions</Text>

                      <Textarea rowSpan={7} style={styles.paragraph}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis laboriosam nesciunt repellat nihil ab at
                        voluptate eaque debitis vitae quidem ipsam, dignissimos
                        numquam quos eveniet dolorum fuga odio veniam cum quia
                        iure ut quibusdam quae? Obcaecati voluptatibus accusamus
                        harum architecto est quam soluta recusandae placeat
                        esse. Animi nisi nihil similique. Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Magni, voluptates
                        error? Repudiandae unde voluptatem corporis aut iste
                        explicabo tempore, rem quos? Iste velit accusantium
                        perferendis necessitatibus optio ducimus numquam at ad
                        mollitia qui? Eius quis aliquam veniam eum? Dolor, at
                        perspiciatis. Ullam sit voluptatibus explicabo, eveniet
                        optio hic odio dolorem quisquam quam velit expedita esse
                        cum quasi, aspernatur fugiat accusantium placeat ex
                        labore dolor id laboriosam doloribus. Enim maxime neque
                        saepe illum, blanditiis exercitationem corrupti ipsa quo
                        doloremque consequatur
                      </Textarea>

                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <CheckBox
                          onPress={() =>
                            this.setState({checkbox: !this.state.checkbox})
                          }
                          checked={this.state.checkbox}></CheckBox>
                        <Text style={{marginLeft: 25}}>
                          I agree to all terms and conditions
                        </Text>
                      </View>
                    </Form>
                  ) : null}
                </View>
              </ProgressStep>

              <ProgressStep
                nextBtnStyle={buttonTextStyle}
                nextBtnTextStyle={btnTextColor}
                previousBtnStyle={buttonTextStyle}
                previousBtnTextStyle={btnTextColor}
                onPrevious={() => this.backtotermpage()}
                label="Complete">
                {/* final page */}

                <View>
                  {this.state.finalpage ? (
                    <Form>
                      <Text
                        style={{
                          textAlign: 'center',
                          marginTop: 36,
                          marginBottom: 32,
                          fontSize: 30,
                          fontWeight: 'bold',
                        }}>
                        Thank You {'\n'} Your Profile is Ready!
                      </Text>
                    </Form>
                  ) : null}
                </View>
              </ProgressStep>
            </ProgressSteps>
          </View>

          <Footer style={styles.footer}>
            <Text style={styles.footerText}>You Have An Account? Login</Text>
          </Footer>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  nextbtn: {
    backgroundColor: '#039174',
    color: 'black',
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    color: '#484848',
  },

  toggle: {
    marginLeft: 250,
    color: '#039174',
  },
  headingText: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 12,
    color: '#686868',
  },
  exporter: {
    marginRight: 20,
    fontSize: 20,
    color: '#686868',
  },
  switch: {
    fontSize: 24,
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paragraph: {
    textAlign: 'center',
  },
  input: {
    marginTop: 12,

    width: '80%',
    marginLeft: 36,
  },

  footer: {
    height: 120,
    width: '100%',

    backgroundColor: '#039174',
  },
  footerText: {
    textAlign: 'center',
    color: 'white',
    marginTop: '11%',
    fontSize: 16,
  },
});

export default App;
