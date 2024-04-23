import React from 'react';
import ImportDirectComponent from './examples/import-direct.component';
import ImportDynamicExtension from './examples/import-dynamic-extension.component';

export default function Root() {
  return (
    <div>
      <h2>Import Direct Example</h2>
      <ImportDirectComponent />
      <hr />
      <h2>Import Dynamic Extension Example</h2>
      <ImportDynamicExtension />
    </div>
  );
}
