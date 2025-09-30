import Head from 'next/head';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then(r => r.json());
export default function Home() {
  const { data } = useSWR('/api/products', fetcher);
  return (<>
    <Head><title>Higher Self Studio</title></Head>
    <h1>Welcome to Higher Self Studio</h1>
    <ul>{data?.products?.map(p=><li key={p.id}>{p.title}</li>)}</ul>
  </>);
}
