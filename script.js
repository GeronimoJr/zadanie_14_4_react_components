var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    poster: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/bd/7xmtxRc9nQnCuWINuTT4SMP5NJc.jpg/revision/latest/scale-to-width-down/333?cb=20130803164345'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
  },
  {
  	id: 3,
    title: 'Blow',
    desc: 'Film o przemytniku',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/81z01NLruAL._RI_.jpg'
  },
  {
  	id: 4,
    title: 'Ojciec Chrzestny',
    desc: 'Film o rodzinie z NY',
    poster: 'https://fontmeme.com/images/The-Godfather-Poster.jpg'
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('li', {key: this.props.movie.id},
          React.createElement(MovieTitle, {title: this.props.movie.title}),
          React.createElement(Description, {desc: this.props.movie.desc}),
          React.createElement(MovieImage, {img: this.props.movie.poster})
        )
      )
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
});

var Description = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});

var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('img', {src: this.props.img})
    )
  }
});

var moviesElements = movies.map(function(movie, movie_id) {
  return (
    React.createElement(Movie, {movie: movie, key: movie_id})
    )
});

var MovieList = React.createClass({
  render: function() {
    return (
      React.createElement('ul', {}, moviesElements)
      )
  }
});

var element = 
  React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
    );

ReactDOM.render(element, document.getElementById('app'));