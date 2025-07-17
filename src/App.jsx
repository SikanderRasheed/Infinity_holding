import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Pages
import Home from "@/pages/home/home"
import CertifiesCompanySearch from './pages/certifiedCompany/certifies-company-search';
import PersonalCertificate from './pages/personalCertificate/personal-certificate';
import Training from './pages/training/Training';
import Iso from './pages/iso/Iso';
import Inspection from './pages/inspection/inspection';
import Standards from './pages/standards/standards';

const routes = [
  {
    path: '/', element: <Home />
  },
  {
    path: '/certifies-company-search', element: <CertifiesCompanySearch />
  },
  {
    path: '/verify-personal-certificate', element: <PersonalCertificate />
  },
  {
    path: '/training', element: <Training />
  },
  {
    path: '/iso', element: <Iso />
  },
  {
    path: '/inspection', element: <Inspection />
  },
  {
    path: '/standards', element: <Standards />
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
