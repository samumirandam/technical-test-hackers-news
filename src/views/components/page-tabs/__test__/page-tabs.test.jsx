/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen, fireEvent } from '@utils/test-utils';

import PageTabs from '../index';

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<PageTabs {...setupStore} />, {});
};

describe('Test for PageTabs component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('All')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render click in All', () => {
    setup();
    expect(screen.getByText('All')).toBeTruthy();
    fireEvent.click(screen.getByText('All'));
    expect(global.window.location.pathname).toEqual('/');
  });

  test('Should render click in My faves', () => {
    setup();
    expect(screen.getByText('My faves')).toBeTruthy();
    fireEvent.click(screen.getByText('My faves'));
    expect(global.window.location.pathname).toEqual('/favorites');
  });
});
