import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@crema/components/AppAsyncComponent';

const Localization = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Localization')
);
export default AppPage(() => <Localization />);
