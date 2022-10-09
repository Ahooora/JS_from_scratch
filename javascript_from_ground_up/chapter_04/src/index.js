/**
 * Render the following catApi response in the html as a table. The table should looks like this
 *
 * | id  | url                                       | image                                                 |
 * | --- | ----------------------------------------- | ----------------------------------------------------- |
 * | 123 | https://cdn2.thecatapi.com/images/3v7.gif | <img src="https://cdn2.thecatapi.com/images/3v7.gif"> |
 */

const catsApi = [
  {
    breeds: [],
    id: '2f9',
    url: 'https://26.media.tumblr.com/tumblr_m3o5vhPKBa1rtuomto1_250.jpg',
    width: 500,
    height: 333,
  },
  {
    breeds: [],
    id: '3h0',
    url: 'https://25.media.tumblr.com/tumblr_m3kg02GkLw1qjc1a7o1_250.jpg',
    width: 900,
    height: 600,
  },
  {
    breeds: [],
    id: '3v7',
    url: 'https://cdn2.thecatapi.com/images/3v7.gif',
    width: 245,
    height: 245,
  },
  {
    breeds: [],
    id: '58l',
    url: 'https://25.media.tumblr.com/tumblr_kop8wzgxHa1qzv5pwo1_250.jpg',
    width: 385,
    height: 500,
  },
  {
    breeds: [],
    id: '9qn',
    url: 'https://24.media.tumblr.com/tumblr_m27vjmHY8Y1qh66wqo1_250.png',
    width: 600,
    height: 800,
  },
  {
    breeds: [],
    id: 'aad',
    url: 'https://24.media.tumblr.com/tumblr_m1vu8mrE0z1qze0hyo1_250.jpg',
    width: 1344,
    height: 1008,
  },
  {
    breeds: [],
    id: 'ae4',
    url: 'https://cdn2.thecatapi.com/images/ae4.gif',
    width: 430,
    height: 242,
  },
  {
    breeds: [],
    id: 'auf',
    url: 'https://25.media.tumblr.com/tumblr_m0v0feUY3X1qzwfgto1_250.png',
    width: 561,
    height: 554,
  },
  {
    breeds: [],
    id: 'dqn',
    url: 'https://25.media.tumblr.com/tumblr_m4f8t9JGy11qejbiro1_250.jpg',
    width: 560,
    height: 480,
  },
];

// Write your code here
// Solution is
// console.log(decrypt({
//   iv: '49aabbf34b41a464073ba1bf58637b05',
//   content: 'db384bd3d29bf271e46ced44b43728ccce962268a89dc210b848732ffc7e310b79d9a4034d0bd68b67b4366e93bfd3d678d8166634f2c28ba66c831c2ea1a32bacadda6d44ef1e1753bddf060e884aebf34a2136ea3f208ea0c3829231104480f5009a8d9788b2bda7bb3b56cccfa3f31cba0a13cbab9e40755b44058d847685c33cddea48c42c48bd0aaf7a54711fcaf7ac3248492d4bc8edce448ca7208b00c79bf12d960574d93ee4e68d1a3444f60556bbac1813d95da99e29c65a32752226d59efedac23b6e77fa9d787203f614d342354270b76516e4079d6edfc639206774c2425d29f5c0a0680f611a6699811791a92e11503f2002512967ed01207f94106b20f153725bef37c975d89408e2e62e6b3670ea508df103cfdc92b3f01bb4411fafcb5cb7e5131954d92e0cc4b7a6834f67b5ff37f40e1967e971f4a41108ffd4e9b1d574496c5b925a88c9c9b9cfc987ad7500e2d158aa468abced55fdc2e91e7460a0d7ee85d8ef5ba1bd40312b17ba817402b6266edf2624bb255bcf938b7a730159530c09a7e8a0570bac9bcf0db89b17613289eba5fe343b1290f4b566c7878dec1083c4c7b2fdd9774032f97d8cf6081b98b476a4a6f6acd4fb8275919801425d9cd46f5cc6f2271be1cdb3bf4160b195af06e6e74eeaedfd3ef1ad0cca80011b9bcf0504adb4d830bcefcb9b9f8a952e0315ae82fab7030f9dce5a410e0ee989b280a38bbdb20a81d6d683d5888a3b0cf5464d45c912c84ffb01084232542dde969bdbc03d4333838d012eefc9bb6a80b3c046a9334dec844e0a686e15980b93361726272151f5b5d0fabadf3233d79c365ddeaf3ae8a201f55c276d3d75e6586873246c85b62ecb2539c7481a1dce284282eab3728c0e84e0d88d1e0de7b033d06dbb96c53f537d6f38add917863c1850d67b6ae0fbbb405c502908796224911e4a2ecb29bf304ea1f487f921eab7bcd6466adc4348d6d67740326e47922c166aa53798c8cfc179b12023350435ec7068564cc9988818ae1db1f8994a279219ecfa692c2b6abcccff5d572797833f195d624ab7cd30fae63a4754e8200579bab648d487b1545e42df21d700290b32728d90b1dd4ad618d0635bfe1c'
// }))


const container = document.querySelector('.container')
const newTable = document.createElement('table')



function createTable(array) {
  result = ''
  for (let i = 0; i < array.length; i++) {
    result += `<tr>
                  <td>${array[i].id}</td>
                  <td>${array[i].url}</td>
                  <td><img src=${array[i].url}></td>
              </tr>`
  }
  return result
}

newTable.innerHTML = createTable(catsApi)
container.appendChild(newTable)