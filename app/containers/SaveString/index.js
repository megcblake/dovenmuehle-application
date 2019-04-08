import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { changeString } from './actions';
import { makeSelectString } from './selectors';
import reducer from './reducer';

export class SaveString extends React.PureComponent {
  render() {
    return (
      <form>
        <label>
          string:
          <input
            type="text"
            value={this.props.string}
            onChange={this.props.onChangeString}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

SaveString.propTypes = {
  string: PropTypes.string,
  onChangeString: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'save', reducer });

export default compose(
  withConnect,
  withReducer,
)(SaveString);
