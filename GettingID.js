const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
const api = process.env.API_KEY;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});
//CircuitID
xhr.open('GET', 'https://hyprace-api.p.rapidapi.com/v2/circuits?pageNumber=1&pageSize=10');
xhr.setRequestHeader('x-rapidapi-key', api);
xhr.setRequestHeader('x-rapidapi-host', 'hyprace-api.p.rapidapi.com');

xhr.send(data);