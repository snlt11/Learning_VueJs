const app = Vue.createApp({
  // template: "<h2>add template</h2>"
  data() {
    return {
      books: [
        {
          name: "Peaceful Mind",
          type: "peace",
          brand: "AAA",
        },
        {
          name: "two",
          type: "two",
          brand: "BBB",
        },
        {
          name: "three",
          type: "three",
          brand: "CCC",
        },
        {
          name: "four",
          type: "four",
          brand: "DDD",
        },
      ],
      showBook: true,
      link: "http://www.google.com"
    };
  },
  methods: {
    IncreaseAge(age) {
      this.age++;
    },
    mouseOverHandler(e){
      console.log("Mouse Over is working",e.type);
    },
    mouseLeaveHandler(event,data){
      console.log("Mouse Leave is working",event.type,data);
    },
    doubleClickHandler(){
      console.log("Double Click is working");
    }
  },
});
app.mount("#app");
