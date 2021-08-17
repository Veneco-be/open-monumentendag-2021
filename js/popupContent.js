function getPopupContent(feature, popTitle) {
	const props = feature.properties;
	let content = '';
	let content2 = '';

	switch (popTitle) {
		case '':
			content = `<h3>Open Monumentendag 2021: ${props.name}</h3>
            <p>Afstand: ${props.afstand} km</p>`;
			break;
		case ' ':
			content2 = `<p>${props.Omschrijv}</p>`;
			break;
	}

	return `<h3>${popTitle}${content2}</h3>${content}`;
}