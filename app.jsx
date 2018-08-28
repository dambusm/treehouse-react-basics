const PLAYERS = [
  {
     name: "Foo",
    score: 432,
    id: 1,
  },
  {
    name: "Bar",
    score: 3222,
    id: 2,
  }
]

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.initialScore
    }


  }

  propTypes: {
    initialScore: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <div className="counter-score">{this.state.score}</div>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    )
  }

  incrementScore = (e) => {
    this.setState({
      score: (this.state.score + 1)
    })
  }

  decrementScore = (e) => {
    this.setState({
      score: (this.state.score - 1)
    })
  }
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">{props.name}</div>
      <div className="player-score">
        <Counter initialScore={props.score}/>
      </div>
    </div>
  )
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />

      <div className="players">
        {props.players.map((player) => {
          return <Player name={player.name} score={player.score} key={player.id} />
        })}
      </div>
    </div>
  )
}

Application.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
}

Application.defaultProps = {
  title: "fdsfa"
}

ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));