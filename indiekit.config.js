import process from "node:process";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  /**
   * Plug-ins
   */
  plugins: [
    "@indiekit/preset-hugo", 
    "@indiekit/store-github",
    "@indiekit/syndicator-mastodon",
  ],
  
  /**
   * GitHub content store options
   */
  "@indiekit/store-github": {
    user: process.env.GITHUB_USER,
    repo: process.env.GITHUB_REPO,
    branch: process.env.GITHUB_BRANCH,
  },

  /**
   * Publication options
   */
  publication: {
    me: process.env.PUBLICATION_URL,
    frontMatterFormat: "yaml",
    postTypes: {
      article: {
        post: {
          path: "content/posts/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "{yyyy}/{MM}/{dd}/{slug}/",
        },
      },
      note: {
        post: {
          path: "content/notes/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md",
          url: "notes/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}/",
        },
      },
      like: {
        post: {
          path: "content/likes/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md",
          url: "likes/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}/",
        },
      },
      photo: {
        post: {
          path: "content/photos/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md",
          url: "photos/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}/",
        },
      },
    },
 

  /**
   * Preset Hugo options (paths, URLs, and front matter format)
   */

  // "@indiekit/preset-hugo": {
  //   frontMatterFormat: "yaml",
  //   postTypes: {
  //     article: {
  //       post: {
  //         path: "content/posts/{yyyy}-{MM}-{dd}-{slug}.md",
  //         url: "{yyyy}/{MM}/{dd}/{slug}/",
  //       },
  //     },
  //     note: {
  //       post: {
  //         path: "content/micro/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md",
  //         url: "notes/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}/",
  //       },
  //     },
  //     like: {
  //       post: {
  //         path: "content/likes/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md",
  //         url: "likes/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}/",
  //       },
  //     },
  //     photo: {
  //       post: {
  //         path: "content/photos/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md",
  //         url: "photos/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}/",
  //       },
  //     },
  //   },
  },

  /**
   * Mastodon syndicator options
   */
  "@indiekit/syndicator-mastodon": {
    checked: true,
    url: process.env.MASTODON_URL,
    user: process.env.MASTODON_USER,
  }
};

export default config;