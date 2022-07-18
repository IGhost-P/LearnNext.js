import path from "path";
import fs from "fs/promises";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <>
          <li key={product.id}>{product.title}</li>
          <span>{product.description}</span>
        </>
      ))}
    </ul>
  );
}

export default HomePage;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}