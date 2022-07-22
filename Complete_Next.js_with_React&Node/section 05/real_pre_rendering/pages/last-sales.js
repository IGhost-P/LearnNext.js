import { useEffect, useState } from "react";

export default function LastSalesPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [sales, setSales] = useState();

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://nextjs-prerender-d2499-default-rtdb.firebaseio.com/sales.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const transformedSales = Object.keys(data).map((key) => {
          return {
            ...data[key],
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          };
        });

        console.log(transformedSales);
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No sales yet</p>;
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
