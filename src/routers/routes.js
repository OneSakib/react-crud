import { Routes, Route, useNavigate } from "react-router-dom";
// Pages
import Index from "../pages/crud/Index";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Create from "../pages/crud/Create";
import Update from "../pages/crud/Update";
import { toast } from 'react-toastify'
// Protected Route
import Protected from "../layouts/Protected";
export default function ReactRouter() {
    const navigation = useNavigate()
    return (
        <Routes>
            <Route exact path='/' element={<Protected >
                <Index navigation={navigation} />
            </Protected>} ></Route>
            <Route exact path='/login' element={<Login navigation={navigation} toast={toast} />} ></Route>
            <Route exact path='/register' element={<Register navigation={navigation} toast={toast} />} ></Route>
            <Route exact path='/create' element={<Protected >
                <Create navigation={navigation} toast={toast} />
            </Protected>} ></Route>
            <Route exact path='/update' element={<Protected >
                <Update navigation={navigation} toast={toast} />
            </Protected>} ></Route>
        </Routes>
    )
}


