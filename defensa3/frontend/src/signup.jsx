import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export const Signup = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const registrar = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000", {
                user: user,
                password: password
            })

            if (response) {
                navigate("login");
                return alert("inicie sesión");
            }
        } catch (error) {
            console.error(error);
            return alert(error);
        }
    }


    return (
        <>
        <h1>registro</h1>

        <form onSubmit={registrar}>
            <h1>usuario</h1>
            <input type="text" onChange={(e) => setUser(e.target.value) } />
            <h1>contraseña</h1>
            <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">enviar</button>
        </form>

        <Link to={"/login"}>Iniciar sesión</Link>
        </>
    ); 
}