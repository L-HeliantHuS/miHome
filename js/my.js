var app = new Vue({
  el: "#app",
  data: () => ({
    img_index: 0,
    current_img: "img/big_banner1.jpg",
    img_list: [
        "img/big_banner1.jpg",
        "img/big_banner2.jpg",
        "img/big_banner3.jpg",
        "img/big_banner4.jpg",
        "img/big_banner5.jpg",
    ]
  }),

  methods: {
    nextImage() {
      if ( this.img_index === this.img_list.length - 1 ) {
        this.img_index = 0;
      } else {
        this.img_index += 1;
      }

      // change img
      this.current_img = this.img_list[this.img_index];
    },

    prevImage() {
      if ( this.img_index === 0 ) {
        this.img_index = this.img_list.length - 1;
      } else {
        this.img_index -= 1;
      }

      // change img
      this.current_img = this.img_list[this.img_index];

    }
  },
});

