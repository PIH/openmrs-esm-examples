import { getAsyncLifecycle, defineConfigSchema, registerBreadcrumbs } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';

const moduleName = '@pih/esm-example-app';
const options = {
  featureName: 'pih-example-app',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

export const root = getAsyncLifecycle(() => import('./root.component'), options);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
  registerBreadcrumbs([]);
}
