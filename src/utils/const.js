// This file contains constants used throughout the application.

// 基础请求配置常量
export const TIMEOUT = 30000;
export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  "X-Appwrite-Project": import.meta.env.VITE_PROJECT_ID,
};

// 点赞、收藏的类型映射
export const CollectToUserType = {
  texts: "文字",
  albums: "专辑",
  tags: "标签",
  music: "音乐",
  else: "其他",
};

// 数据库表-网络请求映射关系
export const CollectionType = {
  Texts: "texts",
  Posts: "posts",
  Comments: "comments",
  Types: "types",
  Likes: "likes",
  Tags: "tags",
  Music: "music",
  Albums: "albums",
  Profiles: "profiles",
  Recommendations: "recommendations",
  Favorites: "favorites",
};
