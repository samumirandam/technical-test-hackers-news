/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen, fireEvent } from '@utils/test-utils';

import StoryCard from '../index';

const defaultProps = {
  createdAt: '2002-08-26T00:27:26.000Z',
  author: 'didericis',
  storyTitle: 'Threats of Blackouts Drive Japan to Embrace Nuclear Again',
  storyUrl:
    'https://financialpost.com/pmn/business-pmn/threats-of-blackouts-drive-japan-to-embrace-nuclear-again',
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<StoryCard {...setupStore} />, {});
};

describe('Test for StoryCard component', () => {
  test('Should render without errors', () => {
    setup();
    expect(
      screen.getByText(
        'Threats of Blackouts Drive Japan to Embrace Nuclear Again',
      ),
    ).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render click in story', () => {
    window.open = jest.fn();
    setup();
    fireEvent.click(
      screen.getByText(
        'Threats of Blackouts Drive Japan to Embrace Nuclear Again',
      ),
    );
    expect(window.open).toHaveBeenCalled();
  });

  test('Should render favortire icon without errors', () => {
    const props = {
      isFavorite: true,
    };
    setup(props);
    expect(
      screen.getByText(
        'Threats of Blackouts Drive Japan to Embrace Nuclear Again',
      ),
    ).toBeTruthy();
  });
});
