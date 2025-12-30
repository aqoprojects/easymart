import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { RootProvider } from './contexts/RootProvider'
import { PublicRoute, PrivateRoute } from './routes/RouteGuards'

import Header from './components/Header'
import Footer from './components/Footer'

const HomePage = lazy(() => import('./pages/HomePAge'))
const ProductSearchPage = lazy(() => import('./pages/ProductSearchPage'))
const ProductCategoryPage = lazy(() => import('./pages/ProductCategoryPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const ProductCartPage = lazy(() => import('./pages/ProductCartPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const OrderPage = lazy(() => import('./pages/OrderPage'))
const Account = lazy(() => import('./pages/Account'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

const AccountLoginPage = lazy(() =>
  import('./pages/AccountPages/AccountLoginPage')
)
const AccountRegisterPage = lazy(() =>
  import('./pages/AccountPages/AccountRegisterPage')
)
const AccountVerificationPage = lazy(() =>
  import('./pages/AccountPages/AccountVerificationPage')
)

function App() {
  return (
    <BrowserRouter>
      <RootProvider>
        <Header />

        <Suspense fallback={<div style={{ padding: 20 }}>Loading...</div>}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={
              <PublicRoute>
                <AccountLoginPage />
              </PublicRoute>
            } />
            <Route path="/register" element={<AccountRegisterPage />} />
            <Route path="/verification" element={<AccountVerificationPage />} />
            <Route path="/search/:searchName" element={<ProductSearchPage />} />
            <Route path="/category/:categoryId" element={<ProductCategoryPage />} />

            <Route path="/products/:typeSlug?" element={<ProductsPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/product-cart" element={<ProductCartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order/:orderId" element={<OrderPage />} />

            <Route
              path="/account/*"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </RootProvider>
    </BrowserRouter>
  )
}

export default App