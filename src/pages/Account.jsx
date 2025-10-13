import {Routes, Route, useLocation} from 'react-router-dom'
import AccountPage from './AccountPages/AccountPage';
import AccountOrdersPage from './AccountPages/AccountOrdersPage';
import AccountCartPage from './AccountPages/AccountCartPage';
import AccountAsideMenu from './AccountPages/AccountAsideMenu';
import AccountAddressPage from './AccountPages/AccountAddressPage';
import AccountPaymentPage from './AccountPages/AccountPaymentPage';
import AccountHelpCenterPage from './AccountPages/AccountHelpCenterPage';
import AccountPreferencePage from './AccountPages/AccountPreferencePage';
import AccountLoginPage from './AccountPages/AccountLoginPage';
import AccountRegisterPage from './AccountPages/AccountRegisterPage';
import { FaNodeJs } from 'react-icons/fa';
import AccountVerificationPage from './AccountPages/AccountVerificationPage';



const Account = () => {
  const location = useLocation();
  const NoHeader = ['/account/login', '/account/register', '/account/preference', '/account/verification']

  return (
    

    <main className='flex'>
      {!NoHeader.includes(location.pathname) && <AccountAsideMenu/>}
      <article className='flex-1'>
        <Routes>
          <Route index  element={<AccountPage/>} />
          <Route path="preference" element={<AccountPreferencePage/>} />
          <Route path="login" element={<AccountLoginPage/>} />
          <Route path="register" element={<AccountRegisterPage/>} />
          <Route path="verification" element={<AccountVerificationPage/>} />
          <Route path="orders" element={<AccountOrdersPage/>} />
          <Route path="carts" element={<AccountCartPage/>} />
          <Route path="address" element={<AccountAddressPage/>} />
          <Route path="payment" element={<AccountPaymentPage/>} />
          <Route path="support" element={<AccountHelpCenterPage/>} />
        </Routes>
      </article>
    </main>
  )
}

export default Account