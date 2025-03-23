import Home from './components/Home';
import ProductCard from './components/ProductCard';
import PostCard from './components/PostCard';

const products = [
  { name: 'Product 1', price: 20, image: 'product1.jpg' },
  { name: 'Product 2', price: 30, image: 'product2.jpg' },
];

const posts = [
  { username: 'User1', profilePic: 'user1.jpg' },
  { username: 'User2', profilePic: 'user2.jpg' },
];

function App() {
  return (
    <div>
      <Home />
      <h2>Products</h2>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      <h2>Posts</h2>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}

export default App;
