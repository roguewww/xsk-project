// script.js

// document.body.addEventListener('click', () => {
//     if (Tone.context.state !== 'running') {
//         Tone.context.resume();
//     }
// }, { once: true });

// document.body.addEventListener('touchstart', () => {
//     if (Tone.context.state !== 'running') {
//         Tone.context.resume();
//     }
// }, { once: true });

document.addEventListener("DOMContentLoaded", function () {
  // 页面加载时滚动到顶部
  window.scrollTo(0, 0);
  console.log("Script Loaded");

  // 添加滚动事件监听器
  window.addEventListener("scroll", function () {
    // 检测滚动位置并执行相应的操作
    // console.log(window.scrollY);
  });
});

// 获取所有图片元素
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");

// 切换图片1和图片2
image1.addEventListener("click", function () {
  image1.style.display = "none";
  image2.style.display = "block";
});

image2.addEventListener("click", function () {
  image2.style.display = "none";
  image1.style.display = "block";
});

// 切换图片3和图片4
image3.addEventListener("click", function () {
  image3.style.display = "none";
  image4.style.display = "block";
});

image4.addEventListener("click", function () {
  image4.style.display = "none";
  image3.style.display = "block";
});

// 切换图片5和图片6
image5.addEventListener("click", function () {
  image5.style.display = "none";
  image6.style.display = "block";
});

image6.addEventListener("click", function () {
  image6.style.display = "none";
  image5.style.display = "block";
});

// 定义可点击的图片ID和消失的图片ID
const clickableImages = [
  "image1",
  "image2",
  "image3",
  "image4",
  "image5",
  "image6",
];
const imagesToHide = ["tt1", "tt2", "tt3"];
const imagesToShow = ["t1", "t2", "t3"];

// 初始化点击计数器
let clickCount = 0;

// 为可点击的图片添加点击事件
clickableImages.forEach((id) => {
  document.getElementById(id).addEventListener("click", () => {
    clickCount++;

    // 如果点击计数达到3次，隐藏tt系列图片，显示t系列图片
    if (clickCount === 3) {
      imagesToHide.forEach((hideId) => {
        document.getElementById(hideId).classList.add("hidden");
      });
      imagesToShow.forEach((showId) => {
        document.getElementById(showId).classList.remove("hidden");
      });
    } else if (clickCount === 6) {
      imagesToHide.forEach((hideId) => {
        document.getElementById(hideId).classList.remove("hidden");
      });
      imagesToShow.forEach((showId) => {
        document.getElementById(showId).classList.remove("hidden");
      });
    }
  });
});

document.addEventListener("scroll", function () {
  const scrollContainer = document.querySelector(".fixed-scroll-container");
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPosition = window.scrollY;

  // 计算滚轮容器在页面中应当的位置
  const containerPosition =
    (scrollPosition / pageHeight) *
    (window.innerHeight - scrollContainer.offsetHeight);

  // 设置滚轮容器的top属性
  scrollContainer.style.top = containerPosition + "px";
});

// // 确保 DOM 已加载
// document.addEventListener('DOMContentLoaded', () => {
//     // 音频上传和播放部分
//     const audioUpload = document.getElementById('audioUpload');
//     const audioPlayer = document.getElementById('audioPlayer');
//     const playlistElement = document.getElementById('playlist');

//     // 歌单数组
//     let playlist = [];
//     let currentSongIndex = -1;

//     // 加载本地 Tone.js 音频上下文
//     const startAudioContext = () => {
//         if (Tone.context.state !== 'running') {
//             Tone.context.resume();
//         }
//     };

//     // 监听用户的首次点击来启动音频上下文
//     document.body.addEventListener('click', startAudioContext, { once: true });
//     document.body.addEventListener('touchstart', startAudioContext, { once: true });

//     // 处理文件上传
//     audioUpload.addEventListener('change', function(event) {
//         const files = event.target.files;
//         if (files.length > 0) {
//             for (let i = 0; i < files.length; i++) {
//                 const file = files[i];
//                 if (file.type.startsWith('audio/')) {
//                     const fileURL = URL.createObjectURL(file);
//                     const song = {
//                         title: file.name,
//                         url: fileURL
//                     };
//                     playlist.push(song);
//                     addSongToPlaylistUI(song, playlist.length - 1);
//                 } else {
//                     alert(`${file.name} 不是有效的音频文件。`);
//                 }
//             }
//             // 如果没有歌曲在播放，自动播放第一首
//             if (currentSongIndex === -1 && playlist.length > 0) {
//                 playSong(0);
//             }
//         }
//         // 清除文件输入的值，以便用户可以上传同一文件多次
//         audioUpload.value = '';
//     });

