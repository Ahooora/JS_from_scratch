# Decision and loop practices

Write a simple javascript code to render a table of catApi response as shown down bellow. Use what ever you know to render the table. Table structure is like:

```txt
| id (as string) | url (as string)                           | image (as string)                                     |
| -------------- | ----------------------------------------- | ----------------------------------------------------- |
| 123            | https://cdn2.thecatapi.com/images/3v7.gif | <img src="https://cdn2.thecatapi.com/images/3v7.gif"> |
```

The **catApi** is

```js
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
```

## Start solving

- Open [index.js](./src/index.js) with code editor you prefer.

## How to run the tests:

- run `npm run start`
