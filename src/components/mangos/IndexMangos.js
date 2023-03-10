import React, { useState, useEffect } from 'react';
import { getAllMangos } from '../../api/mangos'
// import { Link } from 'react-router-dom'
// import CSRFToken from '../csrftoken';

const IndexMangos = (props) => {

    const [mangos, setMangos] = useState(null)

    const { user } = props
    
    useEffect(() => {
        getAllMangos(user)
            .then(res => setMangos(res.data.mangos))
            .catch(err => console.log(err))

        
    }, [user]);

    // console.log('mangos ', mangos)

    if (!mangos) {
        return <p>Loading</p>

    } else if (mangos.length === 0) {
        console.log('mangos ', mangos)
        return (
            <div className='container'>
                <p>No mangos yet, go add some</p>
            </div>
        )
    }

    

    const mangoCards = mangos.map((mango) => {
        return (
            <div key={mango.id}>
                <p>Name: {mango.name}</p>
                <p>Ripe: {mango.ripe ? 'true' : 'false'}</p>
            </div>
        )
        
    })

    return (
        <div>
            <h1>Mangooooos</h1>
            { mangoCards }
        </div>
    )
}

export default IndexMangos
