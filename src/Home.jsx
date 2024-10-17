import React, {useEffect, useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import { BlobServiceClient } from '@azure/storage-blob';
import { DefaultAzureCredential, InteractiveBrowserCredential } from '@azure/identity';

function Home () {
    
    const [state, setState] = useState('');
    useEffect(() => {
        console.log(process.env.VITE_API_KEY);
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
        <img src='https://onedaodevstorageaccount.blob.core.windows.net/testcontainer/1725621053501-file.jpg?sv=2024-08-04&spr=https%2Chttp&st=2024-10-04T10%3A46%3A59Z&se=2024-10-04T11%3A06%3A59Z&skoid=0ec46b81-bff8-4773-86ff-4fce12894053&sktid=5d015ef3-f36c-4a23-a2c2-ec3b6290472a&skt=2024-10-04T10%3A46%3A59Z&ske=2024-10-04T11%3A06%3A59Z&sks=b&skv=2024-08-04&sr=c&sp=r&sig=dsu0EqRCZxIOi1MH%2FIJCg%2BcpNg96OOawWkwAFP39Lac%3D' />
        </>
    )
}

export default Home;