import '@testing-library/jest-dom/extend-expect';

jest.mock('@openmrs/esm-framework', () => {
  const originalModule = jest.requireActual('@openmrs/esm-framework');

  return {
    ...originalModule,
    useConfig: jest.fn(() => {
      return {};
    }),
  };
});

window.getOpenmrsSpaBase = () => 'openmrs/spa';
