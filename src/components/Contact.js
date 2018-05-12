import React, { Component } from 'react';
import styled from 'styled-components';

let Div = styled.div`
  box-sizing: border-box;
`;

let Label = styled.label`
  display: block;
  width: 100%;
`;

let Input = styled.input`
  display: block;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #a2a2a2;
`;

let TextArea = styled.textarea`
  display: block;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #a2a2a2;
`;

let Button = styled.button`
  border: none;
  border-radius: 5rem;
  color: rgb(16, 127, 159);
`;

export default class Contact extends Component {
  render() {
    return <Div>
      <h1>Contact us!</h1>

      <form>
        <Label for='name'>Name</Label>
        <Input type='text' id='name'></Input>
        <Label for='email'>Emain</Label>
        <Input id='email' type='email' value={this.props.email} readOnly></Input>
        <Label for='content'>Content</Label>
        <TextArea id='content'></TextArea>
        <Button type='submit'>Send a message</Button>
      </form>
    </Div>
  }
}