import { beforeEach, describe, expect, it, MockInstance, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router';

import Home from './Home';

import * as services from '../services/breweries';
import { Brewery, FetchBreweriesRequest } from '../services/types';
import { BreweryMockData } from '../services/mocks/getBreweries.mock';

describe('Home', () => {
  let spy: MockInstance<(request: FetchBreweriesRequest) => Promise<Brewery[]>>;

  beforeEach(() => {
    HTMLCanvasElement.prototype.getContext = vi.fn();

    spy = vi
      .spyOn(services, 'fetchBreweries')
      .mockResolvedValue(BreweryMockData);
  });

  it('should fetch brewery data after selecting city and clicking button', async () => {
    render(<Home />, { wrapper: BrowserRouter });

    const citySelect = screen.getByLabelText('Select a City');
    await userEvent.selectOptions(citySelect, 'Columbus');

    const button = screen.getByText('Show me the breweries!');

    await userEvent.click(button);

    await waitFor(() => expect(spy).toHaveBeenCalled());
  });

  it('should render list of breweries', async () => {
    render(<Home />, { wrapper: BrowserRouter });

    const citySelect = screen.getByLabelText('Select a City');
    await userEvent.selectOptions(citySelect, 'Columbus');

    const button = screen.getByText('Show me the breweries!');

    await userEvent.click(button);

    await waitFor(() => {
      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(5);
      screen.getByText(BreweryMockData[0].name!);
      screen.getByText(BreweryMockData[1].name!);
      screen.getByText(BreweryMockData[2].name!);
      screen.getByText(BreweryMockData[3].name!);
      screen.getByText(BreweryMockData[4].name!);
    });
  });

  it('should clear when Start Over is clicked', async () => {
    render(<Home />, { wrapper: BrowserRouter });

    const citySelect = screen.getByLabelText('Select a City');
    await userEvent.selectOptions(citySelect, 'Columbus');

    const button = screen.getByText('Show me the breweries!');

    await userEvent.click(button);

    const startOverButton = screen.getByText('Start Over');

    await userEvent.click(startOverButton);

    await waitFor(() => {
      const links = screen.queryAllByRole('link');
      expect(links).toHaveLength(0);
      expect(document.querySelector('select')?.value).toBe('');
    });
  });
});
