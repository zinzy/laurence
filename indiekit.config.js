import process from "node:process";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  /**
   * Plug-ins
   *
   * In this example we have chosen to use a publication preset for Jekyll,
   * save posts and media files to a GitHub repository, and added a syndicator
   * to share posts on a Mastodon server.
   *
   * See: https://getindiekit.com/configuration/#plugins
   */
  plugins: [
    "@indiekit/preset-jekyll",
    '@indiekit/preset-hugo', 
    "@indiekit/store-github",
    "@indiekit/syndicator-mastodon",
  ],

  /**
   * Publication options
   *
   * These values are used to configure application behaviour.
   *
   * See: https://getindiekit.com/configuration/#publication
   */
  publication: {
    me: process.env.PUBLICATION_URL,
  },

  /**
   * GitHub content store options
   *
   * Other content stores are available.
   *
   * See: https://getindiekit.com/plugins/stores
   */
  "@indiekit/store-github": {
    user: process.env.GITHUB_USER,
    repo: process.env.GITHUB_REPO,
    branch: process.env.GITHUB_BRANCH,
  },

  '@indiekit/preset-hugo': {
    // This tells Indiekit exactly where to put your files
    postTypes: {
      article: {
        path: 'content/posts/{yyyy}-{MM}-{dd}-{slug}.md',
        url: '{yyyy}/{MM}/{dd}/{slug}.md',
      },
      note: {
        path: 'content/micro/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md',
        url: 'notes/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}.md',
      },
      like: {
        path: 'content/likes/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md',
        url: 'likes/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}.md',
      },
      photo: {
        path: 'content/photos/{yyyy}-{MM}-{dd}-{HH}-{mm}-{ss}-{slug}.md',
        url: 'photos/{yyyy}/{MM}/{dd}/{HH}/{mm}/{ss}.md',
      }
    }
  },


  /**
   * Mastodon syndicator options
   *
   * Multiple syndicators can be added.
   *
   * See: https://getindiekit.com/plugins/syndicators
   */
  "@indiekit/syndicator-mastodon": {
    checked: true,
    url: process.env.MASTODON_URL,
    user: process.env.MASTODON_USER,
  }
};

export default config;