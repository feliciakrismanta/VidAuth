import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Form, Item, Label, Input, Button, View,
} from 'native-base';
import { Image } from 'react-native';
import { Font, LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from './Messages';
import Header from './Header';
import Spacer from './Spacer';

class TMDInformation extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val,
    });
  }

  handleSubmit = () => {
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state)
      .then(() => Actions.login())
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const { loading, error } = this.props;

    if (loading) return <Loading />;

    return (
      <Container
        style={{
          backgroundColor: '#F6F8FB',
        }}
      >
        <Content>
          <View padder>
            <Image
              style={{
                marginTop: 50,
                width: 300,
                height: 200,
                flex: 1,
                alignItems: 'center',
                alignSelf: 'center',
               }}
              source={require( '../../images/undraw_security_o890.png')}
            />
          </View>
          <View padder>
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 35,
                color: '#707070',
                fontWeight: "700",
                alignItems: 'center',
                alignSelf: 'center',
                textAlign: 'center',
                margin: 20,
              }}
            >
             We're going to secure this device
            </Text>
          </View>

          <Form>
            <View padder>
              <LinearGradient
                colors={['#A13BFD', '#33A2F7']}
                style={{
                  padding: 15, alignItems: 'center', borderRadius: 40, marginHorizontal: 50,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text
                  style={{
                    backgroundColor: 'transparent',
                    fontSize: 15,
                    color: '#fff',
                  }}
                  onPress={Actions.setupPageSecure}
                >
                 Let's Do This
                </Text>
              </LinearGradient>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default TMDInformation;
