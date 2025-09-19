import useApi from "../../hooks/useApi";

function DataFetcher({ url, children }) {
  const {data, loading, error, refetch} = useApi(url)
  
  return children({ data, loading, error, refetch });
}

export default DataFetcher;
