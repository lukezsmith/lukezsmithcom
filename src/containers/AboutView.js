/* eslint-disable prettier/prettier */
import React from 'react';

function AboutView() {
  return (
    <div id='about-section'>
      <h1>About me</h1>

      <div>
        Hi there! My name is Luke. I write code, but I am trying to start
        writing more words. The thing I care about most is human development, so
        I think a lot about building ambitious things and the
        new ways we will live our lives in the future.
      </div>

      <div>
        When I'm not developing things, I'm usually trying to find
        interesting things to think about. I usually find these through books, music and art. I also enjoy dabbling in photography and digital artwork generation through deep learning.
      </div>


      <div>
        <h3>Main interests</h3>
        <ul className='about-list'>
          <li>The future of online communities</li>
          <li>The future of information creation and discovery</li>
          <li>Online communities/institutions for fostering innovation </li>
          <li>The future of online identity</li>
          <li>Autodidactism</li> 
        </ul>
      </div>

      <div>
        <h3>Favourite books</h3>
        <div>
          I love books and always like seeing what people are reading, so here's a list of my favourites.
          <br />
          You can also find a more comprehensive list on my{' '}
          <a href='https://www.goodreads.com/lukezsmith'>Goodreads</a>.
        </div>
        <ul className='about-list'>
          <li>
            <a
              className='book_a_tag'
              href='https://www.amazon.co.uk/Snow-Crash-Neal-Stephenson/dp/0241953189'
            >
              Snow Crash
            </a>
            : The classic that gave birth to the idea of the Metaverse.
          </li>
          <li>
            <a
              className='book_a_tag'
              href='https://www.amazon.co.uk/Hackers-Heroes-Computer-Revolution-Anniversary-ebook/dp/B003PDMKIY'
            >
              Hackers
            </a>
            : The best book I have read that distills the beauty and excitement
            of innovation and the communities that foster it.
          </li>
          <li>
            <a
              className='book_a_tag'
              href='https://www.amazon.co.uk/Brothers-Karamazov-Fyodor-Dostoevsky/dp/0099922800'
            >
              The Brother's Karamazov
            </a>
            : One of the only classics to actually live up to the title. Offers
            a crash course of life in just ~800 pages.
          </li>
          <li>
            <a
              className='book_a_tag'
              href='https://www.amazon.co.uk/Siddhartha-Hermann-Hesse/dp/0141189576'
            >
              Siddhartha
            </a>
            : Beautiful book that changed my mind on a lot of things.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutView;
