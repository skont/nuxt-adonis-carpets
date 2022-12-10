import axios from 'axios';

export default async function handler(req, res) {

  const result = await axios('http://192.168.1.14:4000/api/v1/Ping');
//console.log(result.data)

//   const r = result.data.map((item)=>({
//     version: item.version,
//      }) 
//   )

const r = {
  version: result.data.version,
  startUp: result.data.startUp,
  numberOfRequests:result.data.numberOfRequests
}

  res.status(200).json(r)
}