//     // 添加歌曲到歌单 UI
//     function addSongToPlaylistUI(song, index) {
//         const li = document.createElement('li');
//         li.dataset.index = index;

//         const titleSpan = document.createElement('span');
//         titleSpan.classList.add('song-title');
//         titleSpan.textContent = song.title;

//         const removeBtn = document.createElement('span');
//         removeBtn.classList.add('remove-song');
//         removeBtn.textContent = '×';
//         removeBtn.title = '移除歌曲';

//         // 点击播放歌曲
//         li.addEventListener('click', (e) => {
//             // 避免点击移除按钮时触发播放
//             if (e.target.classList.contains('remove-song')) {
//                 return;
//             }
//             const songIndex = parseInt(li.dataset.index);
//             playSong(songIndex);
//         });

//         // 点击移除歌曲
//         removeBtn.addEventListener('click', (e) => {
//             e.stopPropagation(); // 防止事件冒泡触发播放
//             const songIndex = parseInt(li.dataset.index);
//             removeSong(songIndex);
//         });

//         li.appendChild(titleSpan);
//         li.appendChild(removeBtn);
//         playlistElement.appendChild(li);
//     }

//     // 播放指定索引的歌曲
//     function playSong(index) {
//         if (index < 0 || index >= playlist.length) {
//             return;
//         }
//         currentSongIndex = index;
//         const song = playlist[index];
//         audioPlayer.src = song.url;
//         audioPlayer.play();

//         updatePlaylistUI();
//     }

//     // 更新歌单 UI，标记当前播放的歌曲
//     function updatePlaylistUI() {
//         const items = playlistElement.querySelectorAll('li');
//         items.forEach(item => {
//             item.classList.remove('active');
//             if (parseInt(item.dataset.index) === currentSongIndex) {
//                 item.classList.add('active');
//             }
//         });
//     }

//     // 移除指定索引的歌曲
//     function removeSong(index) {
//         if (index < 0 || index >= playlist.length) {
//             return;
//         }
//         playlist.splice(index, 1);
//         // 移除 UI 列表项
//         const items = playlistElement.querySelectorAll('li');
//         items.forEach(item => {
//             if (parseInt(item.dataset.index) === index) {
//                 playlistElement.removeChild(item);
//             }
//         });
//         // 更新数据索引
//         const remainingItems = playlistElement.querySelectorAll('li');
//         remainingItems.forEach((item, newIndex) => {
//             item.dataset.index = newIndex;
//         });

//         // 如果移除的是当前播放的歌曲
//         if (currentSongIndex === index) {
//             if (playlist.length > 0) {
//                 // 播放下一首，如果没有下一首，则播放上一首
//                 const newIndex = index < playlist.length ? index : playlist.length - 1;
//                 playSong(newIndex);
//             } else {
//                 // 没有歌曲可播放，停止播放
//                 audioPlayer.pause();
//                 audioPlayer.src = '';
//                 currentSongIndex = -1;
//             }
//         } else if (currentSongIndex > index) {
//             currentSongIndex--;
//         }
//     }

//     // 当歌曲播放结束时，自动播放下一首
//     audioPlayer.addEventListener('ended', () => {
//         if (playlist.length > 0) {
//             const nextIndex = (currentSongIndex + 1) % playlist.length;
//             playSong(nextIndex);
//         }
//     });

//     // MIDI键盘部分
//     const keyboard = document.getElementById('keyboard');

//     // 定义音符（C4到B4）
//     const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];

//     // 创建Tone.js的合成器
//     const synth = new Tone.Synth().toDestination();

