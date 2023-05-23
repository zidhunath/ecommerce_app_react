import "bulma/css/bulma.min.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Product } from "../components/product";
import product_Data from "../data/product_Data.json";

export function Home () {
  return (
    <>
      <div className = "mb-6">
        <Header />
      </div>

      <div className = "columns is-multiline mt-6 ">
        {product_Data.map((product) => {
          return (
            <div className= "column is-5by4 mt-6 has-text-grey-lighter" key={product.id}>
              <Product
                
                id = {product.id}
                image = {product.image}
                name = {product.name}
                desc = {product.description}
                price={product.price}
              />
            </div>
          );
        })}
      </div>

      <div className = "mt-6 mb-6">
        <Footer />
      </div>
    </>
  );
}
