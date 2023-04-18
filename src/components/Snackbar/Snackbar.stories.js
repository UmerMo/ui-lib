import Snackbar from '.';

export default {
  title: 'Example/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
};
export const Success = {
  args: {
    type: 'success',
    children: 'success message',
  },
};

export const Warning = {
  args: {
    type: 'warning',
    children: 'warning message',
  },
};

export const Error = {
  args: {
    type: 'error',
    children: 'error message',
  },
};

export const Info = {
  args: {
    type: 'info',
    children: 'info message',
  },
};
