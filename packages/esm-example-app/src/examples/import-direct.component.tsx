import type React from 'react';
import ActiveVisitsTable from '@openmrs/esm-service-queues-app/src/active-visits/active-visits-table.component';
import { openmrsComponentDecorator } from '@openmrs/esm-framework/src/internal';

/**
 * This component demonstrates how one would directly import a component from another module
 * In this case, the module needs to be added to the dependencies in package.json
 * This does not leverage module federation to access the dependent component, but includes it directly in the build
 * This component needs to be returned wrapped in the openmrsComponentDecorator for translation and configuration support
 */

const ImportDirect: React.FC = () => {
  const options = { moduleName: '@openmrs/esm-service-queues-app', featureName: 'active-visits-table' };
  return openmrsComponentDecorator(options)(ActiveVisitsTable) as any;
};

export default ImportDirect;
