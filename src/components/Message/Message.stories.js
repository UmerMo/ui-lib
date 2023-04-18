import Message from '.';

export default {
  title: 'Example/Message',
  component: Message,
  tags: ['autodocs'],
};

export const Warning = {
  args: {
    kind: 'warning',
    title: 'Sorry something went wrong',
    children: `We can't process your request right now, but we're working on it. Please try again later`,
  },
};
