# @pih/esm-example-app

App for providing examples and proof of concept designs and documentation

## Example patterns

```
  if (statusConfig.iconComponent) {
    const extensionSlotName = 'queue-status-icon-' + statusConfig.iconComponent;
    const iconExtensionSlot = useConnectedExtensions(extensionSlotName);
    if (iconExtensionSlot && iconExtensionSlot.length > 0) {
      return <ExtensionSlot name={extensionSlotName} />
    }
    if (statusConfig.iconComponent === 'InProgress') {
      return <InProgress size={16} />;
    }
    if (statusConfig.iconComponent === 'Group') {
      return <Group size={16} />;
    }
  }
  return null;
```