//     // 动态生成键盘按钮
//     notes.forEach(note => {
//         const key = document.createElement('div');
//         key.classList.add('key');
//         key.textContent = note;
//         // 鼠标事件
//         key.addEventListener('mousedown', () => {
//             synth.triggerAttack(note);
//             key.classList.add('active');
//         });
//         key.addEventListener('mouseup', () => {
//             synth.triggerRelease();
//             key.classList.remove('active');
//         });
//         key.addEventListener('mouseleave', () => {
//             synth.triggerRelease();
//             key.classList.remove('active');
//         });
//         // 触摸事件
//         key.addEventListener('touchstart', (e) => {
//             e.preventDefault();
//             synth.triggerAttack(note);
//             key.classList.add('active');
//         });
//         key.addEventListener('touchend', () => {
//             synth.triggerRelease();
//             key.classList.remove('active');
//         });
//         keyboard.appendChild(key);
//     });

//     // 其他现有脚本内容...
// });

// 初始化 Three.js 场景、相机、渲染器

function init() {
  const container = document.getElementById("3d-container");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 0); // 设置背景透明
  container.appendChild(renderer.domElement);

  // 添加光源
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  // 设置相机位置
  camera.position.z = 5;

  // 渲染循环
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  // 处理窗口大小调整
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  // 上传文件处理
  const fileInput = document.getElementById("file-input");
  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const arrayBuffer = e.target.result;
        const loader = new THREE.GLTFLoader();
        loader.parse(
          arrayBuffer,
          "",
          function (gltf) {
            scene.add(gltf.scene);
          },
          function (error) {
            console.error("Error loading GLTF model", error);
          }
        );
      };
      reader.readAsArrayBuffer(file);
    }
  });
}

// 初始化场景
init();

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// document.getElementById('upload-button').addEventListener('click', () => {
//     const fileInput = document.getElementById('model-upload');
//     const file = fileInput.files[0];
//     const formData = new FormData();
//     formData.append('model', file);

//     // 通过 Fetch API 发送上传请求
//     fetch('/upload', { method: 'POST', body: formData })
//       .then(response => response.json())
//       .then(data => {
//         const modelData = {
//           url: data.url,  // 模型的 URL
//           position: { x: 0, y: 0, z: 0 },  // 初始位置
//           scale: 1  // 初始缩放
//         };
//         socket.emit('uploadModel', modelData);  // 将模型数据通过 WebSocket 发送给服务器
//       });
//   });

//   const controls = new THREE.OrbitControls(camera, renderer.domElement);

// controls.addEventListener('change', () => {
//   const modelData = {
//     id: model.id,  // 模型的唯一标识符
//     position: model.position,
//     scale: model.scale.x  // 假设模型各轴比例相同
//   };
//   socket.emit('updateModel', modelData);  // 同步模型状态
// });

// socket.on('updateModel', (modelData) => {
//   const model = scene.getObjectByName(modelData.id);  // 根据 ID 找到模型
//   if (model) {
//     model.position.set(modelData.position.x, modelData.position.y, modelData.position.z);
//     model.scale.set(modelData.scale, modelData.scale, modelData.scale);
//   }
// });



// import express from "express";
// import http from "http";
// import { Server as socketIo } from "socket.io";
// import multer from "multer";
// import path from "path";

// //初始化服务器;
// const appServe = express();
// const server = http.createServer(appServe);
// const io = socketIo(server);

// console.log('nsdj'); // 如果元素存在，应显示 <button id="pen">



// // 文件上传配置
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // 上传的文件保存目录
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // 给文件生成唯一的名称
//   },
// });
// const upload = multer({ storage: storage });

// // 静态文件服务
// appServe.use(express.static("public"));

// // 处理 3D 模型上传
// appServe.post("/upload", upload.single("model"), (req, res) => {
//   res.json({ url: `/uploads/${req.file.filename}` }); // 正确的模板字符串
// });

// // 当有用户连接时
// io.on("connection", (socket) => {
//   console.log("User connected");

//   // 监听模型上传事件
//   socket.on("uploadModel", (modelData) => {
//     io.emit("newModel", modelData); // 广播给所有用户
//   });

//   // 监听模型的拖动、缩放等事件
//   socket.on("updateModel", (modelData) => {
//     socket.broadcast.emit("updateModel", modelData); // 广播模型状态更新
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected");
//   });
// });

