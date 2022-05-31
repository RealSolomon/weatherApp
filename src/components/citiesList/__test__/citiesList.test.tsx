import React from 'react';
import { CitiesList } from '../citiesList';
import { render, screen, waitFor } from '../../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';

const mockData = ['Kyiv', 'Dnipro', 'Lviv'];

describe('render CitiesList component', () => {
  it('CitiesList displayed on the page, and have the right length', () => {
    render(
      <CitiesList citiesList={mockData}/>
    );
    expect(screen.getByTestId('list')).toBeInTheDocument();
    waitFor(() => {
      expect(screen.getAllByTestId('listItem')).toHaveLength(3);
    });
  });
});
