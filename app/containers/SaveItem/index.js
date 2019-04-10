import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { changeItem, saveItem } from './actions';
import { itemSelector, successSelector, errorSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Submit from '../../components/Form/Submit';
import Label from '../../components/Form/Label';
import Input from '../../components/Form/Input';

export class SaveItem extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
        <form onSubmit={this.props.onSubmitForm}>
          <Label>
            Input Item:
            <Input
              type="text"
              value={this.props.item}
              onChange={this.props.onChangeItem}
            />
          </Label>
          <Submit type="submit" />
        </form>
      </div>
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
