async function fetchImagesArr(prompt){
    // URL
    const apiUrl = `https://api.openai.com/v1/images/generations`;
    // API Key
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

    const requestHeaders = {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${apiKey}`
    };
    
    //Number of Elements
    const requestBody = {
        // prompt
        prompt,
        n: 4,
        size: "256x256",
    };

    //Browser -> To mnake a request to the server
    console.log("Make the request with API key");
     const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: requestHeaders,
    });
    const data = await response.json();
    console.log("Got the result");
    return data.data;

}

export default fetchImagesArr;