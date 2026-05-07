import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import  {Provider}  from 'react-redux';
import './index.css';
import {store} from './store/store.js';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import VideoDisplay from './components/VideoDisplay.jsx';
import SubscribedChannels from './pages/SubscribedChannels.jsx';
// import AboutApp from './components/AboutApp.jsx';


const router = createBrowserRouter([{

   path: '/',
   element: <App/>,
   children: [
    {
    path: '/',
    element: <VideoDisplay/>
   },
  {
    path: '/subscriptions',
    element: <SubscribedChannels/>
  },
  // {
  //   path: '/aboutApplication',
  //   element: <AboutApp/>

  // }
  ]
}])

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <Provider store={store}>
       <RouterProvider router={router} />
  </Provider>
  </StrictMode>,
)
