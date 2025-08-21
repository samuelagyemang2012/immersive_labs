var APP_DATA = {
  "scenes": [
    {
      "id": "0-alley",
      "name": "Alley",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.9090616762452113,
        "pitch": -0.21102137562595402,
        "fov": 1.3248986771387785
      },
      "linkHotspots": [
        {
          "yaw": -1.4189218332714955,
          "pitch": -0.021700714054539105,
          "rotation": 12.566370614359176,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4065827769959718,
          "pitch": -0.16493107467675117,
          "title": "View Entrance",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "St. Francis Cathedral",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
