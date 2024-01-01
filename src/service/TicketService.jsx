import axios from "axios";

const TICKET_REST_API_URL = 'http://localhost:8080/tickets/get';

class TicketService {
    getTicketService() {
        return axios.get(TICKET_REST_API_URL);
    }
}

export default new TicketService();