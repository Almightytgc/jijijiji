import { useEffect } from "react";
import { useNavigate} from "react-router-dom";

export const Logueao = () => {

    const navigate = useNavigate();

    const isLogged = localStorage.getItem("isLogged");
    const userLogueado = localStorage.getItem("user");

    useEffect( () => {
        if (isLogged) {
            console.log("estás logueado");
        } else {
            navigate("/login");
            return alert("no estás autenticado");
        }
    }, [] )

    const cerrarSesion = () => {
        localStorage.clear();
        navigate("/login")
        return alert("sesión cerrada");
    }

    return (
        <>
        <h1>Bienvenido {userLogueado ? userLogueado : ""}</h1>
        <h3 onClick={cerrarSesion}>Cerrar sesión</h3>
        </>
    );
}