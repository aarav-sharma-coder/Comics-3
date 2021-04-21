AFRAME.registerComponent("comic", {
  init: function () {
    this.placesContainer = this.el;
    this.posters()
  },

  posters: function () {
    const thumbNailsRef = [
      {
        id: "winter-soldier",
        title: "Winter Soldier",
        url: "./assets/thumbnails/1.png",
      },
      {
        id: "incredible-hulk",
        title: "Incredible Hulk",
        url: "./assets/thumbnails/2.png",
      },

      {
        id: "avengers",
        title: "Avengers",
        url: "./assets/thumbnails/3.png",
      },
      {
        id: "superman",
        title: "Superman",
        url: "./assets/thumbnails/4.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = -5;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id)
      
      // Thumbnail Element
      const thumbnailEl = this.createThumbnail(item)
      borderEl.appendChild(thumbnailEl);
     
      // Title Text Element
      const titleEl = this.createTitle(position,item)
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
      
    }
  },
  createBorder: function(position,id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("position", position)
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 24,
      height: 41.5
    });
    entityEl.setAttribute("cursor-listener", {});
    entityEl.setAttribute("material",{
      color:"black",
      opacity:1
    })
    return entityEl
  },
  createThumbnail: function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("material",{src: item.url})
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40
    });
    entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });

    return entityEl
  },
  createTitle: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 50,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.z = 0.1
    elPosition.y = 25;
    elPosition.x= 0
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
});
