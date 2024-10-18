interface Product {
  name: string;
  price: number;
  image: string;
  type: string;
}

const fetchPromise4 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  // when the promise completes, then execute a response then call the next then function, that will process the products 
  // you don't want coupling between the two handlers 
  // chaining promises is a great way to avoid callback hell and make your code more readable

  fetchPromise4
    .then((response: Response) => response.json() as Promise<Product[]>)
    .then((products: Product[]) => {
        products.forEach((product: Product) => {
            console.log(product.name);
          });
    });

    console.log('Chaining promises ... ');
  