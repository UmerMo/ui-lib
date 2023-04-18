import ActionCard from '.';

export default {
  title: 'Example/ActionCard',
  component: ActionCard,
  tags: ['autodocs'],
};

export const ActionCardWithDescription = () => (
  <ActionCard>
    <strong>Card title</strong>
    <p>Card description</p>
  </ActionCard>
);
