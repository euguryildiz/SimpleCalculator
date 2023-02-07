import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Header from './src/components/header';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      result: '',
    };

    this.sum = this.sum.bind(this);
    this.deduct = this.deduct.bind(this);
    this.mult = this.mult.bind(this);
    this.div = this.div.bind(this);
  }

  sum() {
    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);

    const resultt = number1 + number2;
    this.setState({
      result: resultt,
    });
  }

  deduct() {
    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);

    const resultt = number1 - number2;
    this.setState({
      result: resultt,
    });
  }

  mult() {
    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);

    const resultt = number1 * number2;
    this.setState({
      result: resultt,
    });
  }

  div() {
    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);

    const resultt = number1 / number2;
    this.setState({
      result: resultt,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Simple Calculator" />
        <View styles={styles.contentWrapper}>
          <TextInput
            styles={styles.input}
            placeholder="First Number"
            onChangeText={text => {
              this.setState({
                input1: text,
              });
            }}
            value={this.state.input1}
          />

          <TextInput
            styles={styles.input}
            placeholder="Second Number"
            onChangeText={text => {
              this.setState({
                input2: text,
              });
            }}
            value={this.state.input2}
          />

          <View style={styles.buttonWrapper}>
            <Button onPress={this.sum} color="#841584" title="+" />
            <Button onPress={this.deduct} color="#841584" title="-" />
            <Button onPress={this.mult} color="#841584" title="*" />
            <Button onPress={this.div} color="#841584" title="/" />
          </View>

          <Text style={styles.sampleText}>Result: {this.state.result}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentWrapper: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
  },
  sampleText: {
    height: 30,
    fontSize: 14,
  },
});
