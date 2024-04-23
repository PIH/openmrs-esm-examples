import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './root.css';
import { appPath } from './constants';
import Wrapper from './page-wrapper.component';

export default function Root() {
  return (
    <div className={`${styles.ovconstantserflowAuto}`}>
      <BrowserRouter basename={appPath}>
        <Routes>
          <Route path="/" element={<div>PIH ESM Legacy App</div>} />
          <Route
            path="/active-visits"
            element={<Wrapper path={'/pihcore/reports/activeVisitsList.page?app=pih.app.activeVisits'} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
