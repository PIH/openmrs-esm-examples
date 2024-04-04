import { getAsyncLifecycle, defineConfigSchema, registerBreadcrumbs } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';

const moduleName = '@pih/esm-legacy-app';
const options = {
  featureName: 'pih-legacy-app',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

export const root = getAsyncLifecycle(() => import('./root.component'), options);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
  registerBreadcrumbs([]);
}
