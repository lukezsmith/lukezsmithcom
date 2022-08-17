import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostView from './containers/PostView';
import PostListView from './containers/PostListView';
import ProgrammingPostListView from './containers/ProgrammingPostListView';
import BooksPostListView from './containers/BooksPostListView';
import InternetPostListView from './containers/InternetPostListView';
import ThoughtsPostListView from './containers/ThoughtsPostListView';
import ArtPostListView from './containers/ArtPostListView';
import AboutView from './containers/AboutView';
import ProjectView from './containers/ProjectView';
import ContactView from './containers/ContactView';
import BookshelfView from './containers/BookshelfView';
import NotFoundView from './components/NotFoundView';

const BaseRouter = () => (
  
  <div>
    <Switch>
      <Route exact path='/' component={PostListView}/>
      <Route path='/about/' component={AboutView}/>
      <Route path='/projects/' component={ProjectView}/>
      <Route path='/bookshelf/' component={BookshelfView}/>
      <Route path='/contact/' component={ContactView}/>
      <Route path='/post/:articleSlug/' component={PostView}/>
      <Route exact path='/tag/development/' component={ProgrammingPostListView}/>
      <Route exact path='/tag/books/' component={BooksPostListView}/>
      <Route exact path='/tag/thoughts/' component={ThoughtsPostListView}/>
      <Route exact path='/tag/web3' component={InternetPostListView}/>
      <Route exact path='/tag/art' component={ArtPostListView}/>
      <Route path='/*' component={NotFoundView}/>
    </Switch>
  </div>
);
export default BaseRouter;
