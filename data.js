  const a = {
      location: {
        feedBack: "#locateFeedback",
        info: {},
        turf: [],
      },
      map: {
        div: "map",
        options: {
          zoomSnap: 1,
          zoomControl: false,
          zoom: 4,
          center: [39.8283, -98.5795],
        },
        fitOptions: {
          padding: [20, 20],
          animate: false,
        },
        zoomOptions: {
          position: "bottomright",
        },
      },
      tiles: {
        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        options: {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
      },
      buttons: {
        locate: {
          id: "#geolocate-ui",
        },
      },
      fences: [],
      geojson: {},
      page: {
        header: "header",
        footer: "footer",
      },
    };