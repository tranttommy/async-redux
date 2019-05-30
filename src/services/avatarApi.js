export default () =>
  fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'poop';
      return json;
    })
    .then(json => json.map(({ _id, photoUrl, name, affiliation }) => ({ _id, photoUrl, name, affiliation })));
