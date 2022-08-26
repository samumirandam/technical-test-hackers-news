/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen } from '@utils/test-utils';

import Error from '../index';

const defaultProps = {
  error: 'test error',
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Error {...setupStore} />, {});
};

describe('Test for Error component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('test error')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
