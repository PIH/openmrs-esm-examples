import type React from 'react';
import { useEffect, useState } from 'react';
import { importDynamic, openmrsComponentDecorator } from '@openmrs/esm-framework/src/internal';

/**
 * This component demonstrates how one would import a component from another module using importDynamic
 * In this case, the module needs to be added to the peer and dev dependencies in package.json ?
 * This leverages module federation to access the dependent component, in a situation where that component is exported
 * from index.ts in the other module, but where this export is not an extension
 * i.e. the component is not exported with either getSyncLifecycle or getAsyncLifecycle
 */

const ImportDynamicComponent: React.FC = () => {
  const options = { moduleName: '@openmrs/esm-service-queues-app', featureName: 'active-visits-table' };
  const [component, setComponent] = useState();
  useEffect(() => {
    importDynamic('@openmrs/esm-service-queues-app').then((module) => setComponent(module.activeVisitsTable));
  }, []);
  return component && openmrsComponentDecorator(options)(component);
};

export default ImportDynamicComponent;
