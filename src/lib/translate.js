const translationObj = {
    'confirmed': 'Confirmados',
    'cases': 'Confirmados',
    'deaths': 'Mortes',
    'refuses': 'Descartados',
    'recovered': 'Recuperados'
}

export function translate (originalName) {
    return translationObj[originalName];
}
