/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen, fireEvent } from '@utils/test-utils';

import Select from '../index';

const defaultProps = {
  options: [{ value: 'reactjs', label: 'Reactjs' }],
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Select {...setupStore}>Press</Select>, {});
};

describe('Test for Select ui component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('Reactjs')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render change select', () => {
    setup();
    const select = screen.getByTestId('Select');
    fireEvent.change(select, {
      target: { value: 'reactjs' },
    });
    expect(screen.getByText('Reactjs')).toBeTruthy();
  });
});
