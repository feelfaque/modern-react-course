import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XDCLrg61cXf0sG_zOONR3KZ1IFI59eM_LjEIueu1UqE'
    }
})