import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = function () {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* NavLink in rereact-router-dom v-6 */}
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to={'/welcome'}
              end
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to={'/products'}
              end
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
