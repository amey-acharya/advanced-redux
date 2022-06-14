import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: 'p1',
      title: "My first book",
      description: "The first book I've ever written",
      price: 12.99,
    },
    {
      id: 'p2',
      title: "My second book",
      description: "The second book I've ever written",
      price: 10.99,
    },
    {
      id: 'p3',
      title: "My third book",
      description: "The second book I've ever written",
      price: 9.99,
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => <ProductItem
          key={product.id}
          id= {product.id}
          title= {product.title}
          price= {product.price}
          description= {product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
