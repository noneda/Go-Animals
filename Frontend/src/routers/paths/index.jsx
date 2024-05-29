// * Pages
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Notify from '../../pages/Notify';
import EditBox from '../../components/Edit';

//* Layouts
import Layout from '../../layouts';

// * Components
import NotFound from '../../components/Not Found';

import Private from '../Private';


const paths = [
    {
        path : "/",
        element : <Login/>,
        errorElement : <NotFound/>
    },
    {
        path : "/home",
        element : <Private><Layout/></Private>,
        errorElement : <NotFound/>,
        children : [
            {
                index : true,
                element : <><Home/> <Notify/></>
            },
        ]
    },
    {
      path : "/test",
      element : <EditBox/>,
      errorElement : <NotFound/>
    }
];

export default paths;
/*
const routes = [
    {
      path: "/login", 
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/",
      element: <Overlay />,
    },
    {
      path: "/test",
      element: <Home />,
    },
    {
      path: "/home",
      element: <PrivateRoute><Layout /></PrivateRoute>,
      errorElement: <NotFound />,
      children: [
        {
          index: true,  
          element: <Home />,
        },
        {
          path: "cal",
          element: <Calendar />,
        },
        {
          path: "fac",
          element: <Factura />,
        },
      ],
    },
  ];
  */