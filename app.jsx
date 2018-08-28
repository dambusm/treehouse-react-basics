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

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={function () { props.onChange(-1) }}> - </button>
      <div className="counter-score">{props.score}</div>
      <button className="counter-action increment" onClick={function () { props.onChange(+1) }}> + </button>
    </div>
  )
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">{props.name}</div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  )
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired
}

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers,
    };
  }

  static propTypes = {
    title: PropTypes.string,
    initialPlayers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }

  static defaultProps = {
    title: "fdsfa"
  }

  onScoreChange = (index, delta) => {
    console.log('on score chang', index, delta)
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />
        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player
                onScoreChange={function (delta) {
                  { this.onScoreChange(index, delta) }
                }}
                name={player.name}
                score={player.score}
                key={player.id} />
            );
          })}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Application initialPlayers={PLAYERS} />, document.getElementById('container'));