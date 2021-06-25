import { Switch, Route } from 'react-router-dom'

import WhoAmISection from './sections/WhoAmISection'
import ProjectSection from './sections/ProjectSection'
import SkillsSection from './sections/SkillsSection'


const SectionSwitch = () => {
    return (
        <Switch>
            <Route exact path="/">
                <WhoAmISection />
            </Route>
            <Route path="/projects">
                <ProjectSection />
            </Route>
            <Route path="/skills">
                <SkillsSection />
            </Route>
        </Switch>
    )
}

export default SectionSwitch