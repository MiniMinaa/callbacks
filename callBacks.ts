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
*/
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
