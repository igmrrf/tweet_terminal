# TWEET TERMINAL

## REQUIREMENTS

1. NODEJS (obviously)
2. TWITTER DEVELOPERS ACCOUNT
3. TWITTER DEVELOPERS APP (Enabled to the V2)

[tweet]: String

I really didn't like having to go to chrome, load twitter website or hold my phone and open twitter before tweeting and with the Twitter API V2. I just wanted to be able to tweet from my terminal when working by just running `tweet [tweet]` and getting posted without any of the above hated steps so I came to the conclusion of this.

## Install Dependencies

run `yarn`

## Tweeting

run `node index.js [tweet]`

## General Terminal Access

### MAC

run `touch ~/.zprofile` to create a profile based terminal aliases if you don't already have that created.

Then open it with a text editor of choice. (Mine being VsCode)
`code ~/.zprofile`

add `alias tweet="node /Users/igmrrf/Desktop/hack/twitter/index.js $1"` to it.

save and run `source ~/.zprofile` on your terminal

now close all opened terminals and reopen to be able to run `tweet [tweet]` to tweet tweet 😅