// // 启动服务器
// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// Firebase 配置
const firebaseConfig = {
  apiKey: "AIzaSyBBxNOnhPg0tGhyfFS-HzI18ZRayaW_AyE",
  authDomain: "huaban-66309.firebaseapp.com",
  projectId: "huaban-66309",
  storageBucket: "huaban-66309.appspot.com",
  messagingSenderId: "283183495759",
  appId: "1:283183495759:web:462e149530fffc1b76083a",
  measurementId: "G-CTXGB8NMVM",
};

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);
const storage2 = firebase.storage();
const firestore = firebase.firestore();

// 获取 HTML 元素
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 点击画廊图片后，将其加载到下方的展示区域
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const imageUrl = e.target.src;
    // displayImage(imageUrl);
    setCanvasBackgroundImage(imageUrl);
  }
});

// 在下方的展示区域显示图片
function displayImage(imageUrl) {
  const displayArea = document.getElementById("image-display");

  // 清空展示区域
  displayArea.innerHTML = "";

  // 创建新图片元素
  const img = document.createElement("img");
  img.src = imageUrl;
  img.classList.add("image-display"); // 你可以添加样式来控制显示效果

  // 将图片添加到展示区域
  displayArea.appendChild(img);
}

function setCanvasBackgroundImage(imageUrl) {
  const img = new Image();
  img.setAttribute("crossorigin", "anonymous");
  img.src = imageUrl;

  img.onload = function () {
    const ctx = canvas.getContext("2d");

    // 清除 canvas 上现有的绘图
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 获取图片的原始宽度和高度
    const imgWidth = img.width;
    const imgHeight = img.height;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // 计算图片居中显示的 x 和 y 坐标（保持原始尺寸）
    const x = (canvasWidth - imgWidth) / 2;
    const y = (canvasHeight - imgHeight) / 2;

    // 将图片绘制在 canvas 的中心，保持原始尺寸
    ctx.drawImage(img, x, y);
  };
}

// 保存并上传图片逻辑保持不变
saveBtn.addEventListener("click", () => {
  const dataURL = canvas.toDataURL("image/png");
  uploadImage(dataURL);
});

function uploadImage(dataURL) {
  const blob = dataURLtoBlob(dataURL);
  const filename = `image_${Date.now()}.png`;
  const ref = storage2.ref().child(filename);

  ref
    .put(blob)
    .then((snapshot) => {
      console.log("上传成功:", snapshot);
      ref.getDownloadURL().then((url) => {
        saveImageURLToFirestore(url);
      });
    })
    .catch((error) => {
      console.error("上传失败:", error);
    });
}

function dataURLtoBlob(dataURL) {
  const parts = dataURL.split(",");
  const byteString = atob(parts[1]);
  const mimeString = parts[0].split(":")[1].split(";")[0];

  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
}

function saveImageURLToFirestore(url) {
  firestore
    .collection("images")
    .add({
      url: url,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log("图片URL已保存");
      loadImages();
    })
    .catch((error) => {
      console.error("保存URL失败:", error);
    });
}

// 加载并展示图片
function loadImages() {
  gallery.innerHTML = "";
  firestore
    .collection("images")
    .orderBy("timestamp", "desc")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const imageURL = doc.data().url;
        const imgElement = document.createElement("img");
        imgElement.src = imageURL;
        imgElement.classList.add("image-item");
        imgElement.width = 100;

        // 添加点击事件
        imgElement.addEventListener("click", () => {
          displayImage(imageURL);
        });

        gallery.appendChild(imgElement);
      });
    })
    .catch((error) => {
      console.error("Error loading images:", error);
    });
}

// 显示大图的函数
// function displayImage(imageURL) {
//     const displayDiv = document.getElementById('imageDisplay');
//     displayDiv.innerHTML = ''; // 清空之前的内容
//     const imgElement = document.createElement('img');
//     imgElement.src = imageURL;
//     imgElement.style.width = '100%'; // 或根据需要调整大小
//     displayDiv.appendChild(imgElement);
// }

// 初始化时加载已有图片
loadImages();

// create Drawing object
const Drawing = {};



// track element
Drawing.canvas = document.getElementById("canvas");

Drawing.lineWidth = {
  showWidth: document.querySelector(".number"),
};

Drawing.button = {
  up: document.querySelector(".up"),
  down: document.querySelector(".down"),
};

