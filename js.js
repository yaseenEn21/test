
var app = new Vue({
  el: '#app',
  data: {
    settingSidebarClass: false,
    summurySidebarClass: false,
  },
  methods: {
    settingSidebar: function () {
      if (window.innerWidth < 800) {
        this.settingSidebarClass = !this.settingSidebarClass;
        this.summurySidebarClass = false;
      } else {
        this.settingSidebarClass = !this.settingSidebarClass;
      }
    },
    summurySidebar: function () {
      if (window.innerWidth < 800) {
        this.summurySidebarClass = !this.summurySidebarClass;
        this.settingSidebarClass = false;
      } else {
        this.summurySidebarClass = !this.summurySidebarClass;
      }
    },
  }
});
