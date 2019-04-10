/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { FormattedMessage } from 'react-intl';
import { itemsSelector, successSelector, errorSelector } from './selectors';
import { loadItems } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Center from '../../components/Interface/Center';

class DisplayItems extends React.Component {
  componentDidMount() {
    this.props.loadItems();
  }

  renderItems() {
    const { items, success, error } = this.props;
    if (!success && !error) {
      return <div>Loading items...</div>;
    }
    if (error) {
      return <div>Error loading items.</div>;
    }
    if (success) {
      return items.map((item, i) => (
        <div key={item._id}>
          {i + 1}. {item.item}
        </div>
      ));
    }
    return <div />;
  }

  render() {
    return (
      <Center>
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
        {this.renderItems()}
      </Center>
    );
  }
}

DisplayItems.propTypes = {
  loadItems: PropTypes.func,
  success: PropTypes.bool,
  error: PropTypes.any,
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
