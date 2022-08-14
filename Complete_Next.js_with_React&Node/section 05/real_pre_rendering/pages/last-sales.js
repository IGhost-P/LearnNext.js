import { useEffect, useState } from "react";
import useSWR from "swr";
export default function LastSalesPage(props) {
  // const [isLoading, setIsLoading] = useState(false);
  const [sales, setSales] = useState();

  // 컴포넌트가 로드 될때 url에 대한 요청을 보내게 된다

  // return 값을 받는다
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `https://nextjs-prerender-d2499-default-rtdb.firebaseio.com/sales.json`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      const transformedSales = Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        };
      });
      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetcher = (...args) => fetch(...args).then((res) => res.json());

  //   fetch(
  //     "https://nextjs-prerender-d2499-default-rtdb.firebaseio.com/sales.json"
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       const transformedSales = Object.keys(data).map((key) => {
  //         return {
  //           ...data[key],
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         };
  //       });

  //       console.log(transformedSales);
  //       setSales(transformedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  // 로딩보다 에러가 더 중요하기 때문에 앞서 두자
  if (error) {
    return <p>No sales yet</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}