Drawing.color = {
  line: {
    lineColorInput: document.getElementById("line-color"),
  },
  background: {
    backgroundColorInput: document.getElementById("background-color"),
  },
};

Drawing.tool = {
    penTool: {
      pen: document.getElementById("pen"),
    },
    eraserTool: {
      eraser: document.getElementById("eraser"),
    },
    
  };
  



Drawing.otherObject = {
  body: document.body,
};

// nessecary variable inside Drawing object
// and set intial value
Drawing.lineWidth.size = 10;
Drawing.color.background.color = "aliceblue";
Drawing.color.line.color = "black";
Drawing.tool.penTool.active = true;
Drawing.tool.eraserTool.active = false;
Drawing.draw = {
  contex: Drawing.canvas.getContext("2d"),
  x: undefined,
  y: undefined,
  isPressed: false,
};

// set button function
Drawing.lineWidth.changeSize = (type) => {
  let { showWidth: span } = Drawing.lineWidth;

  // down the line width size
  if (type == "down") {
    Drawing.lineWidth.size =
      Drawing.lineWidth.size === 1 ? Drawing.lineWidth.size : --Drawing.lineWidth.size;
  } else {
    // up the line width size
    Drawing.lineWidth.size++;
  }

  span.innerText = Drawing.lineWidth.size;
};

// set tool change function
Drawing.tool.changeTool = (type) => {
  const {
    penTool: { pen },
    eraserTool: { eraser },
  } = Drawing.tool;

  if (type == "pen") {
    alert("pen");
    pen.classList.add("active");
    eraser.classList.remove("active");
    Drawing.tool.penTool.active = true;
    Drawing.tool.eraserTool.active = false;
  } else {
    eraser.classList.add("active");
    pen.classList.remove("active");
    Drawing.tool.eraserTool.active = true;
    Drawing.tool.penTool.active = false;
  }
};


// change color funciton
Drawing.color.changeColor = (type) => {
  let {
    canvas,
    color: {
      line: { lineColorInput: line },
      background: { backgroundColorInput: background },
    },
  } = Drawing;

  // change the line color
  if (type == "line") {
    Drawing.color.line.color = line.value;
    console.log(Drawing.color.line.color);
  } else {
    // change the background color
    Drawing.color.background.color = background.value;
    canvas.style.backgroundColor = background.value;
  }
};

// circle draw function
Drawing.draw.drawCircle = (x, y) => {
  const { contex } = Drawing.draw;

  // color and size
  let isPenActive = Drawing.tool.penTool.active;
  let color = Drawing.color.line.color;
  let size = Drawing.lineWidth.size;

  // draw circle

  // contex.fill();

  if (isPenActive) {
    contex.beginPath();
    contex.arc(x, y, 0.5 * size, 0, 2 * Math.PI);
    contex.fillStyle = color;
    contex.fill();
  } else {
    contex.save();
    contex.globalCompositeOperation = "destination-out";
    contex.beginPath();
    contex.arc(x, y, 0.5 * size, 0, 2 * Math.PI, false);
    contex.fill();
    contex.restore();
  }
};

// draw line funciton
Drawing.draw.drawLine = (xOne, yOne, xTwo, yTwo) => {
  const { contex } = Drawing.draw;

  // color
  let isPenActive = Drawing.tool.penTool.active;
  let color = Drawing.color.line.color;
  let size = Drawing.lineWidth.size;

  // draw line
  if (isPenActive) {
    contex.beginPath();
    contex.moveTo(xOne, yOne);
    contex.lineTo(xTwo, yTwo);
    contex.strokeStyle = color;
    contex.lineWidth = size;
    contex.stroke();
  } else {
    contex.save();
    contex.globalCompositeOperation = "destination-out";
    contex.beginPath();
    contex.moveTo(xOne, yOne);
    contex.lineTo(xTwo, yTwo);
    contex.lineWidth = size;
    contex.stroke();
    contex.restore();
  }
};

// mouseDown function
Drawing.draw.mouseDown = (event) => {
  // set the isPressed , set position and draw circle
  Drawing.draw.isPressed = true;
  Drawing.draw.x = event.offsetX;
  Drawing.draw.y = event.offsetY;
  Drawing.draw.drawCircle(Drawing.draw.x, Drawing.draw.y);
};

