/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { DatePicker } from '@atlaskit/datetime-picker';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <div style={{ width: '100%' }}>
        <div style={{ width: '150px', float: 'right' }}>
          <DatePicker />
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ width: '150px', float: 'left' }}>
          <DatePicker />
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ width: '150px', float: 'center' }}>
          <DatePicker />
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ width: '150px', float: 'left' }}>
          <DatePicker />
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ width: '150px', float: 'right' }}>
          <DatePicker />
        </div>
      </div>
      <div style={{ width: '100%', height: '500px', backgroundColor: 'beige' }}>
        Empty Space
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ width: '150px', float: 'right' }}>
          <DatePicker />
        </div>
      </div>

      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
