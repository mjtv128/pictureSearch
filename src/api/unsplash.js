import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID de930340486c6e95625ca02bfb041606f72544ad7bb0b4115678a25aa8814f5c"
    }
})