// mouseMove function
Drawing.draw.mouseMove = (event) => {
  if (Drawing.draw.isPressed) {
    let { drawCircle, drawLine } = Drawing.draw;

    // find the position and draw the circle and line
    let xTwo = event.offsetX;
    let yTwo = event.offsetY;
    drawCircle(xTwo, yTwo);
    drawLine(Drawing.draw.x, Drawing.draw.y, xTwo, yTwo);

    // reset the position
    Drawing.draw.x = xTwo;
    Drawing.draw.y = yTwo;
  }
};

// mouseUp function and set isPressed to false
Drawing.draw.mouseUp = (event) => {
  Drawing.draw.isPressed = false;
  Drawing.draw.x = undefined;
  Drawing.draw.y = undefined;
};

// mouseLeave function
Drawing.draw.mouseLeave = (event) => {
  Drawing.draw.x = undefined;
  Drawing.draw.y = undefined;
};

// touchStart function
Drawing.draw.touchStart = (event) => {
  let { drawCircle } = Drawing.draw;
  // console.log(event);
  // press is true and find the x and y
  Drawing.draw.isPressed = true;
  let domRect = event.target.getBoundingClientRect();

  let xTwo = event.touches[0].clientX - domRect.x;
  let yTwo = event.touches[0].clientY - domRect.y;

  // update position
  Drawing.draw.x = xTwo;
  Drawing.draw.y = yTwo;

  // draw the circle
  drawCircle(Drawing.draw.x, Drawing.draw.y);
};

// touchMove functon
Drawing.draw.touchMove = (event) => {
  let { drawCircle, drawLine } = Drawing.draw;

  // dom rect
  let domRect = event.target.getBoundingClientRect();

  // find the x and y position
  let xTwo = event.touches[0].clientX - domRect.x;
  let yTwo = event.touches[0].clientY - domRect.y;

  // draw circle and line
  drawCircle(xTwo, yTwo);
  drawLine(Drawing.draw.x, Drawing.draw.y, xTwo, yTwo);

  // update the position
  Drawing.draw.x = xTwo;
  Drawing.draw.y = yTwo;
};

// touchEnd function
Drawing.draw.touchEnd = (event) => {
  Drawing.draw.isPressed = false;
};

// resize the canvas function
Drawing.draw.resizeCanvas = () => {
  Drawing.canvas.width = Drawing.canvas.clientWidth;
  Drawing.canvas.height = Drawing.canvas.clientHeight;
};

// all event listener funciton
let {
  lineWidth: { changeSize },
  tool: { changeTool },
  color: { changeColor },
  draw: {
    mouseDown,
    mouseMove,
    mouseUp,
    mouseLeave,
    touchStart,
    touchMove,
    touchEnd,
    resizeCanvas,
  },
} = Drawing;

// all mouse event
// add event listener on button
Drawing.button.down.addEventListener("click", () => changeSize("down"));
Drawing.button.up.addEventListener("click", changeSize);

// add event listener on tool
Drawing.tool.penTool.pen.addEventListener("click", () =>
  Drawing.tool.changeTool("pen")
);
Drawing.tool.eraserTool.eraser.addEventListener("click", () =>
  Drawing.tool.changeTool("eraser")
);

// add event listener on color input
Drawing.color.line.lineColorInput.addEventListener("change", () =>
  changeColor("line")
);
// Drawing.color.background.backgroundColorInput.addEventListener('change',changeColor);

// add mouse event lisner on canvas
// mouse down event
Drawing.canvas.addEventListener("mousedown", mouseDown);

// mouse down event
Drawing.canvas.addEventListener("mousemove", mouseMove);

// mouse up event
Drawing.canvas.addEventListener("mouseup", mouseUp);

// mouse leave event
Drawing.canvas.addEventListener("mouseleave", mouseLeave);

// mouse hold out
Drawing.otherObject.body.addEventListener("mouseup", mouseUp);

// add touch event on canvas
Drawing.canvas.addEventListener("touchstart", touchStart);
Drawing.canvas.addEventListener("touchmove", touchMove);
Drawing.canvas.addEventListener("touchend", touchEnd);

