import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react';

class BaseLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div id='main-section'>
        <Grid id='main-grid' stackable columns={2}>
          <Grid.Column id='sidebar-col' width={2}>
            <NavLink style={{ border: 'none' }} to='/'>
              <Button className='btn'>lukezsmith</Button>
            </NavLink>
            <ul id='navlinks'>
              <li>
                <NavLink to='/'>Posts</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/projects'>Projects</NavLink>
              </li>
              <li className='hide-mobile'>
                <NavLink to='/bookshelf'>Bookshelf</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
            <p id='categories-header'>Things that can be found on this site:</p>
            <ul className='categories'>
              <li>
                Development-related content:{' '}
                <b>
                  <NavLink to='/tag/development'>#development</NavLink>
                </b>
              </li>

              <li>
                All things books:{' '}
                <b>
                  <NavLink to='/tag/books'>#books</NavLink>
                </b>
              </li>
              
              <li>
                Random thoughts and ideas I have:{' '}
                <b>
                  <NavLink to='/tag/thoughts'>#thoughts</NavLink>
                </b>
              </li>

              <li>
                Photography and GAN creations:{' '}
                <b>
                  <NavLink to='/tag/art'>#art</NavLink>
                </b>
              </li>

              <li>
                For occasional updates, here's my{' '}
                <b>
                  <a href='http://eepurl.com/gb_zzf'>newsletter</a>
                </b>
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column id='content-col' width={13}>
            {children}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]).isRequired
};

export default BaseLayout;
