import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import QueryComponent from './components/QueryComponent';

const client = new QueryClient({    // creates a new query client
  defaultOptions: {  // you can use several different options here
    queries: {
      refetchOnWindowFocus: false  // refetches the query every time the window is focused such as switching btw tabs
    }
  }
});

const App = () => {
  return (
    // wraps the app in the query client provider just like context
    <QueryClientProvider client={client}>
      <QueryComponent />
    </QueryClientProvider>
  )
}

export default App