import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@igniteui-edeilton/react/src'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/edeiltonso.png',
    alt: 'Edeilton Oliveira',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
