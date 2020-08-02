import styled from 'styled-components';

const Button = styled.button`
	color: var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  outline: none;
  text-decoration: none;
  display: flex;
  transition: opacity .3s;
  text-transform: uppercase;
  font-family: 'Lato';
  letter-spacing: 0.02em;
	&:hover,
	&:focus {
		opacity: .5;
  }
  & img {
    margin-left: 10px;
  }
`

export default Button;