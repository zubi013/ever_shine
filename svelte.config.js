import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';


const isStatic = process.env.ADAPTER === 'static';
// const isStatic = true;

export default {
  kit: {
    adapter: isStatic
      ? adapterStatic({
          pages: 'build',
          assets: 'build',
          fallback: null,
        })
      : adapterNode(),
    prerender: {
      entries: ['*'], // Prerenderuj wszystkie strony, jeśli używasz adapter-static
    },
  },
};
