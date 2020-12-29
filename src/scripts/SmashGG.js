function Request(lan, miles, location) {
   let key = process.env.VUE_APP_SMASHGG_API

   let online = false;
   if (lan.includes('online')) {
      online = true;
   }

   let coordinates = location.lat + "," + location.long;

   let radius = "";
   if (miles.includes("u")) {
      radius = "2800mi";
   }
   else {
      radius = miles + "mi";
   }

   let query = `query TournamentsByLocation($coordinates: String!, $radius: String!, $online: Boolean) {
      tournaments(query: {
        filter: {
          location: {
            distanceFrom: $coordinates,
            distance: $radius
          },
          past: false,
          videogameIds: [ 1 ],
          hasOnlineEvents: $online
        }
      }) {
        nodes {
          id
          name
          startAt
          venueAddress
          images(type: "profile") {
            url
          }
          slug
        }
      }
    }`

    return fetch('https://api.smash.gg/gql/alpha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + key,
      },
      body: JSON.stringify({
        query,
        variables: { 
           coordinates, radius, online
        },
      })
    })
   .then(r => r.json());
}

export default Request
export { Request }