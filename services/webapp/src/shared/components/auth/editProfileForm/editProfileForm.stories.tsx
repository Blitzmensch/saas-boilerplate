import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';
import { prepareState } from '../../../../mocks/store';
import { userProfileFactory } from '../../../../mocks/factories';
import { ProvidersWrapper } from '../../../utils/testUtils';
import { contentWithLimitedWidth, contentWrapper } from '../../../../theme/size';
import { EditProfileForm } from './editProfileForm.component';

const store = prepareState((state) => {
  state.auth.profile = userProfileFactory();
});

const Container = styled.div`
  ${contentWrapper};
  ${contentWithLimitedWidth};
`;

const Template: Story = (args) => {
  return (
    <ProvidersWrapper context={{ store }}>
      <Container>
        <EditProfileForm {...args} />
      </Container>
    </ProvidersWrapper>
  );
};

export default {
  title: 'Shared/Auth/EditProfileForm',
  component: EditProfileForm,
};

export const Default = Template.bind({});
