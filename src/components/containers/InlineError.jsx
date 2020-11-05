import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function InlineError(props) {
  const { error } = props;
  return <StyledErrorMessage>{error.message}</StyledErrorMessage>;
}

InlineError.propTypes = {
  error: PropTypes.any.isRequired,
};

const StyledErrorMessage = styled.span`
  color: red;
`;
