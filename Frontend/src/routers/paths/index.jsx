// * Pages
import Home from '../../pages/Home';
import Notify from '../../pages/Notify';

//* Layouts
import Layout from '../../layouts';


// * Components
import NotFound from '../../components/Not Found';



const paths = [
    {
        path : "/",
        element : <Layout/>,
        errorElement : <NotFound/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
        ]

    }
    
];

export default paths;