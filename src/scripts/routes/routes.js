import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
import StoryDetailPage from '../pages/story-detail/story-detail-page';
import NewPage from '../pages/new/new-page';
import BookmarkPage from '../pages/bookmark/bookmark-page';
import NotFoundPage from '../pages/not-found/not-found-page';
import { checkAuthenticatedRoute, checkUnauthenticatedRouteOnly } from '../utils/auth';

const routes = {
  '/': () => checkAuthenticatedRoute(new HomePage()),
  '/about': () => checkAuthenticatedRoute(new AboutPage()),
  '/new': () => checkAuthenticatedRoute(new NewPage()),
  '/stories/:id': () => checkAuthenticatedRoute(new StoryDetailPage()),

  '/login': () => checkUnauthenticatedRouteOnly(new LoginPage()),
  '/register': () => checkUnauthenticatedRouteOnly(new RegisterPage()),
  '/bookmark': () => checkAuthenticatedRoute(new BookmarkPage()),
  '/not-found': () => new NotFoundPage(),
};

export default routes;
