/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    {
      type: 'doc',
      id: 'introduction',
      className: 'sidebar-intro',
      customProps: {
        badge: 'material-symbols:brightness-alert-outline-rounded',
      },
    },
    {
      type: 'category',
      label: 'Mods',
      className: 'sidebar-mods',
      collapsed: false,
      link: {
        type: 'generated-index',
        description: '🪛 Additions to and modifications of the vanilla game',
        slug: '/mods',
      },
      items: ['mods/tradepreview', 'mods/compressor', 'mods/chassis', 'mods/utilities'],
      customProps: {
        badge: 'material-symbols:memory',
      },
    },
    {
      type: 'category',
      label: 'Chassis Documentation (OUTDATED)',
      className: 'sidebar-chassis',
      collapsed: false,
      link: {
        type: 'generated-index',
        description: 'Documentation on the Chassis library',
        slug: '/chassis',
      },
      items: ['chassis/premise', 'chassis/installation', 'chassis/blocks', 'chassis/items', 'chassis/configuration', 'chassis/resources'],
      customProps: {
        badge: 'material-symbols:book-2-outline-rounded',
      },
    },
    {
      type: 'category',
      label: 'Modpacks',
      className: 'sidebar-modpacks',
      collapsed: false,
      link: {
        type: 'generated-index',
        description: '📦 Modpacks, hundreds of mods gathered and configured to work with each other',
        slug: '/modpacks',
      },
      items: ['modpacks/evergood', 'modpacks/reforged', 'modpacks/refabricated'],
      customProps: {
        badge: 'material-symbols:package-2-outline',
      }
    },
    {
      type: 'doc',
      id: 'support',
      className: 'sidebar-support',
      customProps: {
        badge: 'material-symbols:heart-plus',
      }
    },
  ],
};

module.exports = sidebars;
