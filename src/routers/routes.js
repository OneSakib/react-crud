import { Routes, Route, useNavigate, useMatch } from "react-router-dom";
// Pages
import Index from "../pages/crud/Index";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Create from "../pages/crud/Create";
import Update from "../pages/crud/Update";
import { toast } from 'react-toastify'
// Protected Route
import Protected from "../layouts/Protected";
import Auth from '../layouts/Auth'
export default function ReactRouter() {
    const navigation = useNavigate()
    const match = useMatch('/update/:id')
    return (
        <Routes>
            <Route element={<Auth />}>
                <Route exact path='/login' element={<Login navigation={navigation} toast={toast} />} ></Route>
                <Route exact path='/register' element={<Register navigation={navigation} toast={toast} />} ></Route>
            </Route>
            <Route element={<Protected />}>
                <Route exact path="/" element={<Index navigation={navigation} toast={toast} />} />
                <Route exact path='/create' element={<Create navigation={navigation} toast={toast} />} />
                <Route exact path='/update/:id' element={<Update navigation={navigation} match={match} toast={toast} />} />
            </Route>
        </Routes>
    )
}


