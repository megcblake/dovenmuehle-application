import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { itemsSelector, successSelector, errorSelector } from './selectors';
import { loadItems } from './actions';
import reducer from './reducer';
import saga from './saga';

class DisplayItems extends React.Component {
  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    const { success, items } = this.props;
    return (
      <div>
        {success && items.map(item => <div key={item._id}>{item.item}</div>)}
      </div>
    );
  }
}

DisplayItems.propTypes = {
  loadItems: PropTypes.func,
  success: PropTypes.bool,
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = createStructuredSelector({
  items: itemsSelector(),
  success: successSelector(),
  error: errorSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadItems: () => dispatch(loadItems()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'displayItems', reducer });
const withSaga = injectSaga({ key: 'displayItems', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DisplayItems);
