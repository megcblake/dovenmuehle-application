import { mapDispatchToProps } from '../index';
import { changeItem, saveItem } from '../actions';

describe('SaveItem', () => {
  describe('mapDispatchToProps', () => {
    describe('onChangeItem', () => {
      it('should be defined', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeItem).toBeDefined();
      });

      it('should dispatch changeItem when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const item = 'Hello, another test';
        result.onChangeItem({ target: { value: item } });
        expect(dispatch).toHaveBeenCalledWith(changeItem(item));
      });
    });

    describe('onSubmitForm', () => {
      it('should be defined', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch saveItem when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(saveItem());
      });
    });
  });
});
