// RentItOut/models/mapboxModel.js
const axios = require('axios');

const calculateDistance = async (start, end) => {
    try {
        const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[1]},${start[0]};${end[1]},${end[0]}`;
        const response = await axios.get(url, {
            params: {
                access_token: process.env.MAPBOX_API_KEY,
                geometries: 'geojson', // Optional: if you want to get route geometry
                overview: 'simplified' // Optional: simplified or full route data
            }
        });

        // Extract distance in meters from the response
        if (response.data && response.data.routes.length > 0) {
            const distance = response.data.routes[0].distance;
            return distance; // Distance in meters
        } else {
            throw new Error("No routes found in the response");
        }
    } catch (error) {
        console.error("Error calculating distance:", error.message);
        throw new Error("Error calculating distance");
    }
};

module.exports = {
    calculateDistance
};
