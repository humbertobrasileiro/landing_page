import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quibusdam nihil cupiditate nobis! Natus ipsa sunt nulla, molestiae
    quis amet, hic molestias voluptatem nobis, saepe aspernatur dignissimos.
    Nulla ipsa odit quibusdam.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
