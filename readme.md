# Amalgama
Debate webapp where to place your opinion regarding controversial topics. It has been developed using Node.js (express) and Mongodb in the backend and page.js in the front.

## About
Amalgama tries to offer a meeting point for free-thinkers where to gather opinions and place their owns regarding current affairs and controversial topics. When entering in a certain post, it is offered a few lines explaining the nature of the post. Secondly, a variety of links are provided where the user can gather opinions from mass-media and independent opinion leaders, trying to cover all the possible positions. Third, the user can read some other users opinions, separated in two columns: those who agree, and those who disagree.

## Usage
Clone the repository.
```sh
git clone git@github.com:pgarciaegido/amalgama.git
```

Install all the necesary dependencies (remember you need to have Node.js installed).
```sh
npm install
```

In *app.js* you can comment/uncomment the following code if you want to run a local database (need to have mongodb installed) or use an online one.
```javascript
// ******** COMMENT FOR LOCAL DATABASE ***********
app.settings.env = 'production'
```

In *config.js* you can handle your own databases.

You can run the webapp in developer mode:
```sh
npm run dev
```

Or in production mode:
```sh
npm start
```

#### You can try the webapp without cloning [here](https://arcane-retreat-72906.herokuapp.com/)

## Contributing

If you fancy, you can make a pull request and improve the functionality or even the UI of the site.

Any possible issues, you can report them [here](https://github.com/pgarciaegido/amalgama/issues).

## Contact

You can contact me on pgarciaegido@gmail.com :beer:
