/* eslint-disable prettier/prettier */
import React from "react";

function AboutView() {
  return (
    <div id="about-section">
      <h1>About me</h1>

      <p>
        Hi there! My name is Luke. I'm a Software Engineer.
      </p>
      <p>
        The thing I care about most is building interesting things that people find useful.
        <br/> 
        Currently, I'm building <a target="_blank" href="https://alertbnb.com">Alertbnb</a>, 
        a real-time alert and listing suite for Airbnb 
        that lets you setup price and availability alerts for listings.
      </p>

      <p>
        When I'm not building things or watching space launches I like to find
        interesting things to think about. I usually find these through books,
        music and art.
      </p>

      <div>
        <h3>Main interests</h3>
        <ul className="about-list">
          <li>Building things</li>
          <li>Books</li>
          <li>Space Exploration</li>
          <li>The future of information creation and discovery</li>
          <li>Online communities/institutions for fostering innovation </li>
          <li>Autodidactism</li>
        </ul>
      </div>

      <div>
        <h3>Favourite books</h3>
        <p>
          I love books and always like seeing what people are reading, so here's
          a list of my favourites.
          <br />
          You can also find a more comprehensive list on my{" "}
          <a href="https://www.goodreads.com/lukezsmith">Goodreads</a>.
        </p>
        <ul className="about-list">
          <li>
            <a
              className="book_a_tag"
              href="https://www.amazon.co.uk/dp/0316743003"
            >
              Skunk Works
            </a>
            : This book offers an exciting account of working in the aerospace industry and the pursuit of engineering excellence. 
          </li>
          <li>
            <a
              className="book_a_tag"
              href="https://www.amazon.co.uk/dp/B08CVTT36C"
            >
              The Case For Space
            </a>
            : This book is extremely informative yet accessible. Covers most modern arguments against space exploration as well as some of the more outlandish Sci-Fi concepts.
          </li>
          <li>
            <a
              className="book_a_tag"
              href="https://www.amazon.co.uk/Hackers-Heroes-Computer-Revolution-Anniversary-ebook/dp/B003PDMKIY"
            >
              Hackers
            </a>
            : The best book I have read that distills the beauty and excitement
            of innovation and the communities that foster it.
          </li>
          <li>
            <a
              className="book_a_tag"
              href="https://www.amazon.co.uk/dp/B0845W45HN"
            >
              The Martian
            </a>
            : Obligatory Space Exploration Sci-Fi.
          </li>
          <li>
            <a
              className="book_a_tag"
              href="https://www.amazon.co.uk/Snow-Crash-Neal-Stephenson/dp/0241953189"
            >
              Snow Crash
            </a>
            : This book had me dreaming about boundless online worlds and
            imposed on me the capabilities of technology.
          </li>
          <li>
            <a
              className="book_a_tag"
              href="https://www.amazon.co.uk/Brothers-Karamazov-Fyodor-Dostoevsky/dp/0099922800"
            >
              The Brother's Karamazov
            </a>
            : One of the only classics to actually live up to the title. Offers
            a crash course of life in just ~800 pages.
          </li>
          <li>
            <a
              className="book_a_tag"
              href="https://www.amazon.co.uk/Siddhartha-Hermann-Hesse/dp/0141189576"
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