// responsvie the canvas
window.addEventListener("resize", resizeCanvas);

// call initial function
resizeCanvas();

document.addEventListener("DOMContentLoaded", function () {
  // 获取 DOM 元素
  const fileInputLeft = document.getElementById("fileInputLeft");
  const fileInputRight = document.getElementById("fileInputRight");
  const songListLeft = document.getElementById("song-list-left");
  const songListRight = document.getElementById("song-list-right");
  const audioLeft = document.getElementById("audio-left");
  const audioRight = document.getElementById("audio-right");
  const volumeLeftKnob = document.getElementById("volume-left");
  const speedLeftKnob = document.getElementById("speed-left");
  const volumeRightKnob = document.getElementById("volume-right");
  const speedRightKnob = document.getElementById("speed-right");
  const playButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const switchTrackButton = document.getElementById("switchTrack");
  const keys = document.querySelectorAll(".key");

  let activeTrack = "left";

  // 上传文件并设置播放器源
  fileInputLeft.addEventListener("change", function () {
    const files = this.files;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      audioLeft.src = url;
      audioLeft.play();
      generateSongList(files, songListLeft, audioLeft);
    }
  });

  fileInputRight.addEventListener("change", function () {
    const files = this.files;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      audioRight.src = url;
      audioRight.play();
      generateSongList(files, songListRight, audioRight);
    }
  });

  // 生成歌单的函数
  function generateSongList(files, songList, audio) {
    songList.innerHTML = ""; // 清空之前的歌单
    for (let i = 0; i < files.length; i++) {
      let li = document.createElement("li");
      li.textContent = files[i].name;
      li.addEventListener("click", function () {
        let url = URL.createObjectURL(files[i]);
        audio.src = url;
        audio.play();
      });
      songList.appendChild(li);
    }
  }

  // 控制音量和速度
  volumeLeftKnob.addEventListener("input", function () {
    audioLeft.volume = this.value / 100;
  });

  speedLeftKnob.addEventListener("input", function () {
    audioLeft.playbackRate = this.value / 100;
  });

  volumeRightKnob.addEventListener("input", function () {
    audioRight.volume = this.value / 100;
  });

  speedRightKnob.addEventListener("input", function () {
    audioRight.playbackRate = this.value / 100;
  });

  // 播放功能
  playButton.addEventListener("click", function () {
    if (activeTrack === "left") {
      audioLeft.play();
      audioRight.pause();
    } else {
      audioRight.play();
      audioLeft.pause();
    }
  });

  // 暂停功能
  pauseButton.addEventListener("click", function () {
    if (activeTrack === "left") {
      audioLeft.pause();
    } else {
      audioRight.pause();
    }
  });

  // 切换轨道
  switchTrackButton.addEventListener("click", function () {
    if (activeTrack === "left") {
      activeTrack = "right";
      audioLeft.pause();
      audioRight.play();
    } else {
      activeTrack = "left";
      audioRight.pause();
      audioLeft.play();
    }
  });

  // 播放上一首
  prevButton.addEventListener("click", function () {
    if (activeTrack === "left") {
      audioLeft.currentTime = 0;
    } else {
      audioRight.currentTime = 0;
    }
  });

  // 播放下一首
  nextButton.addEventListener("click", function () {
    if (activeTrack === "left") {
      audioLeft.currentTime = audioLeft.duration;
    } else {
      audioRight.currentTime = audioRight.duration;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const noteSounds = {
      C: "https://www.soundjay.com/button/beep-07.mp3",
      D: "https://www.soundjay.com/button/beep-08.mp3",
      E: "https://www.soundjay.com/button/beep-09.mp3",
      F: "https://www.soundjay.com/button/beep-10.mp3",
      G: "https://www.soundjay.com/button/beep-11.mp3",
      A: "https://www.soundjay.com/button/beep-12.mp3",
      B: "https://www.soundjay.com/button/beep-13.mp3",
    };

    const keys = document.querySelectorAll(".key");

    keys.forEach((key) => {
      key.addEventListener("click", function () {
        const note = key.getAttribute("data-note");
        playMidiSound(note);
      });
    });

    function playMidiSound(note) {
      const audio = new Audio(noteSounds[note]);
      audio.play();
    }
  });
});
