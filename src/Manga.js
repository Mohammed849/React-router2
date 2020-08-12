import React from 'react';
class Manga extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      author: '',
    };
  }
  componentDidMount() {
    const url = `http://localhost:3000/api/${this.props.match.params.id}.json`;
    console.log(url);
    console.log(url, 2);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log('Amanga', json);
        const name = json.name;
        const author = json.author;
        this.setState({
          name,
          author,
        });
      });
  }
  render() {
    return <div>{this.props.match.params.id}</div>;
  }
}
export default Manga;
