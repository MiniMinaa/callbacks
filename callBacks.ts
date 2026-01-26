/*//hello callback
    //här tas det emot callback funktion som parameter
    const helloCallback = (callback: (message: string) => void): void => {
        callback(`hello from callback!`) //ropar på callbacken och skickar med en sträng som argument
    };
    //här använder jag funktionen och skickar in en callback
    helloCallback((message) => {
        console.log(message)
    });

//delayed greeting
//eftersom jag kör setTimeout->anropar callback så finns inget värde att retunera därav "void"
const sayHelloLater = (callback: (message: string) => void): void => {
    setTimeout(() => {
    callback(`hi I'm late`);
    }, 2000);
}
sayHelloLater((message) => {
    console.log(message);
});


//math callback

type printResultFunction = (result: number) => void;

const calculate = (a: number, b: number, callback: printResultFunction): void => {
    const result = a + b;
    callback(result);

};
const printResult = (result: number) => {
    console.log("The result is", result);
}
calculate(45, 23, printResult);

//denna gånger ska den retunera string och inte void för att retunera ett värde
type stringCallback = (message: string) => string;

const toUpperCaseCallback = (message: string, callback: stringCallback): void => { //måste ha med void här för att touppercase retunerar inget.
    const result =callback(message); //sparar resultaten här
    console.log(result);
}
const makeUpperCase = (str: string): string => {
    return str.toUpperCase()
}
toUpperCaseCallback("hej michiel callbacks är väldigt jobbiga:(", makeUpperCase);


//pizza order
type orderStatusFunction = (message: string) => void;

const orderPizza = (orderStatus: orderStatusFunction): void => { //initial function -> orderPizza
    console.log("ordering pizza");
    setTimeout(() => {
        const message = "your pizza is ready!";
        orderStatus(message) //denna function tar in variablen ovanför (message).
    }, 3000);
}
const orderStatus = (message: string): void => {
    console.log(message)
};
orderPizza(orderStatus);
*/

//7, download simulation
type showFileFunction = (fileContent: string) => void

const downloadFile = (url: string, showFile: showFileFunction) => { //detta tar in 2 argument url och showFile. Showfile är callback function.
    console.log("starting download from", url);
    setTimeout(() => {
        const fileContent = `downloaded data from ${url}`;
        showFile(fileContent);
    }, 2000);
};

const showFile = (fileContent: string) => {
    console.log("downloaded content:", fileContent);
};
downloadFile("http://ex.com/file.txt", showFile);
