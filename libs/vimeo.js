const Vimeo = require('vimeo').Vimeo;

const USER_ID = '85777322';
const CLIENT_ID = '18d7751241686e095b20a5281ce0c5f5aeca998a';
const CLIENT_SECRET = '93q29PaXwS2Vik0trSAjCBHAAGZJ2BFLAEo3ht1d1m7pMYl3STcYsvVRwJM2leiIMjrNurBaiEuuKyJ+UAGyS0yJVWg0XYnL6t/6+5qUQl9uAFf184MZslqZdBMvp7tK';
const ACCESS_TOKEN = '2ecd125f379a3608632329ed92088ae9';

const client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

function getVideos(){
  client.request({
    method: 'GET',
    path: '/users/'+ USER_ID + '/videos',
    direction: 'asc',
    filter: 'embeddable'
  });
}


module.exports = getVideos();
