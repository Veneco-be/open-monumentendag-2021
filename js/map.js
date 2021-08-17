(async () => {
	const osmap = L.tileLayer(
		'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
		{ 
			attribution:'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>, &copy; <a href="https://openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 20
		 }
	);

	const map = L.map('map', {
		center: [51.0, 3.58],
		zoom: 12.4,
		layers: [osmap],
	});

	const files = [
		{ filename: 'routes', color: 'red', title: 'Fietsroute', popTitle: ''},
		{ filename: 'stopplaatsen', title: 'Locatie', popTitle: ' '},
	];

	function onEachFeatureWrapper(popTitle) {
		return function onEachFeature(feature, layer) {
			layer.bindPopup(getPopupContent(feature, popTitle));
		};
	}

	L.Icon.Default.prototype.options.iconSize=[13,20]
	L.Icon.Default.prototype.options.iconAnchor=[10,20]
	L.Icon.Default.prototype.options.shadowSize=[30,20]
	L.Icon.Default.prototype.options.shadowAnchor=[10,20]

	const getData = async () => {
		files.forEach(async (file) => {
			const res = await fetch(`data/${file.filename}.geojson`);

			const options = {
				style:
						{ color: file.color, weight: 2},
				onEachFeature: onEachFeatureWrapper(file.popTitle),
			};

				L.geoJSON(await res.json(), options).addTo(map) 	
			
		});
	};
	await getData();
})();
