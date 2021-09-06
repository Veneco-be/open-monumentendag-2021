function getPopupContent(feature, popTitle) {
	const props = feature.properties;
	let content = '';

	switch (popTitle) {
		case '':
			content = `<h3>Open Monumentendag 2021: ${props.name}</h3>
            <p>Afstand: ${props.afstand} km</p>`;
			break;
		case ' ':
			content = `
				<h3>${props.Omschrijv}</h3>
			`;
			break;
	}

	return content;
}
