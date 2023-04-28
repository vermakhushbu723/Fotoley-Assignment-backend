import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Wallet from "./components/Wallet/Wallet";
import SendMoney from "./components/SendMoney/SendMoney";
import RequestMoney from "./components/RequestMoney/RequestMoney";
import ListOfRequest from "./components/ListOfRequest/ListOfRequest";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			{user && <Route path="/wallet" exact element={<Wallet />} />}
			{user && <Route path="/sendmoney" exact element={<SendMoney />} />}
			{user && <Route path="/requestmoney" exact element={<RequestMoney />} />}
            {user && <Route path="/listofrequest" exact element={<ListOfRequest />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
