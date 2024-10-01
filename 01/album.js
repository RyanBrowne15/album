new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "imagenes/14.jpg",
          img2: "imagenes/3.jpg",
          img3: "imagenes/6.jpg",
          title: "RECUERDOS",
          isOpen: false,
        },
        {
          img1: "imagenes/amor3.jpg",
          img2: "imagenes/16.jpg",
          img3: "imagenes/amor2.jpg",
          title: "LINDA",
          isOpen: false,
        },
        {
          img1: "imagenes/17.jpg",
          img2: "imagenes/amor4.jpg",
          img3: "imagenes/amor.jpg",
          title: "DIVINA",
          isOpen: false,
        },
        {
          img1: "imagenes/amor5.jpg",
          img2: "imagenes/amor7.jpg",
          img3: "imagenes/amor6.jpg",
          title: "HERMOSA",
          isOpen: false,
        },
        {
          img1: "imagenes/23.jpg",
          img2: "imagenes/18.jpg",
          img3: "imagenes/19.jpg",
          title: "CHULA",
          isOpen: false,
        },
        {
          img1: "imagenes/21.jpg",
          img2: "imagenes/amor7.jpg",
          img3: "imagenes/15.jpg",
          title: "PRECIOSA",
          isOpen: false,
        }
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
