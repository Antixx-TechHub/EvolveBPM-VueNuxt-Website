export default {
  data() {
    return {
      menuData: [
        {
          id: 1,
          hasDropdown: true,
          title: "Home",
          link: "/",
        },
        {
          id: 2,
          title: "About Us",
          megaMenu: true,
          link: "/",
          // mega_menus: [
          //   {
          //     title: "Widget 1",
          //     link: "#",
          //     submenus: [
          //       { title: "Accordion", link: "/elements-accordion" },
          //       { title: "Blog Posts", link: "/elements-blog-post" },
          //       { title: "Button", link: "/elements-button" },
          //       { title: "Call to Action", link: "/elements-cta" },
          //       { title: "Carousel", link: "/elements-carousel" },
          //       { title: "Clients Logo", link: "/elements-brand" },
          //     ],
          //   },
          //   {
          //     title: "Widget 2",
          //     link: "#",
          //     submenus: [
          //       { title: "Contact Form", link: "/elements-form" },
          //       { title: "Gallery", link: "/elements-gallery" },
          //       { title: "Google Map", link: "/elements-map" },
          //       { title: "Heading", link: "/elements-heading" },
          //       { title: "Icon Box", link: "/elements-iconbox" },
          //       { title: "Instagram Feed", link: "/elements-instagram" },
          //     ],
          //   },
          //   {
          //     title: "Widget 3",
          //     link: "#",
          //     submenus: [
          //       { title: "Parallax", link: "/elements-parallax" },
          //       { title: "Portfolio Video", link: "#" },
          //       { title: "Pricing Table", link: "/elements-pricing" },
          //       { title: "Progress Bar", link: "/elements-skill" },
          //       { title: "Process", link: "/elements-process" },
          //       { title: "Team Member", link: "/elements-team" },
          //     ],
          //   },
          //   {
          //     title: "Widget 4",
          //     link: "#",
          //     submenus: [
          //       { title: "Tabs", link: "/elements-tab" },
          //       { title: "Shop Category", link: "/elements-shop" },
          //       { title: "Testimonial", link: "/elements-testimonial" },
          //       { title: "Social Icons", link: "/elements-social" },
          //       { title: "Subscribe Form", link: "/elements-subscribe" },
          //       { title: "Video", link: "/elements-video" },
          //     ],
          //   },
          // ],
        },
        {
          id: 3,
          hasDropdown: true,
          title: "Service",
          link: "/",
          submenus: [
            { title: "iRev", link: "/" },
            { title: "iData", link: "/" },
            { title: "iIntel", link: "/" },
          ],
        },
        {
          id: 4,
          hasDropdown: true,
          title: "Products",
          link: "/",
          submenus: [
            { title: "Predictor", link: "/" },
            { title: "Innovator", link: "/" },
            { title: "TechBase", link: "/" },
          ],
        },
        {
          id: 5,
          hasDropdown: true,
          title: "Resourcs",
          link: "/",
          submenus: [
            { title: "Blogs", link: "/" },
            { title: "Success Stories", link: "/" },
            { title: "Case Studies", link: "/" },
          ],
        },
        {
          id: 6,
          hasDropdown: true,
          title: "Resourcs",
          link: "/",
          submenus: [
            { title: "Careers", link: "/" },
            { title: "Our Team", link: "/" },
            { title: "Team Details", link: "/" },
            { title: "FAQ's", link: "/" },
          ],
        },
        {
          id: 7,
          hasDropdown: true,
          title: "Contact",
          link: "/",
        },
      ],
    };
  },
};
