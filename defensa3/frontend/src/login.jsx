import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


export const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const verificar = async (e) => {
        e.preventDefault();

        //variable que se agrega al local storage
        const isLogged = true;

        try {
            const response = await axios.post("http://localhost:5000/login", {
                user: user,
                password: password
            })

            if (response) {
                navigate("/home");
                localStorage.setItem("isLogged", isLogged)
                localStorage.setItem("user", user);
                return alert("su, logueao");
            }
        } catch (error) {
            console.error(error);
            return alert(error);
        }
    }

    return (
        <>
            <h1>inicio sesión</h1>

            <form onSubmit={verificar}>
                <h1>usuario</h1>
                <input type="text" onChange={(e) => setUser(e.target.value)} />
                <h1>contraseña</h1>
                <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">enviar</button>
            </form>

            <Link to={"/"}>registrarse</Link>
        </>
    );
}