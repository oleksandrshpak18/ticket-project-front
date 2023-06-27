const connections = {
    get_all_performers: 'https://localhost:7020/api/Performer/get-all',
    get_performer_by_id: 'https://localhost:7020/api/Performer/get-by-id?id=',
    get_performer_by_title: 'https://localhost:7020/api/Performer/get-by-title?title=',
    get_all_venues: 'https://localhost:7020/api/Venue/get-all',
    get_venue_by_id: 'https://localhost:7020/api/Venue/get-by-id?id=',
    get_all_events: 'https://localhost:7020/api/Event/get-all',
    get_events_by_performer_id: 'https://localhost:7020/api/Event/get-by-performer-id?id=',
    get_events_by_venue_id: 'https://localhost:7020/api/Event/get-by-venue-id?id=',
    get_event_by_id: 'https://localhost:7020/api/Event/get-by-id?id=',
    get_sold_tickets_by_event_id: 'https://localhost:7020/api/Ticket/get-sold-by-event-id?id=',
    post_is_ticket_available: 'https://localhost:7020/api/Ticket/is-ticket-availble',
    post_add_order: 'https://localhost:7020/api/Order'
}

export {connections}