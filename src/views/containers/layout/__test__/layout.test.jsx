/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen } from '@utils/test-utils';

import Layout from '../index';

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Layout {...setupStore} />, {});
};

describe('Test for Layout container component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByTestId('Layout')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
