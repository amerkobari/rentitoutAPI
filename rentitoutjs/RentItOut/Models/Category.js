// controllers/distanceController.js

// Haversine formula to calculate distance between two latitude/longitude points
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in kilometers
}

exports.getDistance = (req, res) => {
    const { lat1, lon1, lat2, lon2 } = req.body;

    if (!lat1 || !lon1 || !lat2 || !lon2) {
        return res.status(400).json({ error: 'Please provide lat1, lon1, lat2, and lon2.' });
    }

    const distance = calculateDistance(lat1, lon1, lat2, lon2);
    res.status(200).json({ distance: distance.toFixed(2) }); // Return distance in kilometers, rounded to two decimal places
};
