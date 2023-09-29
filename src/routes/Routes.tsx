import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import { Login, NavigatePage, Registration, StatisticsPage, TestListPage, TestPage } from '../pages'
import { RoutesGuard } from './RoutesGuard'
import { RouterNavigator } from './RouterNavigator'


const routesArr = [
    {
        path: '/',
        component: Login,
        isPrivate: false
    },
    {
        path: '/registration',
        component: Registration,
        isPrivate: false
    },
    {
        path: '/tests',
        component: TestListPage,
        isPrivate: true
    },
    {
        path: '/test/:id',
        component: TestPage,
        isPrivate: true
    },
    {
        path: '/progress',
        component: StatisticsPage,
        isPrivate: true
    }

]

export const Routes = () => {

    return (
        <Router>
            <NavigatePage />
            <RouterNavigator />
            <Switch>
                {routesArr.map((route) => {
                    const Component = route.component
                    return (
                        <Route key={route.path} path={route.path} exact>
                            <RoutesGuard isPrivate={route.isPrivate}>
                                <Component />
                            </RoutesGuard>
                        </Route>
                    )
                })}
            </Switch>
        </Router>
    )
}