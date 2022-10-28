import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/* Routes in rereact-router-dom v-6 */}
        <Routes>
          <Route path="*" element={<Welcome />} />
          <Route path="welcome/*" element={<Welcome />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:productId" element={<ProductDetail />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/<any value> => Product Detail for any ID
