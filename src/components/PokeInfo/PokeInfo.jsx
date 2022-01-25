import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import './PokeInfo.css'
import { PokeCartContext } from "../PokeCartContext/PokeCartContext";
import { PokeDetail } from "../PokeCount/PokeCount";

const PokeInfoD = ({ pokemon }) => {
    const [pokeInfoD, setPokeInfoD] = useState([]);
    const {PokeCart, SetPokeCart, AddToCart} = useContext(PokeCartContext);
    useEffect(() => {
        const fetchData = async (url) => {
            const result = await axios(url);
            setPokeInfoD(result.data);
        };
        
        if(pokemon.url){
            fetchData(pokemon.url);
        }
    },[pokemon]);

    console.log(PokeCart);

    return (
        <>
        {pokeInfoD.name ? (
            <section className="PokeContainer">
                <h1 className="center text-uppercase">{pokeInfoD.name}</h1>
                    <div className="PokeInfoLeft">
                        <img src={pokeInfoD.sprites.front_default} alt="Pokemon_front_sprite" className="PokeImg"/>
                        <p className="PokeSubtitle"><strong>Type:</strong> {pokeInfoD.types[0].type.name}</p>
                    </div>

                    <div className="PokeInfoRight">
                        <div className="PokeInfoContainer">
                            <p className="PokeSubtitle"><strong>Name:</strong> {pokeInfoD.name}</p>
                            <p className="PokeSubtitle"><strong>Pokedex ID:</strong> {pokeInfoD.id}</p>
                            <p className="PokeSubtitle"><strong>Ability:</strong> {pokeInfoD.abilities[0].ability.name}</p>
                            <p className="PokeSubtitle"><strong>Height:</strong> {pokeInfoD.height / 10}m</p>
                            <p className="PokeSubtitle"><strong>Weight:</strong> {pokeInfoD.weight}kg</p>
                        </div>
                    </div>
                        <button className="btn btn-primary my_btn" 
                        onClick={() => AddToCart(pokeInfoD)}>Agregar Pokemon
                        </button>
                        <PokeDetail></PokeDetail>
            </section>
        ):(
            <div className="center">
                <h2 className="center">Error 404</h2>
                <p>El pokemon no se encuentra en nuestra base de datos</p>
            </div>
        )}
        </>

    );

}

export default PokeInfoD;