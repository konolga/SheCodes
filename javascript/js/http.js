class Http {
    static fetchData(url) {
        return new Promise((resolve, reject)=>{
            const HTTP = new XMLHttpRequest();
            HTTP.open('GET', url);
            HTTP.onreadystatechange = function() {
                if (HTTP.readyState == XMLHttpRequest.DONE
                    && HTTP.status == 200) {
                        const RESPONSE_DATA = Json.parse(HTTP.responseText);
                        resolve();
                    } else if (HTTP.readyState == XMLHttpRequest.DONE) {
                        reject ('Something is wrong');
                    }
            };
            HTTP.send();
        })
    }
}