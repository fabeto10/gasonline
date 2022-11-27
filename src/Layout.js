import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminComponent } from './AdminComponent';
import { UserComponent } from './components/userCompoonent';
import { NavR } from './components/nav';
const Layout = () => {
  
    return (
      <div className="fondo">
        <>
            <>
            <NavR/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<UserComponent />}/>
                    <Route path='/admin' element={<AdminComponent />}/>
                </Routes>
            </BrowserRouter>

            </>
        </>
      </div>
    );
  };

export default Layout;