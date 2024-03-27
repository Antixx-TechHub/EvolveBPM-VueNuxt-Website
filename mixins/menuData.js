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
          link: "/about-us",
        },
        {
          id: 3,
          hasDropdown: true,
          title: "Service",
          link: "/",
          submenus: [
            { title: "iRev", link: "/irev" },
            { title: "iData", link: "/idata" },
            { title: "iIntel", link: "/ilntel" },
            { title: "iMedia", link: "/imedia" },
          ],
        },
        {
          id: 4,
          hasDropdown: true,
          title: "Products",
          link: "/",
          submenus: [
            { title: "Predictor", link: "/predictor" },
            { title: "lntello", link: "/intello" },
            { title: "Connect Metrics", link: "/connect-metrics" },
            { title: "Profile Forge", link: "/profile-forge" },
            { title: "Innovator", link: "/inovator" },
          ],
        },
        {
          id: 5,
          hasDropdown: true,
          title: "Resources",
          link: "/",
          submenus: [
            { title: "Blogs", link: "/blogs" },
            { title: "Case Studies", link: "/case-studies" },
          ],
        },
        {
          id: 6,
          hasDropdown: true,
          title: "Company",
          link: "/",
          submenus: [
            { title: "Careers", link: "/job" },
            { title: "Our Team", link: "/team" },
            { title: "FAQ's", link: "/faq" },
          ],
        },
        {
          id: 7,
          hasDropdown: true,
          title: "Contact Us",
          link: "/contact-us",
        },
      ],
    };
  },
};
