let reelsData = [
  {
    id: 1,
    media: "./vid/1.mp4",
    userImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    username: "mahesh",
    caption: "Consistency beats motivation 💪",
    music: "gym_beats · Original audio",
    likes: 1200,
    comments: 101,
    isLiked: false,
    isFollowed: false
  },
  {
    id: 2,
    media: "./vid/2.mp4",
    userImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    username: "pradeep",
    caption: "Train insane or remain the same",
    music: "pradeep_lift · Original audio",
    likes: 9400,
    comments: 322,
    isLiked: false,
    isFollowed: true
  },
  {
    id: 3,
    media: "./vid/3.mp4",
    userImg: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    username: "arjun",
    caption: "No excuses. Just results.",
    music: "hardcore · remix",
    likes: 560,
    comments: 44,
    isLiked: false,
    isFollowed: false
  },
  {
    id: 4,
    media: "./vid/4.mp4",
    userImg: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200",
    username: "rohit",
    caption: "Progress > perfection",
    music: "lofi_vibes · audio",
    likes: 2300,
    comments: 98,
    isLiked: true,
    isFollowed: true
  },
  {
    id: 5,
    media: "./vid/5.mp4",
    userImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200",
    username: "neha",
    caption: "Small steps every day 🌱",
    music: "chillhop · original",
    likes: 870,
    comments: 67,
    isLiked: false,
    isFollowed: false
  },
  {
    id: 6,
    media: "./vid/6.mp4",
    userImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    username: "kavya",
    caption: "Focus. Hustle. Repeat.",
    music: "focus_mode · beat",
    likes: 4100,
    comments: 188,
    isLiked: true,
    isFollowed: false
  },
  {
    id: 7,
    media: "./vid/7.mp4",
    userImg: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200",
    username: "aman",
    caption: "Building myself daily",
    music: "motivation · audio",
    likes: 640,
    comments: 21,
    isLiked: false,
    isFollowed: false
  },
  {
    id: 8,
    media: "./vid/8.mp4",
    userImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    username: "rahul",
    caption: "Dream big. Work bigger.",
    music: "dreamers · sound",
    likes: 7800,
    comments: 412,
    isLiked: true,
    isFollowed: true
  },
  {
    id: 9,
    media: "./vid/9.mp4",
    userImg: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200",
    username: "sneha",
    caption: "Silence. Grind. Success.",
    music: "dark_mode · beat",
    likes: 990,
    comments: 55,
    isLiked: false,
    isFollowed: false
  },
  {
    id: 10,
    media: "./vid/10.mp4",
    userImg: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200",
    username: "vikas",
    caption: "One day or day one?",
    music: "mindset · original",
    likes: 15000,
    comments: 901,
    isLiked: true,
    isFollowed: false
  }

];


let val = '';

reelsData.forEach(function(elem){
    val = val + `<div class="reel">
        <video autoplay muted loop src="${elem.media}"></video>
        <div class="right">
          <div class="icon"><i class="ri-heart-3-line"></i><span>1.2k</span></div>
          <div class="icon"><i class="ri-chat-3-line"></i><span>101</span></div>
          <div class="icon"><i class="ri-share-forward-line"></i></div>
          <div class="icon"><i class="ri-download-line"></i></div>
        </div>

        <div class="btm">
          <div class="info">
            <img src="${elem.userImg}" alt="">
            <h3>${elem.username}</h3>
            <button>${elem.isFollowed}</button>
          </div>

          <p>${elem.caption}</p>

          <div class="music">
            ${elem.music}
          </div>
        </div>

      </div>`
})

let allReels = document.querySelector('.all-Reels');

allReels.innerHTML = val;