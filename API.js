import { Alert } from "react-native"

export default API = {
    async fetchObjects () {
        try{
            let response = await fetch("https://qr.st-ing.com/objects",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    verifyHash:"xh3tXnlHIJr+kd9c+gZdu7mssLgFBcRYqkJtbBf1phU="
                })
            });
            let objects = await response.json();
            console.log(objects.array);
            return objects;
        }catch(e){
            console.log(e)
            let textError = error.toString();
            Alert.alert("Ошибка",textError);
        }
    }
}
