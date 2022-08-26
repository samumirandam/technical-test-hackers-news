import { changeList } from '../changeList';

describe('Test for changeList util', () => {
  test('Should added new element to list', () => {
    const list = [{ objectID: 123 }];
    const element = { objectID: 456 };
    expect(changeList(list, element)).toEqual([element, ...list]);
  });
  test('Should remove element to list', () => {
    const list = [{ objectID: 123 }];
    const element = { objectID: 123 };
    expect(changeList(list, element)).toEqual([]);
  });
});
