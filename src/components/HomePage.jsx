import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
const queryClient = new QueryClient()
  
import SnippetContainer from './SnippetContainer'
  
 function HomePage() {
    return (
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    )
  }
  


  
  function Example() {
    const { isPending, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
        fetch('http://localhost:8080/snippets', {
        }).then((res) =>
          res.json(),
        ),
    })
  

  
    if (error) return 'An error has occurred: ' + error.message
  
    return (
      <div className='flex flex-col'>
        <h1 className='text-6xl self-center m-7'>Snippets</h1>
        {isPending && <div>hihi</div>}
        {!isPending && <SnippetContainer data={data} />}
      </div>
    )
  }
  export default HomePage