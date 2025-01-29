import { beforeEach, describe, expect, it, MockInstance, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import BreweryDetail from './BreweryDetail';

import * as services from '../services/breweries';
import { Brewery } from '../services/types';

import {
  BreweryDetailMock,
  BreweryDetailMockWithFullAddress,
} from '../services/mocks/getBreweryDetail.mock';

describe('BreweryDetail', () => {
  let spy: MockInstance<(id: string) => Promise<Brewery>>;

  beforeEach(() => {
    HTMLCanvasElement.prototype.getContext = vi.fn();

    spy = vi
      .spyOn(services, 'fetchBrewery')
      .mockResolvedValue(BreweryDetailMock);
  });

  it('should fetch brewery data', async () => {
    render(<BreweryDetail />);
    await waitFor(() => expect(spy).toHaveBeenCalled());
  });

  it('should render brewery data on screen', async () => {
    render(<BreweryDetail />);
    await waitFor(() => {
      screen.getByText(BreweryDetailMock.name!);
      screen.getByText(BreweryDetailMock.address_1!, { exact: false });
      screen.getByText(`Visit ${BreweryDetailMock.name} on the web`, {
        exact: false,
      });
    });
  });

  it('renders address 2 and 3 if provided', async () => {
    spy = vi
      .spyOn(services, 'fetchBrewery')
      .mockResolvedValue(BreweryDetailMockWithFullAddress);

    render(<BreweryDetail />);
    await waitFor(() => {
      screen.getByText(BreweryDetailMockWithFullAddress.address_2!, {
        exact: false,
      });
      screen.getByText(BreweryDetailMockWithFullAddress.address_3!, {
        exact: false,
      });
    });
  });
});
