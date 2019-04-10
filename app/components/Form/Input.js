import styled from 'styled-components';

const Input = styled.input`
  padding: 5px;
  margin: 5px;
  background: ${props => (props.value ? '#bbecc0' : '#fbecc0')};
  border: none;
  border-radius: 3px;
  outline: none;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
`;

export default Input;
