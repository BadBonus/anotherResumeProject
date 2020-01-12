const __userInfo = "https://api.github.com/users/";
// http://photon.komoot.de/api/?q=minsk&limit=1
const __country = "http://photon.komoot.de/api/?q="

class mainService {

    async getUser(user) {
        const res = await fetch(__userInfo+user);
        if(!res.ok)
        {
            // throw new Error(`Could not fetch ${__userInfo+user} , received ${res.status}`)
            return "error"
        }
        else
        {
            let resModif = await res.json();

            if(resModif.location ==='' && resModif.location === undefined)
            {
                return resModif;
            }
            else
            {
                const countryQuery = await fetch(__country+resModif.location+'&limit=1');
                if(!countryQuery.ok)
                {
                    resModif.country = 'no data';
                }
                else
                {
                    const country = await countryQuery.json();
                    resModif.country = country.features[0].properties.country;
                }
            }
        return resModif;

        }
    }

    async getRepos(user) {
        const res = await fetch(__userInfo+user+'/repos');
        if(!res.ok)
        {
            // throw new Error(`Could not fetch ${__userInfo+user} , received ${res.status}`)
            return "error"
        }

        return await res.json();
    }
}

export default mainService;