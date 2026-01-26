//hello callback
    //här tas det emot callback funktion som parameter
    const helloCallback = (callback: (message: string) => void): void => {
        callback(`hello from callback!`) //ropar på callbacken och skickar med en sträng som argument
    };
    //här använder jag funktionen och skickar in en callback
    helloCallback((message) => {
        console.log(message)
    });