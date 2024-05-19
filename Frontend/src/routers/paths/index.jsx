// * Pages
import Home from '../../pages/Home';
import Notify from '../../pages/Notify';

//* Layouts
import Layout from '../../layouts';


// * Components
import NotFound from '../../components/Not Found';
import Prueba from '../../pages/Test';



const paths = [
    {
        path : "/",
        element : <Layout/>,
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
        element : <Prueba/>
    }
    
];

export default paths;