import React from 'react';
import axios from 'axios';

import { Loader } from 'semantic-ui-react';

class BookshelfView extends React.Component {
  state = {
    articles: null
  };

  componentDidMount() {
    const getData = async () => {
      try {
        return await axios.get(
          'https://lukezsmith.herokuapp.com/api-site/books/books/'
        );
      } catch (error) {
        this.setState({ articles: '404' });
      }
      return 0;
    };
    const evalData = async () => {
      const data = await getData();
      if (data !== undefined) {
        this.setState({ articles: data });
      } else {
        this.setState({ articles: '404' });
      }
    };

    evalData();
  }

  render() {
    const { articles } = this.state;
    if (articles === null) {
      return (
        <div>
          <Loader>Loading</Loader>
        </div>
      );
    }

    articles.data.forEach((item, index) => {
      if (item.is_visible === false) {
        articles.data.splice(index, 1);
      }
    });

    let bookHtml = (
      <div id='bookshelf-content'>
          <h1>Bookshelf</h1>
          <p id='lead-text'>
            I love books and find it interesting to know what kinds of books
            people are reading. 
            <br />
            <br />
            
            Once upon a time this page was a list of all of the books I had read that had 
            some impact on me, but updating it was becoming a chore. 
            Instead of a list that will never get updated, you can find every book I've read on my{' '}
            <a href='https://www.goodreads.com/lukezsmith'>
              Goodreads
            </a>
            .
            <br />
            <br />
          </p>
        </div>
    )
    return <div>{bookHtml}</div>;
  }
}
export default BookshelfView;
