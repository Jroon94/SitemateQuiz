import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import NewsSearch from './NewsSearch';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NewsSearch />
  </QueryClientProvider>
);

export default App;
