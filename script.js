const reelsData = [
  {
    id: 0,
    media: "./vid/1.mp4",
    userImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    username: "mahesh",
    caption: "Consistency beats motivation 💪",
    music: "gym_beats · Original audio",
    ismuted: true,
    likeCount: 1200,
    commentCount: 101,
    shareCount: 45,
    isLiked: false,
    isFollowed: true,
  },
  {
    id: 1,
    media: "./vid/2.mp4",
    userImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    username: "pradeep",
    caption: "Train insane or remain the same",
    music: "pradeep_lift · Original audio",
    ismuted: true,
    likeCount: 14820,
    commentCount: 423,
    shareCount: 92,
    isLiked: false,
    isFollowed: true
  },
  {
    id: 2,
    media: "./vid/3.mp4",
    userImg: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    username: "arjun",
    caption: "No excuses. Just results.",
    music: "hardcore · remix",
    ismuted: true,
    likeCount: 9320,
    commentCount: 278,
    shareCount: 61,
    isLiked: true,
    isFollowed: true
  },
  {
    id: 3,
    media: "./vid/4.mp4",
    userImg: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200",
    username: "rohit",
    caption: "Progress > perfection",
    music: "lofi_vibes · audio",
    ismuted: true,
    likeCount: 18450,
    commentCount: 540,
    shareCount: 130,
    isLiked: false,
    isFollowed: false
  },
  {
    id: 4,
    media: "./vid/5.mp4",
    userImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200",
    username: "neha",
    caption: "Small steps every day 🌱",
    music: "chillhop · original",
    ismuted: true,
    likeCount: 7640,
    commentCount: 189,
    shareCount: 34,
    isLiked: true,
    isFollowed: true
  // },
  // {
  //   id: 5,
  //   media: "./vid/6.mp4",
  //   userImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  //   username: "kavya",
  //   caption: "Focus. Hustle. Repeat.",
  //   music: "focus_mode · beat",
  //   ismuted: true,
  //   likeCount: 22100,
  //   commentCount: 610,
  //   shareCount: 158,
  //   isLiked: false,
  //   isFollowed: true
  // },
  // {
  //   id: 6,
  //   media: "./vid/7.mp4",
  //   userImg: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200",
  //   username: "aman",
  //   caption: "Building myself daily 🚀",
  //   music: "motivation · audio",
  //   ismuted: true,
  //   likeCount: 5430,
  //   commentCount: 122,
  //   shareCount: 29,
  //   isLiked: false,
  //   isFollowed: false
  // },
  // {
  //   id: 7,
  //   media: "./vid/8.mp4",
  //   userImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  //   username: "rahul",
  //   caption: "Dream big. Work bigger.",
  //   music: "dreamers · sound",
  //   ismuted: true,
  //   likeCount: 15980,
  //   commentCount: 410,
  //   shareCount: 97,
  //   isLiked: true,
  //   isFollowed: false
  // },
  // {
  //   id: 8,
  //   media: "./vid/9.mp4",
  //   userImg: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200",
  //   username: "sneha",
  //   caption: "Silence. Grind. Success.",
  //   music: "dark_mode · beat",
  //   ismuted: true,
  //   likeCount: 19840,
  //   commentCount: 532,
  //   shareCount: 141,
  //   isLiked: false,
  //   isFollowed: true
  // },
  // {
  //   id: 9,
  //   media: "./vid/10.mp4",
  //   userImg: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200",
  //   username: "vikas",
  //   caption: "One day or day one?",
  //   music: "mindset · original",
  //   ismuted: true,
  //   likeCount: 11260,
  //   commentCount: 305,
  //   shareCount: 68,
  //   isLiked: true,
  //   isFollowed: false
  // 
  }
];

let allReels = document.querySelector('.all-Reels');

let reels = ''; 

// function addData(){
  
//    reelsData.forEach((elem, index) => {

//     reels += `<div class="reel">
//         <video autoplay muted loop  src="${elem.media}"></video>

//           <div class="mute">
//             ${elem.ismuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'}
//           </div>

//         <div class="right">

//           <div id='${index}' class="icon">
//             <h4>
//               ${elem.isLiked ? '<i class="ri-heart-3-fill love"></i>' : '<i class="ri-heart-3-line"></i>'}
//             </h4>            
//             <h6>${elem.likeCount}</h6>
//           </div>
          

//           <div class="icon">
//             <i class="ri-chat-3-line"></i>
//             <span>${elem.commentCount}</span>
//           </div>

//           <div class="icon">
//             <i class="ri-share-forward-line"></i>
//             <span>${elem.shareCount}</span>
//           </div>

//           <div class="icon">
//             <i class="ri-download-line"></i>
//           </div>
//         </div>

//         <div class="btm">
//           <div class="info">
//             <img src="${elem.userImg}" alt="">
//             <h3>${elem.username}</h3>

//             <button class="follow-btn" data-index="${index}">
//               ${elem.isFollowed ? "Following" : "Follow"}
//             </button>
//           </div>

//           <p>${elem.caption}</p>

//           <div class="music">
//             ${elem.music}
//           </div>
//         </div>
//       </div>`;
//   });
// };

// addData();

// allReels.addEventListener('click', function(dets){
//   console.log(reelsData)
  
//   reelsData[dets.target.id].likeCount++;
  
//   addData();
// })

// allReels.innerHTML = reels;


function renderReels() {
  let html = "";

  reelsData.forEach((elem, index) => {
    html += `
      <div class="reel">
        <video autoplay muted loop src="${elem.media}"></video>

        <div class="right">
          <div class="icon like-btn" data-index="${index}">
            <i class="${
              elem.isLiked ? "ri-heart-3-fill love" : "ri-heart-3-line"
            }"></i>
            <span>${elem.likeCount}</span>
          </div>

          <div class="icon">
            <i class="ri-chat-3-line"></i>
            <span>${elem.commentCount}</span>
          </div>

          <div class="icon">
            <i class="ri-share-forward-line"></i>
            <span>${elem.shareCount}</span>
          </div>
        </div>

        <div class="btm">
          <div class="info">
            <img src="${elem.userImg}" />
            <h3>${elem.username}</h3>
            <button class="follow-btn" data-index="${index}">
              ${elem.isFollowed ? "Following" : "Follow"}
            </button>
          </div>

          <p>${elem.caption}</p>
          <div class="music">${elem.music}</div>
        </div>
      </div>
    `;
  });

  allReels.innerHTML = html;
}

allReels.addEventListener("click", function (e) {

  const likeBtn = e.target.closest(".like-btn");
  if (likeBtn) {
    const index = likeBtn.dataset.index;
    reelsData[index].isLiked = !reelsData[index].isLiked;
    reelsData[index].likeCount += reelsData[index].isLiked ? 1 : -1;
    renderReels();
    return;
  }

  
  const followBtn = e.target.closest(".follow-btn");
  if (followBtn) {
    const index = followBtn.dataset.index;
    reelsData[index].isFollowed = !reelsData[index].isFollowed;
    renderReels();
  }
});


renderReels()