# TWEET TERMINAL

### REQUIREMENTS

1. Nodejs
2. Twitter Developer Account
3. Twitter Developer App (Enabled to the V2)

### ENVIRONMENTAL VARIABLES

Create a .env as the .env.example shows file in the values
NOTE: API_KEY == CONSUMER_KEY...

`[tweet]: String`

I really didn't like having to go to chrome, load twitter website or hold my phone and open twitter before tweeting and with the Twitter API V2. I just wanted to be able to tweet from my terminal when working by just running `tweet [tweet]` and getting posted without any of the above hated steps so I came to the conclusion of this.

### Install Dependencies

run `yarn`

### Tweeting (Node)

Running node accepts parameters at process.argv. [0] is the path to node
[1] is the path of the file. from [2] and above are arguments that can be used [[Read more](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)]

run `node index.js [tweet]`

### Tweeting (Terminals)

run `touch ~/.zprofile` to create a profile terminal aliases if you don't already have that created [On Mac]. Create the neccessary file for your OS [".bashprofile", ".profile", ".zshprofile", etc]

Open with a text editor of choice. (Mine being VsCode)

`code ~/.zprofile`

Add -

`alias tweet="node [path_to_file]/index.js $1"`

Running terminal scripts or commands accepts arguments, ignoring [0], you can access from [1] in the form of `$1` and use as above [[Read More](https://www.baeldung.com/linux/use-command-line-arguments-in-bash-script)]

Save and run

`source ~/.zprofile`

Close opened terminal and reopen to be able to run `tweet [tweet]` to tweet tweet 😅
