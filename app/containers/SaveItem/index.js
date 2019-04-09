import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { changeItem } from './actions';
import { itemSelector } from './selectors';
import reducer from './reducer';

export class SaveItem extends React.PureComponent {
  render() {
    return (
      <form>
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
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeItem: evt => dispatch(changeItem(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  item: itemSelector(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'saveItem', reducer });

export default compose(
  withConnect,
  withReducer,
)(SaveItem);
