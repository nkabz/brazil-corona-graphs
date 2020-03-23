export function getData () {
    return fetch('https://pomber.github.io/covid19/timeseries.json')
        .then(response => response.json())
        .then(data => {
            return data['Brazil'];
        })
}
