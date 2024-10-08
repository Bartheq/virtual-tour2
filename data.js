var APP_DATA = {
  "scenes": [
    {
      "id": "0-korytarz",
      "name": "Korytarz",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -1.6225926900807686,
        "pitch": 0.6260666843760845,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.758246277080369,
          "pitch": 1.2038142645977672,
          "rotation": 0,
          "target": "1-azienka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-azienka",
      "name": "Łazienka",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.509211090888696,
          "pitch": 1.0395326931933013,
          "rotation": 6.283185307179586,
          "target": "0-korytarz"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
