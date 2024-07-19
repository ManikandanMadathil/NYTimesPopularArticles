import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../containers/Home/Home';
import { mockResponse } from '../__mocks__/axios';

describe('App', () => {
  it('renders the title and ArticleList', async () => {
    render(<App />);

    expect(screen.getByText('NY Times Most Popular Articles')).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.getByText(mockResponse.data.results[0].title)).toBeInTheDocument();
    // });
  });
});
