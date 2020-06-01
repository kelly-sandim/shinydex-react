import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import {
    Card, CardImg, CardText, CardTitle
  } from 'reactstrap';


import axios from 'axios';

export default function Pokemons() {
    const [ pokemon, setPokemon ] = useState([]);

    async function getPokemon() {
        const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
        
        const promises = pokemons.data.results.map(async (pokeUrl) => {
            const result = await axios.get(pokeUrl.url).then((rp) => rp.data);
            return result;
        });

        const pokeData = await Promise.all(promises);

        setPokemon(pokeData);
    }
    
    
    useEffect(() => {
        getPokemon();
    }, []);
    
    return (
        // style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        <Container fluid="lg" >
            <h1>ShinyDex</h1>
            <Row md="12">
                
                {
                    pokemon.map(data =>  {   
                        return(                                                                                  
                            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="col-md-4 col-sm-12">                                                                  
                                <CardImg variant="top" src={data.sprites.front_shiny} />
                                <CardTitle>#{data.id} - {data.name}</CardTitle>
                                <CardText></CardText>                                                    
                            </Card>
                        );
                    })
                }
                
            </Row>  
        </Container>
    )
}