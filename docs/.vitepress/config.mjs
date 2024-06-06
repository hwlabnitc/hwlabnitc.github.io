import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hardware Lab NITC",
  description: "An official hardware lab wesbsite",
  head: [['link', { rel: 'icon', href: '/img/favicon.ico' }]],
  base: '/hwlabnitc.github.io/',
  themeConfig: {
    outline: { level: 'deep' },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Verilog Guide', link: '/Verilog/'},
      { text: 'MIPS Guide', link: '/MIPS/' }
    ],

    search: {
			provider: 'local',
		},

    sidebar: {

      '/MIPS/':[
        {
          text: 'MIPS',
          collapsed: false,
          items: [
            { text: 'MIPS Setup', link: '/MIPS/mips_setup' },
            { text: 'Basics and Procedures', link: '/MIPS/mips_basics&procedures'},
            { text: 'MIPS Instructions and syscall', link: '/MIPS/mips_syscalls&tutorial' },
            { text: 'Integer and Floating point', link: '/MIPS/mips_interger&float' },
            { text: 'MIPS Arrays', link: '/MIPS/mips_array' },
            { text: 'MIPS String', link: '/MIPS/mips_string' },
          ]
        
        }],
    
      '/Verilog':[
      {
        text: 'Verilog', link:'/Verilog/',
        items: [
          { text: 'Main Documentaion', link: '/Verilog/Intro' },
          { text: 'FSM', link : '/Verilog/fsm/' },
          { text: 'Single Cycle CPU', link : '/Verilog/SingleCycle/' }          
          ]
      }
    ],
  },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hwlabnitc' }
    ],
    footer: {
			copyright: `Copyright © ${new Date().getFullYear()} National Institute of Technology Calicut`,
		},

  }
})