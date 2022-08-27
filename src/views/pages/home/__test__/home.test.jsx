/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import 'intersection-observer';

import { render, screen, fireEvent } from '@utils/test-utils';

import Home from '../index';

const defaultProps = {
  storyList: {
    data: [
      {
        created_at: '2002-08-26T00:27:26.000Z',
        author: 'didericis',
        story_title:
          'Threats of Blackouts Drive Japan to Embrace Nuclear Again',
        story_url:
          'https://financialpost.com/pmn/business-pmn/threats-of-blackouts-drive-japan-to-embrace-nuclear-again',
        objectID: '32601835',
      },
    ],
  },
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Home {...setupStore} />, {});
};

describe('Test for Home page component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByTestId('Home')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render click in favorite icon', () => {
    setup();
    fireEvent.click(screen.getByTestId('favorite-button'));
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
  });

  test('Should render change select', () => {
    setup();
    const select = screen.getByTestId('Select');
    fireEvent.change(select, {
      target: { value: 'reactjs' },
    });
    expect(global.window.location.pathname).toEqual('/query/reactjs');
    fireEvent.change(select, {
      target: { value: '/' },
    });
    expect(global.window.location.pathname).toEqual('/');
  });

  test('Should render loading state', () => {
    const props = {
      storyList: {
        isLoading: true,
      },
    };
    setup(props);
    expect(screen.getByTestId('Loader')).toBeTruthy();
  });

  test('Should render error state', () => {
    const props = {
      storyList: {
        isError: true,
        errorDetail: 'test error',
      },
    };
    setup(props);
    expect(screen.getByText('test error')).toBeTruthy();
  });

  test('Should render with no more pages', () => {
    const props = {
      storyList: {
        meta: {
          page: 0,
        },
      },
    };
    setup(props);
    expect(screen.getByTestId('Home')).toBeTruthy();
  });
});
