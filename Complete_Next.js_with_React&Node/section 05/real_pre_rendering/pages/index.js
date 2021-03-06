import path from "path";
import fs from "fs/promises";
import Link from "next/link";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <>
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        </>
      ))}
    </ul>
  );
}

export default HomePage;

export async function getStaticProps() {
  console.log("RE-GETTING STATIC PROPS");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    // notFound: true,
    revalidate: 10, // 50 seconds
  };
}
