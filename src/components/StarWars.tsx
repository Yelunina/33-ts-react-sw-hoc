import style from '../css_modules/farGalaxy.module.css';
import { withHeroId } from '../hoc/withHeroId';
import { navItems, starWarsInfo } from '../utils/constants';

const StarWars = () => {

  return (
    <div className={style.farGalaxy}>{starWarsInfo}</div>
  )
}

export default withHeroId(StarWars, navItems[2].route)