(function(){
    var script = {
 "mouseWheelEnabled": true,
 "downloadEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Image_40609A0B_4F73_4A33_41D2_4AE96567D411",
  "this.Image_41CFC562_4F7F_5EEF_41C7_84CD4DBECC4E",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Player",
 "overflow": "visible",
 "width": "100%",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "initialPosition": {
  "yaw": -8.75,
  "class": "PanoramaCameraPosition",
  "pitch": 7.04
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_camera"
},
{
 "label": "7",
 "hfovMin": "120%",
 "id": "panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3",
 "overlays": [
  "this.overlay_3E8837D6_2B82_84EF_4172_74157CE6B7E1",
  "this.overlay_3E126D49_2B82_85E5_41C3_AD929E4F7F3C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E2378592_E907_915C_41E7_3A60B476CBE0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2377E571_3521_18FE_4196_74F386475446_0_t.jpg",
 "id": "album_2377E571_3521_18FE_4196_74F386475446_0",
 "width": 2160,
 "label": "floorplan",
 "image": {
  "levels": [
   {
    "url": "media/album_2377E571_3521_18FE_4196_74F386475446_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2290
},
{
 "label": "15",
 "hfovMin": "120%",
 "id": "panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE",
 "overlays": [
  "this.overlay_26AE762F_305A_B41F_41B1_045AF35B1142",
  "this.overlay_267A8D36_305A_F40E_41C5_17CAFD5348C8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E234DCBE_E907_9744_41BF_134A7CF6C314",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -2.72,
  "class": "PanoramaCameraPosition",
  "pitch": 11.47
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_camera"
},
{
 "duration": 500,
 "id": "FadeOutEffect_22A50512_3521_7823_41C0_2087CBD8BA8E",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_camera"
},
{
 "duration": 1000,
 "thumbnailUrl": "media/album_273EB65B_3523_1822_41A1_A5FA4706D157_4_t.jpg",
 "id": "album_273EB65B_3523_1822_41A1_A5FA4706D157_4",
 "width": 1754,
 "label": "4terrace",
 "image": {
  "levels": [
   {
    "url": "media/album_273EB65B_3523_1822_41A1_A5FA4706D157_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "items": [
  {
   "media": "this.panorama_E2479B17_E904_B144_41E2_3269CC434655",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2479B17_E904_B144_41E2_3269CC434655_camera"
  },
  {
   "media": "this.panorama_E2239DC4_E904_90C4_41E8_C96128336F8E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_camera"
  },
  {
   "media": "this.panorama_E249F703_E907_713D_41E8_EEA26CE99A28",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E249F703_E907_713D_41E8_EEA26CE99A28_camera"
  },
  {
   "media": "this.panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_camera"
  },
  {
   "media": "this.panorama_E2495934_E907_915B_41C2_093936531F2F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2495934_E907_915B_41C2_093936531F2F_camera"
  },
  {
   "media": "this.panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_camera"
  },
  {
   "media": "this.panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_camera"
  },
  {
   "media": "this.panorama_E2378592_E907_915C_41E7_3A60B476CBE0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2378592_E907_915C_41E7_3A60B476CBE0_camera"
  },
  {
   "media": "this.panorama_E2491142_E907_F13C_41E8_C426136FD3AB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2491142_E907_F13C_41E8_C426136FD3AB_camera"
  },
  {
   "media": "this.panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_camera"
  },
  {
   "media": "this.panorama_E24E197B_E907_91CC_41E8_13E5A34832D9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_camera"
  },
  {
   "media": "this.panorama_E237C530_E907_B15B_41C3_B29F41F909A3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E237C530_E907_B15B_41C3_B29F41F909A3_camera"
  },
  {
   "media": "this.panorama_E23510D0_E907_90DB_41D4_DAD645032CF4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_camera"
  },
  {
   "media": "this.panorama_E234DCBE_E907_9744_41BF_134A7CF6C314",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_camera"
  },
  {
   "media": "this.panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_camera"
  },
  {
   "media": "this.panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_camera"
  },
  {
   "media": "this.panorama_E249A0E0_E904_B0FD_4187_DD59D754995E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_camera"
  },
  {
   "media": "this.panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_camera"
  },
  {
   "media": "this.panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_camera"
  },
  {
   "media": "this.panorama_E236A543_E904_F13D_41E8_E98AD677DF5E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_camera"
  },
  {
   "media": "this.panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_camera"
  },
  {
   "media": "this.panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_camera"
  },
  {
   "media": "this.panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_camera"
  },
  {
   "media": "this.panorama_E230C344_E904_91C4_41E0_1731E13A9176",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E230C344_E904_91C4_41E0_1731E13A9176_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "media": "this.album_383B345E_2C27_3FB8_41AC_B1701EB99749",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "media": "this.album_273EB65B_3523_1822_41A1_A5FA4706D157",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "media": "this.album_2377E571_3521_18FE_4196_74F386475446",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 0)",
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "label": "10",
 "hfovMin": "120%",
 "id": "panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA",
 "overlays": [
  "this.overlay_3D2CE541_2BBF_85E5_41C1_980A32B39CC7",
  "this.overlay_3D84821B_2BBF_7F65_41BE_2B2922D87FC8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E2491142_E907_F13C_41E8_C426136FD3AB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E24E197B_E907_91CC_41E8_13E5A34832D9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "label": "19",
 "hfovMin": "120%",
 "id": "panorama_E236A543_E904_F13D_41E8_E98AD677DF5E",
 "overlays": [
  "this.overlay_32C04E91_2B82_8765_419C_176B24F86E9A",
  "this.overlay_33D67108_2B83_9D63_41C3_4AEA4BEC026E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 0,
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_6_t.jpg",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_6",
 "width": 1754,
 "label": "Westfield Brochure_page-0012",
 "image": {
  "levels": [
   {
    "url": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_6.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "label": "20",
 "hfovMin": "120%",
 "id": "panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04",
 "overlays": [
  "this.overlay_33DD5E08_2B82_8763_4194_76E2C002AE1F",
  "this.overlay_33C2E713_2B81_8565_41B8_400FD141B993"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E236A543_E904_F13D_41E8_E98AD677DF5E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -22.34,
  "class": "PanoramaCameraPosition",
  "pitch": 4.73
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_camera"
},
{
 "label": "9",
 "hfovMin": "120%",
 "id": "panorama_E2491142_E907_F13C_41E8_C426136FD3AB",
 "overlays": [
  "this.overlay_3DBDD5E1_2BBE_84A5_41AC_C3FC131D07FF",
  "this.overlay_3E091512_2BBF_8567_41BC_D53D478074EC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E2378592_E907_915C_41E7_3A60B476CBE0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "playList": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_AlbumPlayList",
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_t.png",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA",
 "label": "Photo Album Westfield Brochure_page-0001",
 "class": "PhotoAlbum"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_4_t.png",
 "id": "album_383B345E_2C27_3FB8_41AC_B1701EB99749_4",
 "width": 3840,
 "label": "Scene 13_4 copy",
 "image": {
  "levels": [
   {
    "url": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_4.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2557
},
{
 "label": "16",
 "hfovMin": "120%",
 "id": "panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8",
 "overlays": [
  "this.overlay_26A56C75_305A_9403_4183_6660816C8282",
  "this.overlay_2638064D_3059_9403_4191_BEBD55D1BECE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E249A0E0_E904_B0FD_4187_DD59D754995E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 0,
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_3_t.jpg",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_3",
 "width": 1754,
 "label": "Westfield Brochure_page-0004",
 "image": {
  "levels": [
   {
    "url": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "initialPosition": {
  "yaw": -14.12,
  "class": "PanoramaCameraPosition",
  "pitch": 1.98
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E2495934_E907_915B_41C2_093936531F2F_camera"
},
{
 "playList": "this.album_2377E571_3521_18FE_4196_74F386475446_AlbumPlayList",
 "thumbnailUrl": "media/album_2377E571_3521_18FE_4196_74F386475446_t.png",
 "id": "album_2377E571_3521_18FE_4196_74F386475446",
 "label": "Photo Album floorplan",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 1.33,
  "class": "PanoramaCameraPosition",
  "pitch": 6.34
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_camera"
},
{
 "label": "18",
 "hfovMin": "120%",
 "id": "panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D",
 "overlays": [
  "this.overlay_3CE5B8A4_2B86_8CA3_41B9_CDD5432EBA2E",
  "this.overlay_25B145C7_305E_F40F_41AD_3F803D8ED143"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E249A0E0_E904_B0FD_4187_DD59D754995E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 0,
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_9_t.jpg",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_9",
 "width": 1754,
 "label": "Westfield Brochure_page-0015",
 "image": {
  "levels": [
   {
    "url": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_9.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_E7F265CA_E98C_2DB4_41D7_3E92DE6286D6, 0)",
   "media": "this.album_383B345E_2C27_3FB8_41AC_B1701EB99749",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_E7F265CA_E98C_2DB4_41D7_3E92DE6286D6",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -4.16,
  "class": "PanoramaCameraPosition",
  "pitch": 8.33
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E2491142_E907_F13C_41E8_C426136FD3AB_camera"
},
{
 "duration": 0,
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_7_t.jpg",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_7",
 "width": 1754,
 "label": "Westfield Brochure_page-0013",
 "image": {
  "levels": [
   {
    "url": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_7.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "label": "21",
 "hfovMin": "120%",
 "id": "panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D",
 "overlays": [
  "this.overlay_33ACA091_2B8E_FB65_41C5_C9446B46529F",
  "this.overlay_33D9416C_2B8E_9DA3_41BB_F472AC197E64"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_6_t.png",
 "id": "album_383B345E_2C27_3FB8_41AC_B1701EB99749_6",
 "width": 3840,
 "label": "Scene 16_4 copy",
 "image": {
  "levels": [
   {
    "url": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_6.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2557
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E2479B17_E904_B144_41E2_3269CC434655_camera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_3_t.png",
 "id": "album_383B345E_2C27_3FB8_41AC_B1701EB99749_3",
 "width": 3840,
 "label": "Scene 11_5 copy",
 "image": {
  "levels": [
   {
    "url": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_3.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2557
},
{
 "label": "6",
 "hfovMin": "120%",
 "id": "panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932",
 "overlays": [
  "this.overlay_3D1A073C_2B83_85A3_418A_3CE710F4C4E8",
  "this.overlay_3E30DE83_2B83_8765_41B2_DB6F665BAD29"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E2495934_E907_915B_41C2_093936531F2F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "label": "1",
 "hfovMin": "120%",
 "id": "panorama_E2479B17_E904_B144_41E2_3269CC434655",
 "overlays": [
  "this.overlay_3A77EB2F_2B81_8DBD_41B4_5123F8856225",
  "this.overlay_24B16118_3059_8C02_41C6_F81E873627BC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E230C344_E904_91C4_41E0_1731E13A9176",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E2239DC4_E904_90C4_41E8_C96128336F8E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "label": "2",
 "hfovMin": "120%",
 "id": "panorama_E2239DC4_E904_90C4_41E8_C96128336F8E",
 "overlays": [
  "this.overlay_39ADBF76_2B87_85AF_41AF_662D3489A217",
  "this.overlay_39B95F60_2B87_85A3_41B9_088982228392"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E2479B17_E904_B144_41E2_3269CC434655",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E249F703_E907_713D_41E8_EEA26CE99A28",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "label": "5",
 "hfovMin": "120%",
 "id": "panorama_E2495934_E907_915B_41C2_093936531F2F",
 "overlays": [
  "this.overlay_3870EC0F_2B83_8B7D_41B3_5AE77530629F",
  "this.overlay_38852B72_2B83_8DA7_41B5_0E833B591856"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 0,
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_10_t.jpg",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_10",
 "width": 1754,
 "label": "Westfield Brochure_page-0016",
 "image": {
  "levels": [
   {
    "url": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_10.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "initialPosition": {
  "yaw": -1.76,
  "class": "PanoramaCameraPosition",
  "pitch": 7.24
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E237C530_E907_B15B_41C3_B29F41F909A3_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_camera"
},
{
 "label": "14",
 "hfovMin": "120%",
 "id": "panorama_E234DCBE_E907_9744_41BF_134A7CF6C314",
 "overlays": [
  "this.overlay_26F1DC2E_305B_F401_41B9_ED57674EDF2F",
  "this.overlay_289310B8_305B_8C01_41BA_791ACF8FB1F6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E23510D0_E907_90DB_41D4_DAD645032CF4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ]
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_5_t.png",
 "id": "album_383B345E_2C27_3FB8_41AC_B1701EB99749_5",
 "width": 3840,
 "label": "Scene 15_3 copy",
 "image": {
  "levels": [
   {
    "url": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_5.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2557
},
{
 "label": "8",
 "hfovMin": "120%",
 "id": "panorama_E2378592_E907_915C_41E7_3A60B476CBE0",
 "overlays": [
  "this.overlay_3D6F0166_2B83_BDAF_41AB_05A7A567A5DC",
  "this.overlay_3E60868C_2B82_8763_41C5_CF5AFDFA6BA2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E2491142_E907_F13C_41E8_C426136FD3AB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_camera"
},
{
 "duration": 500,
 "id": "FadeInEffect_22A52512_3521_7823_41A1_2B2EB224E6AE",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "label": "4",
 "hfovMin": "120%",
 "id": "panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C",
 "overlays": [
  "this.overlay_394A8828_2B82_8BA3_41C5_C1FE9EC4DD29",
  "this.overlay_39746D10_2B82_8563_41BB_B33C15D47FFD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E2495934_E907_915B_41C2_093936531F2F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E249F703_E907_713D_41E8_EEA26CE99A28",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 1000,
 "thumbnailUrl": "media/album_273EB65B_3523_1822_41A1_A5FA4706D157_1_t.jpg",
 "id": "album_273EB65B_3523_1822_41A1_A5FA4706D157_1",
 "width": 1754,
 "label": "1first",
 "image": {
  "levels": [
   {
    "url": "media/album_273EB65B_3523_1822_41A1_A5FA4706D157_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "duration": 0,
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_2_t.jpg",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_2",
 "width": 1754,
 "label": "Westfield Brochure_page-0003",
 "image": {
  "levels": [
   {
    "url": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "duration": 1000,
 "thumbnailUrl": "media/album_273EB65B_3523_1822_41A1_A5FA4706D157_3_t.jpg",
 "id": "album_273EB65B_3523_1822_41A1_A5FA4706D157_3",
 "width": 1754,
 "label": "3fourth",
 "image": {
  "levels": [
   {
    "url": "media/album_273EB65B_3523_1822_41A1_A5FA4706D157_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "items": [
  {
   "media": "this.panorama_E2479B17_E904_B144_41E2_3269CC434655",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2479B17_E904_B144_41E2_3269CC434655_camera"
  },
  {
   "media": "this.panorama_E2239DC4_E904_90C4_41E8_C96128336F8E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_camera"
  },
  {
   "media": "this.panorama_E249F703_E907_713D_41E8_EEA26CE99A28",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E249F703_E907_713D_41E8_EEA26CE99A28_camera"
  },
  {
   "media": "this.panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_camera"
  },
  {
   "media": "this.panorama_E2495934_E907_915B_41C2_093936531F2F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2495934_E907_915B_41C2_093936531F2F_camera"
  },
  {
   "media": "this.panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_camera"
  },
  {
   "media": "this.panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_camera"
  },
  {
   "media": "this.panorama_E2378592_E907_915C_41E7_3A60B476CBE0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2378592_E907_915C_41E7_3A60B476CBE0_camera"
  },
  {
   "media": "this.panorama_E2491142_E907_F13C_41E8_C426136FD3AB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2491142_E907_F13C_41E8_C426136FD3AB_camera"
  },
  {
   "media": "this.panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_camera"
  },
  {
   "media": "this.panorama_E24E197B_E907_91CC_41E8_13E5A34832D9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_camera"
  },
  {
   "media": "this.panorama_E237C530_E907_B15B_41C3_B29F41F909A3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E237C530_E907_B15B_41C3_B29F41F909A3_camera"
  },
  {
   "media": "this.panorama_E23510D0_E907_90DB_41D4_DAD645032CF4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_camera"
  },
  {
   "media": "this.panorama_E234DCBE_E907_9744_41BF_134A7CF6C314",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_camera"
  },
  {
   "media": "this.panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_camera"
  },
  {
   "media": "this.panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_camera"
  },
  {
   "media": "this.panorama_E249A0E0_E904_B0FD_4187_DD59D754995E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_camera"
  },
  {
   "media": "this.panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_camera"
  },
  {
   "media": "this.panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_camera"
  },
  {
   "media": "this.panorama_E236A543_E904_F13D_41E8_E98AD677DF5E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_camera"
  },
  {
   "media": "this.panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_camera"
  },
  {
   "media": "this.panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_camera"
  },
  {
   "media": "this.panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_camera"
  },
  {
   "media": "this.panorama_E230C344_E904_91C4_41E0_1731E13A9176",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E230C344_E904_91C4_41E0_1731E13A9176_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.album_383B345E_2C27_3FB8_41AC_B1701EB99749",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.album_273EB65B_3523_1822_41A1_A5FA4706D157",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.album_2377E571_3521_18FE_4196_74F386475446",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 1000,
 "thumbnailUrl": "media/album_273EB65B_3523_1822_41A1_A5FA4706D157_2_t.jpg",
 "id": "album_273EB65B_3523_1822_41A1_A5FA4706D157_2",
 "width": 1754,
 "label": "2second and third",
 "image": {
  "levels": [
   {
    "url": "media/album_273EB65B_3523_1822_41A1_A5FA4706D157_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "label": "3",
 "hfovMin": "120%",
 "id": "panorama_E249F703_E907_713D_41E8_EEA26CE99A28",
 "overlays": [
  "this.overlay_38F8632E_2B82_FDBF_41AC_C217630C99B1",
  "this.overlay_390C7CCC_2B82_84E3_41C4_B3B4C386C620"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E2239DC4_E904_90C4_41E8_C96128336F8E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "viewerArea": "this.MainViewer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_camera"
},
{
 "initialPosition": {
  "yaw": -7.89,
  "class": "PanoramaCameraPosition",
  "pitch": 4.29
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_camera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_0_t.png",
 "id": "album_383B345E_2C27_3FB8_41AC_B1701EB99749_0",
 "width": 3840,
 "label": "Scene 2_4 copy",
 "image": {
  "levels": [
   {
    "url": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2557
},
{
 "initialPosition": {
  "yaw": 10.37,
  "class": "PanoramaCameraPosition",
  "pitch": 4.99
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_camera"
},
{
 "label": "18",
 "hfovMin": "120%",
 "id": "panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2",
 "overlays": [
  "this.overlay_33242F80_2B86_8563_41B0_0409857DAEA0",
  "this.overlay_33FE4E2C_2B81_87BC_41C2_EC57E34D8670"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E236A543_E904_F13D_41E8_E98AD677DF5E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 0,
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_1_t.jpg",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_1",
 "width": 1754,
 "label": "Westfield Brochure_page-0002",
 "image": {
  "levels": [
   {
    "url": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "duration": 0,
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_8_t.jpg",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_8",
 "width": 1754,
 "label": "Westfield Brochure_page-0014",
 "image": {
  "levels": [
   {
    "url": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_8.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "levels": [
  {
   "url": "media/zoomImage_23607D8D_3521_2826_41C4_A74C04DB3ADF_0_0.jpg",
   "width": 2160,
   "class": "ImageResourceLevel",
   "height": 2290
  },
  {
   "url": "media/zoomImage_23607D8D_3521_2826_41C4_A74C04DB3ADF_0_1.jpg",
   "width": 1931,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/zoomImage_23607D8D_3521_2826_41C4_A74C04DB3ADF_0_2.jpg",
   "width": 965,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/zoomImage_23607D8D_3521_2826_41C4_A74C04DB3ADF_0_3.jpg",
   "width": 482,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_22A5C512_3521_7823_41B2_2A4D2A697C7B",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -7.59,
  "class": "PanoramaCameraPosition",
  "pitch": 8.5
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_camera"
},
{
 "initialPosition": {
  "yaw": -0.98,
  "class": "PanoramaCameraPosition",
  "pitch": 6.28
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_camera"
},
{
 "playList": "this.album_273EB65B_3523_1822_41A1_A5FA4706D157_AlbumPlayList",
 "thumbnailUrl": "media/album_273EB65B_3523_1822_41A1_A5FA4706D157_t.png",
 "id": "album_273EB65B_3523_1822_41A1_A5FA4706D157",
 "label": "Photo Album 0ground",
 "class": "PhotoAlbum"
},
{
 "duration": 0,
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_0_t.jpg",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_0",
 "width": 1754,
 "label": "Westfield Brochure_page-0001",
 "image": {
  "levels": [
   {
    "url": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "duration": 0,
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_5_t.jpg",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_5",
 "width": 1754,
 "label": "Westfield Brochure_page-0011",
 "image": {
  "levels": [
   {
    "url": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "initialPosition": {
  "yaw": -5.31,
  "class": "PanoramaCameraPosition",
  "pitch": 9.54
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E2378592_E907_915C_41E7_3A60B476CBE0_camera"
},
{
 "duration": 0,
 "thumbnailUrl": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_4_t.jpg",
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_4",
 "width": 1754,
 "label": "Westfield Brochure_page-0005",
 "image": {
  "levels": [
   {
    "url": "media/album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "initialPosition": {
  "yaw": -4.78,
  "class": "PanoramaCameraPosition",
  "pitch": 6.48
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_camera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_1_t.png",
 "id": "album_383B345E_2C27_3FB8_41AC_B1701EB99749_1",
 "width": 3840,
 "label": "Scene 3_3 copy",
 "image": {
  "levels": [
   {
    "url": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_1.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2557
},
{
 "playList": "this.album_383B345E_2C27_3FB8_41AC_B1701EB99749_AlbumPlayList",
 "thumbnailUrl": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_t.png",
 "id": "album_383B345E_2C27_3FB8_41AC_B1701EB99749",
 "label": "Photo Album Scene 2_4 copy",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 0.43,
  "class": "PanoramaCameraPosition",
  "pitch": 9.54
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_camera"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "mouseControlMode": "drag_acceleration"
},
{
 "label": "23",
 "hfovMin": "120%",
 "id": "panorama_E230C344_E904_91C4_41E0_1731E13A9176",
 "overlays": [
  "this.overlay_32753FCD_2B81_84FD_41B8_B3DFA789333B",
  "this.overlay_336A635F_2B82_9D9D_41AC_57D6E80E524F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E2479B17_E904_B144_41E2_3269CC434655",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -8.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0.36
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_camera"
},
{
 "initialPosition": {
  "yaw": -18.64,
  "class": "PanoramaCameraPosition",
  "pitch": 7.89
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_camera"
},
{
 "label": "22",
 "hfovMin": "120%",
 "id": "panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250",
 "overlays": [
  "this.overlay_324B8258_2B8E_9FE3_418F_B0BC2DE541F0",
  "this.overlay_32EBDE49_2B8E_87E5_41B9_6D0169730E82"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E230C344_E904_91C4_41E0_1731E13A9176",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "label": "12",
 "hfovMin": "120%",
 "id": "panorama_E237C530_E907_B15B_41C3_B29F41F909A3",
 "overlays": [
  "this.overlay_3D17B660_2B81_87A3_41A1_52BC9B827913",
  "this.overlay_3DB8A426_2B81_FBAC_41B8_13B75E79634C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E23510D0_E907_90DB_41D4_DAD645032CF4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E24E197B_E907_91CC_41E8_13E5A34832D9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "label": "13",
 "hfovMin": "120%",
 "id": "panorama_E23510D0_E907_90DB_41D4_DAD645032CF4",
 "overlays": [
  "this.overlay_3E6F515F_2B82_9D9D_41A0_2F558AB26AC0",
  "this.overlay_3C382E08_2B81_8763_41C2_A4473B71E91D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E237C530_E907_B15B_41C3_B29F41F909A3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E234DCBE_E907_9744_41BF_134A7CF6C314",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_2_t.png",
 "id": "album_383B345E_2C27_3FB8_41AC_B1701EB99749_2",
 "width": 3840,
 "label": "Scene 8_5 copy",
 "image": {
  "levels": [
   {
    "url": "media/album_383B345E_2C27_3FB8_41AC_B1701EB99749_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2557
},
{
 "duration": 1000,
 "thumbnailUrl": "media/album_273EB65B_3523_1822_41A1_A5FA4706D157_0_t.jpg",
 "id": "album_273EB65B_3523_1822_41A1_A5FA4706D157_0",
 "width": 1754,
 "label": "0ground",
 "image": {
  "levels": [
   {
    "url": "media/album_273EB65B_3523_1822_41A1_A5FA4706D157_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1241
},
{
 "label": "11",
 "hfovMin": "120%",
 "id": "panorama_E24E197B_E907_91CC_41E8_13E5A34832D9",
 "overlays": [
  "this.overlay_3D2FE77C_2BBE_85A3_41B4_5A44316FEA0E",
  "this.overlay_3DB9355E_2BBE_859F_4170_9318B4E99E79"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E237C530_E907_B15B_41C3_B29F41F909A3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "label": "17",
 "hfovMin": "120%",
 "id": "panorama_E249A0E0_E904_B0FD_4187_DD59D754995E",
 "overlays": [
  "this.overlay_3E07ECAA_2B82_84A7_41BE_9AD5E9C0F92B",
  "this.overlay_3DC80417_2B81_9B6D_4187_60501B0E28D8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_t.jpg",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E249F703_E907_713D_41E8_EEA26CE99A28_camera"
},
{
 "initialPosition": {
  "yaw": -2.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0.73
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_E230C344_E904_91C4_41E0_1731E13A9176_camera"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "width": "100%",
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderSize": 0,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "minWidth": 100,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "shadow": false,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 55,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "paddingRight": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 13,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "height": 641,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SETTINGS"
 },
 "layout": "absolute",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_40327346_4F7F_DA37_4192_914AF0EE2018"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "visible",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "height": 133,
 "minHeight": 1,
 "propagateClick": true,
 "top": 15,
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "layout": "absolute",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Image_7CD2AE2F_50DE_CA61_41C1_7871D30C1510"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0.64,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "bottom": 0,
 "height": 118,
 "verticalAlign": "top",
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--MENU"
 },
 "layout": "absolute",
 "horizontalAlign": "left",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "propagateClick": true,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "propagateClick": true,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photoalbum"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "propagateClick": true,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "propagateClick": true,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "propagateClick": true,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "propagateClick": true,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "propagateClick": true,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 821,
 "id": "Image_40609A0B_4F73_4A33_41D2_4AE96567D411",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "-34.56%",
 "url": "skin/Image_40609A0B_4F73_4A33_41D2_4AE96567D411.png",
 "width": "34.56%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "bottom": "-14.66%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "height": "14.664%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Image2938"
 },
 "scaleMode": "fit_inside",
 "horizontalAlign": "center",
 "visible": false,
 "maxWidth": 1460
},
{
 "maxHeight": 71,
 "id": "Image_41CFC562_4F7F_5EEF_41C7_84CD4DBECC4E",
 "left": "0.42%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_41CFC562_4F7F_5EEF_41C7_84CD4DBECC4E.png",
 "width": "9.469%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "bottom": "7.28%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "height": "7.828%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Image3417"
 },
 "scaleMode": "fit_inside",
 "horizontalAlign": "center",
 "visible": false,
 "maxWidth": 157
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "class": "UIComponent",
 "backgroundOpacity": 0.55,
 "minHeight": 0,
 "borderRadius": 0,
 "bottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "top": 0,
 "borderSize": 0,
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "UIComponent1515"
 },
 "backgroundColorDirection": "vertical",
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "class": "ZoomImage",
 "backgroundOpacity": 1,
 "minHeight": 0,
 "borderRadius": 0,
 "bottom": 0,
 "backgroundColorRatios": [],
 "backgroundColor": [],
 "propagateClick": false,
 "top": 0,
 "borderSize": 0,
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "ZoomImage1516"
 },
 "backgroundColorDirection": "vertical",
 "visible": false,
 "scaleMode": "custom"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "pressedIconColor": "#888888",
 "shadowSpread": 1,
 "id": "closeButtonPopupPanorama",
 "paddingLeft": 5,
 "paddingRight": 5,
 "right": 10,
 "shadowBlurRadius": 6,
 "class": "CloseButton",
 "iconColor": "#000000",
 "iconHeight": 20,
 "backgroundOpacity": 0.3,
 "minHeight": 0,
 "rollOverIconColor": "#666666",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "propagateClick": false,
 "top": 10,
 "borderColor": "#000000",
 "mode": "push",
 "borderSize": 0,
 "minWidth": 0,
 "label": "",
 "paddingTop": 5,
 "gap": 5,
 "fontSize": "1.29vmin",
 "paddingBottom": 5,
 "shadow": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "iconWidth": 20,
 "iconLineWidth": 5,
 "fontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "horizontalAlign": "center",
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "CloseButton1517"
 }
},
{
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "mode": "toggle",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "mode": "toggle",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 58
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.64,
   "yaw": -29.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31EF119A_2B83_9D64_41B8_A3AF0595184A",
   "pitch": -11.09,
   "hfov": 7.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -29.61
  }
 ],
 "id": "overlay_3E8837D6_2B82_84EF_4172_74157CE6B7E1",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 36.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31EF719A_2B83_9D64_41BB_B882F06A438C",
   "pitch": -16.45,
   "hfov": 6.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 36.02
  }
 ],
 "id": "overlay_3E126D49_2B82_85E5_41C3_AD929E4F7F3C",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.44,
   "yaw": 23.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296CDEDB_3059_F406_41B1_A88E5256CDA0",
   "pitch": -5.1,
   "hfov": 3.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 23.15
  }
 ],
 "id": "overlay_26AE762F_305A_B41F_41B1_045AF35B1142",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.73,
   "yaw": -57.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296D0EDC_3059_F402_41B0_09CB0540D202",
   "pitch": -4.07,
   "hfov": 3.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -57.76
  }
 ],
 "id": "overlay_267A8D36_305A_F40E_41C5_17CAFD5348C8",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.39,
   "yaw": -23.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31EEE19B_2B83_9D64_41BA_0D33CBA443DD",
   "pitch": -14.39,
   "hfov": 6.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -23.75
  }
 ],
 "id": "overlay_3D2CE541_2BBF_85E5_41C1_980A32B39CC7",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.03,
   "yaw": 22.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31E9419B_2B83_9D64_41B3_C25AD7EB6264",
   "pitch": -11.07,
   "hfov": 6.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 22.52
  }
 ],
 "id": "overlay_3D84821B_2BBF_7F65_41BE_2B2922D87FC8",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.49,
   "yaw": 0.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31ED6AAD_2B81_8CBD_41C4_49AC1DAC1EF7",
   "pitch": -9.78,
   "hfov": 5.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 0.82
  }
 ],
 "id": "overlay_32C04E91_2B82_8765_419C_176B24F86E9A",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.05,
   "yaw": 179.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_26F6803F_305A_8C7F_41BF_1B9B24D765BE",
   "pitch": -15.55,
   "hfov": 14.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 179.02
  }
 ],
 "id": "overlay_33D67108_2B83_9D63_41C3_4AEA4BEC026E",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.23,
   "yaw": -0.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31ED2AAD_2B81_8CBD_41A3_9DF86DA9547C",
   "pitch": -14.9,
   "hfov": 6.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -0.15
  }
 ],
 "id": "overlay_33DD5E08_2B82_8763_4194_76E2C002AE1F",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.79,
   "yaw": 179.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_26F1C040_305A_8C01_41B1_79B55B7342AE",
   "pitch": -16.49,
   "hfov": 13.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 179.77
  }
 ],
 "id": "overlay_33C2E713_2B81_8565_41B8_400FD141B993",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.18,
   "yaw": -34.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_32D65153_2B8E_9DE5_41BB_32068B42ABF4",
   "pitch": -10.38,
   "hfov": 7.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -34.61
  }
 ],
 "id": "overlay_3DBDD5E1_2BBE_84A5_41AC_C3FC131D07FF",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.75,
   "yaw": 26.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_33B5E28A_2B82_9F67_41C3_03FBA4564F44",
   "pitch": -12.42,
   "hfov": 6.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 26.15
  }
 ],
 "id": "overlay_3E091512_2BBF_8567_41BC_D53D478074EC",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "items": [
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 0,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 0,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 0,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 0,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 0,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 0,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 0,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_7",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 0,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_8",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 0,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.64",
     "class": "PhotoCameraPosition",
     "y": "0.51",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_9",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 0,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_10",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 0,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  }
 ],
 "id": "album_40BF86E3_4F57_DBE8_41B0_D84673F865DA_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.15,
   "yaw": 33.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296DAEDC_3059_F402_41B3_60E5EF6B0242",
   "pitch": -4.71,
   "hfov": 5.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 33.95
  }
 ],
 "id": "overlay_26A56C75_305A_9403_4183_6660816C8282",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.33,
   "yaw": -46.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296DDEDC_3059_F402_41C2_B88D6C252C42",
   "pitch": -6.17,
   "hfov": 4.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -46.3
  }
 ],
 "id": "overlay_2638064D_3059_9403_4191_BEBD55D1BECE",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "items": [
  {
   "media": "this.album_2377E571_3521_18FE_4196_74F386475446_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.73",
     "class": "PhotoCameraPosition",
     "y": "0.53",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  }
 ],
 "id": "album_2377E571_3521_18FE_4196_74F386475446_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.5,
   "yaw": 62.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296F2EDD_3059_F402_41C0_1B3A0BB7AF0E",
   "pitch": -8.19,
   "hfov": 3.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 62.88
  }
 ],
 "id": "overlay_3CE5B8A4_2B86_8CA3_41B9_CDD5432EBA2E",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.49,
   "yaw": 27.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296F4EDE_3059_F43E_41BC_C871BAB0A069",
   "pitch": -3.88,
   "hfov": 4.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 27.4
  }
 ],
 "id": "overlay_25B145C7_305E_F40F_41AD_3F803D8ED143",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.27,
   "yaw": 176.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2969CEE0_3059_F402_41C2_A50C9E55BFC5",
   "pitch": -45.04,
   "hfov": 10.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 176.75
  }
 ],
 "id": "overlay_33ACA091_2B8E_FB65_41C5_C9446B46529F",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.72,
   "yaw": 38.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31EDBAAF_2B81_8CBD_41C3_0E8BE71D5387",
   "pitch": -9.17,
   "hfov": 5.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 38.45
  }
 ],
 "id": "overlay_33D9416C_2B8E_9DA3_41BB_F472AC197E64",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.19,
   "yaw": -30.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31EC519A_2B83_9D64_41AC_A7FCCDB21AF6",
   "pitch": -18.07,
   "hfov": 9.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -30.67
  }
 ],
 "id": "overlay_3D1A073C_2B83_85A3_418A_3CE710F4C4E8",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.82,
   "yaw": 22.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31ECA19A_2B83_9D64_41BE_B721D4714043",
   "pitch": -6.04,
   "hfov": 5.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 22.73
  }
 ],
 "id": "overlay_3E30DE83_2B83_8765_41B2_DB6F665BAD29",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.01,
   "yaw": -8.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2954CEC9_3059_F402_4173_2C6D57225088",
   "pitch": -11.47,
   "hfov": 6.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -8.97
  }
 ],
 "id": "overlay_3A77EB2F_2B81_8DBD_41B4_5123F8856225",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.16,
   "yaw": 33.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2955EECA_3059_F406_41C7_3DEE25C434D6",
   "pitch": -3.1,
   "hfov": 4.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 33.24
  }
 ],
 "id": "overlay_24B16118_3059_8C02_41C6_F81E873627BC",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.76,
   "yaw": 28.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D939D1C_2BFF_8563_41B1_F76DD45ED53B",
   "pitch": -17.81,
   "hfov": 8.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 28.33
  }
 ],
 "id": "overlay_39ADBF76_2B87_85AF_41AF_662D3489A217",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.35,
   "yaw": -26.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_32121199_2B83_9D64_41C2_A05020B3E97E",
   "pitch": -6.52,
   "hfov": 5.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -26.59
  }
 ],
 "id": "overlay_39B95F60_2B87_85A3_41B9_088982228392",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.48,
   "yaw": -38.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31EDB19A_2B83_9D64_41BF_5CD5CAB2C582",
   "pitch": -8.85,
   "hfov": 7.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -38.19
  }
 ],
 "id": "overlay_3870EC0F_2B83_8B7D_41B3_5AE77530629F",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.51,
   "yaw": 14.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31EDE19A_2B83_9D64_41C3_3425F5D5C124",
   "pitch": -6.56,
   "hfov": 6.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 14.54
  }
 ],
 "id": "overlay_38852B72_2B83_8DA7_41B5_0E833B591856",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.49,
   "yaw": 21.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296C2ED9_3059_F403_41B1_7801AF9D72FC",
   "pitch": -4.94,
   "hfov": 7.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 21.22
  }
 ],
 "id": "overlay_26F1DC2E_305B_F401_41B9_ED57674EDF2F",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.02,
   "yaw": -38.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296CBEDA_3059_F406_41B8_B892208D927F",
   "pitch": -3.39,
   "hfov": 4.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -38.86
  }
 ],
 "id": "overlay_289310B8_305B_8C01_41BA_791ACF8FB1F6",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "paddingLeft": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "right": "0%",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "minWidth": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "shadow": false,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_E7F265CA_E98C_2DB4_41D7_3E92DE6286D6.set('selectedIndex', -1); }, this); this.playList_E7F265CA_E98C_2DB4_41D7_3E92DE6286D6.set('selectedIndex', 0)",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "paddingRight": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": "12%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "borderSize": 0,
 "height": "8%",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 150
},
{
 "maxHeight": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "bottom": "20%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 50,
 "top": "20%",
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "bottom": "20%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 50,
 "top": "20%",
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": "12%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "borderSize": 0,
 "height": "8%",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 150
},
{
 "maxHeight": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "bottom": "20%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 50,
 "top": "20%",
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "bottom": "20%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 50,
 "top": "20%",
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8,
   "yaw": -22.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31EFB19A_2B83_9D64_41B8_C7808954BED7",
   "pitch": -14.96,
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -22.56
  }
 ],
 "id": "overlay_3D6F0166_2B83_BDAF_41AB_05A7A567A5DC",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.69,
   "yaw": 35.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_33B4028A_2B82_9F67_41C1_785848FF63A8",
   "pitch": -11.63,
   "hfov": 6.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 35.08
  }
 ],
 "id": "overlay_3E60868C_2B82_8763_41C5_CF5AFDFA6BA2",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -38.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3212E199_2B83_9D64_41C1_B3FFBEEE923A",
   "pitch": -11.39,
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -38.45
  }
 ],
 "id": "overlay_394A8828_2B82_8BA3_41C5_C1FE9EC4DD29",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.59,
   "yaw": 13.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31ED5199_2B83_9D64_41C3_967C37465EE0",
   "pitch": -17.5,
   "hfov": 5.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 13.46
  }
 ],
 "id": "overlay_39746D10_2B82_8563_41BB_B33C15D47FFD",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.64,
   "yaw": -29.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_32124199_2B83_9D64_41A8_62B90B664615",
   "pitch": -8.71,
   "hfov": 6.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -29.1
  }
 ],
 "id": "overlay_38F8632E_2B82_FDBF_41AC_C217630C99B1",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.56,
   "yaw": 40.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_32128199_2B83_9D64_41B8_E22B38F9658F",
   "pitch": -13.56,
   "hfov": 8.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 40.46
  }
 ],
 "id": "overlay_390C7CCC_2B82_84E3_41C4_B3B4C386C620",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.78,
   "yaw": -2.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296FFEDE_3059_F43E_41C0_DA90D0D6869D",
   "pitch": -13.95,
   "hfov": 8.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -2.33
  }
 ],
 "id": "overlay_33242F80_2B86_8563_41B0_0409857DAEA0",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.26,
   "yaw": 70.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_29681EDE_3059_F43E_41A2_46B6B719319B",
   "pitch": -15.52,
   "hfov": 7.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 70.67
  }
 ],
 "id": "overlay_33FE4E2C_2B81_87BC_41C2_EC57E34D8670",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "items": [
  {
   "media": "this.album_273EB65B_3523_1822_41A1_A5FA4706D157_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_273EB65B_3523_1822_41A1_A5FA4706D157_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_273EB65B_3523_1822_41A1_A5FA4706D157_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_273EB65B_3523_1822_41A1_A5FA4706D157_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_273EB65B_3523_1822_41A1_A5FA4706D157_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 1000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  }
 ],
 "id": "album_273EB65B_3523_1822_41A1_A5FA4706D157_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_383B345E_2C27_3FB8_41AC_B1701EB99749_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_383B345E_2C27_3FB8_41AC_B1701EB99749_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_383B345E_2C27_3FB8_41AC_B1701EB99749_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_383B345E_2C27_3FB8_41AC_B1701EB99749_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_383B345E_2C27_3FB8_41AC_B1701EB99749_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_383B345E_2C27_3FB8_41AC_B1701EB99749_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_383B345E_2C27_3FB8_41AC_B1701EB99749_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   }
  }
 ],
 "id": "album_383B345E_2C27_3FB8_41AC_B1701EB99749_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "mode": "toggle",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "data": {
  "name": "IconButton HS "
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "mode": "toggle",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "mode": "push",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "visible": false,
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 58
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.88,
   "yaw": 11.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296B4EE6_3059_F40E_41A2_DCB9440C4E15",
   "pitch": -4.14,
   "hfov": 3.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 11.01
  }
 ],
 "id": "overlay_32753FCD_2B81_84FD_41B8_B3DFA789333B",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.62,
   "yaw": -23.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_253EA7C6_3049_9401_41B0_FB946A9C59FA",
   "pitch": -24.01,
   "hfov": 7.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -23.26
  }
 ],
 "id": "overlay_336A635F_2B82_9D9D_41AC_57D6E80E524F",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.02,
   "yaw": -27.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296A8EE5_3059_F402_41B3_14F734AF0ECF",
   "pitch": -6.34,
   "hfov": 6.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -27.44
  }
 ],
 "id": "overlay_324B8258_2B8E_9FE3_418F_B0BC2DE541F0",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.8,
   "yaw": -65.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_253E67C5_3049_9403_41AD_894839F6B60A",
   "pitch": -14.87,
   "hfov": 8.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -65.59
  }
 ],
 "id": "overlay_32EBDE49_2B8E_87E5_41B9_6D0169730E82",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.2,
   "yaw": -20.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_33B6628A_2B82_9F67_41B6_92518A9CF8B8",
   "pitch": -4.84,
   "hfov": 4.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -20.91
  }
 ],
 "id": "overlay_3D17B660_2B81_87A3_41A1_52BC9B827913",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.34,
   "yaw": 39.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31E8B19C_2B83_9C9C_418B_BFA4AA843C95",
   "pitch": -8.72,
   "hfov": 6.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 39.69
  }
 ],
 "id": "overlay_3DB8A426_2B81_FBAC_41B8_13B75E79634C",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.55,
   "yaw": -40.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_33B7C28A_2B82_9F67_4187_85412223B73C",
   "pitch": -3.9,
   "hfov": 4.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -40.11
  }
 ],
 "id": "overlay_3E6F515F_2B82_9D9D_41A0_2F558AB26AC0",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.41,
   "yaw": 34.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_33B7028B_2B82_9F65_41B6_19B4D3E667FF",
   "pitch": -12.66,
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 34.57
  }
 ],
 "id": "overlay_3C382E08_2B81_8763_41C2_A4473B71E91D",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.07,
   "yaw": 24.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_33B6828A_2B82_9F67_417E_213C28C1FAEA",
   "pitch": -9.28,
   "hfov": 5.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 24.77
  }
 ],
 "id": "overlay_3D2FE77C_2BBE_85A3_41B4_5A44316FEA0E",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.02,
   "yaw": -20.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31E9E19B_2B83_9D64_41C3_5C6900E9EDC0",
   "pitch": -10.72,
   "hfov": 6.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -20.75
  }
 ],
 "id": "overlay_3DB9355E_2BBE_859F_4170_9318B4E99E79",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.71,
   "yaw": -36.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_26F4F03E_305A_8C01_4187_09ABF2E632C9",
   "pitch": -20.5,
   "hfov": 5.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -36.31
  }
 ],
 "id": "overlay_3E07ECAA_2B82_84A7_41BE_9AD5E9C0F92B",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.68,
   "yaw": 44.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_296E8EDD_3059_F402_41BD_3FA80E180172",
   "pitch": -6.21,
   "hfov": 4.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 44.46
  }
 ],
 "id": "overlay_3DC80417_2B81_9B6D_4187_60501B0E28D8",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "height": 110,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "layout": "horizontal",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "width": "91.304%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "bottom": "0%",
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "height": "85.959%",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "layout": "vertical",
 "horizontalAlign": "center",
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 148,
 "id": "Image_40327346_4F7F_DA37_4192_914AF0EE2018",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_40327346_4F7F_DA37_4192_914AF0EE2018.png",
 "width": "39.267%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "bottom": "0.75%",
 "propagateClick": false,
 "minHeight": 1,
 "minWidth": 1,
 "top": "21.05%",
 "verticalAlign": "middle",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Image3361"
 },
 "scaleMode": "fit_inside",
 "horizontalAlign": "center",
 "maxWidth": 281
},
{
 "maxHeight": 2,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "bottom": 53,
 "height": 2,
 "verticalAlign": "middle",
 "propagateClick": true,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "white line"
 },
 "scaleMode": "fit_outside",
 "horizontalAlign": "center",
 "maxWidth": 3000
},
{
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_21DB73B6_3521_1862_41CA_12A27C6F4365",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "paddingRight": 0,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "scroll",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "bottom": "0%",
 "height": 51,
 "verticalAlign": "middle",
 "propagateClick": true,
 "gap": 3,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "layout": "horizontal",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 67,
 "id": "Image_7CD2AE2F_50DE_CA61_41C1_7871D30C1510",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "0%",
 "url": "skin/Image_7CD2AE2F_50DE_CA61_41C1_7871D30C1510.png",
 "width": "7.961%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "9.32%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "height": "28.814%",
 "click": "this.openLink('http://www.instagram.com/altrune_', '_blank')",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Image39998"
 },
 "scaleMode": "fit_inside",
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 208
},
{
 "shadowSpread": 1,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "left": "10%",
 "paddingLeft": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "bottom": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "top": "5%",
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "propagateClick": false,
 "minHeight": 1,
 "minWidth": 1,
 "top": "5%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "layout": "vertical",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "shadowSpread": 1,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "left": "10%",
 "paddingLeft": 0,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "bottom": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "top": "5%",
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "propagateClick": false,
 "minHeight": 1,
 "minWidth": 1,
 "top": "5%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "layout": "vertical",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "shadowSpread": 1,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "left": "15%",
 "paddingLeft": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "bottom": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "top": "7%",
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "shadowSpread": 1,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "propagateClick": false,
 "top": "5%",
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "77.79%",
 "propagateClick": false,
 "minHeight": 1,
 "minWidth": 1,
 "top": "7.21%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "layout": "vertical",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "shadowSpread": 1,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "left": "15%",
 "paddingLeft": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "bottom": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "top": "7%",
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "shadowSpread": 1,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "left": "15%",
 "paddingLeft": 0,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "bottom": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "top": "7%",
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "shadowSpread": 1,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "16.81%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "15.72%",
 "scrollBarMargin": 2,
 "class": "Container",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "propagateClick": false,
 "top": "7%",
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31EF119A_2B83_9D64_41B8_A3AF0595184A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2416C40_E907_B73C_41E9_B992E9A49EC3_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31EF719A_2B83_9D64_41BB_B882F06A438C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_296CDEDB_3059_F406_41B1_A88E5256CDA0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24188EC_E907_70C4_41CA_8E84325AD8DE_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_296D0EDC_3059_F402_41B0_09CB0540D202",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31EEE19B_2B83_9D64_41BA_0D33CBA443DD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E248ECD2_E907_F0DC_41E0_B5B50913D7FA_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31E9419B_2B83_9D64_41B3_C25AD7EB6264",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31ED6AAD_2B81_8CBD_41C4_49AC1DAC1EF7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E236A543_E904_F13D_41E8_E98AD677DF5E_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_26F6803F_305A_8C7F_41BF_1B9B24D765BE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31ED2AAD_2B81_8CBD_41A3_9DF86DA9547C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23FC0CD_E904_90C4_41E0_F3A05B31FF04_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_26F1C040_305A_8C01_41B1_79B55B7342AE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_32D65153_2B8E_9DE5_41BB_32068B42ABF4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2491142_E907_F13C_41E8_C426136FD3AB_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_33B5E28A_2B82_9F67_41C3_03FBA4564F44",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_296DAEDC_3059_F402_41B3_60E5EF6B0242",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24AC4BB_E904_974C_41BD_6F3AAAE431F8_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_296DDEDC_3059_F402_41C2_B88D6C252C42",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_296F2EDD_3059_F402_41C0_1B3A0BB7AF0E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E248CD24_E904_B144_41D4_E2FD753FEF0D_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_296F4EDE_3059_F43E_41BC_C871BAB0A069",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_2969CEE0_3059_F402_41C2_A50C9E55BFC5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23F0BCD_E904_90C5_41E1_FA0D543E2A0D_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31EDBAAF_2B81_8CBD_41C3_0E8BE71D5387",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31EC519A_2B83_9D64_41AC_A7FCCDB21AF6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24BB2E6_E907_B0C4_41C0_98D5EB390932_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31ECA19A_2B83_9D64_41BE_B721D4714043",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_2954CEC9_3059_F402_4173_2C6D57225088",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2479B17_E904_B144_41E2_3269CC434655_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2955EECA_3059_F406_41C7_3DEE25C434D6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_3D939D1C_2BFF_8563_41B1_F76DD45ED53B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2239DC4_E904_90C4_41E8_C96128336F8E_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_32121199_2B83_9D64_41C2_A05020B3E97E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31EDB19A_2B83_9D64_41BF_5CD5CAB2C582",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2495934_E907_915B_41C2_093936531F2F_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31EDE19A_2B83_9D64_41C3_3425F5D5C124",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_296C2ED9_3059_F403_41B1_7801AF9D72FC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E234DCBE_E907_9744_41BF_134A7CF6C314_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_296CBEDA_3059_F406_41B8_B892208D927F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31EFB19A_2B83_9D64_41B8_C7808954BED7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E2378592_E907_915C_41E7_3A60B476CBE0_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_33B4028A_2B82_9F67_41C1_785848FF63A8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_3212E199_2B83_9D64_41C1_B3FFBEEE923A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E237AFFE_E907_70C4_41EB_BD8D02AC033C_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31ED5199_2B83_9D64_41C3_967C37465EE0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_32124199_2B83_9D64_41A8_62B90B664615",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E249F703_E907_713D_41E8_EEA26CE99A28_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_32128199_2B83_9D64_41B8_E22B38F9658F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_296FFEDE_3059_F43E_41C0_DA90D0D6869D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24E0930_E904_915C_41C6_0B204F9DA9B2_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_29681EDE_3059_F43E_41A2_46B6B719319B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_296B4EE6_3059_F40E_41A2_DCB9440C4E15",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E230C344_E904_91C4_41E0_1731E13A9176_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_253EA7C6_3049_9401_41B0_FB946A9C59FA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_296A8EE5_3059_F402_41B3_14F734AF0ECF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23C071B_E904_B14D_41DC_9F97EDCD2250_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_253E67C5_3049_9403_41AD_894839F6B60A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_33B6628A_2B82_9F67_41B6_92518A9CF8B8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E237C530_E907_B15B_41C3_B29F41F909A3_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31E8B19C_2B83_9C9C_418B_BFA4AA843C95",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_33B7C28A_2B82_9F67_4187_85412223B73C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E23510D0_E907_90DB_41D4_DAD645032CF4_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_33B7028B_2B82_9F65_41B6_19B4D3E667FF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_33B6828A_2B82_9F67_417E_213C28C1FAEA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E24E197B_E907_91CC_41E8_13E5A34832D9_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_31E9E19B_2B83_9D64_41C3_5C6900E9EDC0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_26F4F03E_305A_8C01_4187_09ABF2E632C9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E249A0E0_E904_B0FD_4187_DD59D754995E_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_296E8EDD_3059_F402_41BD_3FA80E180172",
 "rowCount": 6,
 "colCount": 4
},
{
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 60,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "height": 60,
 "verticalAlign": "middle",
 "propagateClick": true,
 "mode": "toggle",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "data": {
  "name": "image button menu"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "mode": "push",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "height": 58,
 "verticalAlign": "middle",
 "propagateClick": true,
 "mode": "push",
 "borderSize": 0,
 "minWidth": 1,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 58
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "width": 120,
 "shadowBlurRadius": 15,
 "class": "Button",
 "backgroundOpacity": 0,
 "iconHeight": 0,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "height": 40,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "propagateClick": true,
 "borderSize": 0,
 "minWidth": 1,
 "label": "PROJECT INFO",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 12,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "shadow": false,
 "rollOverShadow": false,
 "iconWidth": 0,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "cursor": "hand",
 "borderColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button house info"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "width": 130,
 "shadowBlurRadius": 15,
 "class": "Button",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "propagateClick": true,
 "borderSize": 0,
 "minWidth": 1,
 "label": "SCENE LIST",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 12,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "shadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "cursor": "hand",
 "borderColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "data": {
  "name": "Button panorama list"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "width": 90,
 "shadowBlurRadius": 15,
 "class": "Button",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "propagateClick": true,
 "borderSize": 0,
 "minWidth": 1,
 "label": "LOCATION",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 12,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "shadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "cursor": "hand",
 "borderColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "data": {
  "name": "Button location"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_21DB73B6_3521_1862_41CA_12A27C6F4365",
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "width": 139,
 "shadowBlurRadius": 15,
 "class": "Button",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "propagateClick": true,
 "borderSize": 0,
 "minWidth": 1,
 "label": "FLOOR PLAN",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 12,
 "paddingBottom": 0,
 "click": "this.showPopupImage(this.ImageResource_22A5C512_3521_7823_41B2_2A4D2A697C7B, null, '90%', '90%', this.FadeInEffect_22A52512_3521_7823_41A1_2B2EB224E6AE, this.FadeOutEffect_22A50512_3521_7823_41C0_2087CBD8BA8E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, null, null, false)",
 "shadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "cursor": "hand",
 "borderColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "data": {
  "name": "Button location"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "width": 123,
 "shadowBlurRadius": 15,
 "class": "Button",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "propagateClick": true,
 "borderSize": 0,
 "minWidth": 1,
 "label": "PHOTOALBUM",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 12,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510, true, 0, null, null, false)",
 "shadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "cursor": "hand",
 "borderColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "data": {
  "name": "Button photoalbum"
 }
},
{
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "scroll",
 "width": "50.739%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "horizontalAlign": "center",
 "height": "99.963%",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_624DA684_50F5_5A26_41AC_2F3FADCEB98C"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "visible",
 "width": "49.005%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "propagateClick": false,
 "gap": 0,
 "borderSize": 0,
 "minWidth": 460,
 "paddingTop": 20,
 "contentOpaque": false,
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "horizontalAlign": "left",
 "height": "99.963%",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "height": "75%",
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "scroll",
 "width": "85%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "horizontalAlign": "center",
 "height": "100%",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "paddingLeft": 50,
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "visible",
 "width": "50%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "propagateClick": false,
 "gap": 0,
 "borderSize": 0,
 "minWidth": 460,
 "paddingTop": 20,
 "contentOpaque": false,
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "horizontalAlign": "left",
 "height": "100%",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "height": "75%",
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "paddingLeft": 0,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "class": "Container",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 140,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "itemThumbnailBorderRadius": 0,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "paddingLeft": 70,
 "itemVerticalAlign": "top",
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "scrollBarMargin": 2,
 "class": "ThumbnailGrid",
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemMode": "normal",
 "backgroundOpacity": 0.05,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "itemMinHeight": 50,
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "itemThumbnailOpacity": 1,
 "propagateClick": false,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemPaddingTop": 3,
 "itemMinWidth": 50,
 "borderSize": 0,
 "minWidth": 1,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingRight": 3,
 "height": "100%",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "backgroundColorDirection": "vertical",
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailScaleMode": "fit_outside",
 "paddingRight": 70,
 "itemThumbnailHeight": 125,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontColor": "#666666",
 "borderRadius": 5,
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "itemBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "gap": 26,
 "itemHorizontalAlign": "center",
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "paddingTop": 10,
 "itemWidth": 220,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontStyle": "normal",
 "paddingBottom": 70,
 "itemLabelHorizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 },
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "horizontalAlign": "center",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Montserrat",
 "itemLabelPosition": "bottom"
},
{
 "children": [
  "this.Image_6A9A8057_4F2D_7622_41D0_2AAA38E81C8A"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "scroll",
 "width": "85%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "horizontalAlign": "center",
 "height": "100%",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "paddingLeft": 50,
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "visible",
 "width": "15%",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "propagateClick": false,
 "gap": 0,
 "borderSize": 0,
 "minWidth": 400,
 "paddingTop": 20,
 "contentOpaque": false,
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "horizontalAlign": "left",
 "height": "100%",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "height": "75%",
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "paddingLeft": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "class": "Container",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 140,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "MapViewer",
 "paddingLeft": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "minWidth": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "shadow": false,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "paddingRight": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "paddingLeft": 0,
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "class": "Container",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 140,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "visible",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "horizontalAlign": "left",
 "height": "100%",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "visible",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "horizontalAlign": "left",
 "height": "100%",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.png",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "minWidth": 1,
 "top": "0%",
 "verticalAlign": "middle",
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Image"
 },
 "scaleMode": "fit_outside",
 "horizontalAlign": "center",
 "maxWidth": 2000
},
{
 "maxHeight": 1324,
 "id": "Image_624DA684_50F5_5A26_41AC_2F3FADCEB98C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_624DA684_50F5_5A26_41AC_2F3FADCEB98C.png",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "height": "170.619%",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image40438"
 },
 "scaleMode": "fit_inside",
 "maxWidth": 905
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "right": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "minHeight": 1,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "minWidth": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#606060",
 "shadow": false,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "paddingRight": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "bottom": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "data": {
  "name": "Viewer info 1"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "scroll",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minHeight": 1,
 "minWidth": 1,
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container arrows"
 },
 "layout": "horizontal",
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "paddingLeft": 0,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "class": "Container",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 60,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "propagateClick": false,
 "paddingTop": 20,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "scroll",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "minWidth": 100,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 30,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "horizontalAlign": "left",
 "height": "100%",
 "scrollBarOpacity": 0.79
},
{
 "paddingLeft": 0,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "paddingLeft": 80,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minHeight": 100,
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.74vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Bebas Neue Bold';\">Scene list:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 50,
 "top": 20,
 "mode": "push",
 "borderSize": 0,
 "height": "36.14%",
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 921,
 "id": "Image_6A9A8057_4F2D_7622_41D0_2AAA38E81C8A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_6A9A8057_4F2D_7622_41D0_2AAA38E81C8A.jpg",
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "height": "100%",
 "click": "this.openLink('https://maps.app.goo.gl/wKzgKbhomUKhrc92A', '_blank')",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Image35989"
 },
 "scaleMode": "fit_inside",
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 1302
},
{
 "paddingLeft": 0,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "class": "Container",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 60,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "propagateClick": false,
 "paddingTop": 20,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "scroll",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "minWidth": 100,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 30,
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "horizontalAlign": "left",
 "height": "67.01%",
 "scrollBarOpacity": 0.79
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "paddingLeft": 80,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minHeight": 100,
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.74vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 50,
 "top": 20,
 "mode": "push",
 "borderSize": 0,
 "height": "36.14%",
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "paddingLeft": 80,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minHeight": 100,
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.74vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 50,
 "top": 20,
 "mode": "push",
 "borderSize": 0,
 "height": "36.14%",
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "minWidth": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "shadow": false,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "paddingRight": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "width": "10%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 50,
 "top": 20,
 "mode": "push",
 "borderSize": 0,
 "height": "10%",
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "overflow": "scroll",
 "width": "80%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "height": "30%",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container separator"
 },
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "paddingLeft": 10,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 20,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.66vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.66vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.66vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.66vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.66vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.66vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.66vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "class": "Button",
 "iconHeight": 32,
 "width": "46%",
 "backgroundOpacity": 0.7,
 "minHeight": 1,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#04A3E1"
 ],
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "mode": "push",
 "borderSize": 0,
 "minWidth": 1,
 "label": "lorem ipsum",
 "shadowColor": "#000000",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": "3vh",
 "paddingBottom": 0,
 "shadow": false,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1,
 "fontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "fontWeight": "normal",
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "height": "9%",
 "data": {
  "name": "Button"
 }
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "paddingLeft": 10,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "height": "68.98%",
 "paddingTop": 0,
 "paddingBottom": 20,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Site Adress</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.43vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.76vh;font-family:'Bebas Neue Bold';\">Opp. Someshwar Temple, Besided Balaji Lawns</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.76vh;font-family:'Bebas Neue Bold';\">Gangapur Rd. Nasik</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
}],
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "layout": "absolute",
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); }
 },
 "height": "100%",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
