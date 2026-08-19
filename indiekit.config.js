import process from "node:process";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  /**
   * Plug-ins
   */
  plugins: [
    '@indiekit/preset-hugo', 
    "@indiekit/store-github",
    "@indiekit/syndicator-mastodon",
  ],

  /**
   * Publication options
   */
  publication: {
    me: process.env.PUBLICATION_URL,
    
    // Hugo-specific paths and URLs must be defined here so Indiekit uses them
    postTypes: {
      article: {
        path: 'content/posts/{yyyy}-{MM}-{dd}-{slug}.md',
        url: '{yyyy}/{MM}/{dd}/{slug}/',
      },
      note: {
        path: 'content/micro/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md',
        url: 'notes/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}/',
      },
      like: {
        path: 'content/likes/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md',
        url: 'likes/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}/',
      },
      photo: {
        path: 'content/photos/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md',
        url: 'photos/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}/',
      }
    }
  },

  /**
   * GitHub content store options
   */
  "@indiekit/store-github": {
    user: process.env.GITHUB_USER,
    repo: process.env.GITHUB_REPO,
    branch: process.env.GITHUB_BRANCH,
  },

  /**
   * Preset Hugo options (front matter format, etc.)
   */
  '@indiekit/preset-hugo': {
    frontMatterFormat: 'yaml', // or 'json' / 'toml' depending on your Hugo setup
  }
};

export default config;