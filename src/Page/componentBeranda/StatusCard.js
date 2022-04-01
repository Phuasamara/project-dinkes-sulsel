import React from 'react';

export default function StatusCard(props){
    return(
        <div style={{backgroundColor: 'white', height: '40px', display: 'flex', justifyContent: 'space-between', padding: '10px 20px', alignItems: 'center', borderRadius: 15}}>
            <p style={{margin: 0}}>{props.status}</p>
            <p style={{margin: 0}}>{props.jumlah}</p>
        </div>
    )
}