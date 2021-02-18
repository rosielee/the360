// Created with Motiva Layama v1.22 LITE https://www.motivacg.com

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "DAS0000", a: "Daisy_cam_new_001", p: new BABYLON.Vector3(-1777.48, 172.089, -6184.6), l: new BABYLON.Vector3(-1777.48, 172.091, -6184.5)});
   layamaCameras.push({n: "DAS0001", a: "Daisy_cam_new_002", p: new BABYLON.Vector3(-1566.16, 148.688, -5879.93), l: new BABYLON.Vector3(-1566.2, 148.687, -5879.84)});
   layamaCameras.push({n: "DAS0002", a: "Daisy_cam_new_003", p: new BABYLON.Vector3(-2125.44, 170.382, -5744.76), l: new BABYLON.Vector3(-2125.37, 170.382, -5744.68)});
   layamaCameras.push({n: "DAS0003", a: "Daisy_cam_new_004", p: new BABYLON.Vector3(-1810.34, 213.54, -5821.18), l: new BABYLON.Vector3(-1810.44, 213.538, -5821.18)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1024");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: true, defRot: 1, altMove: true, altRot: 2};
}

