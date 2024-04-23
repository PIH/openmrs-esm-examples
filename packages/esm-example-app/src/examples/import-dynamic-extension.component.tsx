import React, { useEffect, useState } from 'react';
import { importDynamic } from '@openmrs/esm-framework/src/internal';
import Parcel from 'single-spa-react/parcel';

/**
 * This component demonstrates how one would import a component from another module using importDynamic
 * In this case, the module needs to be added to the peer and dev dependencies in package.json ?
 * This leverages module federation to access the dependent component, in a situation where that component is exported
 * from index.ts in the other module as an extension
 * i.e. the component is exported with either getSyncLifecycle or getAsyncLifecycle
 */

const ImportDynamicExtension: React.FC = () => {
  const [component, setComponent] = useState();
  useEffect(() => {
    importDynamic('@openmrs/esm-service-queues-app').then((module) => setComponent(module.activeVisitsTable));
  }, []);
  return component && <Parcel config={component} />;
};

export default ImportDynamicExtension;
