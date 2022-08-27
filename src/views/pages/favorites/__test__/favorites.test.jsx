/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen, fireEvent } from '@utils/test-utils';

import Favorites from '../index';

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Favorites {...setupStore} />, {});
};

describe('Test for Favorites page component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByTestId('Favorites')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render click in favorite icon', () => {
    localStorage.setItem(
      'FAVORITES',
      JSON.stringify([
        {
          created_at: '2002-08-26T00:27:26.000Z',
          author: 'didericis',
          story_title:
            'Threats of Blackouts Drive Japan to Embrace Nuclear Again',
          story_url:
            'https://financialpost.com/pmn/business-pmn/threats-of-blackouts-drive-japan-to-embrace-nuclear-again',
          objectID: '32601835',
        },
      ]),
    );
    setup();
    expect(localStorage.FAVORITES).toEqual(
      JSON.stringify([
        {
          created_at: '2002-08-26T00:27:26.000Z',
          author: 'didericis',
          story_title:
            'Threats of Blackouts Drive Japan to Embrace Nuclear Again',
          story_url:
            'https://financialpost.com/pmn/business-pmn/threats-of-blackouts-drive-japan-to-embrace-nuclear-again',
          objectID: '32601835',
        },
      ]),
    );
    fireEvent.click(screen.getByTestId('favorite-button'));
    expect(localStorage.FAVORITES).toEqual(JSON.stringify([]));
  });
});
