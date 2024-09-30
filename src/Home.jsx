import React, {useEffect, useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import { BlobServiceClient } from '@azure/storage-blob';
import { DefaultAzureCredential, InteractiveBrowserCredential } from '@azure/identity';

function Home () {
    
    const [state, setState] = useState('');
    useEffect(() => {
        console.log(import.meta.env.VITE_API_KEY);
    },[state]);
    const navigate = useNavigate();
    const handleClick = async () => {
        //await fetch('https://onedao-dev-apimanagement.azure-api.net/test-api/data', {method: 'POST', headers:{'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Ocp-Apim-Subscription-Key': '596078ed26c64ebeb309dfa367d443ca'}, body: JSON.stringify({hello: 'hi'})}).then(res => res.json()).then(data => setState(data))
        await fetch('https://onedao-dev-apimanagement.azure-api.net/test-api/data', {method: 'POST', headers:{'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': '596078ed26c64ebeb309dfa367d443ca'  }, body: JSON.stringify({hello: 'hi'})}).then(res => res.json()).then(data => setState(data))
        navigate('/hello');
    }

    return (
        <>
        <button onClick={handleClick}>Press.</button>
        
        </>
    )
}

export default Home;