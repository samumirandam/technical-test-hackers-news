// eslint-disable-next-line import/prefer-default-export
export const changeList = (list, element) => {
  let newList = [];
  if (list.some((item) => item.objectID === element.objectID)) {
    const itemIndex = list.findIndex(
      (item) => item.objectID === element.objectID,
    );
    newList = [...list];
    newList.splice(itemIndex, 1);
  } else {
    newList = [element, ...list];
  }
  return newList;
};
