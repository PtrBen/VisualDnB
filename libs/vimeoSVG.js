const { Vimeo } = require('vimeo');

const USER_ID = '85777322';
const CLIENT_ID = '18d7751241686e095b20a5281ce0c5f5aeca998a';
const CLIENT_SECRET = '93q29PaXwS2Vik0trSAjCBHAAGZJ2BFLAEo3ht1d1m7pMYl3STcYsvVRwJM2leiIMjrNurBaiEuuKyJ+UAGyS0yJVWg0XYnL6t/6+5qUQl9uAFf184MZslqZdBMvp7tK';
const ACCESS_TOKEN = '2ecd125f379a3608632329ed92088ae9';

const client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

const formatVideoData = (data = []) => data.map(
  ({ uri, pictures: { sizes } }) => ({
    id: uri.split('/').pop(),
    pictures: {
      thumbnail: sizes[3].link,
      full: sizes[6].link
    }
  })
)

const formatAlbumData = (data = []) => data.map(
  ({ uri, pictures: { sizes } }) => ({
    id: uri.split('/').pop(),
    pictures: {
      thumbnail: sizes[3].link,
      full: sizes[6].link
    }
  })
)

const request = (params) => new Promise((resolve, reject) => {
  client.request(params, (error, body = {}) => {
    if (error) {
      return reject(error);
    }

    resolve(body);
  });
});

module.exports = {
  getVideos: async (params = {}) => {
    const body = await request({
      path: `/users/${USER_ID}/videos`,
      direction: 'asc',
      filter: 'embeddable',
      sort: 'alphabetical',
      weak_search: true,
      query: {
        fields: 'uri, name, pictures'
      },
      ...params
    });

    // return formatVideoData(body.data);
  }
  // ,

  // getAlbums: async (params = {}) => {
  //   const body = await request({
  //     path: `/users/${USER_ID}/albums`,
  //     direction: 'asc',
  //     sort: 'alphabetical',
  //     query: {
  //       fields: 'uri, name, pictures'
  //     },
  //     ...params
  //   })
  //
  //   return formatAlbumData(body.data);
  // },
  //
  // getAlbum: async ({ id, ...params } = {}) => {
  //   const body = await request({
  //     path: `/users/${USER_ID}/albums/${id}`,
  //     direction: 'asc',
  //     sort: 'alphabetical',
  //     query: {
  //       fields: 'uri, name, pictures'
  //     },
  //     ...params
  //   })
  //
  //   return body;
  // }
}
