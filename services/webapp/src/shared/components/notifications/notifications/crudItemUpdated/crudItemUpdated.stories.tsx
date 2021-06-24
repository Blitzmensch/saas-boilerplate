import React from 'react';
import { Story } from '@storybook/react';

import { NotificationTypes } from '../../notifications.types';
import { withRouter } from '../../../../../../.storybook/decorators';
import { CrudItemUpdated, CrudItemUpdatedProps } from './crudItemUpdated.component';

const Template: Story<CrudItemUpdatedProps> = (args) => {
  return <CrudItemUpdated {...args} />;
};

export default {
  title: 'Notifications/CrudItemUpdated',
  component: CrudItemUpdated,
  decorators: [withRouter()],
};

export const Default = Template.bind({});
Default.args = {
  type: NotificationTypes.CRUD_ITEM_UPDATED,
  readAt: null,
  createdAt: '2021-06-17T11:45:33',
  id: 'mock-uuid',
  data: {
    id: 'data-mock-uuid',
    user: 'example@example.com',
    name: 'Lorem ipsum',
  },
};