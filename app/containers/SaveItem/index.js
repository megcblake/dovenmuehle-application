import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { changeItem, saveItem } from './actions';
import { itemSelector, successSelector, errorSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class SaveItem extends React.PureComponent {
  render() {
    return (
      <form onSubmit={this.props.onSubmitForm}>
        <label>
          item:
          <input
            type="text"
            value={this.props.item}
            onChange={this.props.onChangeItem}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

SaveItem.propTypes = {
  item: PropTypes.string,
  onChangeItem: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeItem: evt => dispatch(changeItem(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(saveItem());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  item: itemSelector(),
  success: successSelector(),
  error: errorSelector(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'save', reducer });
const withSaga = injectSaga({ key: 'save', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(SaveItem);
