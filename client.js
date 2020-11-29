const cote = require('cote');

// const client = new cote.Requester({name:'Client'});
const requester = new cote.Requester({name : 'currency conversion requester', key:'conversion'});

// client.send({type:'time'}, (time)=>{
//     console.log(time);
// })

const request = {type: 'convert', from : 'usd', to: 'eur', amount: 100};

requester.send(request, (err, res)=>{
    console.log(res);
});