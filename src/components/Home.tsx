import { withHeroId } from '../hoc/withHeroId'
import { navItems } from '../utils/constants'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import Hero from './Hero'

const Home = () => {

    return (
        <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    )
}

export default withHeroId(Home, navItems[0].route)