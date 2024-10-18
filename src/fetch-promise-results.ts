interface Product {
  name: string;
  price: number;
  image: string;
  type: string;
}

// Fetch and return promise type of response
const fetchPromise2: Promise<Response> = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

// then handle that fetch, go through objects and log the products name for each oject from the json 
fetchPromise2.then((response: Response) => {
  // getting the response from the .json file, typecasted into a type of Promise 
  const jsonPromise = response.json() as Promise<Product[]>;
  jsonPromise.then((products: Product[]) => { // get the products
    products.forEach((product: Product) => { 
      console.log(product.name);
    });
  });
});

// starts looking like callback - hell 

console.log('Fetching products ... ');
