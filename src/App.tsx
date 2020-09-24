import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {golfOutline, square, homeOutline} from 'ionicons/icons';
import Home from './pages/tabs/Home';
import TouristAttractionList from './pages/tabs/TouristAttractionList';
import Tab3 from './pages/tabs/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';
import TouristAttractionDetail from "./pages/common/TouristAttractionDetail";

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/touristAttractionDetail/{id}" component={TouristAttractionDetail} />
            </IonRouterOutlet>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/home" component={Home} exact={true} />
                    <Route path="/touristAttractionList" component={TouristAttractionList} exact={true} />
                    <Route path="/tab3" component={Tab3} />
                    {/*<Route path="/" render={() => <Redirect to="/areaList"/>} exact={true} />*/}
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/home">
                        <IonIcon icon={homeOutline}/>
                    </IonTabButton>
                    <IonTabButton tab="touristAttractionList" href="/touristAttractionList">
                        <IonIcon icon={golfOutline}/>
                        {/*<IonLabel>TouristAttractionList</IonLabel>*/}
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/tab3">
                        <IonIcon icon={square}/>
                        <IonLabel>Tab 3</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
