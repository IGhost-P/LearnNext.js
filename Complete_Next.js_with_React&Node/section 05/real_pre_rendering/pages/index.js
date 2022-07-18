import path from "path";
import fs from "fs";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.titile}</li>
      ))}
    </ul>
  );
}

export default HomePage;

export async function getStaticProps() {
  return {
    props: {
      products: [{ id: "p1", titile: "Product 1" }],
    },
  };
}
