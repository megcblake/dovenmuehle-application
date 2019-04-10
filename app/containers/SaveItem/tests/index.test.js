import { mapDispatchToProps } from '../index';
import { changeItem } from '../actions';

describe('SaveItem', () => {
  describe('mapDispatchToProps', () => {
    describe('onChangeItem', () => {
      it('should be defined', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeItem).toBeDefined();
      });

      it('should dispatch onChangeItem when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const item = 'Hello, another test';
        result.onChangeItem({ target: { value: item } });
        expect(dispatch).toHaveBeenCalledWith(changeItem(item));
      });
    });
  });
});
